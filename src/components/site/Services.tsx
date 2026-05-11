import { useEffect, useState, useRef } from "react";

const SERVICES = [
  {
    title: "Trend Channels",
    desc: "Join live trend channels where creators participate in challenges, story times, viral formats, and sponsored campaigns. Climb leaderboards, earn payouts, and gain discoverability through our trending system.",
    image: "/services/creator-sourcing.jpg",
  },
  {
    title: "Premium Content",
    desc: "Upload exclusive content for subscribers, offer premium messaging, and monetize your audience directly. Build a sustainable income from your most engaged fans.",
    image: "/services/ugc-content.jpg",
  },
  {
    title: "Brand Campaigns",
    desc: "Brands can sponsor trends and launch scalable UGC campaigns directly through the platform, allowing hundreds of creators to participate organically in viral campaigns.",
    image: "/services/influencer-pr.jpg",
  },
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const startPoint = viewportHeight * 0.3;
      const endPoint = -(sectionHeight - viewportHeight);

      if (sectionTop <= startPoint && sectionTop >= endPoint) {
        const progress = (startPoint - sectionTop) / (startPoint - endPoint);

        if (progress < 0.33) {
          setActiveIndex(0);
        } else if (progress < 0.66) {
          setActiveIndex(1);
        } else {
          setActiveIndex(2);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Header */}
            <div className="text-center lg:text-left">
              <p className="text-sm md:text-base font-semibold tracking-[0.3em] text-primary mb-6">
                PLATFORM FEATURES
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 lg:mb-10 leading-tight">
                Turn trends into{" "}
                <span className="text-gradient-primary">income.</span>
              </h2>

              {/* Service titles - clickable with highlight */}
              <div className="space-y-2 sm:space-y-4 mt-6 lg:mt-10">
                {SERVICES.map((service, index) => (
                  <div
                    key={service.title}
                    onClick={() => setActiveIndex(index)}
                    className="cursor-pointer transition-all duration-300"
                    style={{
                      opacity: index === activeIndex ? 1 : 0.4,
                      transform: index === activeIndex ? "translateX(0)" : "translateX(-10px)",
                    }}
                  >
                    <h3
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold transition-colors duration-300"
                      style={{
                        color: index === activeIndex ? "rgb(151, 74, 252)" : "white",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Active service description */}
              <p
                className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mt-4 lg:mt-8 hidden sm:block"
                key={`desc-${activeIndex}`}
                style={{
                  animation: "fadeIn 0.5s ease-out",
                }}
              >
                {SERVICES[activeIndex].desc}
              </p>

              {/* Progress indicators */}
              <div className="flex gap-3 mt-8 justify-center lg:justify-start">
                {SERVICES.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="h-2 rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      width: index === activeIndex ? "48px" : "16px",
                      backgroundColor: index === activeIndex ? "rgb(151, 74, 252)" : "rgba(255,255,255,0.2)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right side - Tall vertical TikTok-style cards */}
            <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] flex flex-col items-center justify-center order-first lg:order-last">
              <div className="relative w-[200px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-full">
                {SERVICES.map((service, index) => {
                  const isActive = index === activeIndex;
                  const offset = index - activeIndex;

                  return (
                    <div
                      key={service.title}
                      className="absolute inset-0 rounded-3xl overflow-hidden transition-all duration-700 ease-out cursor-pointer"
                      style={{
                        transform: `
                          translateY(${offset * 50}px)
                          translateX(${offset * 20}px)
                          scale(${1 - Math.abs(offset) * 0.08})
                          rotate(${offset * 3}deg)
                        `,
                        zIndex: 10 - Math.abs(offset),
                        opacity: isActive ? 1 : 0.4,
                        filter: isActive ? "none" : "brightness(0.6)",
                        boxShadow: isActive
                          ? "0 40px 80px -20px rgba(0, 0, 0, 0.6)"
                          : "0 20px 50px -20px rgba(0, 0, 0, 0.4)",
                      }}
                      onClick={() => setActiveIndex(index)}
                    >
                      {/* Image */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />

                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 30%, transparent 60%)",
                        }}
                      />

                      {/* Card number badge */}
                      <div
                        className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: "rgba(151, 74, 252, 0.9)" }}
                      >
                        {index + 1}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Service title under the card */}
              <div
                className="mt-16 text-center"
                key={`title-${activeIndex}`}
                style={{ animation: "fadeIn 0.5s ease-out" }}
              >
                <h4 className="text-xl md:text-2xl font-bold text-white">
                  {SERVICES[activeIndex].title}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
