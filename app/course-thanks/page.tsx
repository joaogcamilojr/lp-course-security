"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { courseThanksContent } from "@/src/data/mockData";

export default function CourseThanksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground scroll-smooth terminal-scanner">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-6 relative overflow-hidden cyber-grid flex items-center justify-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20 shadow-[0_0_40px_rgba(156,255,147,0.15)] mb-8 animate-pulse">
              <span
                className="material-symbols-outlined text-primary text-6xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
            </div>
            <h1
              className="font-sans text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4 whitespace-nowrap text-glitch"
              data-text="Acesso Garantido!"
            >
              Acesso Garantido! <br />
              <span className="text-primary terminal-glow">
                {courseThanksContent.header}
              </span>
            </h1>
            <p className="font-mono text-sm text-muted-foreground max-w-xl mx-auto uppercase tracking-wider">
              {courseThanksContent.subheader}
            </p>
          </motion.div>

          {/* Action Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px w-full mb-16 bg-border/20">
            {courseThanksContent.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="bg-card p-8 flex flex-col items-start text-left group hover:bg-muted/10 transition-colors relative cyber-glow-hover"
              >
                <div className="font-mono text-primary text-4xl font-bold mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                  {step.id}
                </div>
                <span className="material-symbols-outlined text-secondary mb-4 text-3xl group-hover:scale-110 transition-transform">
                  {step.icon}
                </span>
                <h3 className="font-sans text-xl font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="w-full aspect-video bg-black border border-border/20 relative mb-16 overflow-hidden group cursor-pointer shadow-2xl"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPJxUi4G1j1EkPYH6benKxlrEI0lSv2vBaXwjXg1A1IChQ_oCApXImTjm2MTq7jieD5eVbJ53UmrX3jotjkA4ji2aQvD8PdRqy3zaBkJJ7nAMFWtafspArltEMjZgUNfIpPk9kkprOuUPPAePQsjU0r3AE0dqb4d5nmp55BpKAajIFINZVK-DPXq6Oa-eFNtOagOhYNWDdoQiqWNMFwjwaLStxbxPTV3hlP48DPzxgGR0RYLhnzW7KhqnI7FS6FqkW-7AQdqRMvIo"
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
              alt="Welcome Overview"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(156,255,147,0.5)] group-hover:scale-110 transition-transform">
                <span
                  className="material-symbols-outlined text-primary-foreground text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/50 p-2 backdrop-blur-sm border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-destructive animate-ping shadow-[0_0_10px_red]"></div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                Operação: Briefing_Inicial.mp4
              </span>
            </div>
          </motion.div>

          {/* Final Members Area CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground animate-pulse">
              Provisionamento Completo. Aguardando Operador.
            </p>
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "default" }),
                "px-10 py-8 bg-card border-b-4 border-primary text-primary font-sans font-bold uppercase tracking-widest hover:bg-primary/10 transition-all group rounded-none h-auto shadow-[0_0_20px_rgba(156,255,147,0.15)] cursor-pointer",
              )}
            >
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform mr-2">
                login
              </span>
              {courseThanksContent.cta}
            </Link>
            <p className="text-muted-foreground text-[10px] font-mono uppercase tracking-tighter italic">
              Seu acesso expira em caso de inatividade prolongada na sessão.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
