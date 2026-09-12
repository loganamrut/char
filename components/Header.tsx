'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2.5 sm:px-6 sm:py-3">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2 text-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md py-1"
            aria-label="CharCount.dev homepage"
          >
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-emerald-600 font-mono text-base sm:text-lg font-bold text-white shadow-xs group-hover:bg-emerald-700 transition-colors">
              #
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                CharCount<span className="text-emerald-700">.dev</span>
              </span>
            </div>
          </Link>

          <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-800 border border-emerald-200/60">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
            100% Private (In-Browser)
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {SITE_CONFIG.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 rounded px-2 py-1.5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button (min 44x44 tap target for WCAG touch compliance) */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle main navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-3 md:hidden shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {SITE_CONFIG.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-medium px-3 py-2 bg-emerald-50/50 rounded-lg">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>100% Client-Side. Your text never leaves this device.</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
