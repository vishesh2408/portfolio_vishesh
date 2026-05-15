import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import visheshimage from '../assets/visheshimage.jpg'; // adjust path as needed
import './Hero.css';

// Tailwind utilities will be used for responsive layout below.

const Hero = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    let mounted = true;
    const base = import.meta.env.VITE_BACKEND_URL ?? '';
    fetch(`${base}/api/data/profile.json`)
      .then((r) => r.json())
      .then((data) => {
        if (mounted) setProfile(data);
      })
      .catch(() => {
        // keep defaults if backend not available
      });
    return () => { mounted = false };
  }, []);

  // ensure the last name isn't split/hidden by CSS/layout: join final word with a non-breaking space
  const rawName = profile?.name ?? 'Vishesh Yadav';
  const name = rawName.replace(/\s+(\S+)$/, '\u00A0$1');
  // Rotating titles: memoized list and optimized updater
  const titles = useMemo(() => [
    'Full-Stack Developer',
    'Frontend Developer',
    'Backend Developer'
  ], []);

  const titleFromProfile = profile?.title;
  const [titleIndex, setTitleIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    try {
      return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      return false;
    }
  });
  const title = titleFromProfile || titles[titleIndex];

  const advanceTitle = useCallback(() => {
    setTitleIndex((i) => (i + 1) % titles.length);
  }, [titles.length]);
  const resumeUrl = profile?.resume || 'https://drive.google.com/file/d/1Rvv4AcLf01GqCo06Fs26dg4BiVzkV5eC/view?usp=sharing';
  // If backend provides a path like "/uploads/..." and a backend URL is set, prefix it
  const base = import.meta.env.VITE_BACKEND_URL ?? '';
  const profileImage = profile?.profileImage
    ? (profile.profileImage.startsWith('/') && base ? `${base}${profile.profileImage}` : profile.profileImage)
    : visheshimage;

  useEffect(() => {
    // listen for changes to prefers-reduced-motion and update state
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const handler = (e) => setPrefersReducedMotion(e.matches);
      if (mq.addEventListener) mq.addEventListener('change', handler);
      else if (mq.addListener) mq.addListener(handler);
      return () => {
        if (mq.removeEventListener) mq.removeEventListener('change', handler);
        else if (mq.removeListener) mq.removeListener(handler);
      };
    }
    return undefined;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return; // do not animate when user prefers reduced motion
    if (isPaused) return;
    const interval = setInterval(advanceTitle, 3000);
    return () => clearInterval(interval);
  }, [advanceTitle, isPaused, prefersReducedMotion]);

  return (
    <section className="hero py-34 bg-[#0b1220] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 items-center gap-8">
          {/* Left: text */}
          <motion.div 
            className="col-span-12 md:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              <span className="block text-purple-400/90 text-lg sm:text-xl">I'm</span>
              <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hero-name whitespace-normal break-words">
                {name}
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-6">
              <span className="sr-only">Current role:</span>
              <span
                className="rotating-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                tabIndex={0}
              >
                <span aria-live="polite" className="rotating-title" key={title}>{title}</span>
              </span>
            </p>

            <div className="flex flex-row items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 font-semibold shadow-lg transform transition"
                aria-label="Hire Me - go to contact section"
              >
                Hire Me
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-transparent border-2 border-[#7b3e8d] text-[#7b3e8d] hover:bg-[#7b3e8d] hover:text-white font-semibold shadow-lg transform transition"
                aria-label="Open Resume in new tab"
              >
                Resume
              </a>
            </div>
          </motion.div>

          {/* Right: profile card */}
          <motion.div 
            className="col-span-12 md:col-span-5 flex justify-center md:justify-end mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative profile-card">
              <div className="absolute profile-glow" aria-hidden="true"></div>

              <div className="profile-frame">
                <img src={profileImage} alt={name} className="profile-image" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
