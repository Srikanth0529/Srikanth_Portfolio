import "../../styles/certificate.css";
import { motion } from "framer-motion";
import {
  FaMedal,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const certifications = [
  {
    id: 1,
    icon: <FaMedal />,
    title: "Revature",
    subtitle: "PEP Extended Full Stack Java",
    details: "Spring Boot • Java • SQL",
  },

  {
    id: 2,
    icon: <FaGraduationCap />,
    title: "NPTEL",
    subtitle: "Enhancing Soft Skills & Personality",
    details: "Communication • Teamwork",
  },

  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "HackerRank",
    subtitle: " 100+ Problems Solved",
    details: "Java • SQL • Problem Solving",
  
  },
];

const rowVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: .45,
    },
  },
};

export default function Certificate() {
  return (

    <section
      id="certifications"
      className="certificate-section"
    >

      <div className="container">

        <motion.div
          className="certificate-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

         <h2 className="section-title certificate-section-title">
              Certifications
          </h2>

          <p className="section-subtitle certificate-section-subtitle">
              Continuous learning through industry training and coding practice.
          </p>

        </motion.div>

        <div className="certificate-list">
                    {certifications.map((item) => (

            <motion.div
              key={item.id}
              className="certificate-row"
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              {/* Left */}

              <div className="certificate-left">

                <span className="certificate-icon">
                  {item.icon}
                </span>

                <div className="certificate-content">

                  <div className="certificate-title-row">

                    <h3 className="certificate-title">
                      {item.title}
                    </h3>

                    {item.count && (

                      <span className="certificate-count">
                        {item.count}
                      </span>

                    )}

                  </div>

                  <p className="certificate-subtitle">
                    {item.subtitle}
                  </p>

                  <p className="certificate-details">
                    {item.details}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}