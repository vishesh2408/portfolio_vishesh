import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenText, FileText, Puzzle } from 'lucide-react';
import './Project.css';

const projects = [
    {
        title: 'Educational Website Platform',
        description: 'Developed an educational website for students, teachers, and parents. Designed responsive interfaces, improving navigation flow and enhancing UX by 30%. Facilitated quizzes, forums, and progress tracking, boosting engagement by 40%.',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/001/991/578/large_2x/modern-flat-design-illustration-learning-and-education-landing-page-and-web-banner-template-knowledge-and-successful-education-learning-graduation-open-book-with-trophy-and-graduation-cap-free-vector.jpg',
        technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'MongoDB'],
        link: 'https://react-project1-4sdk-amb0j3rc4-vishesh2408s-projects.vercel.app',
        logo: <BookOpenText size={24} color="#6366f1" />
    },
    {
        title: 'Online Examination System',
        description: 'Created a robust examination system for users and admins. Constructed UIs to manage 50+ exams seamlessly. Delivered features for exam creation (100+ questions), automated grading, and integrated secure data mechanisms for 150+ users.',
        imageUrl: 'https://ipsitasoft.com/backend/img/portfolio/1694595124-ipsita.png',
        technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'],
        link: '#',
        logo: <FileText size={24} color="#84cc16" />
    },
    {
        title: 'Educational Puzzle App (Eduzzle)',
        description: 'Conceived Eduzzle, an interactive learning app with 10+ subject-based puzzles. Crafted a responsive React Native interface, achieving load times under 2 seconds. Stimulated engagement through leaderboards, driving 10+ puzzle completions per session.',
        imageUrl: 'https://images.pexels.com/photos/164531/pexels-photo-164531.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React Native', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
        link: '#',
        logo: <Puzzle size={24} color="#facc15" />
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const MyWorkSection = () => {
    return (
        <section className="project-section" id="projects">
            <div className="project-container">
                <h2 className="project-heading">
                    Featured Projects
                </h2>

                <motion.div
                    className="project-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="project-card"
                        >
                            <div className="project-image-container">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="project-image"
                                    loading="lazy"
                                />
                                
                                {project.logo && (
                                    <div className="project-logo-badge">
                                        {project.logo}
                                    </div>
                                )}
                                
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-overlay"
                                >
                                    <span className="project-view-btn">
                                        View Project
                                    </span>
                                </a>
                            </div>
                            
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                
                                <div className="project-tech-stack">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="project-tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MyWorkSection;
