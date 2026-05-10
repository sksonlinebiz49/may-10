"use client";

import { motion } from "motion/react";
import Image from "next/image";

const countries = [
  {
    name: "Canada",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2787&auto=format&fit=crop",
    courses: "Business, IT, Engineering",
    flag: "🇨🇦",
  },
  {
    name: "USA",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2874&auto=format&fit=crop",
    courses: "STEM, Management, Arts",
    flag: "🇺🇸",
  },
  {
    name: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-5969336cd174?q=80&w=2938&auto=format&fit=crop",
    courses: "Law, Finance, Medicine",
    flag: "🇬🇧",
  },
  {
    name: "Australia",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2830&auto=format&fit=crop",
    courses: "Accounting, Nursing, Tech",
    flag: "🇦🇺",
  },
  {
    name: "Germany",
    image:
      "https://images.unsplash.com/photo-1599839619725-b40b080b91e9?q=80&w=2830&auto=format&fit=crop",
    courses: "Engineering, Auto, Science",
    flag: "🇩🇪",
  },
  {
    name: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2946&auto=format&fit=crop",
    courses: "Fashion, Culinery, Business",
    flag: "🇫🇷",
  },
];

export default function Countries() {
  return (
    <section id="countries" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-royal/10 via-transparent to-transparent -z-10 mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Top Study <span className="text-gradient-gold">Destinations</span>
            </h2>
            <p className="text-white/70 text-lg font-light">
              Explore world-class educational opportunities across the globe
              with our dedicated country-specific experts.
            </p>
          </div>
          <button className="border-gradient-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-gold hover:text-navy transition-all shrink-0">
            View All Programs
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <Image
                src={country.image}
                alt={country.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-2xl mb-4 border border-white/20 shadow-lg">
                  {country.flag}
                </div>

                <h3 className="font-display text-3xl font-bold text-white mb-2">
                  {country.name}
                </h3>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 w-full">
                  <p className="text-white/80 font-light text-sm mb-6 pb-4 border-b border-white/20">
                    <span className="text-gold font-medium block mb-1">
                      Top Courses:
                    </span>
                    {country.courses}
                  </p>

                  <button className="w-full bg-gold hover:bg-white text-navy px-6 py-3 rounded-full font-semibold transition-colors">
                    Explore Programs
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
