import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import visheshFormal from '../assets/vishesh_formal.png';

// CSS is defined as a string here.
const styles = `
.cert-section {
  margin-top: 0rem;
  padding: 2rem 0; /* slightly more vertical breathing room */
  background-color: #0f172a; /* section background aligns with Achievements */
  margin-left: 0;
  margin-right: 0;
}

.cert-heading {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(to right,  #7b3e8d, #7b3e8d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  text-align: center;
  padding-bottom: 2rem;
}

.cert-icon {
  width: 36px;
  height: 36px;
  color:  #7b3e8d;
}

.cert-description {
  font-size: 1.125rem;
  color:  #7b3e8d;
  margin-bottom: 1.5rem;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-items: stretch;
}

.cert-card {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  transition: all 0.3s ease;
}

.cert-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(147, 51, 234, 0.12);
  border-color: rgba(163,100,176,0.9);
}

.cert-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cert-image {
  width: 64px;
  height: 64px;
  border-radius: 0.5rem;
  object-fit: cover;
}

.cert-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #e5e7eb;
}

.cert-by {
  font-size: 0.875rem;
  color: #9ca3af;
}

.cert-details {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #d1d5db;
}

.cert-glow {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.06), transparent);
  border-radius: 0.5rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

.cert-card:hover .cert-glow {
  opacity: 0.45;
}

.certificate-link {
    margin-top: 1rem;
}

.certificate-link a {
  color:  #7b3e8d;
  text-decoration: none;
  font-weight: bold;
}

.certificate-link a:hover {
  text-decoration: underline;
}
`;

const CertificationsSection = () => {
  const certificationsData = [
    {
      title: 'Server-side JavaScript with Node.js',
      by: 'Coursera',
      details: 'Learn to build server-side applications with Node.js.',
      image: visheshFormal,
      certificateUrl: 'https://coursera.org/verify/8WCW6WUCAHH3 ',
    },
    {
      title: 'Building Web Applications in PHP',
      by: 'Unknown', // You might want to add this if you know
      details: 'Learn to build web applications with PHP.',
      image: visheshFormal,
      certificateUrl: 'https://coursera.org/verify/9YWMTYYRNFIJ',
    },
    {
      title: 'Data Structure Algorithms - Self Paced',
      by: 'Unknown',  // You might want to add this if you know
      details: 'Self-paced course on Data Structures and Algorithms.',
      image: visheshFormal,
      certificateUrl: 'https://www.geeksforgeeks.org/certificate/6495655875bce823f50d843d22093dd2?utm_source=socials&utm_medium=cc_link',
    },
    {
      title: 'Ethical Hacking',
      by: 'NPTL',
      details: 'Course on Ethical Hacking.',
      image: visheshFormal,
      certificateUrl: 'https://drive.google.com/file/d/1p8_7Wqm-h85e53ph0utjmrVy6L1zASBc/view?usp=sharing',
    },
  ];

  const CertificationCard = ({ certification }) => {
    // Inject styles
    React.useEffect(() => {
      const style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(styles));
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }, []);

    return (
      <motion.div
        className="cert-card"
        layout
      >
        <div className="cert-header">
          <img
            src={certification.image}
            alt={certification.title}
            className="cert-image"
            loading="lazy"
            style={{ width: '64px', height: '64px', objectFit: 'cover' }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = placeholderImg;
              e.currentTarget.style.width = '64px';
              e.currentTarget.style.height = '64px';
            }}
          />
          <div>
            <h4 className="cert-title">{certification.title}</h4>
            <p className="cert-by">{certification.by}</p>
          </div>
        </div>
        <div className="cert-details">
          {certification.details}
          {certification.certificateUrl && (
            <p className="certificate-link">
              <a href={certification.certificateUrl} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </p>
          )}
          {!certification.certificateUrl && (
            <p>Certificate not available.</p>
          )}
        </div>
        <div className="cert-glow" />
      </motion.div>
    );
  };

  return (
    <section className="section cert-section">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
        <h2 className="cert-heading">
          <GraduationCap className="cert-icon" />
          Certifications & Courses
        </h2>
        {/* <p className="cert-description">
          Here are some of the certifications and courses I've completed.
        </p> */}
        <div className="cert-grid">
          {certificationsData.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
