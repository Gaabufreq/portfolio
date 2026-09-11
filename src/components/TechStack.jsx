import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    category: "Full-Stack Development",
    tools: [
      { name: "React.js", level: "Frontend" },
      { name: "Node.js", level: "Runtime" },
      { name: "Express.js", level: "Backend" },
      { name: "MongoDB & Mongoose", level: "Database" },
      { name: "Tailwind CSS", level: "Styling" },
      { name: "JavaScript (ES6+)", level: "Language" },
    ]
  },
  {
    category: "Backend Architecture & DevOps",
    tools: [
      { name: "Zod Schema", level: "Validation" },
      { name: "Winston", level: "Logging" },
      { name: "Redis", level: "Caching" },
      { name: "Render", level: "Hosting" },
      { name: "Razorpay", level: "Payments" },
      { name: "Cloudinary", level: "Media CDN" },
    ]
  },
  {
    category: "Animations & Motion UI",
    tools: [
      { name: "GSAP & ScrollTrigger", level: "Scroll Motion" },
      { name: "Framer Motion", level: "Micro Interactions" },
      { name: "Lenis", level: "Smooth Scroll" },
      { name: "Lucide Icons", level: "Visuals" },
    ]
  },
  {
    category: "SEO & Digital Marketing",
    tools: [
      { name: "Technical SEO", level: "Audit & Speed" },
      { name: "On-Page SEO", level: "Optimization" },
      { name: "Google Analytics", level: "Traffic Metrics" },
      { name: "Google Search Console", level: "Indexing" },
      { name: "Direct Business Outreach", level: "Client Acquisition" },
    ]
  }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <span className="text-accentCyan text-xs uppercase tracking-widest font-semibold">Powers My Solutions</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Tech Stack & Marketing Suite</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-cardBg border border-white/5 rounded-2xl p-6 hover:border-accentCyan/30 transition-all"
          >
            <h3 className="text-lg font-bold text-accentCyan mb-6 border-b border-white/5 pb-3">
              {cat.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cat.tools.map((tool, toolIdx) => (
                <div 
                  key={toolIdx}
                  className="bg-darkBg/60 border border-white/5 rounded-xl p-3 flex flex-col justify-between hover:border-accentCyan/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all group"
                >
                  <span className="text-sm font-semibold text-textLight group-hover:text-accentCyan transition-colors">
                    {tool.name}
                  </span>
                  <span className="text-[10px] text-textMuted mt-1">
                    {tool.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;