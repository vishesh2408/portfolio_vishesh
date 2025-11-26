import React, { useEffect, useState } from 'react';
import visheshimage from '../assets/visheshimage.png'; // adjust path as needed
import './Hero.css';

// Tailwind utilities will be used for responsive layout below.

const Hero = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetch('/api/data/profile.json')
      .then((r) => r.json())
      .then((data) => {
        if (mounted) setProfile(data);
      })
      .catch(() => {
        // keep defaults if backend not available
      });
    return () => { mounted = false };
  }, []);

  const name = profile?.name || 'Vishesh Yadav';
  const title = profile?.title || 'FullStack Web Developer';
  const resumeUrl = profile?.resume || 'https://drive.google.com/file/d/13cY90lhsjeud3pSpQf5Ld1jtlV2oKJTj/view?usp=sharing';
  const profileImage = profile?.profileImage ? profile.profileImage : visheshimage;

  return (
    <section className="py-16 bg-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          {/* Left: text */}
          <div className="md:col-span-7">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              <span className="block text-cyan-300/90 text-lg sm:text-xl">I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hero-name">{name}</span>
            </h1>

            <p className="text-lg text-gray-300 mb-6">{title}</p>

            {/* Animated words card (Tailwind layout + CSS animation) */}
            <div className="mb-6">
              <div className="hero-card">
                <div className="hero-loader">
                  <span className="text-gray-400 mr-2 hidden sm:inline">loading</span>
                  <div className="hero-words">
                    <span className="hero-word">buttons</span>
                    <span className="hero-word">forms</span>
                    <span className="hero-word">switches</span>
                    <span className="hero-word">cards</span>
                    <span className="hero-word">widgets</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
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
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-600 blur-lg opacity-30" aria-hidden="true"></div>

              <div className="relative rounded-full overflow-hidden w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-[#071023] ring-1 ring-white/5 shadow-2xl transform transition-all hover:scale-105">
                <img src={profileImage} alt={name} className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
