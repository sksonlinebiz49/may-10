"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  PlaneTakeoff,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden pt-20 pb-10 border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/10 blur-[100px] rounded-[100%] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <PlaneTakeoff className="text-gold w-8 h-8 group-hover:-translate-y-1 transition-transform" />
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                WINGSIR<span className="text-gold">-ABROAD</span>
              </span>
            </Link>
            <p className="text-white/60 font-light text-sm leading-relaxed">
              Premium overseas education and visa support firm helping students
              navigate their global education journey with clarity, integrity,
              and success.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full glass-card hover:bg-gold hover:text-navy hover:-translate-y-1 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 hidden sm:block">
              {[
                "About Us",
                "Our Team",
                "Testimonials",
                "Student Success Stories",
                "Privacy Policy",
                "Terms of Service",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Study Abroad Counselling",
                "Visa Assistance",
                "Canada Immigration",
                "Scholarship Guidance",
                "SOP & Documentation",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6">
              Destinations
            </h4>
            <ul className="space-y-3">
              {[
                "Study in USA",
                "Study in Canada",
                "Study in UK",
                "Study in Australia",
                "Study in Europe",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-light">
            © {new Date().getFullYear()} WINGSIR-ABROAD LLP. All rights
            reserved.
          </p>
          <p className="text-gradient-gold text-sm tracking-widest uppercase font-semibold">
            Designed for Global Dreams
          </p>
        </div>
      </div>
    </footer>
  );
}
