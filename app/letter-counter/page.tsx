import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CharacterCounter } from '@/components/CharacterCounter';
import { RelatedTools } from '@/components/RelatedTools';
import { getBreadcrumbSchema, getWebApplicationSchema, getFaqSchema, getHowToSchema } from '@/lib/seo/json-ld';
import { Type, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Letter Counter - Count Letters Online Free',
  },
  description: 'Free online letter counter. Filter out spaces, punctuation, numbers, and symbols to count pure alphabetic letters across languages. 100% private and fast.',
  alternates: {
    canonical: '/letter-counter/',
  },
  openGraph: {
    title: 'Letter Counter - Count Letters Online Free',
    description: 'Free online letter counter. Filter out spaces, punctuation, numbers, and symbols to count pure alphabetic letters across languages. 100% private and fast.',
    url: 'https://charcount.dev/letter-counter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letter Counter - Count Letters Online Free',
    description: 'Free online letter counter. Filter out spaces, punctuation, numbers, and symbols to count pure alphabetic letters across languages. 100% private and fast.',
  },
};

const LETTER_FAQS = [
  {
    question: 'How does a letter counter differ from a character counter?',
    answer: 'A character counter counts all typographical units, including spaces, punctuation marks, digits, and emojis. A letter counter specifically isolates and counts only alphabetic characters (Unicode \\p{L}), excluding whitespace, numbers, and symbols.'
  },
  {
    question: 'Are accented letters like "é" or "ñ" counted as letters?',
    answer: 'Yes. Our tool uses Unicode-standard segmentation. Accented characters in languages such as French, Spanish, German, and Portuguese are correctly recognized as single letters.'
  },
  {
    question: 'What is the most common letter in the English alphabet?',
    answer: 'The letter "E" is by far the most frequent letter in the English language, accounting for approximately 12.7% of all letters in standard text, followed by "T" (~9.1%) and "A" (~8.2%).'
  },
  {
    question: 'Does the letter counter differentiate uppercase and lowercase letters?',
    answer: 'The total letter count sums all alphabetic letters regardless of case. You can also use our quick transformation toolbar to convert all letters to UPPERCASE, lowercase, or Title Case with a single click.'
  }
];

