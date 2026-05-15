import React, { useEffect, useRef } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import {
    Github,
    Linkedin,
    Mail,
    User,
    Briefcase,
    GraduationCap,
} from 'lucide-react';
import './About.css';

const About = () => {
    const skills = [
        "Full-Stack Development",
        "JavaScript", "Java", "Python", "PHP", 
        "React", "React Native CLI", "Node.js", "Django", "Laravel", "Bootstrap",
        "Tailwind CSS", "NativeWind",
        "MySQL", "MongoDB", "GitHub", 
        "UI/UX", "AI/ML - Deep Learning", "Agentic AI"
    ];

    const educationData = [
        {
            title: "Bachelor of Technology",
            institution: "Lovely Professional University, Phagwara, Punjab",
            year: "Nov 2022 - Present",
            details: "Computer Science and Engineering | CGPA: 7.23",
        },
        {
            title: "Intermediate",
            institution: "Glenhill School, Varanasi, Uttar Pradesh",
            year: "Apr 2019 - Mar 2021",
            details: "PCM | Percentage: 83%",
        },
        {
            title: "Matriculation",
            institution: "Glenhill School, Varanasi, Uttar Pradesh",
            year: "Apr 2017 - Mar 2019",
            details: "Percentage: 77.40%",
        },
    ];

    const name = "Vishesh Yadav";
    const containerRef = useRef(null);

    // Subtle background particles effect
    useEffect(() => {
        const createParticles = () => {
            if (!containerRef.current) return;
            const existingParticles = containerRef.current.querySelectorAll('.particle');
            existingParticles.forEach(p => p.remove());

            const numParticles = 40;
            const { clientWidth, clientHeight } = containerRef.current;
            
            for (let i = 0; i < numParticles; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 4 + 2;
                const x = Math.random() * clientWidth;
                const y = Math.random() * clientHeight;
                const color = ['#8b5cf6', '#3b82f6', '#10b981', '#f43f5e'][Math.floor(Math.random() * 4)];
                
                Object.assign(particle.style, {
                    position: 'absolute',
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: color,
                    borderRadius: '50%',
                    left: `${x}px`,
                    top: `${y}px`,
                    opacity: Math.random() * 0.5 + 0.1,
                    pointerEvents: 'none',
                    zIndex: 0,
                    transition: 'all 2s ease'
                });
                
                containerRef.current.appendChild(particle);
            }
        };

        createParticles();
        const intervalId = setInterval(createParticles, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="about-container" ref={containerRef} id="about">
            <div className="about-wrapper">
                <h1 className="about-me-heading">About Me</h1>

                <div className="profile-section">
                    <div className="info-cards">
                        <div className="about-card">
                            <h2 className="card-title">
                                <User className="text-purple-400" size={28} /> 
                                Who I Am
                            </h2>
                            <p className="card-description">
                                A passionate full-stack developer with a love for crafting digital experiences.
                            </p>
                            
                            <div className="card-content">
                                <p>
                                    Hello, I'm <span style={{ fontWeight: '600', color: '#fff' }}>{name}</span>. I thrive on turning complex ideas into elegant and efficient software solutions. My journey in web development has equipped me with a diverse skill set and a deep understanding of user-centered design principles.
                                </p>
                                <p>
                                    I'm passionate about clean code, scalable architectures, and staying up-to-date with the latest industry trends. I believe in continuous learning and collaboration to achieve the best results.
                                </p>
                                
                                <div className="connect-icons">
                                    <span style={{ fontWeight: 500 }}>Connect with me:</span>
                                    <div className="social-links">
                                        <a href="https://github.com/vishesh2408" aria-label="GitHub" className="social-link" target="_blank" rel="noopener noreferrer">
                                            <Github size={22} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/vishesh-yadav-/" aria-label="LinkedIn" className="social-link" target="_blank" rel="noopener noreferrer">
                                            <Linkedin size={22} />
                                        </a>
                                        <a href="https://www.instagram.com/vishesh2408_/" aria-label="Instagram" className="social-link" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram size={22} />
                                        </a>
                                        <a href="https://wa.me/919616265078" aria-label="WhatsApp" className="social-link" target="_blank" rel="noopener noreferrer">
                                            <FaWhatsapp size={22} />
                                        </a>
                                        <a href="mailto:visheshyadav62@gmail.com" aria-label="Email" className="social-link">
                                            <Mail size={22} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-card">
                            <h2 className="card-title">
                                <Briefcase className="text-blue-400" size={28} /> 
                                Core Technologies
                            </h2>
                            <p className="card-description">
                                A brief overview of the tools and technologies I use daily:
                            </p>
                            <div className="skills-wrapper">
                                {skills.map((skill) => (
                                    <span key={skill} className="skill-badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="education-experience">
                    <div className="about-card">
                        <h2 className="card-title">
                            <GraduationCap className="text-yellow-400" size={28} /> 
                            Education
                        </h2>
                        <div style={{ marginTop: '2rem' }}>
                            {educationData.map((edu, index) => (
                                <div className="timeline-item" key={index}>
                                    <h3 className="timeline-title">{edu.title}</h3>
                                    <p className="timeline-meta">{edu.institution} • {edu.year}</p>
                                    <p className="timeline-details">{edu.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                     <div className="about-card">
                        <h2 className="card-title">
                            <Briefcase className="text-emerald-400" size={28} /> 
                            Experience & Training
                        </h2>
                        <div style={{ marginTop: '2rem' }}>
                            <div className="timeline-item">
                                <h3 className="timeline-title">Data Structures and Algorithms Training</h3>
                                <p className="timeline-meta">GeeksforGeeks • Jun 2024 - Jul 2024</p>
                                <p className="timeline-details">
                                    Mastered DSA, achieved a 1.5x boost in algorithm performance. Implemented efficient solutions using Java, applying theoretical concepts to execute algorithmic strategies in real cases.
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default About;
