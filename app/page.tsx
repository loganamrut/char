import React from 'react';
import { CharacterCounter } from '@/components/CharacterCounter';
import { SeoContent } from '@/components/SeoContent';
import { FaqSection } from '@/components/FaqSection';
import { RelatedTools } from '@/components/RelatedTools';
import {
  getFaqSchema,
  getBreadcrumbSchema,
  getWebApplicationSchema,
  getHowToSchema,
} from '@/lib/seo/json-ld';

export default function HomePage() {
  const webAppJsonLd = getWebApplicationSchema();
  const howToJsonLd = getHowToSchema({
    name: 'How to Count Characters and Words Online',
    description:
      'Step-by-step guide to counting characters with or without spaces, words, sentences, and reading time using CharCount.dev.',
    url: 'https://charcount.dev/',
    steps: [
      {
        name: 'Enter or Paste Text',
        text: 'Type directly into the editor or paste text from your clipboard. Counting begins instantaneously in your local browser.',
      },
      {
        name: 'Analyze Character and Word Counts',
        text: 'View live tallies for characters with spaces, characters without spaces, total words, sentences, and estimated reading time.',
      },
      {
        name: 'Check Character Limits',
        text: 'Compare your character count against social media and SEO thresholds (Twitter/X, SMS, Instagram, Meta Title) with dynamic progress meters.',
      },
      {
        name: 'Format and Copy Your Text',
        text: 'Use one-click formatting tools to remove extra whitespace, clean line breaks, or copy the counted text to your clipboard.',
      },
    ],
  });
  const faqJsonLd = getFaqSchema();
  const breadcrumbJsonLd = getBreadcrumbSchema([{ name: 'Home', url: '/' }]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 space-y-12">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
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
