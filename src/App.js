import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App = () => {
  return (
    <Router>
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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';

// import Home from './pages/Home';
// import CaseStudies from './pages/CaseStudies';
// import Testimonials from './pages/Testimonials';
// import Contact from './pages/Contact';
// import Project from './pages/Project'; // if added as a separate page
// import Skill from './pages/Skill';  
// import CertificationsSection from './pages/CertificationsSection'; // if added as a separate page
// import Achievement from './pages/AchievementsSection'; // if added as a separate page

// import About from './pages/About';
// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/case-studies" element={<CaseStudies />} />
//           <Route path="/testimonials" element={<Testimonials />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/project" element={<Project />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </main>
//       <Skill />
//       <Project />
    
//       <CertificationsSection />
//       <Achievement/>
//       <Contact/>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


// import logo from './logo.svg';
// import './App.css';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <Footer />
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';

// // Components
// import Header from './components/Header';
// import Hero from './components/Hero';
// import CaseStudies from './pages/CaseStudies';
// import Testimonials from './pages/Testimonials';
// import RecentWork from './pages/RecentWork';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Hero />
//       <CaseStudies />
//       <Testimonials />
//       <RecentWork />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);
