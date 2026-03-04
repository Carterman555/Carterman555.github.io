// ============================================================
//  data.js  —  Add / edit all your projects here
// ============================================================
//
//  aiUse     : 0–4  (0 = no AI, 4 = almost entirely AI-generated)
//  tutorialUse: 0–4  (0 = no tutorial used — meter will be HIDDEN)
//  selected  : true  = show in "Selected Projects" on homepage
//
// ============================================================

const projects = [
  {
    id: "project-alpha",
    title: "Project Alpha",
    dateRange: "Jan 2025 – Mar 2025",
    description: "A web app that automates data pipeline tasks using GPT-4 to interpret natural language commands into executable queries. Built to save hours of repetitive data wrangling.",
    image: "images/project-alpha.jpg",
    tags: ["React", "Python", "GPT-4"],
    aiUse: 3,
    aiDescription: "Used Claude to scaffold the React frontend components and GPT-4 API integration. The natural language parser logic was almost entirely AI-generated and iterated on through prompting.",
    tutorialUse: 1,
    tutorialDescription: "Followed a basic tutorial for setting up the Python FastAPI backend, then diverged significantly from there.",
    links: {
      github: "https://github.com",
      live: "https://example.com"
    },
    selected: true
  },
  {
    id: "project-beta",
    title: "Project Beta",
    dateRange: "Aug 2024 – Nov 2024",
    description: "A mobile-first dashboard for tracking habits and goals, with AI-generated weekly insights and natural language goal input. Syncs across devices in real time.",
    image: "images/project-beta.jpg",
    tags: ["Swift", "Node.js", "Firebase"],
    aiUse: 4,
    aiDescription: "This project was almost entirely AI-built. Used Claude to generate the full Swift UI, Node.js backend, and Firebase integration. Primarily acted as a director and editor rather than a coder.",
    tutorialUse: 0,
    tutorialDescription: "",
    links: {
      github: "https://github.com",
      live: ""
    },
    selected: true
  },
  {
    id: "project-gamma",
    title: "Project Gamma",
    dateRange: "Mar 2024 – Jun 2024",
    description: "An open-source CLI tool for scaffolding full-stack projects with opinionated, extensible templates. Supports React, Next.js, and Express out of the box.",
    image: "images/project-gamma.jpg",
    tags: ["CLI", "TypeScript", "Node.js"],
    aiUse: 1,
    aiDescription: "Used AI minimally — mainly for boilerplate file generation and writing the README. The core logic was written by hand.",
    tutorialUse: 2,
    tutorialDescription: "Followed a tutorial series on building Node.js CLI tools for the argument parsing and file system scaffolding structure.",
    links: {
      github: "https://github.com",
      live: ""
    },
    selected: true
  },
  {
    id: "project-delta",
    title: "Project Delta",
    dateRange: "Oct 2023 – Jan 2024",
    description: "A browser extension that summarizes any article or webpage into bullet points using a local LLM. Works offline with no data sent to external servers.",
    image: "images/project-delta.jpg",
    tags: ["JavaScript", "Browser Extension", "Ollama"],
    aiUse: 2,
    aiDescription: "Used AI to write the content-script injection logic and the Ollama API wrapper. The extension manifest and popup UI were hand-coded.",
    tutorialUse: 0,
    tutorialDescription: "",
    links: {
      github: "https://github.com",
      live: ""
    },
    selected: false
  }
];
