import React from 'react';
import {
    Code, Code2, Database, BrainCircuit, Layout, Server
} from 'lucide-react';
import './Skill.css';

const skillsData = [
    {
        category: 'Programming Languages',
        icon: <Code className="skill-category-icon" />,
        skills: [
            { name: 'JavaScript', level: 90, color: '#facc15' },
            { name: 'Java', level: 85, color: '#c084fc' },
            { name: 'Python', level: 80, color: '#60a5fa' },
            { name: 'PHP', level: 75, color: '#818cf8' }
        ]
    },
    {
        category: 'Frameworks & Libraries',
        icon: <Layout className="skill-category-icon" />,
        skills: [
            { name: 'React', level: 90, color: '#34d399' },
            { name: 'React Native CLI', level: 85, color: '#34d399' },
            { name: 'Tailwind CSS', level: 90, color: '#38bdf8' },
            { name: 'NativeWind', level: 85, color: '#38bdf8' },
            { name: 'Node.js', level: 85, color: '#34d399' },
            { name: 'Django', level: 75, color: '#10b981' },
            { name: 'Laravel', level: 80, color: '#ef4444' },
            { name: 'Bootstrap', level: 85, color: '#c084fc' }
        ]
    },
    {
        category: 'Tools & Platforms',
        icon: <Database className="skill-category-icon" />,
        skills: [
            { name: 'MySQL', level: 80, color: '#f59e0b' },
            { name: 'MongoDB', level: 85, color: '#34d399' },
            { name: 'GitHub', level: 90, color: '#e2e8f0' }
        ]
    },
    {
        category: 'Specializations',
        icon: <BrainCircuit className="skill-category-icon" />,
        skills: [
            { name: 'Full-Stack Development', level: 95, color: '#3b82f6' },
            { name: 'Agentic AI', level: 85, color: '#a78bfa' },
            { name: 'AI/ML - Deep Learning', level: 80, color: '#60a5fa' },
            { name: 'UI/UX Design', level: 85, color: '#f472b6' }
        ]
    },
    {
        category: 'Soft Skills',
        icon: <Code className="skill-category-icon" />,
        skills: [
            { name: 'Problem-Solving', level: 95, color: '#a78bfa' },
            { name: 'Collaboration', level: 90, color: '#60a5fa' },
            { name: 'Project Management', level: 85, color: '#f472b6' },
            { name: 'Adaptability', level: 95, color: '#34d399' }
        ]
    }
];

const Skill = () => {
    return (
        <section className="skill-section" id="skills">
            <div className="skill-container">
                <h2 className="skill-title">
                    <BrainCircuit className="title-icon" />
                    My Skills & Expertise
                </h2>
                
                <div className="skill-grid">
                    {skillsData.map((group, idx) => (
                        <div key={idx} className="skill-card">
                            <div className="skill-card-header">
                                <div className="icon-wrapper">
                                    {group.icon}
                                </div>
                                <h3>{group.category}</h3>
                            </div>
                            
                            <div className="skill-list">
                                {group.skills.map((skill, index) => (
                                    <div key={index} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percent">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-bg">
                                            <div 
                                                className="skill-bar-fill" 
                                                style={{ 
                                                    width: `${skill.level}%`,
                                                    background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                                                    boxShadow: `0 0 10px ${skill.color}66`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
