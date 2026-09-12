import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo/json-ld';
import { CookieSettingsButton } from '@/components/CookieSettingsButton';

export const metadata: Metadata = {
  title: {
    absolute: 'Privacy Policy - Client-Side Processing Guarantee',
  },
  description: 'Our privacy policy explains our 100% browser-based text processing architecture. Your text is never uploaded, stored, or analyzed on our servers.',
  alternates: {
    canonical: '/privacy/',
  },
  openGraph: {
    title: 'Privacy Policy - Client-Side Processing Guarantee',
    description: 'Our privacy policy explains our 100% browser-based text processing architecture. Your text is never uploaded, stored, or analyzed on our servers.',
    url: 'https://charcount.dev/privacy/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Client-Side Processing Guarantee',
    description: 'Our privacy policy explains our 100% browser-based text processing architecture. Your text is never uploaded, stored, or analyzed on our servers.',
  },
};

export default function PrivacyPage() {
  const lastUpdated = 'September 2026';

  const breadcrumbsJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy/' },
  ]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <div>
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 mb-4">
          <Link href="/" className="inline-flex items-center gap-1 hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Character Counter
          </Link>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <p className="mt-1 text-xs text-slate-600 font-medium">
          Last Updated: {lastUpdated}
        </p>
      </div>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5 flex items-start gap-3">
        <ShieldCheck className="h-6 w-6 text-emerald-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h2 className="text-sm font-bold text-slate-900">The CharCount.dev Privacy Commitment</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            The text you type or paste into CharCount.dev remains strictly on your local device. We do not transmit, record, inspect, or store your text on any server or cloud database.
          </p>
        </div>
      </div>

      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. Client-Side Text Processing</h2>
          <p>
            When you use the character counter, word counter, or text formatting utilities, all calculations—including character counting, whitespace filtering, case transformations, and reading metrics—are executed locally in your browser memory via JavaScript.
          </p>
          <p>
            No data packets containing the contents of your text are sent over the network to CharCount.dev servers, AI models, or any external third-party APIs.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">2. Standard Web Server Logs</h2>
          <p>
            Like virtually all websites on the internet, our hosting infrastructure automatically collects standard technical web server logs when an HTTP request is made to load the site files (HTML, CSS, JavaScript). These logs may include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Internet Protocol (IP) address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URL</li>
            <li>Date, timestamp, and requested asset path</li>
          </ul>
          <p>
            These server logs are used strictly for security monitoring, DDoS mitigation, and server health diagnostics. They do not contain any information typed into the text editor.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Cookies &amp; Local Storage</h2>
          <p>
            CharCount.dev uses essential local storage to save your user preferences (such as custom character limit presets and your cookie consent state). This data remains strictly in your local browser and is never uploaded to our servers.
          </p>
          <p>
            With your explicit permission, we use anonymous Google Analytics (GA4) cookies to understand general site traffic patterns and improve performance. We operate strictly under <strong>Google Consent Mode v2</strong>, ensuring analytics storage is denied by default until you grant consent. For full details on all cookies used and how to manage them, review our <Link href="/cookies/" className="text-emerald-700 underline font-medium hover:text-emerald-800">Cookie Policy</Link>.
          </p>
          <div className="pt-1">
            <CookieSettingsButton variant="inline" />
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">4. Third-Party Services &amp; Privacy Safeguards</h2>
          <p>
            We do not permit intrusive third-party scripts to attach keyloggers or listeners to the editor. Any analytics or auxiliary services adhere to strict privacy safeguards and will never inspect, transmit, or process your typed text.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">5. Contact Us</h2>
          <p>
            If you have questions about our architectural privacy model or data practices, please contact us at <code className="font-mono text-xs text-emerald-700">privacy@charcount.dev</code>.
          </p>
        </section>
      </div>
    </div>
  );
}
