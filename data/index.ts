export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Full Stack Developer building production-grade apps with React/Next.js, Node.js, and TypeScript.",
    description:
      "Focused on clean architecture, scalable performance, and reliable delivery in complex digital projects.",
    // Big hero card on the left
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to full-time roles across Australia",
    description:
      "Comfortable collaborating across time zones in Agile, remote and hybrid teams.",
    // Top-right card with globe
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description:
      "TypeScript, React, Next.js, Node.js (Express), PostgreSQL, MySQL, SQL Server, MongoDB, AWS, Docker, CI/CD.",
    // Middle-left tech chips card
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Swinburne Master of IT – Mobile & Cloud Computing",
    description:
      "Strong foundation in software engineering, cloud-native systems, and modern web architectures.",
    // Middle-right education card
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building PropCalc, AI Feedback, and Security Dashboards",
    description:
      "Real-world projects focused on analytics, automation, and secure, scalable backends.",
    // Bottom-left projects card
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to build something together?",
    description:
      "Reach me at ompatilcodes@gmail.com or via LinkedIn: linkedin.com/in/om-patil21",
    // Bottom-right CTA card
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "PropCalc – Investment ROI Platform",
    des: "Data-driven property investment platform with Next.js front-end and modular Node.js REST APIs for ROI, cash flow, and tax analysis.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/ompatil21",
  },
  {
    id: 2,
    title: "AI-Powered Feedback Platform",
    des: "End-to-end feedback analysis tool using React Native, Node.js, Flask microservices, and AWS Lambda for real-time sentiment and insights.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/ompatil21",
  },
  {
    id: 3,
    title: "Malware & URL Detection Dashboard",
    des: "Full-stack security dashboard with React, Node.js, and MongoDB, integrating AWS S3 triggers and Lambda for automated scanning and alerting.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/ompatil21",
  },
  {
    id: 4,
    title: "Cloud & DevOps Automation",
    des: "CI/CD pipelines and containerized services using GitHub Actions, Jenkins, Docker, and AWS ECS/Lambda to streamline deployments.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/ompatil21",
  },
];

export const testimonials = [
  {
    quote:
      "I’m currently collecting testimonials from managers, teammates, and collaborators. In the meantime, this portfolio highlights the impact and outcomes of my recent projects.",
    name: "Testimonials coming soon",
    title: "",
  },
];
export const companies = [
  {
    id: 1,
    name: "AWS",
    img: "aws.svg",
    label: "AWS",
  },
  {
    id: 2,
    name: "Hugging Face",
    img: "/hf.svg",
    label: "Hugging Face",
  },
  {
    id: 3,
    name: "Express.js",
    img: "/express.svg",
    label: "Express.js",
    imgClassName: "invert",
  },
  {
    id: 5,
    name: "Docker",
    img: "/dock.svg",
    label: "docker",
  },
  {
    id: 6,
    name: "React",
    img: "/react.svg",
    label: "React",
  },
  {
    id: 7,
    name: "Next.js",
    img: "/next.svg",
    label: "Next.js",
  },
  {
    id: 8,
    name: "MongoDB",
    img: "/mongo.svg",
    label: "MongoDB",
  },
  {
    id: 9,
    name: "Flask",
    img: "/flask.svg",
    label: "Flask",
    imgClassName: "invert",
  },
  {
    id: 10,
    name: "PostgreSQL",
    img: "/postgres.png",
    label: "PostgreSQL",
  },
  {
    id: 11,
    name: "Node.js",
    img: "/node.svg", 
    label: "Node.js",
    //imgclassName: "invert",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer",
    desc: "Delivered enterprise SaaS features using React, Node.js, TypeScript, and SQL databases, with a focus on performance and maintainability.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend & DevOps Delivery",
    desc: "Built and optimized REST APIs, automated CI/CD with GitHub Actions and Jenkins, and deployed containerized services on AWS ECS and Lambda.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Master of IT – Swinburne University of Technology",
    desc: "Specialised in Mobile & Cloud Computing with project-based learning in full-stack, cloud, and system design.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Bachelor of Computer Engineering",
    desc: "Dr. Babasaheb Ambedkar Technological University, India (2018–2022). Built strong fundamentals in CS and software engineering.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/ompatil21",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/om-patil21",
  },

];
