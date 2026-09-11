import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/' },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/neelambuj-tiwari-984828320?utm_source=share_via&utm_content=profile&utm_medium=member_ios' 
    },
    { name: 'Email', href: 'mailto:neelambujtiwari13@gmail.com' },
  ];

  return (
    <footer className="border-t border-white/10 bg-darkBg py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="text-xl font-bold tracking-wider text-white">
            PORTFOLIO<span className="text-accentCyan">.</span>
          </div>
          <p className="text-xs text-textMuted mt-1">
            Full-Stack Developer | Digital Marketing Specialist | SEO Expert
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-textMuted">
          {socialLinks.map((link, idx) => (
            <a 
              key={idx}
              href={link.href}
              target={link.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="hover:text-accentCyan transition-colors flex items-center gap-1"
            >
              <span>{link.name}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ))}
        </div>

        {/* Back to Top */}
        <button 
          onClick={scrollToTop}
          className="p-3 bg-cardBg border border-white/10 rounded-full hover:border-accentCyan text-accentCyan hover:scale-110 transition-all"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;