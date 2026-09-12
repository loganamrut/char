import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CharacterCounter } from '@/components/CharacterCounter';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Letter Counter - Count Letters Online Free',
  description: 'Count letters, alphabetic characters, and word lengths online. Filter out spaces, punctuation, and symbols instantly. Fast and 100% private.',
  alternates: {
    canonical: '/letter-counter',
  },
};

export default function LetterCounterPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 space-y-12">
      {/* Hero & Counter */}
      <section className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
            <Link href="/" className="hover:underline">Character Counter</Link>
            <span>/</span>
            <span className="text-slate-500">Letter Counter</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Letter Counter
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            Count pure alphabetic letters in your text. Excludes whitespace, numbers, punctuation, and emojis with Unicode accuracy.
          </p>
        </div>

        <CharacterCounter />
      </section>

      {/* Editorial Content */}
      <section className="space-y-6 text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-bold text-slate-900">
          What Is the Difference Between Letters and Characters?
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          All letters are characters, but not all characters are letters. When you use our{' '}
          <Link href="/" className="font-semibold text-emerald-600 underline">
            online character counter
          </Link>
          , every typographic unit (including punctuation, numbers, spaces, and emojis) is recorded. A <strong>letter counter</strong> isolates only alphabetic glyphs matching Unicode property <code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">\p&#123;L&#125;</code> (such as A–Z, accented characters like &eacute;, &ntilde;, and non-Latin scripts like Cyrillic, Greek, and Devanagari).
        </p>

        <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
          <h3 className="text-base font-bold text-slate-900">
            Common Use Cases for Letter Counting
          </h3>
          <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
            <li><strong>Word Games &amp; Puzzles:</strong> Analyzing word lengths for Scrabble, Wordle, crosswords, and anagrams.</li>
            <li><strong>Typography &amp; Kerning:</strong> Estimating ink density, layout dimensions, and typesetting specifications.</li>
            <li><strong>Linguistic Research:</strong> Calculating letter frequency distributions and syllable complexity across texts.</li>
          </ul>
        </div>
      </section>

      <RelatedTools />
    </div>
  );
}
