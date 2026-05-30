import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { FAQSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { InstructorSection } from "@/components/sections/instructor-section";
import { ModulesSection } from "@/components/sections/modules-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground scroll-smooth terminal-scanner">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 relative overflow-hidden cyber-grid">
        <Hero />
        <ProblemSection />
        <ModulesSection />
        <InstructorSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
