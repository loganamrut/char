import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CharacterCounter } from '@/components/CharacterCounter';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Sentence Counter - Count Sentences and Analyze Structure',
  description: 'Count sentences, calculate average sentence length, and evaluate readability metrics online. Fast, free, and private.',
  alternates: {
    canonical: '/sentence-counter',
  },
};

export default function SentenceCounterPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 space-y-12">
      {/* Hero & Counter */}
      <section className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
            <Link href="/" className="hover:underline">Character Counter</Link>
            <span>/</span>
            <span className="text-slate-500">Sentence Counter</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Sentence Counter
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            Count sentences, examine average sentence lengths, and optimize writing readability. Runs 100% locally in your browser.
          </p>
        </div>

        <CharacterCounter />
      </section>

      {/* Editorial Content */}
      <section className="space-y-6 text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-bold text-slate-900">
          How Sentences Affect Reading Rhythm &amp; Clarity
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          In copywriting and professional communication, sentence length directly dictates readability. Writing experts recommend keeping average sentence lengths between <strong>14 and 18 words</strong> for general audiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-bold text-emerald-600 uppercase">1 to 10 Words</div>
            <div className="font-bold text-slate-900 mt-1">Punchy &amp; Direct</div>
            <p className="text-xs text-slate-500 mt-1">Excellent for marketing hooks, headlines, and call-to-actions.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-bold text-blue-600 uppercase">11 to 20 Words</div>
            <div className="font-bold text-slate-900 mt-1">Standard Exposition</div>
            <p className="text-xs text-slate-500 mt-1">Ideal for journalistic articles, essays, and web content.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-xs font-bold text-amber-600 uppercase">25+ Words</div>
            <div className="font-bold text-slate-900 mt-1">Complex &amp; Academic</div>
            <p className="text-xs text-slate-500 mt-1">Common in legal contracts and academic research papers.</p>
          </div>
        </div>

        <p className="text-sm text-slate-600">
          To also check character budgets or word counts, use our{' '}
          <Link href="/" className="font-semibold text-emerald-600 underline">
            character counter tool
          </Link>{' '}
          or{' '}
          <Link href="/word-counter" className="font-semibold text-emerald-600 underline">
            word counter
          </Link>.
        </p>
      </section>

      <RelatedTools />
    </div>
  );
}
