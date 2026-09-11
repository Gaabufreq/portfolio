import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-darkBg/70 border-b border-white/10"
    >
      <div className="text-xl font-bold tracking-wider text-white">
        PORTFOLIO<span className="text-accentCyan">.</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-textMuted">
        <a href="#services" className="hover:text-accentCyan transition-colors">Services</a>
        <a href="#projects" className="hover:text-accentCyan transition-colors">Work</a>
        <a href="#about" className="hover:text-accentCyan transition-colors">About</a>
      </div>

      <a 
        href="#contact" 
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black bg-accentCyan rounded-full hover:bg-opacity-90 transition-all hover:scale-105"
      >
        Let's Talk <ArrowUpRight className="w-4 h-4" />
      </a>
    </motion.nav>
  );
};

export default Navbar;