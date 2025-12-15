import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className }) => {
    return (
        <motion.section
            id={id}
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
            }}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
