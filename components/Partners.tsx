"use client";

export default function Partners() {
  const partners = [
    "ApplyBoard",
    "KC Overseas Education",
    "Adventus.io",
    "StudyReach.com",
    "Global University Systems",
    "Navitas",
    "Study Group",
    "INTO University Partnerships",
  ];

  return (
    <section className="py-20 bg-navy-light/50 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-white/50 text-sm font-semibold tracking-widest uppercase uppercase">
          Recognized & Trusted By Global Partners
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Left/Right fading edge masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 md:gap-16">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="glass-card px-8 py-4 rounded-xl flex items-center justify-center min-w-[200px] hover:border-gold/50 hover:bg-white/10 transition-colors mx-4"
            >
              <span className="font-display font-medium text-lg md:text-xl text-white/80 tracking-wide">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
