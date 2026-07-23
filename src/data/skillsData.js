import {
  FaServer,
  FaReact,
  FaDatabase,
  FaTools,
  FaBrain,
} from "react-icons/fa";

const skillsData = [
  {
    title: "Backend",
    icon: FaServer,
    color: "backend",
    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
    ],
  },

  {
    title: "Frontend",
    icon: FaReact,
    color: "frontend",
    skills: [
      "ReactJS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive UI",
      
    ],
  },

  {
    title: "Databases",
    icon: FaDatabase,
    color: "database",
    skills: [
      "MySQL",
      "Oracle SQL",
      "MongoDB",
    ],
  },

  {
    title: "DevOps & Tools ",
    icon: FaTools,
    color: "tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
    ],
  },

  {
    title: "AI & Modern Tech",
    icon: FaBrain,
    color: "ai",
    skills: [
      "AI",
      "LLMs",
      "Machine Learning",
      "GenAI",
      "MCP Server"
    ],
  },
];

export default skillsData;