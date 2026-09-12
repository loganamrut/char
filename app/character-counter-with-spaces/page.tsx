import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CharacterCounter } from '@/components/CharacterCounter';
import { RelatedTools } from '@/components/RelatedTools';
import { getBreadcrumbSchema, getWebApplicationSchema, getFaqSchema, getHowToSchema } from '@/lib/seo/json-ld';
import { Hash, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Character Counter With Spaces - Free Online Tool',
  },
  description: 'Count total characters including spaces, tabs, and line breaks online. Perfect for social media posts, SMS, and SEO limits. 100% private, instant, and free.',
  alternates: {
    canonical: '/character-counter-with-spaces/',
  },
  openGraph: {
    title: 'Character Counter With Spaces - Free Online Tool',
    description: 'Count total characters including spaces, tabs, and line breaks online. Perfect for social media posts, SMS, and SEO limits. 100% private, instant, and free.',
    url: 'https://charcount.dev/character-counter-with-spaces/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Character Counter With Spaces - Free Online Tool',
    description: 'Count total characters including spaces, tabs, and line breaks online. Perfect for social media posts, SMS, and SEO limits. 100% private, instant, and free.',
  },
};

const WITH_SPACES_FAQS = [
  {
    question: 'Why do spaces count as characters?',
    answer: 'In computer memory and network protocols, a space is a physical character (ASCII 32, hex 0x20) requiring 1 byte of storage. Social networks (such as X, Threads, and LinkedIn), search engines (Google SERP snippets), and SMS gateways count spaces as characters because they occupy visual layout width and transmission bandwidth.'
  },
  {
    question: 'Do tabs and line breaks count as spaces or characters?',
    answer: 'Yes. Tabs, line breaks (newlines), and non-breaking spaces are whitespace characters that count toward your total "Characters with spaces" tally. You can use our "Unbreak" or "Clean Spaces" toolbar buttons to flatten or normalize whitespace instantly.'
  },
  {
    question: 'Which social media platforms count spaces against character limits?',
    answer: 'Virtually all major platforms count spaces against their character budgets, including X (Twitter) 280-character posts, Instagram 2,200-character captions, Threads 500-character updates, and LinkedIn 3,000-character posts.'
  }
];

export default function WithSpacesPage() {
  const breadcrumbsJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Character Counter With Spaces', url: '/character-counter-with-spaces/' },
  ]);

  const webAppJsonLd = getWebApplicationSchema({
    name: 'Character Counter With Spaces - Online Counting Utility',
    url: 'https://charcount.dev/character-counter-with-spaces/',
    description: 'Free online character counter with spaces. Calculate characters including whitespace, tabs, and newlines client-side.',
  });

  const faqJsonLd = getFaqSchema(WITH_SPACES_FAQS);
  const howToJsonLd = getHowToSchema({
    name: 'How to Count Characters With Spaces Online',
    description:
      'Step-by-step instructions on measuring total text length inclusive of spaces, tabs, and line breaks.',
    url: 'https://charcount.dev/character-counter-with-spaces/',
    steps: [
      {
        name: 'Type or Paste Text',
        text: 'Enter your copy or snippet into the editor box.',
      },
      {
        name: 'Read Character Count With Spaces',
        text: 'Look at the Characters (with spaces) tile to view exact character length including all whitespace.',
      },
      {
        name: 'Verify Platform Restrictions',
        text: 'Review character limits for Twitter/X (280), SMS (160), Meta Titles (60), and Instagram captions (2,200).',
      },
      {
        name: 'Copy Ready Text',
        text: 'Copy the verified text to your clipboard.',
      },
    ],
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 space-y-12">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
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

      {/* Hero & Counter (Above The Fold) */}
      <section className="space-y-4">
        <div className="space-y-1.5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-700 font-medium">With Spaces</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Character Counter With Spaces
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            Calculate exact character counts including spaces, tabs, and line breaks. Ideal for social platforms, SMS gateways, and advertising copy.
          </p>
        </div>

        {/* Live Interactive Counter */}
        <CharacterCounter />
      </section>

      {/* In-Depth SEO Content */}
      <section className="space-y-10 text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            What Is Character Count With Spaces?
          </h2>
          <p className="text-base text-slate-600">
            <strong className="font-semibold text-slate-900">Characters with spaces</strong> measures the absolute total number of typographic symbols in a string of text, including all letters, numerical digits, punctuation marks, and whitespace characters (such as spacebar presses, tabs, and line breaks).
          </p>
          <p className="text-sm text-slate-600">
            Need to measure characters without spaces instead for academic or translation requirements? Switch to our{' '}
            <Link href="/character-counter-without-spaces/" className="font-semibold text-emerald-700 underline hover:text-emerald-800">
              character counter without spaces
            </Link>{' '}
            or explore the primary{' '}
            <Link href="/" className="font-semibold text-emerald-700 underline hover:text-emerald-800">
              online character counter
            </Link>.
          </p>
        </div>

        {/* Platforms Table */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Key Digital Limits That Include Spaces
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100/80 text-xs font-semibold uppercase tracking-wider text-slate-900">
                <tr>
                  <th className="px-4 py-3">Platform / Specification</th>
                  <th className="px-4 py-3">Character Cap (With Spaces)</th>
                  <th className="px-4 py-3">Crucial Best Practice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">X (formerly Twitter)</td>
                  <td className="px-4 py-3 font-mono text-emerald-700 font-bold">280 characters</td>
                  <td className="px-4 py-3 text-xs text-slate-600">URLs consume 23 characters regardless of actual length.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Google SEO Title Tag</td>
                  <td className="px-4 py-3 font-mono text-emerald-700 font-bold">~60 characters</td>
                  <td className="px-4 py-3 text-xs text-slate-600">Measured in pixels (~600px width limit on desktop).</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Google Meta Description</td>
                  <td className="px-4 py-3 font-mono text-emerald-700 font-bold">~155–160 characters</td>
                  <td className="px-4 py-3 text-xs text-slate-600">Desktop displays up to 960px; mobile displays up to 680px.</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Standard SMS (GSM-7)</td>
                  <td className="px-4 py-3 font-mono text-emerald-700 font-bold">160 characters</td>
                  <td className="px-4 py-3 text-xs text-slate-600">Adding a single emoji drops limit to 70 characters (UCS-2).</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Google Ads Headline</td>
                  <td className="px-4 py-3 font-mono text-emerald-700 font-bold">30 characters</td>
                  <td className="px-4 py-3 text-xs text-slate-600">Strict maximum character count per headline.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-emerald-700" />
            Characters With Spaces FAQs
          </h2>
          <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-xs">
            {WITH_SPACES_FAQS.map((faq) => (
              <div key={faq.question} className="p-4 sm:p-5 space-y-1.5">
                <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools Silo */}
      <RelatedTools />
    </div>
  );
}
