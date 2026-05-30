"use client";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BRAND, ROUTES } from "@/src/constants";

export default function WaitlistPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground scroll-smooth terminal-scanner">
      <Navbar />

      <main className="relative min-h-screen pt-20 flex flex-col items-center justify-center overflow-hidden cyber-grid">
        {/* Status Ticker */}
        <div className="absolute top-24 w-full bg-black border-y border-border/20 py-2 overflow-hidden whitespace-nowrap">
          <div className="flex gap-12 items-center animate-marquee">
            <span className="font-mono text-[10px] text-destructive flex items-center gap-2">
              <span
                className="material-symbols-outlined text-[12px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                error
              </span>
              SYSTEM STATUS: CAPACITY REACHED
            </span>
            <span className="font-mono text-[10px] text-secondary flex items-center gap-2">
              <span className="material-symbols-outlined text-[12px]">
                security
              </span>
              PROTOCOL: WAITLIST ACTIVE
            </span>
            <span className="font-mono text-[10px] text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-[12px]">
                code
              </span>
              DEPLOYMENT PAUSED // STACK VALIDATION IN PROGRESS
            </span>
            {/* Repeated for loop */}
            <span className="font-mono text-[10px] text-destructive flex items-center gap-2">
              <span
                className="material-symbols-outlined text-[12px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                error
              </span>
              SYSTEM STATUS: CAPACITY REACHED
            </span>
          </div>
        </div>

        <section className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-destructive/10 border border-destructive/20 mb-6">
              <span className="w-2 h-2 bg-destructive animate-pulse"></span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-destructive font-bold">
                Acesso Restrito
              </span>
            </div>
            <h1 className="font-sans text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-8">
              Acesso Fechado.
              <br />
              <span className="text-secondary terminal-glow">
                Protocolo {BRAND.name}
              </span>
              <br />
              em execução.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Nossas operações de treinamento atingiram o limite de
              infraestrutura. A turma atual está lotada para garantir que cada
              especialista receba{" "}
              <span className="text-primary font-bold">
                suporte tático personalizado
              </span>{" "}
              e mentoria direta.
            </p>
            <div className="bg-card border-l-4 border-secondary p-6 mb-12 flex items-start gap-4 text-left">
              <span className="material-symbols-outlined text-secondary text-3xl">
                verified
              </span>
              <div>
                <h4 className="font-sans font-bold uppercase text-secondary text-sm tracking-wider">
                  Vantagem de Prioridade
                </h4>
                <p className="text-sm text-foreground/80">
                  Quem estiver na lista de espera recebe{" "}
                  <span className="text-secondary font-bold">
                    20% de desconto
                  </span>{" "}
                  na próxima abertura e{" "}
                  <span className="text-secondary font-bold">
                    acesso antecipado
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md">
            <div className="bg-card/80 backdrop-blur-xl border border-border/30 p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative group cursor-default">
              <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-secondary group-hover:w-6 group-hover:h-6 transition-all"></div>
              <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-secondary group-hover:w-6 group-hover:h-6 transition-all"></div>

              <div className="mb-8">
                <h3 className="font-sans text-2xl font-bold uppercase mb-2">
                  Entrar no Radar
                </h3>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-tighter">
                  Preencha os campos para ser notificado via canal
                  criptografado.
                </p>
              </div>

              <form action={ROUTES.thanks} className="space-y-6">
                <div>
                  <label className="font-mono text-[11px] uppercase text-muted-foreground mb-2 block">
                    Identificação / Nome
                  </label>
                  <Input
                    required
                    className="bg-background/50 border-0 border-b-2 border-border focus:border-secondary transition-all rounded-none px-0 cursor-text"
                    placeholder="EX: JOHN_DOE"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] uppercase text-muted-foreground mb-2 block">
                    Ponto de Contato / E-mail
                  </label>
                  <Input
                    required
                    type="email"
                    className="bg-background/50 border-0 border-b-2 border-border focus:border-secondary transition-all rounded-none px-0 cursor-text"
                    placeholder="OPERATOR@DEVSECPRO.COM"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground font-black uppercase text-lg py-8 group relative overflow-hidden transition-all active:scale-95 shadow-[0_0_20px_rgba(0,207,252,0.3)] hover:shadow-[0_0_40px_rgba(0,207,252,0.5)] rounded-none h-auto cursor-pointer"
                >
                  <span className="relative z-10">
                    Entrar na Lista de Prioridade
                  </span>
                </Button>
              </form>
              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-muted-foreground">
                  lock
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground text-center">
                  Protocolo de privacidade 256-bit ativo
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento */}
        <section className="container mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-card p-8 border-t-2 border-primary/20 hover:border-primary transition-colors cursor-pointer group">
            <span className="font-mono text-primary text-xs mb-4 block tracking-widest group-hover:translate-x-1 transition-transform">
              01 // ESCALABILIDADE
            </span>
            <h4 className="font-sans font-bold text-xl uppercase mb-3 text-foreground">
              Infraestrutura Exclusiva
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Limitamos as vagas para garantir que nossos servidores de
              laboratório operem em 100% de performance.
            </p>
          </div>
          <div className="bg-card p-8 border-t-2 border-secondary/20 hover:border-secondary transition-colors cursor-pointer group">
            <span className="font-mono text-secondary text-xs mb-4 block tracking-widest group-hover:translate-x-1 transition-transform">
              02 // MENTORIA
            </span>
            <h4 className="font-sans font-bold text-xl uppercase mb-3 text-foreground">
              Suporte Individual
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Não somos uma fábrica de cursos. Cada aluno do {BRAND.name} recebe
              feedback detalhado.
            </p>
          </div>
          <div className="bg-card p-8 border-t-2 border-destructive/20 hover:border-destructive transition-colors cursor-pointer group">
            <span className="font-mono text-destructive text-xs mb-4 block tracking-widest group-hover:translate-x-1 transition-transform">
              03 // QUALIDADE
            </span>
            <h4 className="font-sans font-bold text-xl uppercase mb-3 text-foreground">
              Curadoria de Elite
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              O protocolo exige foco total. Quando abrimos, buscamos os
              operadores mais comprometidos.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
