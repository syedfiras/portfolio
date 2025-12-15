import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className }) => {
    return (
        <motion.section
            id={id}
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: { base: 0.1, md: 0.25 } }}
            variants={{
                hidden: { opacity: 0, y: { base: 10, md: 25 } },
                show: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } }
            }}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
