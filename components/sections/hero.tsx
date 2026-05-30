"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ANCHORS } from "@/src/constants";
import { heroContent } from "@/src/data/mockData";
import { buttonVariants } from "../ui/button-variants";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden cyber-grid terminal-scanner">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block font-mono text-primary text-[10px] tracking-[0.3em] mb-4 py-1.5 px-3 bg-primary/10 border-l-2 border-primary"
            >
              {heroContent.status}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tighter uppercase whitespace-pre-line text-glitch"
              data-text={heroContent.headline}
            >
              {heroContent.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-muted-foreground text-lg lg:text-xl mb-10 max-w-xl leading-relaxed"
            >
              {heroContent.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
            >
              <Link
                href={ANCHORS.pricing}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-8 py-6 text-lg font-bold uppercase text-center btn-primary-glow transition-transform hover:-translate-y-1 rounded-none h-auto w-full sm:w-auto cursor-pointer",
                )}
              >
                {heroContent.ctaText}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap items-center gap-8 opacity-60"
            >
              {heroContent.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {feature.icon}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider">
                    {feature.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative group perspective-1000 hidden lg:block"
          >
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
            <div className="relative aspect-video bg-card border-2 border-border group-hover:border-primary/50 transition-all duration-700 overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz3mqVbsELqfzEnsdCPtGc1i4YJQlw9IdABZwI4PVDESb3xEZ4PUgEqEysIEB84zMHTDCgYKrUnTKeZpXISLtLi13BT2Hz-XmuV0VTxzGm0WjW-vgkrz8fn1JQlqKPkvrbckP6zy2pP9NQgGMPG4_9BvQeX4V35RehxkmmNHMJAzyE5M_m36daQaN6qnjjiZuaohy61soNr1rvyGnj_DriXZc2NZzgr2iifVCsqczG0vVQkAgNDZo6pcCtoWh-1IAA73OIRi7NogU"
                alt="Terminal Security"
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              <button className="w-20 h-20 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center relative z-10 transition-transform hover:scale-110 btn-primary-glow cursor-pointer">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </button>
              <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary/70 uppercase flex items-center gap-2 bg-black/60 px-2 py-1 backdrop-blur-md border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                live_feed_connected
              </div>
            </div>

            {/* Decorative Terminal Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/40 transition-colors pointer-events-none"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-primary/20 group-hover:border-primary/40 transition-colors pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
