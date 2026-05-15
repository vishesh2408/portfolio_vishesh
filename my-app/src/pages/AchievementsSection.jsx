import React from 'react';
import { Trophy } from 'lucide-react';
import './AchievementsSection.css';

const achievementsData = [
    {
        title: "Algorithm Challenge",
        issuer: "LPU Alumni",
        date: "2023",
        description: "Awarded for exceptional contributions to problem-solving and developing highly innovative algorithmic solutions.",
        skills: ["C++", "Problem Solving", "Algorithms"]
    },
    {
        title: "Web-E-Stan Hackathon",
        issuer: "LPU Alumni",
        date: "2025",
        description: "Led a team in a grueling 24-hour hackathon, successfully architecting and developing a full-stack resume maker web application.",
        skills: ["Team Leadership", "Web Development", "React", "Node.js", "MongoDB"]
    }
];

const AchievementsSection = () => {
    return (
        <section className="achievement-section" id="achievements">
            <div className="achievement-container">
                <h2 className="achievement-heading">
                    <Trophy className="achievement-icon" />
                    Achievements
                </h2>
                
                <div className="achievement-grid">
                    {achievementsData.map((achievement, index) => (
                        <div className="achievement-card" key={index}>
                            <div className="achievement-glow" />
                            
                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <h3 className="achievement-title">{achievement.title}</h3>
                                
                                <div className="achievement-meta">
                                    <span>{achievement.issuer}</span>
                                    <span className="achievement-meta-divider" />
                                    <span>{achievement.date}</span>
                                </div>
                                
                                <p className="achievement-description">{achievement.description}</p>
                                
                                {achievement.skills && achievement.skills.length > 0 && (
                                    <div>
                                        <h4 className="achievement-skills-heading">Demonstrated Skills</h4>
                                        <div className="achievement-skills-list">
                                            {achievement.skills.map((skill, skillIndex) => (
                                                <span className="achievement-skill-tag" key={skillIndex}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
