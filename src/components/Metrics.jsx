import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Projects Completed", value: "15+", accent: "text-accentCyan" },
  { label: "Client Satisfaction", value: "100%", accent: "text-accentGreen" },
  { label: "SEO Traffic Growth", value: "3x", accent: "text-accentPurple" },
  { label: "Core Web Vitals Score", value: "95+", accent: "text-accentCyan" },
];

const Metrics = () => {
  return (
    <section className="py-16 px-6 relative max-w-7xl mx-auto">
      <div className="bg-cardBg/80 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <span className={`text-4xl md:text-6xl font-extrabold mb-2 ${stat.accent}`}>
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-textMuted font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;