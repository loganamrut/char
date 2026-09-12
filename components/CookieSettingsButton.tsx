'use client';

import React from 'react';
import { Settings } from 'lucide-react';
import { openCookieSettings } from '@/lib/cookies/consent';

interface CookieSettingsButtonProps {
  className?: string;
  variant?: 'footer' | 'inline';
}

export function CookieSettingsButton({
  className = '',
  variant = 'footer',
}: CookieSettingsButtonProps) {
  if (variant === 'inline') {
    return (
      <button
        type="button"
        onClick={() => openCookieSettings()}
        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-sm ${className}`}
      >
        <Settings className="h-3.5 w-3.5 text-emerald-700" />
        Manage Cookie Preferences
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => openCookieSettings()}
      className={`text-slate-600 hover:text-emerald-700 transition-colors py-1 inline-flex items-center gap-1 text-sm text-left ${className}`}
    >
      <Settings className="h-3.5 w-3.5" />
      Cookie Preferences
    </button>
  );
}
