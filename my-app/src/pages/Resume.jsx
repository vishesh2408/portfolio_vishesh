import React from 'react';
import { motion } from 'framer-motion';

import { DownloadCloud } from 'lucide-react';
import './Resume.css'; // import the CSS file

const Resume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1iYvvk0Z9pK1JXqnYmLmtNqcRcVez94p8/view?usp=sharing';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
    };

    const buttonVariants = {
        initial: { scale: 1, y: 0 },
        hover: { scale: 1.1, y: -5 },
    };

    return (
        <motion.div
            className="resume-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h2 className="resume-title">Resume</h2>
            <p className="resume-description">
                Download my resume in PDF format. I keep it updated with my latest
                experience and skills.
            </p>
            <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                className="resume-button-wrapper"
            >
                <a
                    href={resumeUrl}
                    download="Your_Name_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-button"
                >
                    <DownloadCloud className="resume-icon" />
                    Download Resume
                </a>
            </motion.div>
            <motion.p
                className="resume-hint"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                (Click the button to download)
            </motion.p>
        </motion.div>
    );
};

export default Resume;



