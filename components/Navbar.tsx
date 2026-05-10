"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, PlaneTakeoff } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <PlaneTakeoff className="text-gold w-8 h-8 group-hover:-translate-y-1 transition-transform" />
          <span className="font-display font-bold text-2xl tracking-tight text-white">
            WINGSIR<span className="text-gold">-ABROAD</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Services", "Countries", "Team", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="border-gradient-gold text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-gold hover:text-navy transition-all duration-300"
          >
            Free Counselling
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass-card border-t border-white/10 py-6 px-6 flex flex-col gap-4"
        >
          {["About", "Services", "Countries", "Team", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-white hover:text-gold transition-colors"
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
