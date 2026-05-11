import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const TIERS = [
  {
    name: "Quartz",
    price: "$500",
    tag: "Get started",
    features: [
      "20,000 followers per month",
      "20k–50k likes per post",
      "50–100 verified comments per post",
      "150k–250k views per reel",
      "1 influencer mention per day",
      "500 shares per post",
      "Shield protection",
    ],
  },
  {
    name: "Onyx",
    price: "$950",
    tag: "Most popular",
    featured: true,
    features: [
      "40,000 followers per month",
      "40k–70k likes per post",
      "100–150 verified comments per post",
      "300k–450k views per reel",
      "2 influencer mentions per day",
      "1,000 shares per post",
      "Shadowban removal",
      "Shield protection",
    ],
  },
  {
    name: "Gold",
    price: "$1,500",
    tag: "Maximum impact",
    features: [
      "100,000 followers per month",
      "90k–120k likes per post",
      "200–350 verified comments per post",
      "700k–800k views per reel",
      "3 influencer mentions per day",
      "3,000 shares per post",
      "Shadowban removal + Shield",
      "1 positive web article",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-primary mb-4">GROWTH TIERS</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Fueling <span className="text-gradient-primary">authentic growth.</span>
          </h2>
          <p className="text-muted-foreground">
            Every plan includes a customized boosting campaign with robust reporting and real insights you can rely on.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-8 transition-smooth hover:-translate-y-1 ${
                t.featured
                  ? "border-primary/60 bg-gradient-card shadow-elegant scale-[1.02]"
                  : "border-border bg-card/50 hover:border-primary/30"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-4 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
                  {t.tag}
                </div>
              )}
              <h3 className="text-2xl font-bold">{t.name} Tier</h3>
              {!t.featured && <p className="text-sm text-muted-foreground mt-1">{t.tag}</p>}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold">{t.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Button
                variant={t.featured ? "hero" : "outline"}
                className="w-full mt-6"
                size="lg"
              >
                Choose {t.name}
              </Button>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};