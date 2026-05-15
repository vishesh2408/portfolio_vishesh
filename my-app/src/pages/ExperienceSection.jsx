import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import './ExperienceSection.css';

const experienceData = [
    {
        title: 'Data Structures and Algorithms Training',
        company: 'GeeksforGeeks',
        date: 'Jun 2024 - Jul 2024',
        roles: [
            'Mastered DSA, achieved a 1.5x boost in algorithm performance, and gained strong knowledge of core concepts.',
            'Implemented efficient solutions using Java, reduced processing time by 15%, and improved execution time.',
            'Applied theoretical concepts, executed algorithmic strategies in real cases, and increased project speed by 25%.',
            'Enhanced problem-solving, minimized debugging time by 30%, and proved ability to tackle complex problems.'
        ],
        techStack: ['Java', 'Algorithms', 'Data Structures', 'Problem Solving'],
        image: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg', 
    }
];

const ExperienceCard = ({ experience }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="exp-card"
            onClick={() => setIsExpanded(!isExpanded)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            layout
        >
            <div className="exp-glow" />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="exp-header">
                    <div className="exp-company">
                        <div className="exp-logo-wrapper">
                            <img src={experience.image} alt={experience.company} className="exp-logo" />
                        </div>
                        <div>
                            <h4 className="exp-title">{experience.title}</h4>
                            <p className="exp-sub">{experience.company}</p>
                            <span className="exp-date">{experience.date}</span>
                        </div>
                    </div>
                    <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        {isExpanded ? <ChevronUp className="chevron-icon" /> : <ChevronDown className="chevron-icon" />}
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="exp-details"
                            layout
                        >
                            <h5 className="exp-role-heading">Key Responsibilities & Focus:</h5>
                            <ul className="exp-roles">
                                {experience.roles.map((role, index) => (
                                    <motion.li 
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {role}
                                    </motion.li>
                                ))}
                            </ul>
                            
                            <h5 className="exp-role-heading">Technologies Used:</h5>
                            <div className="exp-techstack">
                                {experience.techStack.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        className="exp-tech"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: (experience.roles.length * 0.1) + (index * 0.05) }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const ExperienceSection = () => {
    return (
        <section className="exp-section" id="experience">
            <div className="exp-container">
                <h2 className="exp-heading">
                    <Briefcase className="exp-icon" />
                    Experience & Training
                </h2>
                
                <div className="exp-list">
                    {experienceData.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
