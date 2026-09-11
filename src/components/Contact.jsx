import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      // Formspree Form ID yahan replace karein (e.g. https://formspree.io/f/xknlqwbz)
      const response = await fetch('https://formspree.io/f/mljevapo', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <span className="text-accentCyan text-xs uppercase tracking-widest font-semibold">Get In Touch</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Let's Work Together</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Info Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Have a project in mind?</h3>
            <p className="text-textMuted leading-relaxed mb-8">
              Feel free to reach out for MERN stack web applications, interactive website designing, SEO audits, or digital marketing campaigns.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cardBg rounded-xl border border-white/5 text-accentCyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-textMuted block">Email Me</span>
                  <a href="mailto:neelambujtiwari.dev@gmail.com" className="text-white hover:text-accentCyan transition-colors font-medium">
                    neelambujtiwari13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-cardBg rounded-xl border border-white/5 text-accentPurple">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-textMuted block">Location</span>
                  <span className="text-white font-medium">Delhi / NCR, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-textMuted text-xs">
            © {new Date().getFullYear()} Neelambuj Tiwari. All rights reserved.
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-cardBg border border-white/5 p-8 rounded-2xl relative"
        >
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-accentGreen" />
              <h4 className="text-2xl font-bold text-white">Message Sent Successfully!</h4>
              <p className="text-textMuted text-sm max-w-sm">
                Thank you for reaching out. I will get back to you shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="mt-4 text-xs text-accentCyan underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-textMuted uppercase tracking-wider mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Your Name" 
                  className="w-full bg-darkBg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accentCyan transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-textMuted uppercase tracking-wider mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="your@email.com" 
                  className="w-full bg-darkBg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accentCyan transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-textMuted uppercase tracking-wider mb-2">Service Needed</label>
                <select 
                  name="service"
                  className="w-full bg-darkBg border border-white/10 rounded-lg px-4 py-3 text-textMuted focus:outline-none focus:border-accentCyan transition-colors text-sm"
                >
                  <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                  <option value="Website Design & UI/UX">Website Design & UI/UX</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Digital Marketing / Leads">Digital Marketing / Leads</option>
                  <option value="Complete Growth Package">Complete Growth Package</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-textMuted uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4" 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-darkBg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accentCyan transition-colors text-sm resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3.5 bg-accentCyan text-black font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;