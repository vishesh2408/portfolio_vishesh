import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

// CSS is defined as a string here.
const styles = `
.cert-section {
  margin-top: 0rem;
  padding: 1rem;
  background-color: #111827; /* Black Dark Blue */
  margin-left: 9rem;
  margin-right: 9rem;
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
  margin-left: 17rem;
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
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .cert-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .cert-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.cert-card {
  background-color: rgba(31, 41, 55, 0.5);
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid rgba(55, 65, 81, 0.5);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.cert-card:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 24px rgba(147, 51, 234, 0.2);
  border-color: rgba(147, 51, 234, 0.3);
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
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), transparent);
  border-radius: 0.75rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

.cert-card:hover .cert-glow {
  opacity: 0.5;
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
      image: 'https://cdn-images-1.medium.com/max/1600/1*4VBxaeHaxTxjZiPbI7g3kw.jpeg',
      certificateUrl: 'https://coursera.org/verify/8WCW6WUCAHH3 ',
    },
    {
      title: 'Building Web Applications in PHP',
      by: 'Unknown', // You might want to add this if you know
      details: 'Learn to build web applications with PHP.',
      image: 'https://static-00.iconduck.com/assets.00/php-icon-2048x2048-zjxns1zh.png',
      certificateUrl: 'https://coursera.org/verify/9YWMTYYRNFIJ',
    },
    {
      title: 'Data Structure Algorithms - Self Paced',
      by: 'Unknown',  // You might want to add this if you know
      details: 'Self-paced course on Data Structures and Algorithms.',
      image: 'https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/5ee726e83f98c27d0aac940dab49e944/thumb_1200_1553.png',
      certificateUrl: 'https://www.geeksforgeeks.org/certificate/6495655875bce823f50d843d22093dd2?utm_source=socials&utm_medium=cc_link',
    },
     {
      title: 'Ethical Hacking',
      by: 'NPTL',
      details: 'Course on Ethical Hacking.',
      image: 'https://wallpapercave.com/wp/wp9233575.jpg',
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
          <img src={certification.image} alt={certification.title} className="cert-image" />
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
    <div className="cert-section">
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
  );
};

export default CertificationsSection;
