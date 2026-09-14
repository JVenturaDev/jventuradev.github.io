import type { Project } from "../types/project";

export const projects = [
  {
    id: "calculator",
    title: "Calculator",
    role: "Featured project · Full-stack application engineering",
    status: "finished",
    visibility: "public",
    featured: true,
    summary:
      "A full-stack mathematical workspace combining controlled symbolic computation, interactive 2D/3D graphing, and persistent scientific workflows.",
    description:
      "Calculator goes beyond basic arithmetic with scientific calculation, a deliberately scoped computer algebra system, expression visualization, and persistent workspaces. Its Angular frontend supports an offline guest experience, while Spring Boot and PostgreSQL provide authenticated workspace persistence.",
    challenge:
      "Designing predictable mathematical pipelines and interactive graphing while keeping symbolic operations controlled, unsupported cases explicit, and frontend/backend state clearly separated.",
    highlights: [
      "Purpose-built CAS for supported simplification, differentiation, integration, limits, equations, and series.",
      "Tokenization, postfix conversion, and RPN evaluation with complex-number and angle-mode support.",
      "Interactive 2D lines, contours, and 3D surfaces with lazily loaded GL3D support.",
      "Persistent browser and authenticated workspaces backed by frontend/backend tests and GitHub Actions.",
    ],
    stack: [
      "Angular",
      "TypeScript",
      "Plotly",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Testing",
      "GitHub Actions",
    ],
    links: [
      { label: "Live Demo", href: "https://jventuradev.github.io/Calculator/" },
      { label: "Source Code", href: "https://github.com/JVenturaDev/Calculator" },
    ],
    screenshots: [
      {
        label: "3D Graph Workspace",
        src: "images/calculator/graph-workspace-3d.png",
        alt: "Calculator 3D graph workspace displaying two mathematical surfaces with function controls and a hovered-point inspector.",
        width: 1600,
        height: 781,
        caption: "Interactive 3D surface comparison with function controls and point inspection.",
      },
      {
        label: "CAS symbolic workflow",
        src: "images/calculator/cas-symbolic-1.png",
        alt: "Calculator workspace showing a symbolic integral result, saved calculations, advanced functions, and a 3D graph preview.",
        width: 1600,
        height: 772,
        caption: "Symbolic integration alongside saved calculations and graph inspection.",
      },
      {
        label: "2D Graph Workspace",
        src: "images/calculator/graph-workspace-2d.jpeg",
        alt: "Calculator 2D graph workspace displaying contour plots with function controls and a graph details inspector.",
        width: 1600,
        height: 778,
        caption: "Interactive 2D contour rendering with per-function diagnostics.",
      },
    ],
  },
  {
    id: "sayui",
    title: "SayUI",
    role: "UI library and design-system engineering",
    status: "finished",
    visibility: "public",
    featured: false,
    summary:
      "A framework-agnostic editorial component library built with semantic HTML, SCSS, compiled CSS, and documented public contracts.",
    description:
      "SayUI provides reusable ui-* components and layouts without requiring a JavaScript framework. It combines CSS architecture, stable markup contracts, accessibility practices, living demos, and npm distribution.",
    challenge:
      "Maintaining consistent visual and semantic contracts across standalone HTML components, composed layouts, documentation, compiled bundles, and consumer-facing package exports.",
    highlights: [
      "Documented HTML and SCSS contracts for reusable components and editorial layouts.",
      "Accessible static examples with visible focus and reduced-motion support.",
      "Reproducible package validation and tag-driven npm publishing.",
    ],
    stack: ["HTML", "SCSS", "CSS", "Accessibility", "npm", "GitHub Actions"],
    links: [
      { label: "Live Demo", href: "https://pixel-waffless.github.io/SayUI/" },
      { label: "GitHub", href: "https://github.com/pixel-waffless/SayUI" },
      { label: "npm", href: "https://www.npmjs.com/package/sayu-ui" },
    ],
    screenshots: [
      {
        label: "SayUI component gallery",
        src: "images/sayui/sayui-component-gallery.png",
        alt: "SayUI reusable component gallery comparing byline and related-list component patterns in a structured demo page.",
        width: 1600,
        height: 778,
        caption: "Reusable component gallery showing documented editorial patterns.",
      },
      {
        label: "SayUI component details",
        src: "images/sayui/sayui-components-detail.png",
        alt: "SayUI component detail demonstrating neutral, warning, and dark callout variants with semantic usage guidance.",
        width: 1600,
        height: 777,
        caption: "Callout variants presented within the component documentation demo.",
      },
      {
        label: "SayUI editorial composition",
        src: "images/sayui/sayui-editorial-demo.png",
        alt: "SayUI editorial article composition with navigation, pull quote, numbered principles, author profile, and related stories.",
        width: 1600,
        height: 780,
        caption: "Desktop editorial composition built from SayUI components and layouts.",
      },
      {
        label: "SayUI mobile layout",
        src: "images/sayui/sayui-mobile-gallery.png",
        alt: "SayUI mobile editorial page with compact navigation, large headline, topic tags, body copy, and feature artwork.",
        width: 337,
        height: 744,
        caption: "Responsive editorial composition at a mobile viewport.",
      },
    ],
  },
  {
    id: "polish-engine",
    title: "polish-engine",
    role: "TypeScript library engineering",
    status: "finished",
    visibility: "public",
    featured: false,
    summary:
      "A typed expression-processing library that converts infix notation to RPN and evaluates normalized real or complex results.",
    description:
      "polish-engine packages expression preprocessing, tokenization, postfix conversion, stack evaluation, normalization, and optional calculation traces behind a typed public API. It is reusable infrastructure rather than another calculator interface.",
    challenge:
      "Supporting multiple result modes, variables, complex values, and calculation steps while preserving predictable runtime behavior and accurate TypeScript return types.",
    highlights: [
      "Separate tokenizer, parser, RPN evaluator, normalization, and facade stages.",
      "Discriminated result types and overloads for normalized/raw evaluation modes.",
      "Vitest coverage, reproducible npm builds, and tag-driven publishing.",
    ],
    stack: ["TypeScript", "RPN", "Complex.js", "Vitest", "npm", "GitHub Actions"],
    links: [
      { label: "GitHub", href: "https://github.com/JVenturaDev/JVPolishEngine" },
      { label: "npm", href: "https://www.npmjs.com/package/polish-engine" },
    ],
    screenshots: [{ label: "polish-engine typed API example coming soon" }],
  },
  {
    id: "aiko",
    title: "Aiko",
    role: "Private Project",
    status: "in-development",
    visibility: "private",
    featured: false,
    summary: "A private cross-platform application being developed for web, Android, and iOS.",
    description:
      "Aiko is a private cross-platform application currently in development for web, Android, and iOS.",
    stack: ["Expo", "React Native", "TypeScript", "Web", "Android", "iOS"],
    screenshots: [
      { label: "AIKO SCREENSHOT — WEB" },
      { label: "AIKO SCREENSHOT — MOBILE 1" },
      { label: "AIKO SCREENSHOT — MOBILE 2" },
    ],
    privacyNote: "Private project. Only approved public information is shown.",
  },
] as const satisfies readonly Project[];

const selectedFeaturedProject = projects.find((project) => project.featured);

if (!selectedFeaturedProject) {
  throw new Error("A featured project is required.");
}

export const featuredProject = selectedFeaturedProject;
export const secondaryProjects = projects.filter((project) => !project.featured);
