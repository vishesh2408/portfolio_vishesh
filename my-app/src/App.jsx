import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Resume from './pages/Resume';

import Contact from './pages/Contact';
import Project from './pages/Project';
import Skill from './pages/Skill';
import CertificationsSection from './pages/CertificationsSection';
import Achievement from './pages/AchievementsSection';
import About from './pages/About';
import ExperienceSection from './pages/ExperienceSection';
import CursorGlow from './components/CursorGlow';

const App = () => {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certifications" element={<CertificationsSection />} />
          <Route path="/achievements" element={<Achievement />} />
          <Route path="/experience" element={<ExperienceSection />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
