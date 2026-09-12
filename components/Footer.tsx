import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Cpu } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-900 font-bold text-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-600 font-mono text-sm text-white">#</span>
              CharCount.dev
            </Link>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              Fast, accurate, Unicode-aware character counter and writing analysis utility. 
              Engineered with a privacy-first architecture—all text segmentation and statistical counting run 100% locally in your browser.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 pt-1">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
                <ShieldCheck className="h-3.5 w-3.5" /> No text stored or transmitted
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                <Cpu className="h-3.5 w-3.5" /> Client-side Unicode segmentation
              </span>
            </div>
          </div>

          {/* Tools Silo Col */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Text Counting Tools
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {SITE_CONFIG.footerLinks.tools.map((tool) => (
                <li key={tool.label}>
                  <Link href={tool.href} className="hover:text-emerald-600 transition-colors py-1 inline-block">
                    {tool.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & About Col */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Information & Legal
            </h3>
            <ul className="mt-3 space-y-1 text-sm">
              {SITE_CONFIG.footerLinks.legal.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-emerald-600 transition-colors py-1 inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} CharCount.dev. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Zero trackers • Zero external font requests • Zero third-party ads in editor
          </p>
        </div>
      </div>
    </footer>
  );
}
