import React, { useEffect, useState, useMemo, useCallback } from 'react';
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
    'FullStack Developer',
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
  const resumeUrl = profile?.resume || 'https://drive.google.com/file/d/1e7luQyTfALtp2tLAbBOhtB76st2GXAhU/view?usp=sharing';
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
    <section className="hero py-34 bg-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 items-center gap-8">
          {/* Left: text */}
          <div className="col-span-7">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              <span className="block text-cyan-300/90 text-lg sm:text-xl">I'm</span>
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
                href="/about"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold shadow-lg transform transition"
                aria-label="Hire Me - go to About"
              >
                Hire Me
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 text-white hover:bg-white/5"
                aria-label="Open Resume in new tab"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right: profile card */}
          <div className="col-span-5 flex justify-end">
            <div className="relative profile-card">
              <div className="absolute profile-glow" aria-hidden="true"></div>

              <div className="profile-frame">
                <img src={profileImage} alt={name} className="profile-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
