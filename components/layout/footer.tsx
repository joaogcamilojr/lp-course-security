import Link from "next/link";

import { BRAND, CONTACT, ROUTES } from "@/src/constants";

export function Footer() {
  return (
    <footer className="bg-black border-t border-border w-full py-12 px-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-lg font-bold text-primary uppercase tracking-tighter">
            {BRAND.name}
          </span>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} {BRAND.name} // ALL PROTOCOLS RESERVED
          </p>
        </div>
        <div className="flex gap-8">
          <Link
            href={ROUTES.home}
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Privacidade
          </Link>
          <Link
            href={ROUTES.home}
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Termos de Uso
          </Link>
          <Link
            href={ROUTES.home}
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Certificado
          </Link>
        </div>
        <div className="flex gap-6">
          <Link
            href={CONTACT.discord}
            className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer"
            target="_blank"
          >
            <span className="material-symbols-outlined">terminal</span>
          </Link>
          <Link
            href={CONTACT.instagram}
            className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer"
            target="_blank"
          >
            <span className="material-symbols-outlined">shield</span>
          </Link>
          <Link
            href={CONTACT.whatsapp}
            className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer"
            target="_blank"
          >
            <span className="material-symbols-outlined">code</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
