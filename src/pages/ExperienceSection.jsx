import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import './Experience.css';

const experienceData = [
    {
        title: 'Optmyzr - SDE Intern',
        company: 'PPC Management Software Company',
        date: 'Since March 2023',
        roles: [
            'Integrated Google Ads and Bing Ads APIs.',
            'Developed and enhanced UI using React, PHP, CoffeeScript.',
        ],
        techStack: ['Redux', 'C#', 'CodeIgniter', '.NET', 'React.js', 'PHP'],
        image: 'https://via.placeholder.com/150?text=Optmyzr',
    },
    {
        title: 'Payben - Freelancer',
        company: 'Payben Private Limited',
        date: 'April 2022 - March 2023',
        roles: [
            'Re-developed recharge & bill payment platform.',
            'Managed recharge services & rewards.',
            'Enabled agent-based mobile recharge services.',
        ],
        techStack: ['Android', 'Web Platforms'],
        image: 'https://via.placeholder.com/150?text=Payben',
    },
];

const techStackColors = {
    'Redux': 'purple',
    'C#': 'blue',
    'CodeIgniter': 'red',
    '.NET': 'indigo',
    'React.js': 'cyan',
    'PHP': 'violet',
    'Android': 'green',
    'Web Platforms': 'goldenrod',
};

const ExperienceCard = ({ experience }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="exp-card"
            onClick={() => setIsExpanded(!isExpanded)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            layout
        >
            <div className="exp-header">
                <div className="exp-company">
                    <img src={experience.image} alt={experience.company} className="exp-logo" />
                    <div>
                        <h4 className="exp-title">{experience.title}</h4>
                        <p className="exp-sub">{experience.company}</p>
                        <p className="exp-date">{experience.date}</p>
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
                        transition={{ duration: 0.3 }}
                        className="exp-details"
                        layout
                    >
                        <h5 className="exp-role-heading">Roles:</h5>
                        <ul className="exp-roles">
                            {experience.roles.map((role, index) => (
                                <li key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                                    {role}
                                </li>
                            ))}
                        </ul>
                        <h5 className="exp-role-heading">Tech:</h5>
                        <div className="exp-techstack">
                            {experience.techStack.map((tech, index) => (
                                <motion.span
                                    key={index}
                                    className="exp-tech"
                                    style={{
                                        backgroundColor: techStackColors[tech] || 'gray',
                                        animationDelay: `${(experience.roles.length + index) * 0.1}s`,
                                    }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="exp-glow" />
        </motion.div>
    );
};

const ExperienceSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="exp-section">
            <h2 className="exp-heading">
                <Briefcase className="exp-icon" />
                Experience
            </h2>
            <p className="exp-summary">Here's a summary of my professional experience.</p>
            <motion.div
                className="exp-list"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {experienceData.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </motion.div>
        </div>
    );
};

export default ExperienceSection;
