const STEPS = [
  { n: "01", t: "Join & Create", d: "Sign up in seconds, set up your profile, and start posting content to active trends immediately." },
  { n: "02", t: "Go Viral", d: "Participate in trending challenges, climb leaderboards, and get discovered by millions of users and brands." },
  { n: "03", t: "Monetize", d: "Earn from trend payouts, premium subscriptions, paid messaging, and brand sponsorships all in one place." },
  { n: "04", t: "Grow & Scale", d: "Use AI-powered tools to automate content, manage your audience, and scale your creator business." },
];

export const Process = () => {
  return (
    <section id="process" className="py-16 sm:py-24 md:py-32 bg-card/30 border-y border-border/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-primary mb-4">HOW IT WORKS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Start earning <span className="text-gradient-primary">today.</span>
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
