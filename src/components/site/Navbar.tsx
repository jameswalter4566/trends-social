import { Button } from "@/components/ui/button";

const links = [
  { label: "Features", href: "#features" },
  { label: "Creators", href: "#creators" },
  { label: "Brands", href: "#brands" },
  { label: "About", href: "#about" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/40">
      <div className="container flex h-16 md:h-24 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <img src="/logo.png" alt="Trends Social" className="h-12 md:h-20 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-smooth">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 font-medium rounded-full px-3 sm:px-6 text-xs sm:text-sm hidden sm:flex">
            Log In
          </Button>
          <Button size="sm" className="bg-white text-black hover:bg-white/90 font-semibold rounded-full px-4 sm:px-6 text-xs sm:text-sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};