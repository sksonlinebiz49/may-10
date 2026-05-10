"use client";

import { motion } from "motion/react";
import {
  GraduationCap,
  Building2,
  FileCheck,
  Award,
  PenTool,
  BookOpen,
  MapPin,
  Home,
  PlaneLanding,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad Counselling",
    desc: "Expert guidance to choose the right course and country.",
  },
  {
    icon: Building2,
    title: "University Selection",
    desc: "Partnered with top global universities for best fit.",
  },
  {
    icon: FileCheck,
    title: "Admission Assistance",
    desc: "End-to-end support for application processes.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    desc: "Maximize your chances for financial aid and grants.",
  },
  {
    icon: PenTool,
    title: "SOP & Documentation",
    desc: "Professional editing for Statements of Purpose & CVs.",
  },
  {
    icon: BookOpen,
    title: "Student Visa Assistance",
    desc: "High success rate with meticulous visa processing.",
  },
  {
    icon: MapPin,
    title: "Canada Immigration Support",
    desc: "Legal-strength support backed by Toronto attorneys.",
  },
  {
    icon: Home,
    title: "Accommodation Assistance",
    desc: "Secure safe and comfortable housing abroad.",
  },
  {
    icon: PlaneLanding,
    title: "Airport Pickup Guidance",
    desc: "Seamless transition upon arriving in your destination.",
  },
  {
    icon: TrendingUp,
    title: "Career Pathway Planning",
    desc: "Long-term strategies for global professional growth.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-navy-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Premium <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
            Comprehensive end-to-end support ensuring a seamless journey from
            application to arrival.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl glass-card-hover group relative overflow-hidden flex flex-col items-start"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mb-6 bg-gold/5 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-6 h-6 text-gold" />
              </div>

              <h3 className="font-display font-semibold text-lg mb-3 text-white group-hover:text-gold-light transition-colors">
                {service.title}
              </h3>

              <p className="text-white/60 text-sm font-light leading-relaxed">
                {service.desc}
              </p>

              <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                <span className="text-gold text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                  Learn More <TrendingUp className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
