const STATS = [
  { v: "1M+", l: "Active Creators", s: "Posting, streaming & earning daily." },
  { v: "10K+", l: "Active Trends", s: "New challenges launching every hour." },
  { v: "500+", l: "Brand Partners", s: "Launching viral UGC campaigns." },
  { v: "$50M+", l: "Creator Payouts", s: "Paid out to creators since launch." },
];

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-primary mb-4">ABOUT TRENDS</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Where viral moments become <span className="text-gradient-primary">real income.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
              Trends is a social discovery platform built around viral culture, creator monetization,
              and live trend participation. Users can post public content, join trending challenges,
              upload exclusive content for subscribers, livestream, and connect directly with their audience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The platform transforms trends into interactive communities where creators can grow,
              compete, and earn from their viral moments. Combined with AI-powered creator tools
              and automated monetization features, Trends creates a new type of creator economy.
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
