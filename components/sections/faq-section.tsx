"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqContent } from "@/src/data/mockData";

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-4xl font-bold uppercase tracking-tight">
            {faqContent.title}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion className="space-y-4">
            {faqContent.items.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-border/50 bg-card/30 px-6 backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="font-sans text-left font-bold uppercase tracking-tight py-6 hover:text-primary transition-colors cursor-pointer">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
