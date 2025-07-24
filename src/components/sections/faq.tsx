'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const faqs = [
  {
    question: 'How often should I service my HVAC system?',
    answer: '',
  },
  {
    question: 'How do know if my HVAC system needs repairs?',
    answer:
      'Signs that your HVAC system may need repairs include unusual noises, weak airflow, inconsistent temperatures, higher energy consumption, or frequent cycling.',
  },
  {
    question: 'How long does an HVAC system typically last?',
    answer: '',
  },
  {
    question: 'What size HVAC system do I need for my home?',
    answer: '',
  },
  {
    question: 'Why is my energy bill higher than usual?',
    answer: '',
  },
  {
    question: 'How can I improve my home’s indoor air quality?',
    answer: '',
  },
  {
    question: 'Do you offer emergency HVAC services?',
    answer: '',
  },
  {
    question: 'How often should I change my air filters?',
    answer: '',
  },
  {
    question: 'Best thermostat setting for energy savings?',
    answer:
      'For energy efficiency, set your thermostat to 78°F (26°C) in the summer and 68°F (20°C) in the winter when you’re home.',
  },
  {
    question: 'Do you offer financing options for HVAC?',
    answer: '',
  },
];

export default function Faq() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 px-3 py-1.5 text-sm font-medium uppercase tracking-wide">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-gray-900">
            Got Questions? We’ve Got Answers!
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {faqs.map(faq => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className={`rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 ${
                faq.answer ? 'bg-primary/5' : 'bg-gray-50'
              } [&[data-state=open]]:bg-primary/10 [&[data-state=open]]:border-primary/30`}
            >
              <AccordionTrigger className="flex justify-between items-center px-6 py-5 text-lg font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl">
                {faq.question}
              </AccordionTrigger>
              {faq.answer && (
                <AccordionContent className="px-6 pb-5 pt-0 text-gray-700 text-base">
                  {faq.answer}
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
