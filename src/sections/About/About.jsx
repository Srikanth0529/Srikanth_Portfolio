import { motion } from "framer-motion";
import "../../styles/about.css";

function About() {
    return (
        <section id="about" className="about-section">

            <div className="container">

                <motion.div
                    className="about-content"
                    initial={{
                        opacity: 0,
                        y: 60,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    viewport={{
                        once: true,
                        amount: 0.45,
                    }}
                >                    <h2 className="section-title">
                        Professional Summary
                    </h2>

                    <div className="title-line"></div>

                    <p className="about-text">
                        I enjoy building software that is simple to understand,
                        scalable, easy to extend, and reliable in production
                        environments.
                    </p>

                    <p className="about-text">
                        My development approach focuses on writing clean code,
                        designing modular architectures, building efficient
                        backend services, and developing responsive user
                        interfaces that deliver a consistent user experience.
                    </p>

                    <p className="about-text">
                        I continuously strengthen my problem-solving skills by
                        building end-to-end applications while adopting modern
                        software engineering practices and emerging technologies
                        to improve software quality, maintainability, and
                        performance.
                    </p>

                </motion.div>

            </div>

        </section>
    );
}

export default About;