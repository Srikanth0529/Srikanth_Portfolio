import "../../styles/education.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBookOpen,
  FaSchool,
} from "react-icons/fa";

const education = [

  {
    id: 1,

    icon: <FaGraduationCap />,

    degree: "B.Tech",

    stream: "Computer Science & Engineering",

    institute:
      "Kallam Haranadhareddy Institute Of Technology",

    duration: "2021 – 2025",

    score: "80%",
  },

  {
    id: 2,

    icon: <FaBookOpen />,

    degree: "Intermediate",

    stream: "MPC",

    institute:
      "Sri Govindhambika Parameswari Junior College",

    duration: "2019 – 2021",

    score: "86%",
  },

  {
    id: 3,

    icon: <FaSchool />,

    degree: "SSC",

    stream: "General",

    institute:
      "Zilla Parishadh High School",

    duration: "2018 – 2019",

    score: "95%",
  },

];

const rowVariants = {

  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {

    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
    },

  },

};

export default function Education() {

  return (

    <section
      id="education"
      className="education-section"
    >

      <div className="container">

        {/* ==========================
               HEADER
        ========================== */}

        <motion.div
          className="education-header"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <h2 className="section-title education-section-title">
            Education
          </h2>

          <p className="section-subtitle education-section-subtitle">
            Academic journey and educational qualifications.
          </p>

        </motion.div>

        {/* ==========================
            EDUCATION LIST
        ========================== */}

        <div className="education-list">
                    {education.map((item) => (

            <motion.div
              key={item.id}
              className="education-row"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              {/* Left Section */}

              <div className="education-left">

                <span className="education-icon">
                  {item.icon}
                </span>

                <div className="education-content">

                  <div className="education-top">

                    <h3 className="education-degree">
                      {item.degree}
                    </h3>

                    <span className="education-duration">
                      {item.duration}
                    </span>

                  </div>

                  <p className="education-stream">
                    {item.stream}
                  </p>

                  <p className="education-institute">
                    {item.institute}
                  </p>

                </div>

              </div>

              {/* Right Section */}

              <div className="education-score">

                {item.score}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}