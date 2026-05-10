"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Plane, CalendarCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const floatCards = [
    { text: "USA Admissions", delay: 0.2, top: "20%", left: "5%" },
    { text: "Canada Study Visa", delay: 0.4, top: "40%", right: "5%" },
    { text: "UK Universities", delay: 0.6, top: "65%", left: "10%" },
    { text: "Australia PR Pathways", delay: 0.8, top: "15%", right: "15%" },
    { text: "Europe Study Programs", delay: 1.0, top: "75%", right: "20%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2940&q=80"
          alt="International students graduating"
          fill
          className="object-cover opacity-30"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1021]/80 via-[#0B1021]/95 to-[#0B1021]"></div>
      </div>

      {/* World Map Glow Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center opacity-20 mix-blend-color-dodge">
        <div className="w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/30 via-transparent to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full glass-card border-gold/30 text-gold text-sm font-semibold tracking-widest uppercase"
        >
          Delhi Headquartered • Global Reach
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white max-w-5xl leading-[1.1]"
        >
          Find Every Solution, From{" "}
          <span className="text-gradient-gold">
            Applications to Accommodations
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl text-white/70 max-w-3xl font-light leading-relaxed"
        >
          WINGSIR-ABROAD LLP is a Delhi-headquartered overseas education and
          visa support firm helping students study in the USA, Canada, UK,
          Australia, and Europe with trusted counselling, visa guidance, and
          global admission support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#contact"
            className="group flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-full font-bold transition-all duration-300"
          >
            Start Your Study Abroad Journey
            <Plane className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="flex items-center gap-2 glass-card hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            <CalendarCheck className="w-5 h-5 text-gold" />
            Book Visa Consultation
          </Link>
        </motion.div>
      </div>

      {/* Floating Glass Cards */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        {floatCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
            transition={{
              opacity: { delay: card.delay, duration: 0.8 },
              scale: { delay: card.delay, duration: 0.8 },
              y: { repeat: Infinity, duration: 4 + i, ease: "easeInOut" },
            }}
            className="absolute glass-card px-6 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-md border-white/20 shadow-2xl"
            style={{ top: card.top, left: card.left, right: card.right }}
          >
            <ShieldCheck className="text-gold w-5 h-5" />
            <span className="font-semibold text-sm tracking-wide text-white/90">
              {card.text}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
