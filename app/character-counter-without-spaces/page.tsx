import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CharacterCounter } from '@/components/CharacterCounter';
import { RelatedTools } from '@/components/RelatedTools';
import { getBreadcrumbSchema, getWebApplicationSchema, getFaqSchema, getHowToSchema } from '@/lib/seo/json-ld';
import { Layers, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Character Counter Without Spaces - Free Online Tool',
  },
  description: 'Count characters excluding spaces, tabs, and line breaks online. Perfect for translation quotes, academic submissions, and publishers. 100% private and free.',
  alternates: {
    canonical: '/character-counter-without-spaces/',
  },
  openGraph: {
    title: 'Character Counter Without Spaces - Free Online Tool',
    description: 'Count characters excluding spaces, tabs, and line breaks online. Perfect for translation quotes, academic submissions, and publishers. 100% private and free.',
    url: 'https://charcount.dev/character-counter-without-spaces/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Character Counter Without Spaces - Free Online Tool',
    description: 'Count characters excluding spaces, tabs, and line breaks online. Perfect for translation quotes, academic submissions, and publishers. 100% private and free.',
  },
};

const WITHOUT_SPACES_FAQS = [
  {
    question: 'What does "characters without spaces" mean?',
    answer: '"Characters without spaces" (also called characters excluding spaces or raw letter count) calculates the total number of characters in a text after stripping out all spaces, tabs, and newlines. Only letters, numbers, punctuation marks, and symbols are counted.'
  },
  {
    question: 'Why do translators charge by characters without spaces?',
    answer: 'In many European and Asian markets (notably Germany, Italy, Poland, and Japan), professional translators invoice by the standard page (Normseite), defined as 1,500 characters excluding spaces (or 1,800 characters including spaces). This provides a reliable measure of actual textual content independent of formatting quirks.'
  },
  {
    question: 'Why do academic journals require character counts excluding spaces?',
    answer: 'Academic committees and scientific journals often set limits excluding spaces to ensure fairness across submissions. Counting without spaces prevents authors from manipulating character counts through spacing adjustments or paragraph styling.'
  }
];

export default function WithoutSpacesPage() {
  const breadcrumbsJsonLd = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Character Counter Without Spaces', url: '/character-counter-without-spaces/' },
  ]);

  const webAppJsonLd = getWebApplicationSchema({
    name: 'Character Counter Without Spaces - Online Counting Utility',
    url: 'https://charcount.dev/character-counter-without-spaces/',
    description: 'Free online character counter without spaces. Calculate characters excluding all whitespace, tabs, and newlines client-side.',
  });

  const faqJsonLd = getFaqSchema(WITHOUT_SPACES_FAQS);
  const howToJsonLd = getHowToSchema({
    name: 'How to Count Characters Without Spaces Online',
    description:
      'Step-by-step guide to calculating pure character counts excluding spaces, tabs, and newlines.',
    url: 'https://charcount.dev/character-counter-without-spaces/',
    steps: [
      {
        name: 'Type or Paste Text',
        text: 'Enter your document, translation string, or manuscript into the editor.',
      },
      {
        name: 'Inspect Characters Without Spaces',
        text: 'Review the Characters (no spaces) metric which strips all whitespace characters automatically.',
      },
      {
        name: 'Verify Publishing or Billing Quotas',
        text: 'Use the non-space character tally to accurately price translation projects or meet academic publisher limits.',
      },
      {
        name: 'Copy Analyzed Text',
        text: 'Copy the text to your clipboard.',
      },
    ],
  });

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero & Counter (Above The Fold) */}
      <section className="space-y-4">
        <div className="space-y-1.5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-700 font-medium">Without Spaces</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Character Counter Without Spaces
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            Count characters excluding all whitespace, tabs, and newlines. Essential for translation quotes, academic submissions, and typographic analysis.
          </p>
        </div>

        {/* Live Interactive Counter */}
        <CharacterCounter />
      </section>

      {/* In-Depth SEO Content */}
      <section className="space-y-10 text-slate-700 leading-relaxed border-t border-slate-200 pt-8">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            When to Count Characters Without Spaces
          </h2>
          <p className="text-base text-slate-600">
            Excluding whitespace isolates the actual semantic and informational substance of your text. It is the gold-standard metric for:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2">
              <h3 className="text-base font-bold text-slate-900">Professional Translation Billing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Translation agencies across Germany, Switzerland, Austria, and Poland use the &ldquo;Normseite&rdquo; (standard page) standard, legally defined as 1,500 characters without spaces (or 55 keystrokes × 30 lines).
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2">
              <h3 className="text-base font-bold text-slate-900">University Grant Proposals &amp; Theses</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Peer-reviewed medical, scientific, and academic journals often prescribe strict limits excluding spaces so that authors are evaluated on content rather than indentation or formatting choices.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 pt-2">
            If you need to verify social media limits or include spaces, use our{' '}
            <Link href="/character-counter-with-spaces/" className="font-semibold text-emerald-700 underline hover:text-emerald-800">
              character counter with spaces
            </Link>{' '}
            or visit the primary{' '}
            <Link href="/" className="font-semibold text-emerald-700 underline hover:text-emerald-800">
              online character counter
            </Link>.
          </p>
        </div>

        {/* Comparison Box */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3">
          <h3 className="text-base font-bold text-slate-900">
            How Much Difference Do Spaces Make?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            In typical English writing, whitespace accounts for approximately <strong>15% to 20%</strong> of the total character count. For example, a 1,000-word article typically contains approximately 5,000 characters without spaces and roughly 6,000 characters with spaces.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-emerald-700" />
            Characters Without Spaces FAQs
          </h2>
          <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-xs">
            {WITHOUT_SPACES_FAQS.map((faq) => (
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
