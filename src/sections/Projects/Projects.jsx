import "../../styles/projects.css";
import { motion } from "framer-motion";
import {
  FaStar,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const featuredProject = {
  category: "Enterprise Recruitment Management System",

  title: "SmartHire",

  tech: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "React",
    "MongoDB",
    "JWT",
    "REST API",
  ],

  description:
    "Built an enterprise-level recruitment platform that streamlines the complete hiring lifecycle with secure authentication, role-based access control, candidate management, interview scheduling, and recruitment analytics.",

  highlights: [
    "JWT Authentication",
    "Role-Based Access Control",
    "Candidate & Job Management",
    "Interview Scheduling",
    "Recruitment Dashboard",
    "Enterprise REST APIs",
  ],

  demo:
    "https://drive.google.com/file/d/18sMUoJTsuiCVHkT-wrR_4TtNY44CFiNx/view",

  github:
    "https://github.com/Srikanth0529/SmartHire",
};

const projects = [
  {
    category: "Employee Workforce Management",

    title: "Employee Management System",

    tech: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "REST API",
    ],

    description:
      "Developed a full-stack employee management application with responsive administration tools, layered MVC architecture, and complete employee lifecycle management.",

    highlights: [
      "Employee Lifecycle Management",
      "Layered MVC Architecture",
      "RESTful APIs",
      "React Admin Dashboard",
      "MySQL Integration",
      "End-to-End Testing",
    ],

    demo:
      "https://drive.google.com/file/d/1uIyeQSIiU3GVTvRVQ3Fx2IwtPWR5uncp/view",

    github:
      "https://github.com/Srikanth0529/Employee-Management-System",
  },

  {
    category: "Online Shopping Platform",

    title: "E-Commerce Application",

    tech: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "REST API",
    ],

    description:
      "Built a responsive e-commerce application supporting product management, shopping cart functionality, and secure backend services.",

    highlights: [
      "Product Management",
      "Shopping Cart",
      "RESTful APIs",
      "Responsive React UI",
      "MySQL Integration",
      "Layered Architecture",
    ],

    github:
      "https://github.com/Srikanth0529/E-Commerce-Web-Application",
  },

  {
    category: "Gym Management Platform",

    title: "Fitness Gym Management System",

    tech: [
      "Java",
      "Spring Boot",
      "React",
    ],

    description:
      "Designing a modern gym management platform for memberships, trainers, workout scheduling, attendance, and subscription management.",

    upcoming: true,
  },

  {
    category: "TV Discovery Platform",

    title: "TV Shows Explorer",

    tech: [
      "React",
      "REST API",
    ],

    description:
      "Building a responsive frontend application that integrates public APIs for TV show discovery, search, filtering, and watchlists.",

    upcoming: true,
  },
];

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="container">

        {/* ==========================
              SECTION HEADER
        ========================== */}

        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
        >

          <h2 className="section-title projects-title">
              Projects
          </h2>

          <p className="section-subtitle">
            Building enterprise-grade applications using modern Java Full Stack technologies.
          </p>

        </motion.div>

        {/* ==========================
            FEATURED PROJECT
        ========================== */}

        <motion.div
          className="featured-project"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <div className="featured-label">
            <FaStar />
            Featured Project
          </div>

          <div className="card featured-card">

            {/* LEFT SIDE */}

            <div className="featured-left">

              <span className="project-category">
                {featuredProject.category}
              </span>

              <h3 className="project-title">
                {featuredProject.title}
              </h3>

              <div className="tech-stack">
                {featuredProject.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <p className="project-description">
                {featuredProject.description}
              </p>

            </div>

            {/* RIGHT SIDE */}

            <div className="featured-right">

              <div className="project-highlights">

                {featuredProject.highlights.map((item) => (

                  <div
                    key={item}
                    className="highlight-item"
                  >

                    <span className="highlight-dot">
                      ●
                    </span>

                    <span>{item}</span>

                  </div>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={featuredProject.demo}
                  className="primary-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

                <a
                  href={featuredProject.github}
                  className="secondary-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </motion.div>

        {/* ==========================
             PROJECTS GRID
        ========================== */}

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
                    {projects.map((project) => (

            <motion.div
              key={project.title}
              variants={cardVariants}
              className="card project-card"
            >

              {project.upcoming && (
                <span className="project-status">
                  ● In Progress
                </span>
              )}

              <span className="project-category">
                {project.category}
              </span>

              <h3 className="project-title">
                {project.title}
              </h3>

              <div className="tech-stack">

                {project.tech.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

              <p className="project-description">
                {project.description}
              </p>

              {!project.upcoming && (

                <div className="project-highlights">

                  {project.highlights.map((item) => (

                    <div
                      key={item}
                      className="highlight-item"
                    >

                      <span className="highlight-dot">
                        ●
                      </span>

                      <span>{item}</span>

                    </div>

                  ))}

                </div>

              )}

              {!project.upcoming && (

                <div className="project-buttons">

                  {project.demo && (

                    <a
                      href={project.demo}
                      className="primary-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <FaExternalLinkAlt />

                      Live Demo

                    </a>

                  )}

                  {project.github && (

                    <a
                      href={project.github}
                      className="secondary-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <FaGithub />

                      GitHub

                    </a>

                  )}

                </div>

              )}

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>

  );

}