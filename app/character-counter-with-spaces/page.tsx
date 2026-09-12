import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CharacterCounter } from '@/components/CharacterCounter';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Character Counter With Spaces - Online Counting Tool',
  description: 'Count total characters including spaces, tabs, and line breaks. Perfect for social media posts, SMS, and SEO limits. 100% private and free.',
  alternates: {
    canonical: '/character-counter-with-spaces',
  },
};

export default function WithSpacesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 space-y-12">
      {/* Hero & Counter */}
      <section className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
            <Link href="/" className="hover:underline">Character Counter</Link>
            <span>/</span>
            <span className="text-slate-500">With Spaces</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Character Counter With Spaces
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            Calculate exact character counts including spaces, tabs, and line breaks. Ideal for social platforms, SMS gateways, and advertising copy.
          </p>
        </div>

        <CharacterCounter />
      </section>

      {/* Editorial Content */}
      <section className="space-y-6 text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Why Counting Characters With Spaces Is Essential
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Digital platforms and telecommunications networks treat spaces as physical data units. When composing a post for X (280 limit) or sending an SMS message (160 limit), each press of the spacebar consumes one character from your allowable quota.
        </p>

        <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
          <h3 className="text-base font-bold text-slate-900">
            Major Limits That Include Spaces:
          </h3>
          <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
            <li><strong>X (Twitter):</strong> 280 characters for standard posts.</li>
            <li><strong>Instagram Bio:</strong> 150 characters maximum.</li>
            <li><strong>Google SEO Title:</strong> ~60 characters (~600px desktop width).</li>
            <li><strong>Google Meta Description:</strong> ~155–160 characters.</li>
            <li><strong>Google Ads Headline:</strong> 30 characters maximum per headline.</li>
          </ul>
        </div>

        <p className="text-sm text-slate-600">
          Need to exclude spaces instead? Switch to our{' '}
          <Link href="/character-counter-without-spaces" className="font-semibold text-emerald-600 underline">
            character counter without spaces
          </Link>{' '}
          or return to the primary{' '}
          <Link href="/" className="font-semibold text-emerald-600 underline">
            character counter
          </Link>.
        </p>
      </section>

      <RelatedTools />
    </div>
  );
}
