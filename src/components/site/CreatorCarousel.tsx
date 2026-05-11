import { useEffect, useRef, useState } from "react";

interface CreatorCard {
  type: "creator";
  name: string;
  handle: string;
  followers: string;
  image: string;
  transform: string;
}

interface StatCard {
  type: "stat";
  value: string;
  label: string;
  bgColor: string;
  textColor: string;
  transform: string;
}

type Card = CreatorCard | StatCard;

const CARDS: Card[] = [
  {
    type: "creator",
    name: "Kelly Lauren",
    handle: "@kellylauren",
    followers: "445K",
    image: "/creators/kellylauren.jpg",
    transform: "rotate(-1.27deg)"
  },
  {
    type: "stat",
    value: "1B+",
    label: "Combined reach in network",
    bgColor: "rgba(242, 255, 62, 0.8)",
    textColor: "rgb(0, 0, 0)",
    transform: "translateY(2px) rotate(3.24deg)"
  },
  {
    type: "creator",
    name: "Taylor Caniff",
    handle: "@taylorcaniff",
    followers: "2.8M",
    image: "/creators/taylorcaniff.jpg",
    transform: "translateY(-11px) rotate(-5.19deg)"
  },
  {
    type: "stat",
    value: "1,000+",
    label: "Brands scaled",
    bgColor: "rgba(246, 163, 255, 0.8)",
    textColor: "rgb(27, 27, 27)",
    transform: "translateY(-9px) rotate(0.5deg)"
  },
  {
    type: "creator",
    name: "Matthew Espinosa",
    handle: "@matthewespinosa",
    followers: "5.1M",
    image: "/creators/matthewespinosa.jpg",
    transform: "translateY(3px) rotate(4.63deg)"
  },
  {
    type: "stat",
    value: "10,000+",
    label: "Creators",
    bgColor: "rgba(255, 56, 86, 0.8)",
    textColor: "rgb(255, 255, 255)",
    transform: "translateY(5px) rotate(9.8deg)"
  },
  {
    type: "creator",
    name: "Alissa Violet",
    handle: "@alissaviolet",
    followers: "12M",
    image: "/creators/alissaviolet.jpg",
    transform: "translateY(-8px) rotate(-3.2deg)"
  },
  {
    type: "creator",
    name: "Lele Pons",
    handle: "@lelepons",
    followers: "53.5M",
    image: "/creators/lelepons.jpg",
    transform: "translateY(4px) rotate(2.1deg)"
  },
];

// Base dimensions
const BASE_WIDTH = 214;
const BASE_HEIGHT = 292;
const BASE_MARGIN = -40;

export const CreatorCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scale, setScale] = useState(1.4);

  // Update scale based on screen width
  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 480) {
        setScale(0.7);
      } else if (window.innerWidth < 640) {
        setScale(0.85);
      } else if (window.innerWidth < 768) {
        setScale(1.0);
      } else {
        setScale(1.4);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const CARD_WIDTH = Math.round(BASE_WIDTH * scale);
  const CARD_HEIGHT = Math.round(BASE_HEIGHT * scale);
  const CARD_MARGIN = Math.round(BASE_MARGIN * scale);

  const cards = [...CARDS, ...CARDS];
  const effectiveCardWidth = CARD_WIDTH + CARD_MARGIN;
  const totalWidth = CARDS.length * effectiveCardWidth;

  useEffect(() => {
    if (isDragging) return;

    let animationId: number;
    let currentX = translateX;
    const speed = 0.15;

    const animate = () => {
      currentX -= speed;
      if (Math.abs(currentX) >= totalWidth) {
        currentX = 0;
      }
      setTranslateX(currentX);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging, totalWidth]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(translateX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX;
    const walk = x - startX;
    setTranslateX(scrollLeft + walk);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(translateX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = x - startX;
    setTranslateX(scrollLeft + walk);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="w-full overflow-hidden py-4 sm:py-8 relative"
      style={{ height: `${CARD_HEIGHT + 80}px` }}
    >
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          display: "flex",
          width: "max-content",
          height: "100%",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          transform: `translateX(${translateX}px)`,
        }}
      >
        {cards.map((card, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                flexShrink: 0,
                position: "relative",
                marginRight: `${CARD_MARGIN}px`,
                transform: card.transform,
                willChange: "transform",
                zIndex: isHovered ? 10 : 1,
                transition: "z-index 0.2s ease, box-shadow 0.3s ease",
              }}
            >
              {card.type === "creator" ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: `${CARD_WIDTH}px`,
                      height: `${CARD_HEIGHT}px`,
                      borderRadius: `${Math.round(24 * scale)}px`,
                      overflow: "hidden",
                      position: "relative",
                      boxShadow: isHovered
                        ? "0 20px 40px rgba(0, 0, 0, 0.4)"
                        : "0 10px 30px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      transform: isHovered ? "scale(1.03)" : "scale(1)",
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.name}
                      draggable={false}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        pointerEvents: "none",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        top: `${Math.round(12 * scale)}px`,
                        left: `${Math.round(12 * scale)}px`,
                        padding: `${Math.round(6 * scale)}px ${Math.round(12 * scale)}px`,
                        borderRadius: "20px",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(10px)",
                        color: "white",
                        fontSize: `${Math.round(14 * scale)}px`,
                        fontWeight: 600,
                        fontFamily: "Satoshi, sans-serif",
                      }}
                    >
                      {card.followers} followers
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: `${Math.round(100 * scale)}px`,
                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        bottom: `${Math.round(16 * scale)}px`,
                        left: `${Math.round(16 * scale)}px`,
                        color: "white",
                        fontFamily: "Satoshi, sans-serif",
                      }}
                    >
                      <div style={{ fontSize: `${Math.round(18 * scale)}px`, fontWeight: 700 }}>{card.name}</div>
                      <div style={{ fontSize: `${Math.round(14 * scale)}px`, opacity: 0.8 }}>{card.handle}</div>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: `${Math.round(12 * scale)}px`,
                      textAlign: "center",
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translateY(0)" : "translateY(-10px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      color: "white",
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 600,
                      fontSize: `${Math.round(16 * scale)}px`,
                    }}
                  >
                    {card.name}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    width: `${CARD_WIDTH}px`,
                    height: `${CARD_HEIGHT}px`,
                    borderRadius: `${Math.round(24 * scale)}px`,
                    overflow: "hidden",
                    backdropFilter: "blur(15px)",
                    backgroundColor: card.bgColor,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: `${Math.round(24 * scale)}px ${Math.round(16 * scale)}px`,
                    boxSizing: "border-box",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    transform: isHovered ? "scale(1.03)" : "scale(1)",
                    boxShadow: isHovered
                      ? "0 20px 40px rgba(0, 0, 0, 0.3)"
                      : "0 10px 30px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Rubik, sans-serif",
                      fontWeight: 500,
                      fontSize: `${Math.round(48 * scale)}px`,
                      lineHeight: 1,
                      color: card.textColor,
                    }}
                  >
                    {card.value}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: `${Math.round(8 * scale)}px`,
                    }}
                  >
                    <div
                      style={{
                        width: `${Math.round(97 * scale)}px`,
                        height: "1px",
                        backgroundColor: card.textColor,
                        opacity: 0.5,
                      }}
                    />
                    <div
                      style={{
                        fontFamily: "Rubik, sans-serif",
                        fontWeight: 400,
                        fontSize: `${Math.round(20 * scale)}px`,
                        lineHeight: 1.3,
                        color: card.textColor,
                        letterSpacing: "-0.4px",
                      }}
                    >
                      {card.label}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
