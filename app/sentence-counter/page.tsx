import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CharacterCounter } from '@/components/CharacterCounter';
import { RelatedTools } from '@/components/RelatedTools';
import { getBreadcrumbSchema, getWebApplicationSchema, getFaqSchema } from '@/lib/seo/json-ld';
import { AlignLeft, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Sentence Counter - Count Sentences Online Free',
  },
  description: 'Free online sentence counter. Count sentences, calculate average sentence length, and evaluate text readability metrics in real time. Fast and private.',
  alternates: {
    canonical: '/sentence-counter/',
  },
  openGraph: {
    title: 'Sentence Counter - Count Sentences Online Free',
    description: 'Free online sentence counter. Count sentences, calculate average sentence length, and evaluate text readability metrics in real time. Fast and private.',
    url: 'https://charcount.dev/sentence-counter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentence Counter - Count Sentences Online Free',
    description: 'Free online sentence counter. Count sentences, calculate average sentence length, and evaluate text readability metrics in real time. Fast and private.',
  },
};

const SENTENCE_FAQS = [
  {
    question: 'How is a sentence defined in this counter?',
    answer: 'A sentence is defined as a grammatical unit ending with terminal punctuation (period, exclamation mark, question mark, or ellipsis) followed by whitespace or the end of the text. Abbreviations (such as "e.g.", "Dr.", or "Inc.") are handled intelligently using standard Unicode sentence break segmentation.'
  },
  {
    question: 'What is the ideal average sentence length for readability?',
    answer: 'For general web copy, blog posts, and journalism, writing experts recommend an average sentence length of 14 to 18 words. Sentences averaging over 25 words become difficult for readers to process, reducing overall comprehension.'
  },
  {
    question: 'Does this tool detect the longest and shortest sentences?',
    answer: 'Yes! Expand the "Detailed Text Statistics & Reading Metrics" drawer below the main counter to view your average sentence length and inspect your draft\'s longest sentence.'
  }
];

export default function SentenceCounterPage() {
  const breadcrumbsJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Sentence Counter', url: '/sentence-counter/' },
  ]);

  const webAppJsonLd = getWebApplicationSchema({
    name: 'Sentence Counter - Free Online Sentence Analysis Tool',
    url: 'https://charcount.dev/sentence-counter/',
    description: 'Free online sentence counter for analyzing sentence structures, readability metrics, and average sentence length.',
  });

  const faqJsonLd = getFaqSchema(SENTENCE_FAQS);

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

      {/* Hero & Counter (Above The Fold) */}
      <section className="space-y-4">
        <div className="space-y-1.5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-600">Sentence Counter</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Sentence Counter
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            Count sentences, examine average sentence lengths, and optimize writing readability. Runs 100% locally in your browser.
          </p>
        </div>

        {/* Live Interactive Counter */}
        <CharacterCounter />
      </section>

      {/* In-Depth SEO Content */}
      <section className="space-y-10 text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            What Is a Sentence Counter?
          </h2>
          <p className="text-base text-slate-600">
            A <strong className="font-semibold text-slate-900">sentence counter</strong> is an editorial text tool that calculates the total number of complete sentence units within a text. In addition to raw sentence counting, it calculates the ratio of words per sentence, which is the foundational variable in readability formulas like Flesch-Kincaid, Gunning Fog, and the Automated Readability Index (ARI).
          </p>
          <p className="text-sm text-slate-600">
            Need to measure characters or words as well? Return to our primary{' '}
            <Link href="/" className="font-semibold text-emerald-600 underline hover:text-emerald-700">
              free character counter
            </Link>{' '}
            or visit the{' '}
            <Link href="/word-counter/" className="font-semibold text-emerald-600 underline hover:text-emerald-700">
              word counter online
            </Link>.
          </p>
        </div>

        {/* Readability Guide Table */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Sentence Length &amp; Readability Benchmarks
          </h2>
          <p className="text-sm text-slate-600">
            How sentence lengths directly impact audience comprehension:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <div className="text-xs font-bold text-emerald-600 uppercase">1 to 10 Words</div>
              <div className="font-bold text-slate-900 mt-1">Punchy &amp; High-Impact</div>
              <p className="text-xs text-slate-500 mt-1">Best for marketing copy, calls-to-action, and bold introductions.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <div className="text-xs font-bold text-blue-600 uppercase">11 to 20 Words</div>
              <div className="font-bold text-slate-900 mt-1">Optimal Web Standard</div>
              <p className="text-xs text-slate-500 mt-1">Ideal for blog articles, news stories, and technical guides.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <div className="text-xs font-bold text-amber-600 uppercase">21 to 28 Words</div>
              <div className="font-bold text-slate-900 mt-1">Moderately Complex</div>
              <p className="text-xs text-slate-500 mt-1">Common in university papers, analysis essays, and literature.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs">
              <div className="text-xs font-bold text-rose-600 uppercase">30+ Words</div>
              <div className="font-bold text-slate-900 mt-1">Run-on Risk</div>
              <p className="text-xs text-slate-500 mt-1">High fatigue risk. Consider splitting into two distinct sentences.</p>
            </div>
          </div>
        </div>

        {/* Sentence Counter FAQs */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-emerald-600" />
            Sentence Counter FAQs
          </h2>
          <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-xs">
            {SENTENCE_FAQS.map((faq) => (
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
