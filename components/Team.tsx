"use client";

import { motion } from "motion/react";
import Image from "next/image";

import img1 from "@/src/assets/images/regenerated_image_1778397258515.jpg";
import img2 from "@/src/assets/images/regenerated_image_1778397261096.jpg";
import img3 from "@/src/assets/images/regenerated_image_1778397263269.jpg";
import img4 from "@/src/assets/images/regenerated_image_1778397265568.jpg";
import img5 from "@/src/assets/images/regenerated_image_1778397267342.jpg";
import img6 from "@/src/assets/images/regenerated_image_1778397269896.jpg";
import img7 from "@/src/assets/images/regenerated_image_1778397271946.jpg";

const team = [
  {
    name: "R.K. SHARMA",
    role: "Managing Director",
    desc: "A highly respected academician and administrator with decades of educational experience. He guides all departments with wisdom, professionalism, and dedication toward student success.",
    image: img1,
  },
  {
    name: "B.S. KASTOORIYA",
    role: "Legal Head India",
    desc: "A senior advocate and legal expert guiding students and families with trusted legal assistance related to overseas education and documentation procedures.",
    image: img2,
  },
  {
    name: "S.K. SHARMA",
    role: "Founder",
    desc: "Visionary founder committed to creating accessible international education opportunities for Indian students through ethical counselling and trusted support systems.",
    image: img3,
  },
  {
    name: "MRS. ABHA SHARMA",
    role: "CEO",
    desc: "An inspiring leader managing operations, student success initiatives, and international coordination with professionalism and dedication.",
    image: img4,
  },
  {
    name: "MRS. SUREKHA BANGIA",
    role: "Head Counsellor UK",
    desc: "A UK-certified counselling expert helping students choose the right universities, courses, and career pathways with confidence.",
    image: img5,
  },
  {
    name: "VAISHALI SHARMA",
    role: "Legal Advisor International",
    desc: "Providing international legal and immigration guidance for students pursuing global education opportunities.",
    image: img6,
  },
  {
    name: "SARTHAK SHARMA",
    role: "Head Global Career Pathways",
    desc: "Helping students identify future-ready global career opportunities, international pathways, and long-term professional growth strategies.",
    image: img7,
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-navy">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Leadership & <span className="text-gradient-gold">Expert Team</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
            Meet the experienced professionals and trusted legal advisors
            dedicated to turning your global education dreams into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 gap-y-20">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex flex-col items-center group"
            >
              {/* Circular Avatar with glowing borders */}
              <div className="relative w-40 h-40 mb-[-50px] z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold via-gold-light to-gold p-[3px] shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all duration-500">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-navy bg-navy">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Laminated Profile Card */}
              <div className="glass-card laminated w-full pt-16 pb-8 px-6 rounded-2xl flex flex-col items-center text-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl relative overflow-hidden">
                {/* Subtle Spotlight Effect inside card */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-gold/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <h3 className="font-display text-xl font-bold text-white mb-1 tracking-wide relative z-10">
                  {member.name}
                </h3>
                <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-4 relative z-10">
                  {member.role}
                </p>
                <div className="w-8 h-px bg-white/20 mb-4 relative z-10"></div>
                <p className="text-white/70 text-sm font-light leading-relaxed relative z-10 min-h-[80px]">
                  {member.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
