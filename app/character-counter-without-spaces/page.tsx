import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CharacterCounter } from '@/components/CharacterCounter';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Character Counter Without Spaces - Free Online Tool',
  description: 'Count characters excluding spaces, tabs, and line breaks. Perfect for academic papers, book manuscripts, and translation invoicing. Fast and 100% private.',
  alternates: {
    canonical: '/character-counter-without-spaces',
  },
};

export default function WithoutSpacesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 space-y-12">
      {/* Hero & Counter */}
      <section className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
            <Link href="/" className="hover:underline">Character Counter</Link>
            <span>/</span>
            <span className="text-slate-500">Without Spaces</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Character Counter Without Spaces
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            Count characters excluding all whitespace, tabs, and newlines. Essential for translation quotes, academic submissions, and typographic analysis.
          </p>
        </div>

        <CharacterCounter />
      </section>

      {/* Editorial Content */}
      <section className="space-y-6 text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-bold text-slate-900">
          When to Count Characters Without Spaces
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Excluding whitespace isolates the actual informational content of a text. This metric is the industry standard in:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
            <h3 className="text-base font-bold text-slate-900">Translation &amp; Localization</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Professional translation agencies in Europe and Asia typically bill by the standard page or per 1,000 characters without spaces (known as &ldquo;Normseiten&rdquo; in Germany, defined as 1,500 characters excluding spaces).
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
            <h3 className="text-base font-bold text-slate-900">Academic Theses &amp; Grants</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Academic journals and grant evaluators often stipulate limits without spaces to prevent researchers from artificially manipulating character counts via paragraph formatting or double spacing.
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-600">
          If you need to include spaces or verify social platform limits, visit our primary{' '}
          <Link href="/" className="font-semibold text-emerald-600 underline">
            character counter
          </Link>{' '}
          or explore the{' '}
          <Link href="/character-counter-with-spaces" className="font-semibold text-emerald-600 underline">
            character counter with spaces
          </Link>.
        </p>
      </section>

      <RelatedTools />
    </div>
  );
}
