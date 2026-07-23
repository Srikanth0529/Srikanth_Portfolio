import "../../styles/hero.css";
import CodeCard from "./CodeCard";

import { motion } from "framer-motion";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DownloadIcon from "@mui/icons-material/Download";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">

          <motion.p
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
          >
              Hello, I'm
          </motion.p>

          <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                  duration: 0.8,
                  delay: 0.3
              }}
          >
              SRIKANTH
              <br />
              SAMANTHAPUDI
          </motion.h1>

          <motion.h2
              className="hero-role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                  duration: 0.6,
                  delay: 0.9
              }}
          >
              Java Full Stack Developer
          </motion.h2>

         <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                  duration: 0.7,
                  delay: 1.2
              }}
          >
              Transforming ideas into scalable, secure,
              and high-performance web applications
              using Java, Spring Boot, React, REST APIs,
              SQL, and modern technologies.
          </motion.p>

          <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.7,
                    delay: 1.5
                }}
            >

           <a
              href="/Srikanth_Samanthapudi_Resume.pdf"
              download="Srikanth_Samanthapudi_Resume.pdf"
              className="btn-secondary"
            >
              Download Resume
            </a>

            <div className="social-icons">

              <a
                href="https://github.com/Srikanth0529"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/srikanthsamanthapudi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>

              <a
                href="mailto:srikanths9346@gmail.com"
                aria-label="Email"
              >
                <EmailOutlinedIcon />
              </a>

            </div>

          </motion.div>

        </div>

        <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 1,
                delay: 1.8
            }}
        >
            <CodeCard />
        </motion.div>

      </div>
    </section>
  );
}