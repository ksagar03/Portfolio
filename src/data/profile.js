// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Update your info here — every page/component below reads from this file,
// so you never need to touch component code just to change text.
//
// Note on `*Html` fields: these are plain strings that may contain simple
// inline tags like <b>...</b> or <br/> for bold/line-breaks (same as you'd
// type in Word). They're rendered with dangerouslySetInnerHTML in the pages
// that use them. Safe here because this file is authored by you, not by
// site visitors — never do this with user-submitted content.
// ─────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Sagar K",
  githubUrl: "https://github.com/ksagar03",
  linkedinUrl: "https://www.linkedin.com/in/sagar-krishna-140bb421a",
  leetcodeUrl: "https://leetcode.com/u/sagar2203/",
  email: "sagar22krishna03@gmail.com",
  resumeUrl: "/SagarKrishna-resume.pdf",
};

export const home = {
  heroText: "Building scalable systems, one line at a time.",
  bioHtml:
    "Full-stack engineer with <b>nearly 5 years</b> of experience building production backend services and cross-platform frontends. Currently shipping <b>Kotlin</b>/<b>Spring Boot</b> microservices (gRPC, Kafka, PostgreSQL, AWS) and <b>React Native</b> screens at <b>Accenture</b> for a 6.5M-customer US digital bank; previously at <b>TCS</b> building Android Automotive features for <b>Jaguar Land Rover</b>. Comfortable owning features from schema to pixels.",
};

export const about = {
  heading: "Crafting Code, Building Dreams.",
  bioHtml:
    "Hi, I'm Sagar K — a Full Stack Developer with a backend-first mindset who enjoys building clean, well-structured systems that scale. At <b>Accenture</b>, I own the cashback service end to end for a <b>6.5M-customer</b> US digital bank — building the vendor-API integration, an <b>AWS SQS</b> consumer that confirms a customer earned an offer before payout is released, the <b>Kafka</b> event flow, and a <b>React Native</b> carousel, plus <b>gRPC</b>-based inter-service communication secured via an internal <b>Spring Security</b> plugin. I also backfilled zip codes for <b>7.5M users</b> through a cron pipeline (7,500 users/10-min run) with bounded Kotlin-coroutine concurrency and a circuit breaker — completed in 7 days with zero production incidents — and architected a <b>BDD testing framework</b> using Kotlin, <b>Cucumber</b>, and Koin dependency injection. On the data side I built a config-driven <b>ETL</b> pipeline on <b>AWS</b>, landing date-partitioned extracts in <b>S3</b> for third-party vendors with <b>CloudWatch</b> monitors on job health." +
    "<br/><br/>" +
    "My web stack spans <b>React.js</b>, <b>Next.js</b>, and <b>Node.js</b>. I'm applying my React Native experience further in <b>Split Money</b>, a cross-platform group expense app I'm currently building with a Spring Boot + GraphQL backend. <b>ExpenseMate</b>, another personal project, is a full-stack Next.js expense tracker where I cut API response times by ~40–50% with Redis caching." +
    "<br/><br/>" +
    "My foundation in systems thinking comes from <b>Android Automotive development</b> at <b>TCS</b> (Jaguar Land Rover), where I worked on ADAS features including <b>Lane Keep Assist</b> and <b>Adaptive Cruise Control</b>.",
};

// Center label + orbiting skill nodes for the Skills component.
export const skillsCenterLabel = "Full Stack";

