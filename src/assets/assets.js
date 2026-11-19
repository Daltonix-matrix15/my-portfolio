import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

import profileImg from "../assets/profile.jpg";
import projectImg1 from "../assets/project1.avif";
import projectImg2 from "../assets/project2.avif";
import projectImg3 from "../assets/project3.avif";

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "Vue.js", "Angular", "TypeScript"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express", "Django"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    description:
      "Building cross-platform mobile applications with modern tools.",
    tags: ["React Native", "Flutter", "Swift"],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    description: "Deploying and managing applications in cloud environments.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Webpack", "Figma", "Jest"],
  },
];

export const projects = [
  {
    title: "Movie Search Engine",
    description:
      "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React"],
    icons: [FaReact],
    demo: "https://movie-app-wine-sigma.vercel.app/",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg3,
    tech: ["Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "https://my-portfolio-one-sable-24.vercel.app/",
    code: "#",
  },
  {
    title: "Meal Planner App",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg2,
    tech: ["Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "https://meal-planner-nhju.vercel.app/",
    code: "#",
  },
];

export const workData = [
  {
    role: "Senior Backend Engineer",
    company: "CloudScale Systems",
    duration: "2022 - Present",
    description:
      "Architecting distributed microservices, optimizing database query performance for high-throughput APIs, and implementing robust JWT authentication and role-based access control.",
    color: "purple",
  },
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple",
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink",
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue",
  },
];
