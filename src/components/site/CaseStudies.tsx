import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import case4 from "@/assets/case-4.jpg";
import case5 from "@/assets/case-5.jpg";
import case6 from "@/assets/case-6.jpg";

type Case = {
  img: string;
  brand: string;
  category: string;
  title: string;
  scope: string[];
  results: { label: string; value: string }[];
  summary: string;
};

const CASES: Case[] = [
  {
    img: case1,
    brand: "Glossé Beauty",
    category: "Beauty · UGC",
    title: "Launch campaign for new serum line",
    summary:
      "Sourced 24 beauty creators across micro and mid-tier to produce conversion-ready UGC for paid social and Amazon listings.",
    scope: [
      "24 creators sourced and vetted",
      "72 UGC video deliverables",
      "Whitelisting rights for 12 months",
      "Performance creative testing",
    ],
    results: [
      { label: "ROAS", value: "4.2x" },
      { label: "CPA reduction", value: "−38%" },
      { label: "Reach", value: "8.4M" },
    ],
  },
  {
    img: case2,
    brand: "Apex Performance",
    category: "Fitness · Influencer",
    title: "Always-on creator engine for protein launch",
    summary:
      "Built a monthly content engine with 12 fitness creators delivering ongoing UGC and Reels for paid and organic channels.",
    scope: [
      "12 fitness creators on retainer",
      "48 deliverables per month",
      "Reels, shorts, and long-form",
      "Monthly content calendar",
    ],
    results: [
      { label: "Followers", value: "+312K" },
      { label: "Engagement", value: "9.1%" },
      { label: "Sales lift", value: "+62%" },
    ],
  },
  {
    img: case3,
    brand: "Northbound",
    category: "Streetwear · Campaign",
    title: "Drop campaign for FW collection",
    summary:
      "Coordinated a 30-creator streetwear drop campaign across NYC, LA, and Tokyo to build hype for a limited release.",
    scope: [
      "30 creators across 3 cities",
      "Coordinated drop-day posting",
      "PR + influencer seeding",
      "Multi-platform content kit",
    ],
    results: [
      { label: "Sell-through", value: "100%" },
      { label: "Impressions", value: "22M" },
      { label: "Press mentions", value: "47" },
    ],
  },
  {
    img: case4,
    brand: "Marrow & Co",
    category: "Food · UGC",
    title: "Restaurant brand UGC content engine",
    summary:
      "Sourced foodie creators to produce in-restaurant content monthly — driving reservations and delivery app conversions.",
    scope: [
      "8 food creators in 4 markets",
      "Monthly in-venue shoots",
      "Delivery app creative",
      "Local PR amplification",
    ],
    results: [
      { label: "Reservations", value: "+48%" },
      { label: "Delivery orders", value: "+71%" },
      { label: "Saves", value: "184K" },
    ],
  },
  {
    img: case5,
    brand: "Volt Audio",
    category: "Tech · Influencer",
    title: "Headphone launch with tech reviewers",
    summary:
      "Curated a launch wave of tech reviewers and lifestyle creators to drive awareness and pre-orders for a flagship product.",
    scope: [
      "18 tech + lifestyle creators",
      "Long-form reviews + shorts",
      "Affiliate tracking integration",
      "Launch-day coordination",
    ],
    results: [
      { label: "Pre-orders", value: "12.4K" },
      { label: "Watch time", value: "1.8M hrs" },
      { label: "CTR", value: "6.3%" },
    ],
  },
  {
    img: case6,
    brand: "Solene Resorts",
    category: "Travel · PR",
    title: "Resort opening campaign",
    summary:
      "Hosted a curated press trip with 15 travel creators and journalists to drive bookings for a new flagship property.",
    scope: [
      "15 creators + 6 press",
      "5-day on-property activation",
      "Hero film + short-form library",
      "PR placements coordinated",
    ],
    results: [
      { label: "Bookings", value: "+217%" },
      { label: "Reach", value: "31M" },
      { label: "Press features", value: "12" },
    ],
  },
];

const Card = ({ c, offset }: { c: Case; offset: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("group", offset)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-elegant transition-smooth hover:border-primary/40">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={c.img}
            alt={`${c.brand} — ${c.title}`}
            loading="lazy"
            width={768}
            height={960}
            className="h-full w-full object-cover transition-smooth group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-background/80 backdrop-blur-md border border-border px-3 py-1 text-xs font-medium text-primary">
              {c.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground mb-1">
            {c.brand.toUpperCase()}
          </p>
          <h3 className="text-xl font-bold mb-2">{c.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {c.summary}
          </p>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-lg border border-border bg-background/50 px-4 py-3 text-sm font-medium transition-smooth hover:border-primary/40"
            aria-expanded={open}
          >
            <span>{open ? "Hide campaign scope" : "View campaign scope"}</span>
            <ChevronDown
              className={cn("h-4 w-4 transition-smooth", open && "rotate-180 text-primary")}
            />
          </button>

          <div
            className={cn(
              "grid transition-all duration-300",
              open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              <div className="rounded-lg bg-background/40 border border-border p-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-primary mb-3">
                  SCOPE
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-5">
                  {c.scope.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary mb-3">
                  RESULTS
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {c.results.map((r) => (
                    <div key={r.label} className="rounded-md bg-card border border-border p-2 text-center">
                      <div className="text-lg font-bold text-gradient-primary">{r.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Staggered vertical offsets per column (3-col grid). Recurs every 3.
const OFFSETS = ["lg:mt-0", "lg:mt-16", "lg:mt-32"];

export const CaseStudies = () => {
  return (
    <section id="work" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-hero opacity-40" />
      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-primary mb-4">
            CASE STUDIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Campaigns we've <span className="text-gradient-primary">delivered.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Real briefs, real creators, real numbers. Tap any campaign to see the
            scope and the results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CASES.map((c, i) => (
            <Card key={c.brand} c={c} offset={OFFSETS[i % 3]} />
          ))}
        </div>
      </div>
    </section>
  );
};