// import React from 'react';
// import Hero from '../components/Hero';
// import Skill from './Skill';
// import Project from './Project';
// import CertificationsSection from './CertificationsSection';
// import Achievement from './AchievementsSection';
// import Contact from './Contact';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home">
//       <Hero />

//       <section className="intro-section">
//         <div className="intro-container">
//           <h2>Welcome to My Portfolio</h2>
//           <a href="/contact" className="home-cta">Let's Talk</a>
//         </div>
//       </section>

//       {/* Portfolio Sections */}
//       <Skill />
//       <Project />
//       <CertificationsSection />
//       <Achievement />
//       <Contact />
//     </div>
//   );
// };

// export default Home;










import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Skill from './Skill';
import Project from './Project';
import CertificationsSection from './CertificationsSection';
import Achievement from './AchievementsSection';
import Contact from './Contact';
import ExperienceSection from './ExperienceSection';
import './Home.css';

const Home = () => {
  const revealProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="home">
      <Hero />
      
      <motion.div {...revealProps}>
        <ExperienceSection />
      </motion.div>
      
      <motion.div {...revealProps}>
        <Project />
      </motion.div>
      
      <motion.div {...revealProps}>
        <Skill />
      </motion.div>
      
      <motion.div {...revealProps}>
        <CertificationsSection />
      </motion.div>
      
      <motion.div {...revealProps}>
        <Achievement />
      </motion.div>
      
      {/* Contact Me Banner & Form */}
      <motion.div {...revealProps}>
        <section className="intro-section" id="contact-banner">
          <div className="intro-container">
            <h2>Ready to start a project?</h2>
            <p className="text-gray-400 mb-8 text-lg">I'm currently available for freelance work and full-time positions.</p>
            <a href="#contact" className="home-cta">Contact Me</a>
          </div>
        </section>
      </motion.div>
      
      <Contact />
    </div>
  );
};

export default Home;
