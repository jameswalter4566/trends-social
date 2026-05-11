export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 sm:py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold">
          <img src="/logo.png" alt="Trends Social" className="h-8 w-auto" />
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Trends Social. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
          <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
          <a href="#" className="hover:text-foreground transition-smooth">Contact</a>
        </div>
      </div>
    </footer>
  );
};