// Grouped into 3 rings by label length, shortest-innermost — a flat "N nodes
// evenly spaced on one ring" layout collides badly once labels have uneven
// widths (e.g. "React Native" vs "Kotlin"), since ring spacing only accounts
// for angle, not actual pill width. Ring radius grows outward specifically
// so the longest labels land where there's the most room.
//
// Each ring is an ELLIPSE (wider x-radius than y-radius), not a circle —
// the container is `w-full h-screen`, and on a typical laptop (16:9 or
// wider) the viewport is much wider than it is tall, so a "circle" sized
// using the same vw value for both x and y comfortably fits horizontally
// but overshoots the container's actual height vertically, pushing
// high-|y| nodes outside the visible background pattern.
export const skills = [
  // Ring 1 (rx=12vw, ry=8vw) — short labels
  { name: "Kotlin", x: "12vw", y: "0vw" },
  { name: "gRPC", x: "6vw", y: "6.9vw" },
  { name: "AWS", x: "-6vw", y: "6.9vw" },
  { name: "Docker", x: "-12vw", y: "0vw" },
  { name: "Kafka", x: "-6vw", y: "-6.9vw" },
  { name: "Redis", x: "6vw", y: "-6.9vw" },
  // Ring 2 (rx=24vw, ry=14vw) — medium labels
  { name: "Node.js", x: "20.8vw", y: "7vw" },
  { name: "Firebase", x: "0vw", y: "14vw" },
  { name: "Python", x: "-20.8vw", y: "7vw" },
  { name: "JavaScript", x: "-20.8vw", y: "-7vw" },
  { name: "React.js", x: "0vw", y: "-14vw" },
  { name: "Next.js", x: "20.8vw", y: "-7vw" },
  // Ring 3 (rx=30vw, ry=18vw) — longest labels. rx is deliberately smaller
  // than you'd expect from a 36vw ring — the container isn't actually
  // 100vw wide (the page Layout adds horizontal padding, ~80% usable
  // width in practice), so rx needs real margin below that, not just
  // below 50vw.
  { name: "React Native", x: "29vw", y: "4.7vw" },
  { name: "Spring Boot", x: "7.8vw", y: "17.4vw" },
  { name: "Spring Security", x: "-21.2vw", y: "12.7vw" },
  { name: "PostgreSQL", x: "-29vw", y: "-4.7vw" },
  { name: "TypeScript", x: "-7.8vw", y: "-17.4vw" },
  { name: "GraphQL", x: "21.2vw", y: "-12.7vw" },
];

export const experience = [
  {
    position: "Senior Software Engineer — Full-Stack Developer (Banking Sector – Varo Project)",
    company: "Accenture",
    companyLink: "https://www.accenture.com",
    time: "Aug 2025 – Present",
    address: "Bengaluru, Karnataka",
    workdetails: [
      "Own the cashback service end to end at a 6.5M-customer US digital bank — built the vendor-API integration, an AWS SQS consumer that confirms a customer earned an offer before payout is released, the Kafka event flow, and the React Native carousel.",
      "Implemented gRPC for inter-service communication, using an internal Spring Security plugin to extract customer context from RPC metadata, and PostgreSQL for financial data persistence.",
      "Backfilled zip codes for 7.5M users via a cron pipeline processing 7,500 users per 10-minute run — bounded Kotlin-coroutine concurrency capped vendor load, and a circuit breaker fast-failed on outages. Completed in 7 days, zero production incidents.",
      "Built a config-driven ETL pipeline on AWS — scheduled multi-table extracts land as date-partitioned objects in S3 for third-party vendors, with CloudWatch monitors on job health and Athena for ad-hoc queries.",
      "Architected an automated BDD testing framework using Kotlin, Cucumber, and Koin dependency injection, wiring Apollo GraphQL and gRPC integration clients to test downstream microservices against live environments; unit coverage in JUnit with Mockito, delivered through GitLab CI.",
    ],
  },
  {
    position: "Systems Engineer — Android Automotive (Jaguar Land Rover client)",
    company: "TATA Consultancy Services",
    companyLink: "https://www.tcs.com",
    time: "Dec 2021 – Aug 2025",
    address: "Bengaluru, Karnataka",
    workdetails: [
      "Shipped production Kotlin into vehicles: ADAS features (Lane Keep Assist, Adaptive Cruise Control) in a safety-critical domain, built on coroutines and StateFlow for asynchronous state handling, on an MVVM architecture with Jetpack Compose.",
      "Verified shipped ADAS modules with Gherkin-driven functional testing; built automation tooling that won the TCS Innovation Super Star award (Dec 2024).",
    ],
  },
];

