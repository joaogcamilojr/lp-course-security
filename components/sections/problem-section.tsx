"use client";

import { motion } from "framer-motion";

import { problemsContent } from "@/src/data/mockData";

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-surface-container-low relative border-y border-border/10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-tertiary font-black mb-4 block animate-pulse">
            {problemsContent.tag}
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tight">
            {problemsContent.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/10">
          {problemsContent.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border/10 p-8 hover:border-primary/30 transition-all group cyber-glow-hover cursor-pointer"
            >
              <span className="material-symbols-outlined text-tertiary mb-6 block text-4xl group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <h3 className="font-sans font-bold text-lg uppercase mb-4 tracking-tight group-hover:text-tertiary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
