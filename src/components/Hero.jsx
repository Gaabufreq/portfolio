import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Search, Megaphone, Palette } from 'lucide-react';
import HeroBackground3D from './HeroBackground3D';

const Hero = () => {
  const roles = [
    { icon: <Code className="w-4 h-4" />, label: "Full-Stack Developer" },
    { icon: <Globe className="w-4 h-4" />, label: "Freelancer" },
    { icon: <Megaphone className="w-4 h-4" />, label: "Digital Marketing Specialist" },
    { icon: <Palette className="w-4 h-4" />, label: "Website Designer" },
    { icon: <Search className="w-4 h-4" />, label: "SEO Expert" },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-12 relative overflow-hidden">
      {/* 3D Wireframe Canvas */}
      <HeroBackground3D />

      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accentCyan/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto z-10"
      >
        <span className="px-4 py-1.5 rounded-full border border-accentCyan/30 text-accentCyan text-xs tracking-widest uppercase bg-accentCyan/5 inline-block mb-6">
          Available For Freelance & Full-Time Projects
        </span>

        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Crafting High-Performance Websites & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentPurple">Scaling Digital Brands</span>
        </h1>

        <p className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto mb-10">
          Blending engineering precision, high-converting design, and data-driven marketing to deliver end-to-end digital success.
        </p>

        {/* Roles Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {roles.map((role, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-cardBg border border-white/5 text-xs text-textLight"
            >
              <span className="text-accentCyan">{role.icon}</span>
              <span>{role.label}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3.5 bg-accentCyan text-black font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
          >
            Explore My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3.5 bg-cardBg border border-white/10 text-white font-semibold rounded-lg hover:border-accentCyan/50 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;