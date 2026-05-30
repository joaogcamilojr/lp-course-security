"use client";

import { motion } from "framer-motion";

import { testimonialsContent } from "@/src/data/mockData";

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tight">
            {testimonialsContent.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border/20">
          {testimonialsContent.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-8 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-4px] hover:bg-card-foreground/5 cyber-glow-hover cursor-pointer"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-primary text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-sm italic text-muted-foreground mb-8 leading-relaxed">
                  "{item.content}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-none bg-muted grayscale overflow-hidden group-hover:grayscale-0 transition-all">
                  <img
                    src={`https://api.dicebear.com/7.x/pixel-art-neutral/svg?seed=${item.name}`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-sans font-bold text-sm uppercase tracking-tight">
                    {item.name}
                  </p>
                  <p className="font-mono text-[10px] text-secondary uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