export const education = [
  {
    type: "Bachelor Of Engineering in Electronics and communication",
    time: "Jul.2017 - Aug.2021",
    place: "Rajarajeswari  College  of  Engineering Bengaluru Karnataka",
  },
  {
    type: "12th (PCMC)",
    time: "Jul.2016 - Aug.2017",
    place: "Kendriya Vidyalaya Mysuru (CBSE)\tMysuru Karnataka",
  },
  {
    type: "10th",
    time: "Jul.2014 - Aug.2015",
    place: "Kendriya Vidyalaya Mysuru (CBSE)\tMysuru Karnataka",
  },
];

// `imgKey` matches the keys in the `projectImages` map built in projects.js
// (Next.js Image needs static imports for optimization, so images stay
// imported in the component — this file just says *which* image to use).
export const featuredProjects = [
  {
    imgKey: "SplitMoney",
    title: "Split Money",
    type: "Full-Stack · React Native + Spring Boot + GraphQL",
    summary:
      "A cross-platform group expense tracker built with React Native (Expo) and a Kotlin + Spring Boot backend, connected via a GraphQL API. Features JWT-based authentication, group creation, shared expense logging, net balance calculations with settlement suggestions (greedy algorithm), and shareable invite deep links that work even before a friend has signed up. Deployed on Vercel (frontend) and Render (backend).",
    link: "https://splitmoney-nine.vercel.app",
    githublink: "https://github.com/ksagar03/splitmoney-frontend",
    isdeployed: true,
    androidLink:
      "https://expo.dev/accounts/ksagar03/projects/splitMoney-frontend/builds/f0d93d1c-669f-4e56-9720-c0e6dd7760f4",
  },
  {
    imgKey: "ExpenseMateHome",
    title: "ExpenseMate",
    type: "Personal Finance Management Project",
    summary:
      "Developed a full-stack expense tracker application to simplify financial management and provide intuitive expense tracking. Built using Next.js, TypeScript, and MongoDB, the application ensures secure user authentication with NextAuth and supports CRUD operations for managing expenses. It features interactive data visualization with Recharts and a modern, responsive design styled with Tailwind CSS. Seamless animations powered by Framer Motion enhance the overall user experience.",
    link: "https://expensemate-seven.vercel.app",
    githublink: "https://github.com/ksagar03/Expensemate",
    isdeployed: true,
  },
  {
    imgKey: "AnimeFreak",
    title: "Anime freak",
    type: "Anime info web App(future OTT platform)",
    summary:
      "As a die-hard fan of anime, I have created a web application that currently showcases information about anime. This application was developed using Next.js, Node.js, the Kitsu API, Tailwind CSS, and Framer Motion. I have also implemented an infinite scroll feature. In the future, I plan to expand this web application into an OTT platform where users can watch their favorite anime for free.",
    link: "https://anime-freak-zeta.vercel.app",
    githublink: "https://github.com/ksagar03/anime-freak",
    isdeployed: true,
  },
  {
    imgKey: "gamer_freak",
    title: "Gamer Freak",
    type: "E-commerce Web Application",
    summary:
      "Developed a full-stack E-commerce web application using React and Firebase, providing exciting features like payment processing, user authentication etc. In this project, I have used Firebase's database to store user-ordered items and also used Stripe Payment element for payment processing. (React, Nodejs, Firebase, Express.js, Axios, Stripe, React context API and NoSQL).",
    link: "https://gamer-freak.web.app",
    githublink: "https://github.com/ksagar03/gamer-freak",
    isdeployed: true,
  },
];

export const simpleProjects = [
  {
    imgKey: "PlinkoDemo",
    title: "Plinko-Clone",
    type: " Online Gambling Game Demo",
    link: "https://gambling-game.vercel.app",
    githublink: "https://github.com/ksagar03/gambling_game",
  },
  {
    imgKey: "portfolio",
    title: "Portfolio",
    type: "Showcasing My DEV Journey ",
    link: "/",
    githublink: "https://github.com/ksagar03/Portfolio",
  },
];
