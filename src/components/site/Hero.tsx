import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CreatorCarousel } from "./CreatorCarousel";

const WORDS = ["Influencers", "Artists", "DJ's", "Streamers", "Clippers"];

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-4 sm:pt-24 md:pt-32 lg:pt-36 md:pb-8">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container relative z-10 text-center px-4">
        {/* Small top text */}
        <p
          style={{
            fontFamily: "'Rifton Norm', sans-serif",
            fontSize: "clamp(14px, 2.5vw, 24px)",
            letterSpacing: "0.05em",
            color: "rgb(255, 255, 255)",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          ACCESS THE BIGGEST NETWORK OF
        </p>

        {/* Large rotating word - centered */}
        <h1
          style={{
            fontFamily: "'Rifton Norm', sans-serif",
            fontSize: "clamp(48px, 12vw, 140px)",
            letterSpacing: "0.02em",
            lineHeight: 1,
            color: "rgb(151, 74, 252)",
            margin: "8px 0",
            textTransform: "uppercase",
          }}
        >
          <span
            key={WORDS[wordIndex]}
            className="animate-word-in inline-block"
          >
            {WORDS[wordIndex]}
          </span>
        </h1>

        {/* Small bottom text */}
        <p
          style={{
            fontFamily: "'Rifton Norm', sans-serif",
            fontSize: "clamp(14px, 2.5vw, 24px)",
            letterSpacing: "0.05em",
            color: "rgb(255, 255, 255)",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          FOR YOUR BRAND
        </p>

        <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <Button size="default" className="bg-white text-black hover:bg-white/90 font-semibold px-4 sm:px-6 rounded-full text-sm sm:text-base">
            Join as a Brand
          </Button>
          <Button size="default" className="bg-white text-black hover:bg-white/90 font-semibold px-4 sm:px-6 rounded-full text-sm sm:text-base">
            Join as a Creator
          </Button>
        </div>
      </div>

      <CreatorCarousel />
    </section>
  );
};
