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
  getImageObjectSchema,
} from '@/lib/seo/json-ld';

export default function HomePage() {
  const webAppJsonLd = getWebApplicationSchema();
  const howToJsonLd = getHowToSchema({
    name: 'How to Count Characters and Words Online',
    description:
      'Step-by-step guide to counting characters with or without spaces, words, sentences, and reading time using CharCount.dev.',
    url: 'https://charcount.dev/',
    image: 'https://charcount.dev/images/how-character-counter-works.png',
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
  const imageJsonLd = getImageObjectSchema({
    url: '/images/how-character-counter-works.png',
    name: 'How the Online Character Counter Works',
    description:
      'Step-by-step text analysis process showing real-time character count with spaces, without spaces, word count, and platform limit meters.',
    caption:
      'CharCount.dev character counter architecture: local in-browser processing, dual-space character tallying, platform limit tracking, and instant formatting.',
    width: 1200,
    height: 520,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageJsonLd) }}
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

      {/* 2. How It Works: Visual Architecture & Process Infographic */}
      <section
        id="how-character-counter-works"
        aria-labelledby="how-it-works-heading"
        className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6"
      >
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-200/60">
            <span>Visual Process Guide</span>
          </div>
          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900"
          >
            How the Online Character Counter Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            CharCount.dev analyzes your text instantaneously directly in your web browser. Follow this 4-step workflow to count characters, inspect word density, verify social media limits, and clean formatting without sending data to any external server.
          </p>
        </div>

        {/* Infographic Graphic with Responsive Picture & Alt Optimization */}
        <figure className="w-full max-w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50/50 shadow-2xs">
          <div className="w-full overflow-x-auto scrollbar-thin">
            <picture className="block w-full">
              <source
                srcSet="/images/how-character-counter-works.svg"
                type="image/svg+xml"
              />
              <source
                srcSet="/images/how-character-counter-works.webp"
                type="image/webp"
              />
              <img
                src="/images/how-character-counter-works.png"
                alt="Character Counter - How it works step-by-step text analysis process showing live character count with spaces, without spaces, word count, and platform limit meters"
                width={1200}
                height={520}
                loading="eager"
                decoding="async"
                className="block w-full max-w-full h-auto object-contain select-none"
              />
            </picture>
          </div>
          <figcaption className="bg-slate-50 px-4 py-3 text-xs text-slate-600 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span>
              <strong>Figure 1:</strong> Step-by-step character counter workflow &mdash; input, local regex/grapheme engine, dual-metric tally, and one-click export.
            </span>
            <span className="text-[11px] text-slate-500 font-mono">
              100% Client-Side &bull; Zero Server Latency
            </span>
          </figcaption>
        </figure>

        {/* Step Breakdown Cards (matching HowTo schema) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">1</span>
              <h3 className="text-sm font-bold text-slate-900">Input &amp; Paste</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Type or paste your text into the editor. Keyboard events trigger immediate calculations with zero debounce delay.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">2</span>
              <h3 className="text-sm font-bold text-slate-900">Browser Engine</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Intl.Segmenter accurately handles multi-byte UTF-8 emojis, accented letters, and ZWJ sequences locally on your device.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">3</span>
              <h3 className="text-sm font-bold text-slate-900">Metrics &amp; Limits</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instantly inspect dual character tallies (with and without spaces), word counts, and live Twitter, SMS, and SEO progress bars.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">4</span>
              <h3 className="text-sm font-bold text-slate-900">Format &amp; Export</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Trim whitespace, strip extra spaces, convert uppercase/lowercase, and copy the verified text with a single click.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Authoritative SEO Guides & Reference Tables */}
      <SeoContent />

      {/* 4. Frequently Asked Questions */}
      <FaqSection />

      {/* 5. Related Text Tools Silo */}
      <RelatedTools />
    </div>
  );
}
