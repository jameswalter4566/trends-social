const BRANDS = [
  { name: "Big Brothers Big Sisters", logo: "/brands/bbbs.png" },
  { name: "WCC", logo: "/brands/wcc.png" },
  { name: "Coachella", logo: "/brands/coachella.png" },
  { name: "EDC", logo: "/brands/edc.png" },
  { name: "Weedmaps", logo: "/brands/weedmaps.png" },
  { name: "Billabong", logo: "/brands/billabong.png" },
];

export const TrustedBy = () => {
  // Triple the logos for seamless loop
  const repeatedBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="py-8 sm:py-12 border-y border-border/50 bg-card/30 overflow-hidden">
      <div className="container">
        <p className="text-center text-xs font-semibold tracking-[0.3em] text-muted-foreground mb-10">
          TRUSTED BY LEADING BRANDS
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-10 sm:gap-16 md:gap-20 animate-marquee">
          {repeatedBrands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
              style={{ filter: "brightness(0) invert(1)" }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 sm:h-14 md:h-20 lg:h-24 w-auto max-w-[120px] sm:max-w-[160px] md:max-w-[200px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
