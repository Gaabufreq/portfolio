import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'E-Cart Platform',
    category: 'Full-Stack MERN / E-Commerce',
    description: 'Scalable e-commerce engine with JWT auth, product catalog, Razorpay checkout gateway, MongoDB Atlas, and live backend on Render.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Razorpay', 'Render'],
    github: 'https://github.com',
    live: 'https://render.com'
  },
  {
    title: 'Digital Inheritance Vault',
    category: 'Full-Stack Web App',
    description: 'Secure digital asset inheritance web application built with automated node-cron verification, Nodemailer alerts, and Cloudinary storage.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Express', 'Node-Cron', 'Cloudinary', 'Tailwind'],
    github: 'https://github.com',
    live: '#'
  },
  {
    title: 'Civic Issue Reporter & CMS',
    category: 'Civic Tech & Admin Suite',
    description: 'Civic problem tracking software with issue categorization, status workflow manager, admin reporting dashboard, and responsive frontend.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    tags: ['MERN Stack', 'REST API', 'GSAP', 'Tailwind CSS'],
    github: 'https://github.com',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-accentCyan text-xs uppercase tracking-widest font-semibold">Portfolio Showcase</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Featured Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-cardBg border border-white/5 rounded-2xl overflow-hidden group hover:border-accentCyan/30 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Box */}
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-darkBg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Source Code"
                  className="p-3 bg-black/80 rounded-full text-white hover:text-accentCyan transition-colors"
                >
                  <Code2 className="w-5 h-5" />
                </a>
                <a 
                  href={project.live} 
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                  className="p-3 bg-black/80 rounded-full text-white hover:text-accentCyan transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs text-accentCyan font-mono">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:text-accentCyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-textMuted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="text-[11px] bg-white/5 text-textMuted px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;