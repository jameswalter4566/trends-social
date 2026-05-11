const STATS = [
  { v: "100+", l: "Global Brands", s: "Startups, local businesses & Fortune 500." },
  { v: "200K+", l: "Deliverables", s: "Shipped since we started." },
  { v: "500+", l: "Creatives & Talent", s: "Production, influencers, models & more." },
  { v: "150K+", l: "Projects & Events", s: "Across the world." },
];

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-primary mb-4">ABOUT AURA</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              The bridge between brands and <span className="text-gradient-primary">creators.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
              Aura Media is a boutique agency built for brands who need authentic,
              high-performing content at scale. We source the right creators,
              produce the right content, and run the campaigns that move metrics.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From UGC and influencer partnerships to strategic PR and full-funnel
              campaigns, we deliver work that's bold, effective, and built to last.
              You bring the brief. We deliver the story.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {STATS.map((s) => (
              <div
                key={s.l}
                className="bg-gradient-card rounded-xl sm:rounded-2xl border border-border p-3 sm:p-6 transition-smooth hover:border-primary/40 hover:-translate-y-1"
              >
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-gradient-primary mb-2">{s.v}</div>
                <div className="font-semibold mb-1 text-xs sm:text-base">{s.l}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};