import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CharacterCounter } from '@/components/CharacterCounter';
import { RelatedTools } from '@/components/RelatedTools';
import { getBreadcrumbSchema, getWebApplicationSchema, getFaqSchema } from '@/lib/seo/json-ld';
import { FileText, BookOpen, Clock, Layers, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Word Counter - Count Words Online Free',
  },
  description: 'Free online word counter tool. Count words, characters, sentences, paragraphs, and reading time in real time. Fast, private, and 100% in-browser.',
  alternates: {
    canonical: '/word-counter/',
  },
  openGraph: {
    title: 'Word Counter - Count Words Online Free',
    description: 'Free online word counter tool. Count words, characters, sentences, paragraphs, and reading time in real time. Fast, private, and 100% in-browser.',
    url: 'https://charcount.dev/word-counter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Word Counter - Count Words Online Free',
    description: 'Free online word counter tool. Count words, characters, sentences, paragraphs, and reading time in real time. Fast, private, and 100% in-browser.',
  },
};

const WORD_FAQS = [
  {
    question: 'How is word count calculated in this online tool?',
    answer: 'Words are calculated using Unicode-aware word segmentation (Intl.Segmenter). Continuous strings of alphabetic letters, numbers, and diacritics separated by whitespace or punctuation are recognized as distinct words. Hyphenated compound words (like "state-of-the-art") and apostrophe contractions (like "it\'s" or "don\'t") are handled accurately according to international typographic standards.'
  },
  {
    question: 'How many words are in a typical double-spaced page?',
    answer: 'Using standard 12-point Times New Roman or Arial font with 1-inch margins, a single double-spaced page contains approximately 250 words. A single-spaced page contains roughly 500 words. Therefore, a 5-page double-spaced paper is approximately 1,250 words.'
  },
  {
    question: 'Do numbers and symbols count as words?',
    answer: 'Standalone numbers (e.g. "2026" or "100") are counted as individual word tokens in standard editorial word counters. Individual punctuation symbols and mathematical operators surrounded by spaces are not classified as words.'
  },
  {
    question: 'What is the average reading speed in words per minute (WPM)?',
    answer: 'The average adult reading speed for non-technical English text is between 200 and 250 words per minute. CharCount.dev benchmarks reading time at 225 WPM. For speaking and speeches, the average rate is 130 to 150 WPM.'
  },
  {
    question: 'Does this word counter store or upload my text?',
    answer: 'No. Just like our character counter, this word counter functions 100% locally in your web browser memory. No text is ever uploaded or transmitted across the internet.'
  }
];

export default function WordCounterPage() {
  const breadcrumbsJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Word Counter', url: '/word-counter/' },
  ]);

  const webAppJsonLd = getWebApplicationSchema({
    name: 'Word Counter - Free Online Word Count Tool',
    url: 'https://charcount.dev/word-counter/',
    description: 'Free online word counter for measuring words, sentences, reading time, and character limits client-side.',
  });

  const faqJsonLd = getFaqSchema(WORD_FAQS);

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero & Interactive Tool (Above The Fold) */}
      <section className="space-y-4">
        <div className="space-y-1.5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Word Counter</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Word Counter Online
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            Count words, characters, sentences, paragraphs, and estimated reading time in real time. 100% private, free, and calculated directly in your browser.
          </p>
        </div>

        {/* Live Interactive Counter */}
        <CharacterCounter />
      </section>

      {/* In-Depth SEO Content */}
      <section className="space-y-10 text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
        {/* Definition */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            What Is a Word Counter?
          </h2>
          <p className="text-base text-slate-600">
            A <strong className="font-semibold text-slate-900">word counter</strong> is an essential online writing utility that calculates the total number of words, characters, and structural elements in a piece of written text. It is used by writers, journalists, students, copywriters, and translators to meet strict word count requirements, measure reading pace, and maintain editorial standards.
          </p>
          <p className="text-sm text-slate-600">
            Need to track raw characters or social media limits instead? Switch to our primary{' '}
            <Link href="/" className="font-semibold text-emerald-600 underline hover:text-emerald-700">
              free character counter
            </Link>{' '}
            or verify limits with our{' '}
            <Link href="/character-counter-with-spaces/" className="font-semibold text-emerald-600 underline hover:text-emerald-700">
              character counter with spaces
            </Link>.
          </p>
        </div>

        {/* Word Count Benchmarks Table */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Standard Word Count Benchmarks by Content Type
          </h2>
          <p className="text-sm text-slate-600">
            Different genres and formats have strict standard lengths. Use the table below to benchmark your draft against industry standards:
          </p>

          <div className="sm:hidden text-[11px] text-slate-500 font-medium">
            ← Scroll horizontally to inspect full table →
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs table-container">
            <table className="w-full min-w-[540px] text-left text-sm text-slate-700">
              <thead className="bg-slate-100/80 text-xs font-semibold uppercase tracking-wider text-slate-900">
                <tr>
                  <th className="px-4 py-3">Content Format</th>
                  <th className="px-4 py-3">Target Word Count</th>
                  <th className="px-4 py-3">Estimated Pages (Double-Spaced)</th>
                  <th className="px-4 py-3">Estimated Reading Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">College Admissions Essay (Common App)</td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-700">250–650 words</td>
                  <td className="px-4 py-3">1–2.5 pages</td>
                  <td className="px-4 py-3">1.5–3 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Standard Blog Post (SEO Optimized)</td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-700">1,500–2,500 words</td>
                  <td className="px-4 py-3">6–10 pages</td>
                  <td className="px-4 py-3">6.5–11 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Academic Journal Article / Abstract</td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-700">3,000–8,000 words</td>
                  <td className="px-4 py-3">12–32 pages</td>
                  <td className="px-4 py-3">13–35 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Short Story (Literary Magazine)</td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-700">1,000–7,500 words</td>
                  <td className="px-4 py-3">4–30 pages</td>
                  <td className="px-4 py-3">4.5–33 minutes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900">Commercial Fiction Novel</td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-700">70,000–100,000 words</td>
                  <td className="px-4 py-3">280–400 pages</td>
                  <td className="px-4 py-3">5–7.5 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Words to Pages Guide */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Words to Pages Quick Conversion Guide
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <div className="text-xs text-slate-500 font-medium">500 Words</div>
              <div className="font-mono text-xl font-bold text-slate-900 mt-1">2 Pages</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Double-spaced (12pt)</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <div className="text-xs text-slate-500 font-medium">1,000 Words</div>
              <div className="font-mono text-xl font-bold text-slate-900 mt-1">4 Pages</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Double-spaced (12pt)</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <div className="text-xs text-slate-500 font-medium">1,500 Words</div>
              <div className="font-mono text-xl font-bold text-slate-900 mt-1">6 Pages</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Double-spaced (12pt)</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <div className="text-xs text-slate-500 font-medium">2,500 Words</div>
              <div className="font-mono text-xl font-bold text-slate-900 mt-1">10 Pages</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Double-spaced (12pt)</div>
            </div>
          </div>
        </div>

        {/* Word Counter FAQs */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-emerald-600" />
            Word Counter FAQs
          </h2>
          <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-xs">
            {WORD_FAQS.map((faq) => (
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
