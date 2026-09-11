import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, TrendingUp, SearchCheck, Rocket, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Full-Stack Web Development',
    description: 'Building scalable, high-performance web applications using MERN stack (MongoDB, Express, React, Node.js) with robust API architecture.',
    icon: <Code2 className="w-8 h-8 text-accentCyan" />,
    tags: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Tailwind']
  },
  {
    id: '02',
    title: 'Modern Web Design & UI/UX',
    description: 'Designing interactive, sleek, and responsive user interfaces with smooth GSAP animations and butter-smooth scrolling experiences.',
    icon: <Layout className="w-8 h-8 text-accentPurple" />,
    tags: ['Figma', 'GSAP', 'Framer Motion', 'Responsive Design']
  },
  {
    id: '03',
    title: 'Digital Marketing & Growth',
    description: 'Data-driven marketing strategies, ad campaign setups, and conversion rate optimization (CRO) to help businesses scale and gain leads.',
    icon: <TrendingUp className="w-8 h-8 text-accentGreen" />,
    tags: ['Lead Gen', 'Performance Marketing', 'Brand Scaling']
  },
  {
    id: '04',
    title: 'SEO & Performance Optimization',
    description: 'Ranking websites on top of search engines through technical SEO, site speed enhancements, on-page optimization, and key metric tracking.',
    icon: <SearchCheck className="w-8 h-8 text-accentCyan" />,
    tags: ['Technical SEO', 'On-Page SEO', 'Core Web Vitals', 'Keywords']
  },
  {
    id: '05',
    title: 'Freelance & Client Solutions',
    description: 'End-to-end web strategy for startups and businesses—from initial wireframing to deployment, domain setup, and ongoing support.',
    icon: <Rocket className="w-8 h-8 text-accentPurple" />,
    tags: ['Strategy', 'Deployment', 'Client Acquisition', 'Support']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <span className="text-accentCyan text-xs uppercase tracking-widest font-semibold">What I Offer</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Specialized Expertise</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-cardBg border border-white/5 rounded-2xl p-8 hover:border-accentCyan/40 transition-all duration-300 relative group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <span className="text-sm font-mono text-textMuted/60">{service.id}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accentCyan transition-colors">
                {service.title}
              </h3>

              <p className="text-textMuted text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {service.tags.map((tag, idx) => (
                <span key={idx} className="text-[11px] bg-white/5 text-textMuted px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;