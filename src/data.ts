export interface Project {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  technologies: string[];
  category: 'frontend' | 'backend' | 'integration' | 'fullstack';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface HeaderData {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  availability: string;
}

export const headerData: HeaderData = {
  name: "SHRINIVASAN MURUGESAN",
  title: "Software Engineer | Full Stack Developer | Integration Engineer",
  phone: "+91 75399 20766",
  email: "shrinivasanmurugesan125@gmail.com",
  linkedin: "https://www.linkedin.com/in/shrinivasan-murugesan-975513212/", // Standard LinkedIn profile
  github: "https://github.com/shrinivasan-m", // Standard GitHub profile
  location: "Chennai, India",
  availability: "Open to relocation"
};

export const professionalSummary = 
  "Enterprise Software Engineer with 2.5+ years of experience designing and developing high-throughput backend services in Java/Spring Boot and responsive React/Angular web platforms. Highly skilled in building secure, low-latency API architectures, distributed event streaming, and custom transaction synchronizers. Recognized for optimizing complex JPA queries, modernizing enterprise integrations, and producing clean, scalable codebases with bulletproof performance.";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Software Engineer",
    company: "Cloud Destinations",
    location: "Chennai, India",
    period: "April 2024 – Present",
    bullets: [
      "Engineered high-performance enterprise applications and microservices using Java (Spring Boot), Spring MVC, ReactJS, Angular, Node.js, and multi-node databases (PostgreSQL/MySQL).",
      "Boosted dynamic interface response speed and improved frontend development efficiency by 35% using reusable Angular/React modules and clean global state tracking.",
      "Designed and deployed secure, high-throughput RESTful APIs with Java, optimizing object-relational mapping (JPA/Hibernate) to guarantee seamless ERP synchronization.",
      "Replaced fragile, slow integrations with robust Java-based asynchronous data mapping pipelines and optimized Celigo connectors, achieving 99.9% sync accuracy.",
      "Constructed Event-Driven messaging topologies via Apache Kafka, providing sub-second reaction times for real-time inventory and client data streaming.",
      "Developed the CoinAR interactive WebAR product space utilizing ReactJS and WebGL image tracking for native 3D browser-based viewing.",
      "Secured a 40% reduction in database execution times through optimized indexing strategies, stored procedures, and memory cache tuning in PostgreSQL.",
      "Spearheaded Azure-hosted container orchestrations using AKS and CI/CD pipelines to achieve automated canary deployments.",
      "Architected a cross-platform Service Tracking Mobile Application using Flutter and high-standard Dart asynchronous streams."
    ],
    technologies: [
      "Java", "Spring Boot", "ReactJS", "Angular", "Node.js", "PostgreSQL", "MySQL", "Apache Kafka", "Shopify GraphQL UI", "Celigo", "AKS Cloud", "Flutter"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "CoinAR – WebAR Platform",
    description: "A high-performance browser-based Augmented Reality platform built using ReactJS, enabling interactive 3D product previews in real-time.",
    bullets: [
      "Engineered the image tracking and 3D rendering pipeline for GLB models across diverse mobile and desktop screen sizes.",
      "Eliminated external app download requirements, enhancing customer session engagement times natively within the browser."
    ],
    technologies: ["ReactJS", "AR.js", "Three.js", "TypeScript", "3D Rendering"],
    category: "frontend"
  },
  {
    id: "proj-2",
    title: "Java Shopify B2B Integration Engine",
    description: "An enterprise synchronization system built in Java to automate inventory updates, orders, and customer pricing databases.",
    bullets: [
      "Designed Java-based multi-threaded schedulers to digest Shopify GraphQL endpoints with built-in retry-policies.",
      "Engineered validation algorithms preventing product SKU drift and automating data flow of multi-million operations."
    ],
    technologies: ["Java", "Spring Boot", "Shopify GraphQL API", "REST APIs", "PostgreSQL"],
    category: "integration"
  },
  {
    id: "proj-3",
    title: "Dynamic Product Management System",
    description: "A secure Spring Boot catalog and order orchestrator boasting sub-second SQL queries and secure admin authorization.",
    bullets: [
      "Developed high-concurrency Java endpoints utilizing Hibernate query optimization to retrieve live inventory listings.",
      "Designed clean relational models in MySQL and automated relational database migration scripts."
    ],
    technologies: ["Java", "Spring Boot", "JPA / Hibernate", "MySQL", "RESTful APIs"],
    category: "backend"
  }
];

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Dart", "HTML5/CSS3"]
  },
  {
    title: "Backend & Systems",
    items: ["Spring Boot (Java)", "Node.js (Express)", "RESTful APIs", "Microservices", "Multi-threading"]
  },
  {
    title: "Cloud & DevOps",
    items: ["Azure", "Blob Storage", "AKS (Azure Kubernetes Service)", "CI/CD Platforms"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "JPA / Hibernate"]
  },
  {
    title: "Integration & Scale",
    items: ["Apache Kafka", "Shopify GraphQL UI", "Celigo Automation", "Event-Driven Architecture", "Pipeline Sync"]
  },
  {
    title: "Frontend Core",
    items: ["ReactJS", "Redux", "Angular", "Flutter", "Tailwind CSS"]
  },
  {
    title: "Computer Science",
    items: ["Data Structures", "Algorithms", "OOP", "Concurrency Control", "System Design"]
  }
];

export const education = {
  degree: "Master of Science in Software Systems (Integrated Program)",
  institution: "PSG College of Arts & Science",
  period: "June 2018 – May 2023"
};

// All quantitative metrics highlight Java, optimization, & scalability
export const statistics = [
  { label: "Years Experience", value: "2.5+" },
  { label: "Performance Boost", value: "40%", description: "Java Spring SQL Tuning" },
  { label: "Dev Efficiency Boost", value: "35%", description: "Modular UI Architectures" },
  { label: "B2B Sync Accuracy", value: "99.9%", description: "Java API Orchestration" }
];
