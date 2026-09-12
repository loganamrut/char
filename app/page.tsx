import React from 'react';
import { CharacterCounter } from '@/components/CharacterCounter';
import { SeoContent } from '@/components/SeoContent';
import { FaqSection } from '@/components/FaqSection';
import { RelatedTools } from '@/components/RelatedTools';
import { getFaqSchema, getBreadcrumbSchema } from '@/lib/seo/json-ld';

export default function HomePage() {
  const faqJsonLd = getFaqSchema();
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 space-y-12">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* 1. Above The Fold: Hero & Main Tool */}
      <section className="space-y-4">
        <div className="text-center sm:text-left space-y-1.5">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Character Counter
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            Count characters, words, sentences, spaces and more instantly — free, private and entirely in your browser.
          </p>
        </div>

        {/* Core Interactive Tool */}
        <CharacterCounter />
      </section>

      {/* 2. Authoritative SEO Guides & Reference Tables */}
      <SeoContent />

      {/* 3. Frequently Asked Questions */}
      <FaqSection />

      {/* 4. Related Text Tools Silo */}
      <RelatedTools />
    </div>
  );
}
