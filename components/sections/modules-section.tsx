"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { modulesContent } from "@/src/data/mockData";

export const ModulesSection = () => {
  return (
    <section
      id="modulos"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary font-black mb-4 block animate-pulse">
            {modulesContent.tag}
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            {modulesContent.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {modulesContent.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-px bg-border/10">
          {modulesContent.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group relative overflow-hidden flex flex-col justify-between min-h-[320px] transition-all duration-300 bg-background p-8 border border-transparent hover:border-secondary/20 hover:bg-secondary/5 cyber-glow-hover cursor-pointer",
                idx === modulesContent.items.length - 1 ? "lg:col-span-2" : "",
              )}
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-4xl text-foreground/5 font-black group-hover:text-primary/10 transition-colors">
                {item.id}
              </div>
              <div className="relative z-10">
                <span className="font-mono text-secondary text-[10px] uppercase mb-4 block tracking-widest">
                  {item.category}
                </span>
                <h4 className="font-sans font-bold mb-4 uppercase text-2xl group-hover:text-secondary transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
              <div className="h-0.5 w-0 bg-secondary group-hover:w-full transition-all duration-700 ease-in-out"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
