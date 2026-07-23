import "../../styles/contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";

const contacts = [
  {
    id: 1,
    title: "Email",
    value: "srikanths9346@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:srikanths9346@gmail.com",
    ariaLabel: "Send Email",
  },

  {
    id: 2,
    title: "Phone",
    value: "+91 9346240529",
    icon: <FaPhoneAlt />,
    link: "tel:+919346240529",
    ariaLabel: "Call",
  },

  {
    id: 3,
    title: "LinkedIn",
    value: "linkedin.com/in/srikanthsamanthapudi",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/srikanthsamanthapudi/",
    ariaLabel: "Open LinkedIn",
  },
];

const leftVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const rightVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      delay: index * 0.15,
    },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

    <div className="container">

        <div className="contact-header">

            <h2 className="section-title contact-section-title">
                Contact
            </h2>

        </div>

        <div className="contact-card">

            <div className="contact-wrapper">

          <motion.div
                className="contact-left"
                variants={leftVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >

              <h2>Let's Connect</h2>

              <p>
                  If my work resonates with your vision,                                                                          

                  I'd be delighted to hear from you.
              </p>

              <motion.div
                    animate={{
                        y: [0, -12, 0],
                        rotate: [0, -6, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
    <FaPaperPlane className="paper-plane" />
</motion.div>

          </motion.div>

          <motion.div
                className="contact-right"
                variants={rightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >

              <h3>Samanthapudi Srikanth</h3>

              <div className="contact-item">

                  <a href="mailto:srikanths9346@gmail.com">
                      <FaEnvelope />
                  </a>

                  <span>
                      srikanths9346@gmail.com
                  </span>

              </div>

              <div className="contact-item">

                  <a href="tel:+919346240529">
                      <FaPhoneAlt />
                  </a>

                  <span>
                      +91 9346240529
                  </span>

              </div>

              <div className="contact-item">

                  <a
                      href="https://www.linkedin.com/in/srikanthsamanthapudi/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <FaLinkedinIn />
                  </a>

                  <span>
                      linkedin.com/in/srikanthsamanthapudi
                  </span>

              </div>

          </motion.div>

                  </div>

        </div>

    </div>

</section>
  );

}