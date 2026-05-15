import React from 'react';
import { GraduationCap, ExternalLink } from 'lucide-react';
import visheshFormal from '../assets/vishesh_formal.png';
import './CertificationsSection.css';

const certificationsData = [
  {
    title: 'HTML, CSS, and JavaScript for Web Developers',
    by: 'Coursera (Feb 2024)',
    details: 'Mastered foundational and advanced concepts of front-end web development.',
    image: visheshFormal,
    certificateUrl: '',
  },
  {
    title: 'Server-side JavaScript with Node.js',
    by: 'Coursera (Apr 2024)',
    details: 'Learn to build scalable server-side applications and RESTful APIs with Node.js.',
    image: visheshFormal,
    certificateUrl: 'https://coursera.org/verify/8WCW6WUCAHH3',
  },
  {
    title: 'Building Web Applications in PHP',
    by: 'Coursera (Dec 2024)', 
    details: 'Learn to build dynamic, database-driven web applications with PHP.',
    image: visheshFormal,
    certificateUrl: 'https://coursera.org/verify/9YWMTYYRNFIJ',
  },
  {
    title: 'Ethical Hacking',
    by: 'NPTEL',
    details: 'In-depth certification course on Ethical Hacking methodologies.',
    image: visheshFormal,
    certificateUrl: 'https://drive.google.com/file/d/1p8_7Wqm-h85e53ph0utjmrVy6L1zASBc/view?usp=sharing',
  }
];

const CertificationsSection = () => {
  return (
    <section className="cert-section" id="certifications">
      <div className="cert-container">
        <h2 className="cert-heading">
          <GraduationCap className="cert-icon" />
          Certifications & Courses
        </h2>
        
        <div className="cert-grid">
          {certificationsData.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-glow" />
              
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="cert-header">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-image"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-by">{cert.by}</p>
                  </div>
                </div>
                
                <p className="cert-details">{cert.details}</p>
                
                <div className="cert-link-wrapper">
                  {cert.certificateUrl ? (
                    <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="cert-link">
                      View Credential <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Credential not available</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
