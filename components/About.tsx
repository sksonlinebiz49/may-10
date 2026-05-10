"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

function Counter({
  end,
  suffix = "",
  text,
}: {
  end: number;
  suffix?: string;
  text: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div
      ref={ref}
      className="text-center p-6 glass-card rounded-2xl laminated flex flex-col justify-center items-center h-full"
    >
      <div className="font-display text-5xl md:text-6xl font-bold text-gradient-gold mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-white/70 font-medium tracking-wide uppercase text-xs md:text-sm">
        {text}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Empowering Global{" "}
              <span className="text-gradient-gold">Education Dreams</span>
            </h2>
            <div className="space-y-6 text-white/80 font-light leading-relaxed text-lg">
              <p>
                WINGSIR-ABROAD LLP has its head office in Delhi with branches in
                Faridabad, Agra, and Canada, providing easy access to expert
                study abroad counselling across NCR and internationally. Our
                counsellors are UK agent and counsellor training certificate
                awardees, ensuring ethical and professional guidance for every
                student.
              </p>
              <p>
                Backed by a Toronto-based attorney firm, we provide
                legal-strength support for Canadian study permits and
                immigration procedures.
              </p>
              <p>
                Through ApplyBoard, KC Overseas Education, Adventus.io, and
                StudyReach.com, students gain access to thousands of
                international programs under one trusted platform.
              </p>
              <p>
                Our team combines Canadian and Indian attorneys, experienced
                educationists, IT professionals, and social workers dedicated to
                student success.
              </p>
            </div>
          </motion.div>

          {/* Counters Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            <Counter end={1000} suffix="+" text="Students Guided" />
            <Counter end={500} suffix="+" text="Visa Successes" />
            <div className="text-center p-6 glass-card rounded-2xl laminated flex flex-col justify-center items-center h-full">
              <div className="font-display text-4xl font-bold text-gradient-gold mb-2">
                Global
              </div>
              <div className="text-white/70 font-medium tracking-wide uppercase text-xs">
                University Network
              </div>
            </div>
            <div className="text-center p-6 glass-card rounded-2xl laminated flex flex-col justify-center items-center h-full">
              <div className="font-display text-4xl font-bold text-gradient-gold mb-2">
                100%
              </div>
              <div className="text-white/70 font-medium tracking-wide uppercase text-xs">
                Trusted Support
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
