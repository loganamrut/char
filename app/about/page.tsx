import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Lock, Cpu, Zap } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo/json-ld';

export const metadata: Metadata = {
  title: {
    absolute: 'About CharCount.dev - Privacy & Methodology',
  },
  description: 'Learn how CharCount.dev calculates Unicode-accurate character counts, spaces, and words client-side with complete privacy.',
  alternates: {
    canonical: '/about/',
  },
  openGraph: {
    title: 'About CharCount.dev - Privacy & Methodology',
    description: 'Learn how CharCount.dev calculates Unicode-accurate character counts, spaces, and words client-side with complete privacy.',
    url: 'https://charcount.dev/about/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About CharCount.dev - Privacy & Methodology',
    description: 'Learn how CharCount.dev calculates Unicode-accurate character counts, spaces, and words client-side with complete privacy.',
  },
};

export default function AboutPage() {
  const breadcrumbsJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about/' },
  ]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <div>
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 mb-4">
          <Link href="/" className="inline-flex items-center gap-1 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Character Counter
          </Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          About CharCount.dev
        </h1>
        <p className="mt-2 text-base text-slate-600 leading-relaxed">
          The fast, private, Unicode-aware text analysis utility engineered for writers, SEO strategists, developers, and communicators.
        </p>
      </div>

      {/* Mission */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Most online character counters in the SERPs today were built over a decade ago. They are encumbered by intrusive popups, slow third-party ad networks, and outdated counting logic that miscounts emojis, diacritics, and non-Latin scripts.
        </p>
        <p className="text-sm text-slate-600 leading-relaxed">
          <strong className="text-slate-900">CharCount.dev was built to fix that.</strong> Our objective is simple: provide the cleanest, fastest, and most technically accurate character counting utility on the web—completely free, accessible without an account, and executed 100% locally in your browser.
        </p>
      </section>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
            <Lock className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">Privacy by Architecture</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Your text never leaves your device. Everything runs in client-side JavaScript memory. No server APIs, no databases, and no AI model training on your content.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
            <Cpu className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">Unicode &amp; Grapheme Precision</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            We use standard <code className="font-mono text-xs">Intl.Segmenter</code> algorithms to analyze human-perceived grapheme clusters, preventing inaccurate counts for emoji sequences and combining diacritics.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
            <Zap className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">Sub-50ms Performance</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Built on lightweight Next.js with zero bloated UI libraries and native system typography. Typing remains fluid whether you enter 10 characters or 50,000 words.
          </p>
        </div>
      </div>

      {/* Counting Methodology */}
      <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">Technical Counting Methodology</h2>
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            When analyzing digital text, different software environments calculate length according to varying definitions:
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <strong>Grapheme Clusters (Visual Characters):</strong> This is the primary metric displayed on CharCount.dev. It reflects what a human reader sees as one character. Emojis like &ldquo;👩🏽‍💻&rdquo; count as 1 character despite containing multiple code points.
            </li>
            <li>
              <strong>UTF-16 Code Units:</strong> JavaScript&rsquo;s native <code className="font-mono text-xs">string.length</code>. Astral plane characters and emojis occupy 2 code units (surrogate pairs).
            </li>
            <li>
              <strong>UTF-8 Bytes:</strong> The actual memory footprint of the string when transmitted or saved over the wire. ASCII letters take 1 byte; accented letters take 2 bytes; Indic, CJK, and Arabic take 2–3 bytes; emojis take 4 bytes each.
            </li>
          </ul>
        </div>
      </section>

      {/* Contact & Feedback */}
      <section className="border-t border-slate-200 pt-6 space-y-2">
        <h2 className="text-lg font-bold text-slate-900">Feedback &amp; Inquiries</h2>
        <p className="text-sm text-slate-600">
          Have a suggestion for a platform limit preset or a specific Unicode edge case? We welcome feedback. Reach out via our official website repository or email at <code className="font-mono text-xs text-emerald-700">team@charcount.dev</code>.
        </p>
      </section>
    </div>
  );
}
