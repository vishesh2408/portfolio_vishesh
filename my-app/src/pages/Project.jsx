import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Project 1: Online Education Website',
        description: 'Developed a full-stack educational platform with user authentication, educational content, quizzes, and feedback functionality.',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/001/991/578/large_2x/modern-flat-design-illustration-learning-and-education-landing-page-and-web-banner-template-knowledge-and-successful-education-learning-graduation-open-book-with-trophy-and-graduation-cap-free-vector.jpg',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: 'https://react-project1-4sdk-amb0j3rc4-vishesh2408s-projects.vercel.app',
        logo: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open-text"
                style={{ color: '#6366f1' }}
            >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                <path d="M12 13h6"></path>
                <path d="M12 17h6"></path>
            </svg>
        ),
    },
    {
        title: 'Project 2: Examination System',
        description: 'Created a web application for conducting online examinations with real-time results and analytics.',
        imageUrl: 'https://ipsitasoft.com/backend/img/portfolio/1694595124-ipsita.png',
        technologies: ['PHP', 'HTML', 'CSS', 'phpMyAdmin'],
        link: '#',
        logo: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-text"
                style={{ color: '#84cc16' }}
            >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                <path d="M14 2v6l6-6"></path>
                <path d="M8 13h8"></path>
                <path d="M8 17h6"></path>
            </svg>
        ),
    },
    {
        title: 'Educational Puzzle App',
        description: 'Conceived Eduzzle, an interactive learning app with 10+ subject-based puzzles in Math, Science, and Programming. Crafted a responsive React Native interface, achieved load times under 2 seconds on web and mobile. Stimulated engagement through leaderboards, badges, and rewards.',
        imageUrl: 'https://images.pexels.com/photos/164531/pexels-photo-164531.jpeg?auto=compress&cs=tinysrgb&w=800', // Puzzle pieces image
        technologies: ['React-Native', 'Next.js', 'JavaScript', 'NodeJS', 'MongoDB'],
        link: '#',
        logo: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-puzzle"
                style={{ color: '#facc15' }}
            >
                <path d="M19.439 7.854l-4.29-4.29a2.614 2.614 0 0 0-3.698 0l-4.29 4.29a2.614 2.614 0 0 1-3.698 0l-1.31-1.31a2.614 2.614 0 0 0-3.698 0l-1.31 1.31a2.614 2.614 0 0 0 0 3.698l4.29 4.29a2.614 2.614 0 0 0 3.698 0l4.29-4.29a2.614 2.614 0 0 1 3.698 0l1.31 1.31a2.614 2.614 0 0 0 3.698 0l1.31-1.31a2.614 2.614 0 0 0 0-3.698zM4.53 10.53a1.697 1.697 0 0 1 0-2.4l1.31-1.31a1.697 1.697 0 0 1 2.4 0l4.29 4.29a1.697 1.697 0 0 0 2.4 0l4.29-4.29a1.697 1.697 0 0 1 2.4 0l1.31 1.31a1.697 1.697 0 0 1 0 2.4l-4.29 4.29a1.697 1.697 0 0 0-2.4 0l-4.29-4.29a1.697 1.697 0 0 1-2.4 0L8.24 10.53a1.697 1.697 0 0 1 0 2.4l-3.71-3.71z"></path>
                <path d="M10 14h4"></path>
            </svg>
        ),
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const MyWorkSection = () => {
    return (
        <section style={{ padding: '4rem 2rem', backgroundColor: '#111827' }} id="work">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#7b3e8d', marginBottom: '0.5rem' }}>
                        My Work
                    </h2>
                </div>

                <motion.div
                    className="project-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scaleX: 1.04, scaleY: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            style={{
                                backgroundColor: 'rgba(31, 41, 55, 0.6)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                boxShadow: '0 6px 15px rgba(59, 130, 246, 0.1)',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <div
                                style={{ position: 'relative', height: '160px', overflow: 'hidden' }}

                            >
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '150%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                        filter: 'brightness(70%)',
                                    }}
                                    className="project-image"
                                />
                                {project.logo && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '0.75rem',
                                            left: '0.75rem',
                                            zIndex: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transform: 'scale(0.8)',
                                        }}
                                    >
                                        {project.logo}
                                    </div>
                                )}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundColor: 'rgba(0, 0, 0, 0)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'background-color 0.5s ease, opacity 0.5s ease',
                                        opacity: 0,
                                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
                                        textDecoration: 'none', // Prevent default link styling
                                    }}
                                    className="overlay"
                                >
                                    <span
                                        style={{
                                            padding: '0.3rem 0.7rem',
                                            border: '1px solid white',
                                            color: 'white',
                                            background: 'transparent',
                                            textDecoration: 'none',
                                            borderRadius: '4px',
                                            fontSize: '0.9rem',
                                            display: 'inline-block', // Ensure the span has dimensions
                                        }}
                                        className="view-button"

                                    >
                                        View Project
                                    </span>
                                </a>
                            </div>
                            <div style={{ padding: '1rem', textAlign: 'left' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: '#fff' }} className="project-title">
                                    {project.title}
                                </h3>
                                <p style={{ color: '#d1d5db', fontSize: '0.85rem', marginBottom: '0.75rem' }} className="project-description">
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }} className="tech-stack">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                backgroundColor: '#374151',
                                                padding: '0.2rem 0.5rem',
                                                borderRadius: '9999px',
                                                fontSize: '0.7rem',
                                                color: '#f3f4f6',
                                            }}
                                            className="tech-tag"
                                        >
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
