import { motion } from "framer-motion";

import {
    FaGraduationCap,
    FaCalendarAlt,
    FaCode,
    FaLaptopCode,
    FaServer
} from "react-icons/fa";

import "../../styles/experience.css";

const stats = [

    {
        icon: <FaCode />,
        number: "3",
        label: "Projects"
    },

    {
        icon: <FaLaptopCode />,
        number: "60+",
        label: "Coding Labs"
    },

    {
        icon: <FaServer />,
        number: "70+",
        label: "REST APIs"
    }

];

const technologies = [

    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "REST API",
    "JDBC",
    "Git",
    "GitHub",
    "Postman"

];

function Experience() {

    return (

        <section
            id="experience"
            className="experience-section"
        >

            <div className="container">

                {/* ================= Heading ================= */}

                <motion.div

                    className="experience-heading"

                    initial={{
                        opacity:0,
                        y:50
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true,
                        amount:0.35
                    }}

                    transition={{
                        duration:.6
                    }}

                >

                    <h2 className="section-title">

                        Experience/Training

                    </h2>

                    <div className="title-line"></div>

                </motion.div>

                {/* ================= Card ================= */}

                <motion.article

                    className="training-card"

                    initial={{
                        opacity:0,
                        y:70
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true,
                        amount:.30
                    }}

                    transition={{
                        duration:.5
                    }}

                >

                    {/* ================= Header ================= */}

                    <div className="training-header">

                        <div className="company-info">

                            <div className="company-logo">

                                <FaGraduationCap/>

                            </div>

                            <div>

                                <h3>

                                    Revature

                                </h3>

                                <h4>

                                    Java Full Stack Developer Trainee

                                </h4>

                            </div>

                        </div>

                        <div className="training-duration">

                            <FaCalendarAlt/>

                            <span>

                                Nov 2025 – Mar 2026

                            </span>

                        </div>

                    </div>

                    {/* ================= Summary ================= */}

                    <motion.p

                        className="training-summary"

                        initial={{
                            opacity:0
                        }}

                        whileInView={{
                            opacity:1
                        }}

                        viewport={{
                            once:true
                        }}

                        transition={{
                            delay:.25
                        }}

                    >

                        Built production-style Java Full Stack applications during Revature's intensive developer training program.
Applied enterprise development practices using Spring Boot, React, REST APIs, MySQL, and Git.

                    </motion.p>

                    {/* ================= Stats ================= */}

                    <motion.div

                        className="training-stats"

                        initial="hidden"

                        whileInView="show"

                        viewport={{
                            once:true
                        }}

                        variants={{

                            hidden:{},

                            show:{

                                transition:{

                                    staggerChildren:.15

                                }

                            }

                        }}

                    >

                        {

                            stats.map((item)=> (

                                <motion.div

                                    key={item.label}

                                    className="stat-card"

                                    variants={{

                                        hidden:{

                                            opacity:0,

                                            y:25

                                        },

                                        show:{

                                            opacity:1,

                                            y:0

                                        }

                                    }}

                                >

                                    <div className="stat-icon">

                                        {item.icon}

                                    </div>

                                    <h3>

                                        {item.number}

                                    </h3>

                                    <p>

                                        {item.label}

                                    </p>

                                </motion.div>

                            ))

                        }

                    </motion.div>

                    {/* ================= Tech ================= */}

                    <div className="tech-wrapper">

                        <h5>

                            Technologies

                        </h5>

                        <motion.div

                            className="tech-stack"

                            initial="hidden"

                            whileInView="show"

                            viewport={{

                                once:true

                            }}

                            variants={{

                                hidden:{},

                                show:{

                                    transition:{

                                        staggerChildren:.05

                                    }

                                }

                            }}

                        >

                            {

                                technologies.map((tech)=>(

                                    <motion.span

                                        key={tech}

                                        className="tech-chip"

                                        variants={{

                                            hidden:{

                                                opacity:0,

                                                y:10

                                            },

                                            show:{

                                                opacity:1,

                                                y:0

                                            }

                                        }}

                                    >

                                        {tech}

                                    </motion.span>

                                ))

                            }

                        </motion.div>

                    </div>

                </motion.article>

            </div>

        </section>

    );

}

export default Experience;