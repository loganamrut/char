import React from 'react';
import Link from 'next/link';
import { ArrowRight, Type, FileText, AlignLeft, Hash, Layers } from 'lucide-react';

const TOOLS = [
  {
    title: 'Word Counter',
    href: '/word-counter/',
    description: 'Track word count, reading level, keyword density, and sentence complexity for essays and articles.',
    icon: FileText,
  },
  {
    title: 'Letter Counter',
    href: '/letter-counter/',
    description: 'Filter out spaces, numbers, and symbols to count pure alphabetic letters across languages.',
    icon: Type,
  },
  {
    title: 'Sentence Counter',
    href: '/sentence-counter/',
    description: 'Analyze sentence structure, count sentence lengths, and check readability metrics.',
    icon: AlignLeft,
  },
  {
    title: 'With Spaces Counter',
    href: '/character-counter-with-spaces/',
    description: 'Calculate exact character counts including spaces for SMS, social posts, and hard character caps.',
    icon: Hash,
  },
  {
    title: 'Without Spaces Counter',
    href: '/character-counter-without-spaces/',
    description: 'Calculate character counts excluding whitespace for academic papers, publishing, and translation quotes.',
    icon: Layers,
  },
];

export function RelatedTools() {
  return (
    <section className="space-y-4 pt-4" aria-labelledby="related-tools-heading">
      <div className="border-b border-slate-200 pb-3">
        <h2 id="related-tools-heading" className="text-xl font-bold text-slate-900">
          Related Writing &amp; Text Analysis Tools
        </h2>
        <p className="text-xs text-slate-600 mt-0.5">
          Dedicated text utilities built with the same 100% private, client-side architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-emerald-500 hover:shadow-xs focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {tool.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                <span>Use tool</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
