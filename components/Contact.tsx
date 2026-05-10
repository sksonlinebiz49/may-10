"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-navy-light/30"
    >
      <div className="absolute -left-[400px] top-[20%] w-[800px] h-[800px] bg-royal/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Start Your <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
            Get in touch with our experts for personalized counselling and
            trusted visa guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl flex items-start gap-6 group hover:bg-white/10 transition-colors"
            >
              <div className="p-4 rounded-full bg-gold/10 border border-gold/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">Call Us</h3>
                <div className="flex flex-wrap gap-4 text-white/70 font-light">
                  <a
                    href="tel:+917677787916"
                    className="hover:text-gold transition-colors"
                  >
                    +91 76-77-78-79-16
                  </a>
                  <a
                    href="tel:+917677787936"
                    className="hover:text-gold transition-colors"
                  >
                    +91 76-77-78-79-36
                  </a>
                  <a
                    href="tel:+91999994444"
                    className="hover:text-gold transition-colors"
                  >
                    +91 99999-4444
                  </a>
                  <a
                    href="tel:+919999943555"
                    className="hover:text-gold transition-colors"
                  >
                    +91 99999-43555
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-2xl flex items-start gap-6 group hover:bg-white/10 transition-colors"
            >
              <div className="p-4 rounded-full bg-gold/10 border border-gold/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">
                  Email Us
                </h3>
                <div className="flex flex-col gap-2 text-white/70 font-light">
                  <a
                    href="mailto:contact@wingsir-abroad.com"
                    className="hover:text-gold transition-colors"
                  >
                    contact@wingsir-abroad.com
                  </a>
                  <a
                    href="mailto:info@wingsir-abroad.com"
                    className="hover:text-gold transition-colors"
                  >
                    info@wingsir-abroad.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-2xl flex items-start gap-6 group hover:bg-white/10 transition-colors"
            >
              <div className="p-4 rounded-full bg-gold/10 border border-gold/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div className="w-full">
                <h3 className="font-display text-xl font-bold mb-4">
                  Our Locations
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-gold font-semibold text-sm block mb-1">
                      HEAD OFFICE
                    </span>
                    <span className="text-white/80 font-light text-sm">
                      Delhi, India
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-gold font-semibold text-sm block mb-1">
                      BRANCH
                    </span>
                    <span className="text-white/80 font-light text-sm">
                      Faridabad, India
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-gold font-semibold text-sm block mb-1">
                      BRANCH
                    </span>
                    <span className="text-white/80 font-light text-sm">
                      Agra, India
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-gold font-semibold text-sm block mb-1">
                      BRANCH
                    </span>
                    <span className="text-white/80 font-light text-sm">
                      Canada
                    </span>
                  </div>
                </div>

                {/* Google Maps iFrame */}
                <div className="w-full h-[250px] rounded-xl overflow-hidden glass-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83981882654!2d77.0688975306352!3d28.527582006325565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700592888204!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: "grayscale(100%) opacity(80%)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card laminated p-8 lg:p-12 rounded-3xl relative"
          >
            <h3 className="font-display text-2xl font-bold mb-6">
              Live Enquiry Form
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-white/50 tracking-wider mb-2 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/50 tracking-wider mb-2 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-white/50 tracking-wider mb-2 uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/50 tracking-wider mb-2 uppercase">
                    Preferred Country
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option className="bg-navy">Canada</option>
                    <option className="bg-navy">USA</option>
                    <option className="bg-navy">UK</option>
                    <option className="bg-navy">Australia</option>
                    <option className="bg-navy">Europe</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/50 tracking-wider mb-2 uppercase">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Tell us about your educational plans..."
                ></textarea>
              </div>

              <button className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <Send className="w-5 h-5" />
                Submit Enquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/917677787916"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-green-500 text-white rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+917677787916"
          className="p-4 bg-gold text-navy rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:scale-110 transition-transform"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
