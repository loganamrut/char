'use client';

import React, { useState } from 'react';
import { FAQS } from '@/lib/constants/faqs';
import { HelpCircle, ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="space-y-6 pt-4" aria-labelledby="faq-heading">
      <div className="border-b border-slate-200 pb-4">
        <h2 id="faq-heading" className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
          <HelpCircle className="h-6 w-6 text-emerald-600" aria-hidden="true" />
          Frequently Asked Questions
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Everything you need to know about character counting, space calculations, Unicode handling, and platform limits.
        </p>
      </div>

      <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-xs">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="overflow-hidden">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-600' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 text-sm text-slate-600 leading-relaxed bg-slate-50/40 animate-in fade-in">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