export default function LetterCounterPage() {
  const breadcrumbsJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Letter Counter', url: '/letter-counter/' },
  ]);

  const webAppJsonLd = getWebApplicationSchema({
    name: 'Letter Counter - Free Online Letter Count Tool',
    url: 'https://charcount.dev/letter-counter/',
    description: 'Free online letter counter for isolating and counting alphabetic letters without whitespace or symbols.',
  });

  const faqJsonLd = getFaqSchema(LETTER_FAQS);
  const howToJsonLd = getHowToSchema({
    name: 'How to Count Letters in Text Online',
    description:
      'Step-by-step guide to isolating and counting alphabetic letters while excluding spaces, digits, and punctuation.',
    url: 'https://charcount.dev/letter-counter/',
    steps: [
      {
        name: 'Type or Paste Text',
        text: 'Enter your string, paragraph, or essay into the letter counter.',
      },
      {
        name: 'Inspect Pure Letter Count',
        text: 'Review the letter count metric, which automatically isolates alphabetical characters from spaces, numbers, and symbols.',
      },
      {
        name: 'Compare With Total Characters',
        text: 'Compare pure letter totals against characters with spaces and without spaces in the detailed statistics table.',
      },
      {
        name: 'Copy or Clear',
        text: 'Copy the analyzed text or clear whitespace formatting instantly.',
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
            <span className="text-slate-700 font-medium">Letter Counter</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Letter Counter
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            Count pure alphabetic letters in your text. Excludes whitespace, numbers, punctuation, and symbols with Unicode accuracy.
          </p>
        </div>

        {/* Live Interactive Counter */}
        <CharacterCounter />
      </section>

      {/* In-Depth SEO Content */}
      <section className="space-y-10 text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            What Is a Letter Counter?
          </h2>
          <p className="text-base text-slate-600">
            A <strong className="font-semibold text-slate-900">letter counter</strong> is a specialized text analysis tool that filters out spaces, numbers, and punctuation to tally the exact count of alphabetic letters. It is widely used by linguists, designers calculating font kerning, writers playing anagram or word games (like Scrabble and Wordle), and students completing language exercises.
          </p>
          <p className="text-sm text-slate-600">
            If you need to include punctuation, digits, or spaces in your tally, return to our primary{' '}
            <Link href="/" className="font-semibold text-emerald-700 underline hover:text-emerald-800">
              free character counter
            </Link>{' '}
            or explore the{' '}
            <Link href="/word-counter/" className="font-semibold text-emerald-700 underline hover:text-emerald-800">
              word counter online
            </Link>.
          </p>
        </div>

        {/* English Letter Frequency Table */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Top 10 Most Common Letters in the English Language
          </h2>
          <p className="text-sm text-slate-600">
            Based on corpus linguistics research analyzing millions of English words, letter frequency follows a reliable distribution:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100/80 text-xs font-semibold uppercase tracking-wider text-slate-900">
                <tr>
                  <th className="px-4 py-3">Rank</th>
                  <th className="px-4 py-3">Letter</th>
                  <th className="px-4 py-3">Relative Frequency (%)</th>
                  <th className="px-4 py-3">Scrabble Tile Point Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white font-mono text-xs">
                <tr><td className="px-4 py-2.5 font-bold">1</td><td className="px-4 py-2.5 text-emerald-700 font-bold text-sm">E</td><td className="px-4 py-2.5 font-sans">12.70%</td><td className="px-4 py-2.5">1 pt</td></tr>
                <tr><td className="px-4 py-2.5 font-bold">2</td><td className="px-4 py-2.5 text-emerald-700 font-bold text-sm">T</td><td className="px-4 py-2.5 font-sans">9.06%</td><td className="px-4 py-2.5">1 pt</td></tr>
                <tr><td className="px-4 py-2.5 font-bold">3</td><td className="px-4 py-2.5 text-emerald-700 font-bold text-sm">A</td><td className="px-4 py-2.5 font-sans">8.17%</td><td className="px-4 py-2.5">1 pt</td></tr>
                <tr><td className="px-4 py-2.5 font-bold">4</td><td className="px-4 py-2.5 text-emerald-700 font-bold text-sm">O</td><td className="px-4 py-2.5 font-sans">7.51%</td><td className="px-4 py-2.5">1 pt</td></tr>
                <tr><td className="px-4 py-2.5 font-bold">5</td><td className="px-4 py-2.5 text-emerald-700 font-bold text-sm">I</td><td className="px-4 py-2.5 font-sans">6.97%</td><td className="px-4 py-2.5">1 pt</td></tr>
                <tr><td className="px-4 py-2.5 font-bold">6</td><td className="px-4 py-2.5 text-emerald-700 font-bold text-sm">N</td><td className="px-4 py-2.5 font-sans">6.75%</td><td className="px-4 py-2.5">1 pt</td></tr>
                <tr><td className="px-4 py-2.5 font-bold">7</td><td className="px-4 py-2.5 text-emerald-700 font-bold text-sm">S</td><td className="px-4 py-2.5 font-sans">6.33%</td><td className="px-4 py-2.5">1 pt</td></tr>
                <tr><td className="px-4 py-2.5 font-bold">8</td><td className="px-4 py-2.5 text-emerald-700 font-bold text-sm">H</td><td className="px-4 py-2.5 font-sans">6.09%</td><td className="px-4 py-2.5">4 pts</td></tr>
                <tr><td className="px-4 py-2.5 font-bold">9</td><td className="px-4 py-2.5 text-emerald-700 font-bold text-sm">R</td><td className="px-4 py-2.5 font-sans">5.99%</td><td className="px-4 py-2.5">1 pt</td></tr>
                <tr><td className="px-4 py-2.5 font-bold">10</td><td className="px-4 py-2.5 text-emerald-700 font-bold text-sm">D</td><td className="px-4 py-2.5 font-sans">4.25%</td><td className="px-4 py-2.5">2 pts</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Letter Counter FAQs */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-emerald-700" />
            Letter Counter FAQs
          </h2>
          <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-xs">
            {LETTER_FAQS.map((faq) => (
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
