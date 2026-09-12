import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Cookie, ArrowLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo/json-ld';
import { CookieSettingsButton } from '@/components/CookieSettingsButton';

export const metadata: Metadata = {
  title: {
    absolute: 'Cookie Policy - Global Privacy & Storage Transparency',
  },
  description: 'Learn about the cookies and local storage used on CharCount.dev. Full transparency on Google Consent Mode v2, strictly necessary items, and your privacy rights.',
  alternates: {
    canonical: '/cookies/',
  },
  openGraph: {
    title: 'Cookie Policy - Global Privacy & Storage Transparency',
    description: 'Learn about the cookies and local storage used on CharCount.dev. Full transparency on Google Consent Mode v2, strictly necessary items, and your privacy rights.',
    url: 'https://charcount.dev/cookies/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy - Global Privacy & Storage Transparency',
    description: 'Learn about the cookies and local storage used on CharCount.dev. Full transparency on Google Consent Mode v2, strictly necessary items, and your privacy rights.',
  },
};

export default function CookiePolicyPage() {
  const lastUpdated = 'September 2026';

  const breadcrumbsJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Cookie Policy', url: '/cookies/' },
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Cookie Policy
            </h1>
            <p className="mt-1 text-xs text-slate-600 font-medium">
              Last Updated: {lastUpdated}
            </p>
          </div>
          <div>
            <CookieSettingsButton variant="inline" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5 flex items-start gap-3.5">
        <ShieldCheck className="h-6 w-6 text-emerald-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h2 className="text-sm font-bold text-slate-900">Zero Text Tracking Guarantee</h2>
          <p className="text-xs text-slate-700 leading-relaxed">
            CharCount.dev does not use cookies to track, store, or inspect the text you write. All character counts, word counts, and statistical transformations are computed entirely in your web browser memory.
          </p>
        </div>
      </div>

      <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900">1. What Are Cookies and Local Storage?</h2>
          <p>
            Cookies are small text files stored on your device by your web browser when you visit websites. Local storage (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-800">localStorage</code>) is an HTML5 technology that allows websites to store small configuration key-value pairs directly in your browser without transmitting them over network requests.
          </p>
          <p>
            We use both cookies and local storage responsibly, strictly following global privacy standards including the EU/UK General Data Protection Regulation (GDPR), the ePrivacy Directive, the California Consumer Privacy Act (CCPA/CPRA), Brazil&rsquo;s LGPD, and Google&rsquo;s Consent Mode v2 framework.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900">2. Cookies and Storage Items We Use</h2>
          <p>
            The table below provides a full inventory of every cookie and client-side storage item utilized across CharCount.dev:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Name / Key</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Provider</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Lifespan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-3 font-mono font-medium text-slate-900">charcount_cookie_consent_v1</td>
                  <td className="p-3">
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-800">
                      Strictly Necessary
                    </span>
                  </td>
                  <td className="p-3">CharCount.dev</td>
                  <td className="p-3">Remembers your cookie preferences (granted vs. denied) so we do not repeatedly prompt you on each visit.</td>
                  <td className="p-3">1 Year (localStorage)</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-medium text-slate-900">_ga</td>
                  <td className="p-3">
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                      Analytics (Optional)
                    </span>
                  </td>
                  <td className="p-3">Google LLC (GA4)</td>
                  <td className="p-3">Distinguishes unique visitors anonymously to compile aggregate traffic statistics. Controlled via Consent Mode v2.</td>
                  <td className="p-3">2 Years</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-medium text-slate-900">_ga_HT87NWEHNT</td>
                  <td className="p-3">
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                      Analytics (Optional)
                    </span>
                  </td>
                  <td className="p-3">Google LLC (GA4)</td>
                  <td className="p-3">Maintains anonymous session state for the specific Google Analytics measurement stream.</td>
                  <td className="p-3">2 Years</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-medium text-slate-900">charcount_custom_presets</td>
                  <td className="p-3">
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-800">
                      Functional (Essential)
                    </span>
                  </td>
                  <td className="p-3">CharCount.dev</td>
                  <td className="p-3">Saves custom user-defined character limits locally in browser storage for instant recall. Never uploaded to servers.</td>
                  <td className="p-3">Persistent (localStorage)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Google Consent Mode v2 Compliance</h2>
          <p>
            To honor international privacy mandates, we enforce Google Consent Mode v2. When you first visit CharCount.dev:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Default State:</strong> Analytics storage (<code className="font-mono text-xs">analytics_storage</code>), advertising storage, and user data signals are initialized as <strong>denied</strong>.
            </li>
            <li>
              <strong>If You Accept All:</strong> Consent signals are dynamically updated to granted. Google Analytics sets cookies to gather aggregate performance insights.
            </li>
            <li>
              <strong>If You Choose Essential Only:</strong> Analytics storage remains denied. No analytics cookies are written to your device.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. How to Manage or Revoke Your Consent</h2>
          <p>
            Under European GDPR and California CCPA laws, you have the right to withdraw or modify your cookie preferences at any time. You can do so through several mechanisms:
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <h3 className="font-bold text-slate-900 text-sm">Instant On-Site Preference Center</h3>
            <p className="text-xs text-slate-600">
              Click the button below or select &ldquo;Cookie Preferences&rdquo; in the website footer at any time to open your settings dialog and update your permissions:
            </p>
            <CookieSettingsButton variant="inline" />
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-slate-900 text-sm">Browser-Level Cookie Controls</h3>
            <p className="text-xs text-slate-600">
              You can also block or delete cookies directly through your browser&rsquo;s privacy settings:
            </p>
            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
              <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Third-party cookies</li>
              <li><strong>Apple Safari:</strong> Preferences / Settings &gt; Privacy &gt; Block all cookies</li>
              <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
              <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions &gt; Manage and delete cookies</li>
            </ul>
          </div>
        </section>

        <section className="space-y-2 border-t border-slate-200 pt-6">
          <h2 className="text-lg font-bold text-slate-900">5. Contact Information</h2>
          <p>
            If you have questions regarding this Cookie Policy or our data protection safeguards, please reach out to our privacy team at <code className="font-mono text-xs text-emerald-700">privacy@charcount.dev</code>.
          </p>
        </section>
      </div>
    </div>
  );
}
