import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-primary/30 bg-gradient-card p-6 sm:p-12 md:p-20 text-center shadow-elegant">
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="relative">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
              Your viral moment is waiting. <span className="text-gradient-primary">Start earning today.</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base md:text-lg px-2">
              Join thousands of creators monetizing their content through trends, subscriptions, and brand deals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Start Creating <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">Launch a Campaign</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
