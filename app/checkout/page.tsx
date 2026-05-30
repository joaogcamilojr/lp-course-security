"use client";

import { motion } from "framer-motion";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { PRICING, ROUTES } from "@/src/constants";
import { checkoutContent } from "@/src/data/mockData";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground scroll-smooth terminal-scanner">
      <Navbar />

      <main className="pt-32 pb-20 px-6 relative overflow-hidden cyber-grid">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12 relative z-10">
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-12"
          >
            <div className="mb-12 border-l-4 border-primary pl-8">
              <h1
                className="font-sans text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-glitch"
                data-text={checkoutContent.header}
              >
                {checkoutContent.header}
              </h1>
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest animate-pulse">
                // SECURE_TERMINAL_SESSION_ACTIVE // AES-256_ENCRYPTION_ENABLED
              </p>
            </div>

            <form action={ROUTES.courseThanks} className="grid gap-12">
              {/* Personal Data */}
              <section className="bg-card border border-border/10 p-8 relative overflow-hidden group hover:border-primary/20 transition-colors">
                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/20">
                  SECTION_01
                </div>
                <h2 className="font-sans text-xl font-bold uppercase mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary"></span>
                  {checkoutContent.form.personal}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-muted-foreground ml-1">
                      full_name
                    </label>
                    <Input
                      required
                      placeholder="NOME COMPLETO"
                      className="bg-background border-border/20 rounded-none h-12 focus:border-primary transition-all font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-muted-foreground ml-1">
                      email_address
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-background border-border/20 rounded-none h-12 focus:border-primary transition-all font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-muted-foreground ml-1">
                      phone_number
                    </label>
                    <Input
                      required
                      placeholder="(00) 00000-0000"
                      className="bg-background border-border/20 rounded-none h-12 focus:border-primary transition-all font-mono"
                    />
                  </div>
                </div>
              </section>

              {/* Payment Data */}
              <section className="bg-card border border-border/10 p-8 relative overflow-hidden group hover:border-secondary/20 transition-colors">
                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-secondary/20">
                  SECTION_02
                </div>
                <h2 className="font-sans text-xl font-bold uppercase mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-secondary"></span>
                  {checkoutContent.form.payment}
                </h2>
                <div className="grid gap-6">
                  <div className="p-6 bg-muted/20 border border-secondary/20 flex items-center justify-between group-hover:bg-secondary/5 transition-all">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-secondary">
                        credit_card
                      </span>
                      <span className="font-mono text-sm uppercase tracking-wider font-bold">
                        Cartão de Crédito
                      </span>
                    </div>
                    <div className="flex gap-2 opacity-50">
                      <div className="w-8 h-5 bg-border rounded-sm"></div>
                      <div className="w-8 h-5 bg-border rounded-sm"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase text-muted-foreground ml-1">
                      card_number
                    </label>
                    <Input
                      required
                      placeholder="0000 0000 0000 0000"
                      className="bg-background border-border/20 rounded-none h-12 focus:border-secondary transition-all font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase text-muted-foreground ml-1">
                        expiry_date
                      </label>
                      <Input
                        required
                        placeholder="MM/AA"
                        className="bg-background border-border/20 rounded-none h-12 focus:border-secondary transition-all font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase text-muted-foreground ml-1">
                        cvv_code
                      </label>
                      <Input
                        required
                        placeholder="123"
                        className="bg-background border-border/20 rounded-none h-12 focus:border-secondary transition-all font-mono"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <Button
                type="submit"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full bg-primary text-primary-foreground py-8 text-lg font-black uppercase rounded-none h-auto btn-primary-glow transition-all hover:scale-[1.02] cursor-pointer",
                )}
              >
                {checkoutContent.form.cta}
              </Button>
            </form>
          </motion.div>

          {/* Right Column: Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-surface-container-high border border-border/10 p-8 sticky top-32 shadow-2xl">
              <h2 className="font-sans text-xl font-bold uppercase mb-8 tracking-tight border-b border-border/10 pb-4">
                {checkoutContent.orderSummary.title}
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="font-sans font-bold text-sm uppercase">
                      {checkoutContent.orderSummary.item}
                    </p>
                    <p className="font-mono text-[10px] text-primary uppercase">
                      Módulos de Elite Ativados
                    </p>
                  </div>
                  <span className="font-mono text-sm">
                    {PRICING.cashPrice
                      .replace("ou ", "")
                      .replace(" à vista", "")}
                  </span>
                </div>
                <div className="flex justify-between items-center text-secondary">
                  <p className="font-mono text-[10px] uppercase">
                    {checkoutContent.orderSummary.bonus1}
                  </p>
                  <span className="font-mono text-[10px] uppercase">
                    R$ 0,00
                  </span>
                </div>
                <div className="flex justify-between items-center text-secondary">
                  <p className="font-mono text-[10px] uppercase">
                    {checkoutContent.orderSummary.bonus2}
                  </p>
                  <span className="font-mono text-[10px] uppercase">
                    R$ 0,00
                  </span>
                </div>
              </div>

              <div className="border-t border-border/10 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="font-mono text-xs uppercase text-muted-foreground">
                    Investimento Total
                  </span>
                  <div className="text-right">
                    <p className="font-sans font-black text-3xl text-primary leading-none mb-1">
                      {PRICING.installments}
                    </p>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-tighter">
                      no cartão de crédito
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-4 border-t border-border/10 pt-6">
                <span className="material-symbols-outlined text-muted-foreground text-sm">
                  lock
                </span>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  {checkoutContent.form.security}
                </p>
              </div>
            </div>

            {/* Micro-interaction: Live data feed */}
            <div className="bg-black/40 backdrop-blur-sm border border-primary/20 p-4 font-mono text-[10px] text-primary/60 uppercase space-y-1">
              <div className="flex justify-between">
                <span>TX_LOAD: optimal</span>
                <span className="text-secondary">Uptime: 99.99%</span>
              </div>
              <div className="w-full h-1 bg-primary/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-primary/40 animate-pulse w-[85%]"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
