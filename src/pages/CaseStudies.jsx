import React from 'react';
import './CaseStudies.css';
import caseStudies from '../data/caseStudies.json';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies">
      <h2>Case Studies</h2>
      <p className="subtitle">A showcase of selected projects demonstrating my skills and process.</p>
      <div className="case-studies-grid">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study-card">
            <img src={study.image} alt={study.title} />
            <div className="card-content">
              <h3>{study.title}</h3>
              <p>{study.description}</p>
              <a href={study.link} target="_blank" rel="noopener noreferrer" className="case-btn">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
