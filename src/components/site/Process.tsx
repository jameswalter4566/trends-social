const STEPS = [
  { n: "01", t: "Brief & Discovery", d: "We start with a discovery call to understand your brand, audience, KPIs, and the type of content you need to ship." },
  { n: "02", t: "Creator Matching", d: "We curate a shortlist from our network — vetted by niche, audience fit, performance, and brand-safety checks." },
  { n: "03", t: "Production & Review", d: "Creators produce content against your brief. Our team manages revisions, rights, and quality control end-to-end." },
  { n: "04", t: "Delivery & Reporting", d: "Final assets delivered ready for paid, organic, or retail. Full performance reporting on every campaign." },
];

export const Process = () => {
  return (
    <section id="process" className="py-16 sm:py-24 md:py-32 bg-card/30 border-y border-border/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-primary mb-4">OUR PROCESS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            What <span className="text-gradient-primary">we do.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div key={s.n} className="relative p-6 rounded-2xl border border-border bg-background/50 transition-smooth hover:border-primary/40">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-primary mb-4">{s.n}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};