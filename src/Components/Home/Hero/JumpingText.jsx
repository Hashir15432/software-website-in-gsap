import React from 'react';
import { motion } from 'framer-motion';
export const JumpingText = ({
    text,
    className = "",
    hoverColor = "hover:text-blue-500",
    yOffset = -5
}) => {
    const letters = text.split("");
    return (
        <div className={`flex flex-wrap select-none justify-center items-end ${className}`}>
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    className={`char-wrapper cursor-pointer transition-colors duration-300 ${hoverColor} ${letter === " " ? "mr-6" : ""}`}
                    initial={{ y: "0%", scaleY: 1, scaleX: 1 }}
                    whileHover={{
                        // Applying the specific requested values: translate(0, -5%) scale(1, 1.1)
                        y: `${yOffset}%`,
                        scaleY: 1.1,
                        scaleX: 1,
                        filter: "brightness(1.2)",
                        zIndex: 10
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 20,
                        mass: 0.5
                    }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </div>
    );
};


