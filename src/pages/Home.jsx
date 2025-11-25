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
import Hero from '../components/Hero';
import Skill from './Skill';
import Project from './Project';
import CertificationsSection from './CertificationsSection';
import Achievement from './AchievementsSection';
import Contact from './Contact';

import './Home.css';
import ExperienceSection from './ExperienceSection';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <section className="intro-section">
        <div className="intro-container">
          <h2>Welcome to My Portfolio</h2>
          <a href="/contact" className="home-cta">Let's Talk</a>
        </div>
      </section>
      <Skill />
      <Project />
      <CertificationsSection />
      <Achievement />
     
<ExperienceSection />
      <Contact />
    </div>
  );
};

export default Home;
