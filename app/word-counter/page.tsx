import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CharacterCounter } from '@/components/CharacterCounter';
import { ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Word Counter - Count Words and Characters Online',
  description: 'Free online word counter tool. Count words, characters, sentences, paragraphs, and reading time in real time. Fast, private, and 100% in-browser.',
  alternates: {
    canonical: '/word-counter',
  },
};

export default function WordCounterPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 space-y-12">
      {/* Hero & Counter */}
      <section className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
            <Link href="/" className="hover:underline">Character Counter</Link>
            <span>/</span>
            <span className="text-slate-500">Word Counter</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Word Counter Online
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            Count words, characters, reading time, and sentence metrics instantly. 100% private, free, and calculated directly in your browser.
          </p>
        </div>

        <CharacterCounter />
      </section>

      {/* Editorial Content */}
      <section className="space-y-8 text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">
            Why Word Count Matters for Writers and Students
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Whether you are writing an academic essay, a blog article, or a book manuscript, word count is the universal benchmark for measuring length and pacing. Most publications and universities require strict adherence to word budgets:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="rounded-lg border border-slate-200 bg-white p-3.5">
              <div className="font-bold text-slate-900">College Essay</div>
              <div className="font-mono text-emerald-600 font-bold text-base mt-1">250–650 words</div>
              <div className="text-slate-500 mt-1">e.g. Common App standard personal statement.</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3.5">
              <div className="font-bold text-slate-900">Standard Blog Post</div>
              <div className="font-mono text-emerald-600 font-bold text-base mt-1">1,200–2,500 words</div>
              <div className="text-slate-500 mt-1">Optimal length for organic SEO visibility.</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3.5">
              <div className="font-bold text-slate-900">Short Story</div>
              <div className="font-mono text-emerald-600 font-bold text-base mt-1">1,000–7,500 words</div>
              <div className="text-slate-500 mt-1">Standard literary fiction magazine submission.</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-3.5">
              <div className="font-bold text-slate-900">Full-Length Novel</div>
              <div className="font-mono text-emerald-600 font-bold text-base mt-1">70,000–100,000 words</div>
              <div className="text-slate-500 mt-1">Standard commercial fiction target.</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-slate-900">
            Converting Words to Characters
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Need to convert between words and characters? In English prose, an average word consists of approximately 5 characters. When accounting for whitespace between words, count roughly 6 characters per word. For complete details, use our primary{' '}
            <Link href="/" className="font-semibold text-emerald-600 underline">
              free character counter
            </Link>.
          </p>
        </div>
      </section>

      <RelatedTools />
    </div>
  );
}
