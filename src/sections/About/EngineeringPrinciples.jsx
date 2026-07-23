import { motion } from "framer-motion";

const principles = [
    {
        text: "CLEAN",
        className: "word word-clean",
        delay: 0.2,
    },
    {
        text: "CODE",
        className: "word word-code",
        delay: 0.4,
    },
    {
        text: "ARCHITECTURE",
        className: "word word-architecture",
        delay: 0.6,
    },
    {
        text: "SCALABLE",
        className: "word word-scalable",
        delay: 0.8,
    },
    {
        text: "PERFORMANCE",
        className: "word word-performance",
        delay: 1.0,
    },
    {
        text: "RELIABLE",
        className: "word word-reliable",
        delay: 1.2,
    },
    {
        text: "BACKEND",
        className: "word word-backend",
        delay: 1.4,
    },
    {
        text: "FULL STACK",
        className: "word word-fullstack",
        delay: 1.6,
    },
];

function EngineeringPrinciples() {
    return (
        <div className="principles-container">
            {principles.map((item) => (
                <motion.span
                    key={item.text}
                    className={item.className}
                    initial={{
                        opacity: 0,
                        y: 80,
                        scale: 0.8,
                    }}
                    whileInView={{
                        opacity: 0.12,
                        y: 0,
                        scale: 1,
                    }}
                    viewport={{ once: true,amount:0.45 }}
                    transition={{
                        duration: 0.8,
                        delay: item.delay,
                        ease: "easeOut",
                    }}
                    animate={{
                        y: [0, -8, 0],
                    }}
                    style={{
                        animationDelay: `${item.delay}s`,
                    }}
                >
                    {item.text}
                </motion.span>
            ))}
        </div>
    );
}

export default EngineeringPrinciples;