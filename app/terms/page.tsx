import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo/json-ld';

export const metadata: Metadata = {
  title: {
    absolute: 'Terms of Service - CharCount.dev',
  },
  description: 'Terms and conditions governing the use of the CharCount.dev website and client-side text tools.',
  alternates: {
    canonical: '/terms/',
  },
  openGraph: {
    title: 'Terms of Service - CharCount.dev',
    description: 'Terms and conditions governing the use of the CharCount.dev website and client-side text tools.',
    url: 'https://charcount.dev/terms/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - CharCount.dev',
    description: 'Terms and conditions governing the use of the CharCount.dev website and client-side text tools.',
  },
};

export default function TermsPage() {
  const lastUpdated = 'September 2026';

  const breadcrumbsJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms/' },
  ]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 space-y-8">
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
          Terms of Service
        </h1>
        <p className="mt-1 text-xs text-slate-500">
          Last Updated: {lastUpdated}
        </p>
      </div>

      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing and using CharCount.dev (the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should discontinue use of the website immediately.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">2. Free Utility Service</h2>
          <p>
            CharCount.dev is provided as a free online utility for character counting, word counting, and related text analysis. We grant you a revocable, non-exclusive, non-transferable license to use the tool for personal, educational, or commercial writing purposes.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">3. Intellectual Property of User Text</h2>
          <p>
            You retain 100% ownership and all intellectual property rights to any text you paste, type, or format using CharCount.dev. Because all processing occurs locally in your browser, we do not claim, acquire, or hold any license or ownership over your content.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">4. Disclaimer of Warranties</h2>
          <p>
            While we strive for complete Unicode and typographic precision, the Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind. Platform limits on third-party services (such as X, Instagram, LinkedIn, or Google SERPs) are subject to change by those respective entities at any time without notice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">5. Limitation of Liability</h2>
          <p>
            In no event shall CharCount.dev or its creators be held liable for any damages (including lost profits, truncated copy, or missed application deadlines) arising from the use or inability to use the services provided on this website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">6. Modifications to Terms</h2>
          <p>
            We reserve the right to revise these terms at any time. Changes become effective immediately upon posting to this page.
          </p>
        </section>
      </div>
    </div>
  );
}
