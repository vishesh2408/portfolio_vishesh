import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';



const achievementsData = [
    {
        title: "Alogorithm challenge",
        issuer: "Lpu alumni",
        date: "2023",
        description: "Awarded for contributions to problem-solving and innovative solutions.",
        skills: ["C++", "Problem Solving"]
    },
    {
        title: "Web-E-Stan",
        issuer: "Lpu alumni",
        date: "2025",
        description: "Led a team in a 24-hour hackathon, developing a resume maker website.",
        skills: ["Teamwork", "Web Development", "React", "Node-Js", "MongoDB"]

     }
   
];

// Animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: "easeInOut"
        }
    }),
};

const AchievementsSection = () => {
    return (
        <section style={{ padding: '48px 0', backgroundColor: '#0f172a' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
                <h2
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '2rem',
                        color: 'transparent', // Changed to only have transparent color
                        backgroundImage: 'linear-gradient(to right,  #7b3e8d, #7b3e8d)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem'
                    }}
                >
                    <Trophy style={{ width: '2rem', height: '2rem', color: '#7b3e8d' }} />
                    Achievements
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', md: { gridTemplateColumns: '1fr 1fr' }, lg: { gridTemplateColumns: '1fr 1fr 1fr' }, gap: '2rem' }}>
                    {achievementsData.map((achievement, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                        >
                            <div
                                style={{
                                    backgroundColor: '#1e293b',
                                    border: '1px solid #334155',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer',
                                }}
                                className="card-container"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(163, 100, 176, 0.9)'; // Yellow border on hover
                                    e.currentTarget.classList.add('hovered');
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#334155';
                                    e.currentTarget.classList.remove('hovered');
                                }}

                            >
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'semibold', color: 'white', marginBottom: '0.5rem' }}>{achievement.title}</h3>
                                    <p style={{ fontSize: '0.875rem', color: '#d1d5db', marginBottom: '1rem' }}>{achievement.issuer} - {achievement.date}</p>
                                    <p style={{ color: '#e5e7eb', marginBottom: '1rem' }}>{achievement.description}</p>
                                    {achievement.skills && (
                                        <div>
                                            <h4 style={{ fontSize: '0.875rem', fontWeight: 'medium', color: '#d1d5db', marginBottom: '0.25rem' }}>Skills:</h4>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                {achievement.skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        style={{
                                                            padding: '0.25rem 0.5rem',
                                                            borderRadius: '1rem',
                                                            backgroundColor: '#7b3e8d',
                                                            color: '#ffffff',
                                                            border: '1px solid #7b3e8d',
                                                            fontSize: '0.75rem'
                                                        }}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;

