import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { ANCHORS, BRAND, ROUTES } from "@/src/constants";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-primary/10">
      <div className="flex justify-between items-center h-20 px-6 lg:px-12 w-full mx-auto max-w-7xl">
        <Link
          href={ROUTES.home}
          className="text-2xl font-black text-primary tracking-tighter hover:drop-shadow-[0_0_10px_rgba(156,255,147,0.5)] uppercase cursor-pointer"
        >
          {BRAND.name}
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href={ANCHORS.modules}
            className="text-xs tracking-tight font-bold uppercase text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Módulos
          </Link>
          <Link
            href={ANCHORS.instructor}
            className="text-xs tracking-tight font-bold uppercase text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            Professor
          </Link>
          <Link
            href={ANCHORS.faq}
            className="text-xs tracking-tight font-bold uppercase text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            FAQ
          </Link>
        </div>
        <Link
          href={ROUTES.waitlist}
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-bold uppercase px-6 py-3 text-sm tracking-wider hover:shadow-[0_0_20px_rgba(156,255,147,0.3)] transition-all active:scale-95 rounded-none h-auto cursor-pointer",
          )}
        >
          Garantir Minha Vaga
        </Link>
      </div>
    </nav>
  );
}
