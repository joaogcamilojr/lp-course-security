"use client";

import { motion } from "framer-motion";

import { instructorContent } from "@/src/data/mockData";

export const InstructorSection = () => {
  return (
    <section
      id="professor"
      className="py-24 bg-surface-container relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary font-black mb-4 block">
              {instructorContent.tag}
            </span>
            <h2 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
              {instructorContent.title}
            </h2>
            <div className="space-y-6 mb-10">
              <div className="border-l-4 border-primary pl-6">
                <p className="font-sans text-2xl font-black uppercase mb-1">
                  {instructorContent.name}
                </p>
                <p className="font-mono text-xs text-secondary uppercase tracking-widest">
                  {instructorContent.role}
                </p>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl italic">
                {instructorContent.bio}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-10">
              {instructorContent.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <p className="font-sans text-4xl font-black text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {instructorContent.credentials.map((cred, idx) => (
                <span
                  key={idx}
                  className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest font-black"
                >
                  {cred}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative group cursor-pointer"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
            <div className="relative aspect-square grayscale group-hover:grayscale-0 transition-all duration-1000 border-2 border-border/50 group-hover:border-primary/50 overflow-hidden">
              <img
                src="https://api.dicebear.com/7.x/avataaars-neutral/svg?seed=Icaro"
                alt={instructorContent.name}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>
            {/* Tactical overlay */}
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-primary/30 p-3 font-mono text-[10px] text-primary uppercase flex flex-col gap-1 tracking-tighter">
              <span>DNA_MATCH: 99.8%</span>
              <span className="text-secondary">LEVEL: ARCHITECT</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
