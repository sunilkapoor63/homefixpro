import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../../data/faqs';
import { BUSINESS_CONFIG } from '../../config/business';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCustomQuestion = () => {
    const waUrl = createWhatsAppUrl(
      `Hello ${BUSINESS_CONFIG.businessName}, I have a question about appliance repair in Gurugram: `,
      BUSINESS_CONFIG.whatsappNumber
    );
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-14">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our doorstep appliance diagnosis, repair workflow, and charges in Gurugram."
        />

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-brand-500/60 bg-teal-50/20 shadow-sm ring-1 ring-brand-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  id={headerId}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors focus:outline-none focus:bg-slate-50"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-brand-700 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Prompt */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-600">
          <p>Have a different question not answered here?</p>
          <button
            type="button"
            onClick={handleCustomQuestion}
            className="mt-2 inline-flex items-center gap-1.5 font-bold text-brand-700 hover:text-brand-800 underline underline-offset-4"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask our team on WhatsApp →</span>
          </button>
        </div>

      </div>
    </section>
  );
}
