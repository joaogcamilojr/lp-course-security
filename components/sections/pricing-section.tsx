"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/src/constants";
import { pricingContent } from "@/src/data/mockData";

export const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-24 bg-surface-container relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card border-x-px md:border border-border/10 p-8 md:p-16 relative overflow-hidden group cursor-default"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 -mr-12 -mt-12 group-hover:bg-primary/20 transition-colors transform rotate-45"></div>

          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-6 py-2 font-mono text-xs uppercase tracking-[0.3em] font-black border border-primary/20 mb-8 animate-pulse">
              {pricingContent.badge}
            </span>
            <h2 className="font-sans text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 terminal-glow">
              {pricingContent.title}
            </h2>
            <div className="flex flex-col items-center gap-2">
              <span className="text-muted-foreground line-through opacity-50 font-mono text-lg">
                {pricingContent.oldPrice}
              </span>
              <span className="text-primary font-sans text-5xl md:text-7xl font-black tracking-tighter">
                {pricingContent.installments}
              </span>
              <span className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
                {pricingContent.cashPrice}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 px-4">
            <div className="space-y-4 border-l-2 border-primary/10 pl-8 transition-colors hover:border-primary/40">
              {pricingContent.benefitsLeft.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-primary text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-sm font-sans font-bold uppercase tracking-tight">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-4 border-l-2 border-secondary/10 pl-8 transition-colors hover:border-secondary/40">
              {pricingContent.benefitsRight.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-secondary text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    redeem
                  </span>
                  <span className="text-sm font-bold text-secondary uppercase tracking-tight">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full max-w-md"
            >
              <Link
                href={ROUTES.checkout}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full bg-gradient-to-r from-primary to-primary/60 text-primary-foreground text-center py-8 text-xl font-black uppercase btn-primary-glow hover:scale-[1.02] transition-all duration-300 rounded-none h-auto cursor-pointer",
                )}
              >
                {pricingContent.cta}
              </Link>
            </motion.div>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-muted-foreground text-sm">
                  lock
                </span>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest italic leading-none">
                  {pricingContent.guarantee}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-destructive/10 border border-destructive/30 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-destructive shadow-[0_0_10px_#ff7073]"></span>
              <span className="font-mono text-[10px] text-destructive font-black uppercase tracking-wider">
                {pricingContent.urgency}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative scanners */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
      </div>
    </section>
  );
};
