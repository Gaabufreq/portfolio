import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    'MERN Stack Architecture & REST APIs',
    'High-Performance React & Tailwind UI',
    'GSAP ScrollTrigger & Lenis Animations',
    'Technical SEO & Core Web Vitals Optimization',
    'Digital Marketing & Client Lead Acquisition',
    'Payment Integration (Razorpay) & Cloud Storage',
  ];

  return (
    <section id="about" className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Visual Badge Box */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-cardBg p-8">
            <div className="space-y-6">
              <span className="text-xs font-mono text-accentCyan px-3 py-1 rounded-full bg-accentCyan/10 border border-accentCyan/20">
                Full-Stack & Digital Growth Specialist
              </span>
              <h3 className="text-3xl font-extrabold text-white">Neelambuj Tiwari</h3>
              <p className="text-textMuted text-sm leading-relaxed">
                Freelance MERN Stack Developer, UI/UX Web Designer, and SEO Specialist building production-grade web applications and high-converting marketing funnels.
              </p>

              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-textMuted block">Location</span>
                  <span className="text-white font-semibold">Delhi / NCR, India</span>
                </div>
                <div>
                  <span className="text-textMuted block">Education</span>
                  <span className="text-white font-semibold">BCA Student</span>
                </div>
                <div>
                  <span className="text-textMuted block">Backend Stack</span>
                  <span className="text-white font-semibold">Node, Express, MongoDB, Zod</span>
                </div>
                <div>
                  <span className="text-textMuted block">Frontend Motion</span>
                  <span className="text-white font-semibold">React, GSAP, Tailwind</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accentPurple/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        {/* Right Side - Detailed Bio */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accentCyan text-xs uppercase tracking-widest font-semibold">About Me</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
            Bridging Scalable Code & Search Engine Rankings
          </h2>
          
          <p className="text-textMuted leading-relaxed mb-6">
            I specialize in engineering full-stack MERN web applications with solid backend architecture (Zod validation, Winston logging, Redis caching) and combining them with immersive frontend motion graphics.
          </p>

          <p className="text-textMuted leading-relaxed mb-8">
            Beyond writing code, I optimize web platforms for technical SEO, fast load times, and conversion rate efficiency—helping startups and businesses convert visitors into paying clients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-textLight">
                <CheckCircle2 className="w-4 h-4 text-accentCyan shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-cardBg border border-accentCyan/40 text-accentCyan rounded-lg hover:bg-accentCyan hover:text-black transition-all font-semibold text-sm"
          >
            Let's Build Together
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;