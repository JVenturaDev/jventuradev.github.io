import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, normalize, relative, resolve, sep } from "node:path";

const root = resolve("dist");
const configuredBase = process.env.PUBLIC_BASE_PATH ?? "/";
const base = `/${configuredBase.split("/").filter(Boolean).join("/")}${configuredBase === "/" ? "" : "/"}`;
const errors = [];

if (!existsSync(root)) {
  console.error("dist/ does not exist. Run npm run build before checking links.");
  process.exit(1);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

const htmlFiles = walk(root).filter((file) => extname(file) === ".html");
const idsByFile = new Map();

function idsFor(file) {
  if (!idsByFile.has(file)) {
    const source = readFileSync(file, "utf8");
    idsByFile.set(file, new Set([...source.matchAll(/\sid=["']([^"']+)["']/giu)].map((match) => match[1])));
  }
  return idsByFile.get(file);
}

function isExternal(value) {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/)/iu.test(value);
}

function findTarget(candidate) {
  const options = [candidate];
  if (!extname(candidate)) options.push(`${candidate}.html`, join(candidate, "index.html"));
  if (existsSync(candidate) && statSync(candidate).isDirectory()) {
    options.unshift(join(candidate, "index.html"));
  }
  return options.find((option) => existsSync(option) && statSync(option).isFile());
}

function resolveLocal(value, sourceFile) {
  const [pathAndQuery, fragment = ""] = value.split("#", 2);
  const pathValue = pathAndQuery.split("?", 1)[0];
  if (!pathValue) return { target: sourceFile, fragment };

  let target;
  if (pathValue.startsWith("/")) {
    if (base !== "/" && !pathValue.startsWith(base)) {
      return { error: `root-relative URL does not include configured base ${base}` };
    }
    const withoutBase = base === "/" ? pathValue.slice(1) : pathValue.slice(base.length);
    target = resolve(root, withoutBase);
  } else {
    target = resolve(dirname(sourceFile), pathValue);
  }

  const relativeTarget = relative(root, target);
  if (relativeTarget.startsWith(`..${sep}`) || relativeTarget === "..") {
    return { error: "URL resolves outside dist/" };
  }
  return { target: findTarget(normalize(target)), fragment };
}

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const references = [...html.matchAll(/\s(?:href|src)=["']([^"']+)["']/giu)].map((match) => match[1]);

  for (const reference of references) {
    if (!reference || isExternal(reference)) continue;
    const result = resolveLocal(reference, file);
    const label = `${relative(root, file)} -> ${reference}`;
    if (result.error) {
      errors.push(`${label}: ${result.error}`);
    } else if (!result.target) {
      errors.push(`${label}: target does not exist`);
    } else if (result.fragment && extname(result.target) === ".html" && !idsFor(result.target).has(result.fragment)) {
      errors.push(`${label}: anchor #${result.fragment} does not exist`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Internal link validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Internal link validation passed for ${htmlFiles.length} HTML file(s).`);
