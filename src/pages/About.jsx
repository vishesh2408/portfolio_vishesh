import React, { useEffect, useRef} from 'react';
import visheshimage from '../assets/visheshimage.png';

import {
    Github,
    Linkedin,
   
    Mail,
    ArrowRight,
    User,
    Briefcase,
    GraduationCap,
    Code,
    Laptop
} from 'lucide-react';

const About = () => {
    const skills = [
        "React", "Node.js", "JavaScript", "TypeScript", "PostgreSQL",
        "CSS", "GraphQL", "Git"
    ];

    const projects = [
        {
            title: "Online Education Website",
            description: "Developed an online education platform.",
            technologies: ["React", "MongoDB"],
            imageUrl: "https://i.pinimg.com/originals/53/38/55/5338554a68f881a09791879d474b035a.jpg",
        },
        {
            title: "Online Examination System",
            description: "Created an online examination system.",
            technologies: ["PHP", "PHPMyAdmin"],
            imageUrl: "https://th.bing.com/th/id/OIP.H7MPFjGdaG0Xx9JNn5vvXAHaEA?cb=iwc1&rs=1&pid=ImgDetMain",
        },
    ];

    const educationData = [
        {
            title: "Graduation",
            institution: "Lovely Professional University",
            year: "2026",
            details: "Bachelor of Science in Computer Science",
        },
        {
            title: "Intermediate",
            institution: "Glenhill School",
            year: "2021",
            details: "PCM (Physics, Chemistry, Mathematics)",
        },
        {
            title: "High School",
            institution: "Glenhill School",
            year: "2019",
            details: "Completed 10th Grade with a focus on Science and Mathematics",
        },
    ];

    const name = "Your Name";
    
    const containerRef = useRef(null);

    useEffect(() => {
        const createParticles = () => {
            const numParticles = 70;
            const newParticles = [];
            if (containerRef.current) {
                const { clientWidth, clientHeight } = containerRef.current;
                for (let i = 0; i < numParticles; i++) {
                    newParticles.push({
                        x: Math.random() * clientWidth,
                        y: Math.random() * clientHeight,
                        color: ['#6366f1', '#8b5cf6', '#d946ef', '#f43f5e'][Math.floor(Math.random() * 4)],
                        size: Math.random() * 4 + 2,
                    });
                }
               
            }
        };

        createParticles();

        const intervalId = setInterval(createParticles, 20000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div
            className="about-container"
            ref={containerRef}
        >
            <div className="container">
                <div className="text-center mb-12 about-me">
                    <h1>About Me</h1>
                   
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 profile-section">
                    <div className="md:w-1/3 flex flex-col items-center">
                        <div className="avatar-container">
                            <div className="avatar">
                                <img src={visheshimage} alt="Your Avatar" className="avatar-image" />
                                <div className="avatar-fallback">DP</div>
                            </div>
                        </div>
                        <button className="contact-button">
                            <a href="contact" aria-label="Contact Me" className="flex items-center" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <span>Contact Me</span>
                            </a>

                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="info-cards">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">
                                    <User className="w-6 h-6 text-purple-400" /> Who I Am
                                </h2>
                                <p className="card-description">
                                    A passionate full-stack developer with a love for crafting digital experiences.
                                </p>
                            </div>
                            <div className="card-content">
                                <p>
                                    Hello, I'm <span className="font-semibold">{name}</span>. I thrive on turning complex ideas into elegant and efficient software solutions. My journey in web development has equipped me with a diverse skill set and a deep understanding of user-centered design principles.
                                </p>
                                <p>
                                    I'm passionate about clean code, scalable architectures, and staying up-to-date with the latest industry trends. I believe in continuous learning and collaboration to achieve the best results.
                                </p>
                                <div className="flex items-center gap-4 connect-icons">
                                    <span>Connect with me:</span>
                                    <div className="flex gap-4 social-links">
                                        <a href="https://github.com/vishesh2408" aria-label="GitHub">
                                            <Github className="w-6 h-6" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/vishesh-yadav-/" aria-label="LinkedIn">
                                            <Linkedin className="w-6 h-6" />
                                        </a>
                                       
                                        <a href="mailto:visheshyadav62@gmail.com" aria-label="Email">
                                            <Mail className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h2 className="card-title">
                                    <Briefcase className="w-6 h-6 text-blue-400" /> My Skills
                                </h2>
                                <p className="card-description">
                                    Here are some of the technologies I'm proficient in:
                                </p>
                            </div>
                            <div className="card-content">
                                <div className="flex flex-wrap gap-2 skills-section">
                                    {skills.map((skill, index) => (
                                        <span
                                            key={skill}
                                            className={`badge ${index % 3 === 0 ? 'bg-purple' : index % 3 === 1 ? 'bg-blue' : 'bg-green'}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 education-experience">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-title">
                                <GraduationCap className="w-6 h-6 text-yellow-400" /> Education
                            </h2>
                        </div>
                        <div className="card-content">
                            {educationData.map((edu, index) => (
                                <div key={index}>
                                    <h3 className="text-lg font-semibold">{edu.title}</h3>
                                    <p className="text-gray-400">{edu.institution} - {edu.year}</p>
                                    <p className="text-gray-400">{edu.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* <div className="card">
                        <div className="card-header">
                            <h2 className="card-title">
                                <Briefcase className="w-6 h-6 text-emerald-400" /> Experience
                            </h2>
                        </div>
                        <div className="card-content">
                            <div>
                                <h3 className="text-lg font-semibold">Web Developer</h3>
                                <p className="text-gray-400">Company Name - 2019-Present</p>
                                <p className="text-gray-400">
                                    Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality products.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="mt-12 projects-section">
                    <h2 className="text-3xl font-semibold text-center mb-8 flex items-center justify-center">
                        <Code className="w-8 h-8 text-purple-400" /> My Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-image-container">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                    <div className="project-overlay">
                                        <Laptop className="w-12 h-12 text-white" />
                                    </div>
                                </div>
                                <div className="card-header">
                                    <h3 className="text-xl card-title">{project.title}</h3>
                                    <p className="card-description">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="card-content">
                                    <div className="flex flex-wrap gap-2 project-technologies">
                                        {project.technologies.map((tech, i) => (
                                             <span
                                                key={tech}
                                                className={`badge ${i % 3 === 0 ? 'bg-purple' : i % 3 === 1 ? 'bg-blue' : 'bg-green'}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .about-container {
                    min-height: 100vh;
                    background-color:  #111827;
                    color: white;
                    position: relative;
                    overflow: hidden;
                }

                .container {
                    margin: auto;
                    padding: 3rem 1rem;
                    position: relative;
                    z-index: 10;
                    max-width: 1200px;
                }

                .about-me h1 {
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    margin-left: 35rem;
                    color:  #7b3e8d;
                }

                .about-description {
                    color: #d1d5db;
                    font-size: 1.125rem;
                    line-height: 1.75rem;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .profile-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3rem;
                }

                @media (min-width: 768px) {
                    .profile-section {
                        flex-direction: row;
                    }
                }

                .avatar-container {
                    width: 16rem;
                    height: 16rem;
                    border: 4px solid  #7b3e8d;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
                    margin-bottom: 1.5rem;
                    border-radius: 50%;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .avatar {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    overflow: hidden;
                    position: relative;
                }

                .avatar-image {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }

                .avatar-fallback {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #9ca3af;
                    color: white;
                    font-size: 2rem;
                }


                .contact-button {
                    padding: 0.75rem 1.5rem;
                    font-size: 1.125rem;
                    font-weight: 500;
                    border-radius: 0.375rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background-color: transparent;
                    border: 1px solid  #7b3e8d;
                    color:  #7b3e8d;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .contact-button:hover {
                    background-color:  #7b3e8d;
                    color: white;
                }

                .info-cards {
                    width: 100%;
                }

                @media (min-width: 768px) {
                    .info-cards {
                        width: 66.666667%;
                    }
                }

                .card {
                    background-color: #1f2937;
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    margin-bottom: 2rem;
                    padding: 2rem;
                }

                .card-header {
                    margin-bottom: 1.5rem;
                }

                .card-title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color:  #7b3e8d;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .card-description {
                    color: #d1d5db;
                    font-size: 1rem;
                    line-height: 1.5rem;
                }

                .card-content {
                    color: #e5e7eb;
                }

                .card-content p {
                    margin-bottom: 1rem;
                }

                .connect-icons {
                    margin-top: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .connect-icons span {
                    color: #d1d5db;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                }

                .social-links a {
                    color:  #7b3e8d;
                    transition: color 0.3s ease;
                }

                .social-links a:hover {
                    color:  #7b3e8d;
                }

                .skills-section {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: 1rem;
                }

                .badge {
                    padding: 0.5rem 1rem;
                    border-radius: 1rem;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: white;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }

                .bg-purple {
                    background-color: rgba(167, 139, 250, 0.2);
                    color: #d8b4fe;
                    border: 1px solid rgba(167, 139, 250, 0.3);
                }

                .bg-blue {
                    background-color: rgba(56, 189, 248, 0.2);
                    color: #93c5fd;
                    border: 1px solid rgba(56, 189, 248, 0.3);
                }

                .bg-green {
                    background-color: rgba(52, 211, 153, 0.2);
                    color: #6ee7b7;
                    border: 1px solid rgba(52, 211, 153, 0.3);
                }

                .education-experience {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin-top: 2rem;
                }

                @media (min-width: 768px) {
                    .education-experience {
                        flex-direction: row;
                        gap: 3rem;
                    }
                }

                .education-experience .card {
                    width: 100%;
                }

                .projects-section {
                    margin-top: 3rem;
                }

                .projects-section h2 {
                    font-size: 2.25rem;
                    font-weight: bold;
                    color:  #7b3e8d;
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .projects-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }

                @media (min-width: 768px) {
                    .projects-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1024px) {
                    .projects-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                .project-card {
                    background-color: #1f2937;
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                    margin-left: 1rem;
                }

                .project-card:hover {
                    transform: translateY(-0.5rem);
                }

                .project-image-container {
                    position: relative;
                    overflow: hidden;
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                }

                .project-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .project-card:hover .project-image {
                    transform: scale(1.1);
                }

                .project-overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: rgba(0, 0, 0, 0.5);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                }

                .project-card:hover .project-overlay {
                    opacity: 1;
                }

                .project-technologies {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: 1rem;
                }

                .project-technologies span{
                    padding: 0.25rem 0.75rem;
                    border-radius: 1rem;
                    font-size: 0.75rem;
                    font-weight: 500;
                    color: white;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }
                .project-card .card-header{
                    margin-bottom: 1rem;
                }
                .project-card .card-content{
                    padding-top: 0;
                }
                .bg-purple {
                    background-color: rgba(167, 139, 250, 0.2);
                    color: #d8b4fe;
                    border: 1px solid rgba(167, 139, 250, 0.3);
                }

                .bg-blue {
                    background-color: rgba(56, 189, 248, 0.2);
                    color: #93c5fd;
                    border: 1px solid rgba(56, 189, 248, 0.3);
                }

                .bg-green {
                    background-color: rgba(52, 211, 153, 0.2);
                    color: #6ee7b7;
                    border: 1px solid rgba(52, 211, 153, 0.3);
                }
                .bg-gradient-animated {
                    background-image: linear-gradient(
                        -225deg,
                        #6e7588 0%,
                        #424874 29%,
                        #a786df 67%,
                        #6e7588 100%
                    );
                    background-size: 400%;
                    animation: animateBackground 20s ease-in-out infinite;
                }

                @keyframes animateBackground {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
        </div>
    );
};

export default About;
