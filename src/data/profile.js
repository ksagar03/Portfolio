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
    "Full Stack Developer with <b>4+</b> years of experience building scalable backend systems and Android Automotive and cross-platform mobile apps. Currently at <b>Accenture</b> developing banking microservices with <b>Kotlin</b> and <b>Spring Boot</b>; previously at <b>TCS</b> building Android Automotive features for <b>Jaguar Land Rover</b>. Proficient in <b>React</b>, <b>React Native</b>, <b>Node.js</b>, and cloud technologies including <b>GCP</b> and <b>Firebase</b>.",
};

export const about = {
  heading: "Crafting Code, Building Dreams.",
  bioHtml:
    "Hi, I'm Sagar K — a Full Stack Developer with a backend-first mindset who enjoys building clean, well-structured systems that scale. At <b>Accenture</b>, I build banking microservices using <b>Kotlin</b> and <b>Spring Boot</b> — designing <b>gRPC</b>-based inter-service communication, integrating third-party vendor APIs, and shipping secure, compliant features in an Agile team." +
    "<br/><br/>" +
    "My web stack spans <b>React.js</b>, <b>Next.js</b>, and <b>Node.js</b>. I also have hands-on experience with <b>React Native</b> — at Accenture I built a feature carousel on the cashback screen, and I am applying that further in <b>Split Money</b>, a cross-platform group expense app I am currently building with a Spring Boot + GraphQL backend. <b>ExpenseMate</b>, another personal project, is a full-stack Next.js expense tracker where I cut API response times by ~40–50% with Redis caching." +
    "<br/><br/>" +
    "My foundation in systems thinking comes from <b>Android Automotive development</b> at <b>TCS</b> (Jaguar Land Rover), where I worked on ADAS features including <b>Lane Keep Assist</b> and <b>Adaptive Cruise Control</b>.",
};

// Center label + orbiting skill nodes for the Skills component.
export const skillsCenterLabel = "Full Stack";

export const skills = [
  { name: "Typescript", x: "2vw", y: "-17vw" },
  { name: "JavaScript", x: "-1vw", y: "-9vw" },
  { name: "Python", x: "3vw", y: "8.5vw" },
  { name: "Mongodb", x: "15vw", y: "-2vw" },
  { name: "Spring Boot", x: "18vw", y: "-9vw" },
  { name: "Kotlin", x: "-22vw", y: "-2vw" },
  { name: "Node.js", x: "-18vw", y: "8vw" },
  { name: "React.js", x: "1vw", y: "17vw" },
  { name: "Tailwind CSS", x: "-20vw", y: "-18vw" },
  { name: "Next.js", x: "26vw", y: "15vw" },
  { name: "GCP", x: "-20vw", y: "18vw" },
  { name: "Redis", x: "-35vw", y: "7vw" },
  { name: "React Native", x: "-27vw", y: "-9vw" },
  { name: "Firebase", x: "30vw", y: "2vw" },
  { name: "Vercel", x: "20vw", y: "-18vw" },
];

export const experience = [
  {
    position: "Full Stack Developer (Banking Sector – Varo Project)",
    company: "Accenture",
    companyLink: "https://www.accenture.com",
    time: "Aug 2025 – Present",
    address: "Bengaluru, Karnataka",
    workdetails: [
      "Developed and maintained backend microservices using Kotlin and Spring Boot for the cashback squad, enabling seamless integration of third-party vendor APIs to deliver secure cashback features.",
      "Implemented gRPC for efficient inter-service communication within a microservice architecture and used SQL databases for reliable financial data persistence.",
      "Collaborated with cross-functional teams in an Agile environment to deliver compliant, high-quality solutions in the banking domain.",
    ],
  },
  {
    position: "Android Developer (Jaguar Land Rover Client)",
    company: "TATA Consultancy Services",
    companyLink: "https://www.tcs.com",
    time: "Dec 2021 – Aug 2025",
    address: "TCS Global Axis B & C Block",
    workdetails: [
      "Performed functional testing on Android Automotive ADAS modules, actively reviewing the Kotlin codebase to understand the underlying MVVM architecture and data flow.",
      "Built scalable UI components using StateFlow and ViewModels for features such as Lane Keep Assist and Adaptive Cruise Control.",
      "Developed Android Automotive features for ADAS settings using Kotlin, Jetpack Compose, and MVVM architecture.",
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
