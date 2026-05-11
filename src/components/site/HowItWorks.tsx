const POINTS = [
  { t: "Organic Growth", items: ["Real follower growth", "Boosted likes, comments & views"] },
  { t: "Enhanced Visibility", items: ["Increased profile visits", "Engagement rate, reach & saves"] },
  { t: "Ongoing Optimization", items: ["Regular reporting", "Continuous content tweaks"] },
];
const WHY = [
  { t: "Authentic Engagement", d: "Real audiences, never bots." },
  { t: "Smart Targeting", d: "Data-driven A/B testing to refine what resonates." },
  { t: "Transparent Campaigns", d: "Custom, flexible strategies with measurable results." },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-card/30 border-y border-border/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-primary mb-4">HOW IT WORKS</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Driving growth <span className="text-gradient-primary">that matters.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-gradient-card p-8">
            <h3 className="text-2xl font-bold mb-6">What you get</h3>
            <div className="space-y-6">
              {POINTS.map((p) => (
                <div key={p.t}>
                  <div className="font-semibold text-primary mb-2">{p.t}</div>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    {p.items.map((i) => <li key={i}>• {i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-card p-8">
            <h3 className="text-2xl font-bold mb-6">Why it works</h3>
            <div className="space-y-6">
              {WHY.map((w) => (
                <div key={w.t}>
                  <div className="font-semibold text-primary mb-1">{w.t}</div>
                  <p className="text-muted-foreground text-sm">{w.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground leading-relaxed">
              We're not chasing fake followers. We drive authentic engagement
              through higher interaction rates, improved retention, and boosted
              brand visibility — all backed by real data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};