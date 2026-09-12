'use client';

import React, { useState } from 'react';
import { PLATFORM_LIMITS } from '@/lib/constants/platform-limits';
import { Share2, ArrowUpRight, Check } from 'lucide-react';

interface PlatformLimitPresetsProps {
  currentLimit: number | null;
  onSelectPreset: (limit: number, name: string) => void;
}

export function PlatformLimitPresets({
  currentLimit,
  onSelectPreset,
}: PlatformLimitPresetsProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'social' | 'seo' | 'messaging'>('all');

  const filteredLimits = activeCategory === 'all'
    ? PLATFORM_LIMITS
    : PLATFORM_LIMITS.filter(p => p.category === activeCategory);

  return (
    <section id="character-limits" className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Share2 className="h-4 w-4 text-emerald-700 shrink-0" aria-hidden="true" />
            Social Media &amp; SEO Character Limits
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Tap any preset card to load its character limit directly into the live counter.
          </p>
        </div>

        {/* Filter buttons with touch-friendly heights */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 table-container" role="tablist">
          {[
            { id: 'all', label: 'All' },
            { id: 'social', label: 'Social' },
            { id: 'seo', label: 'SEO' },
            { id: 'messaging', label: 'SMS' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`inline-flex min-h-[34px] items-center justify-center rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
                activeCategory === tab.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 active:bg-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Limits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredLimits.map((item) => {
          const isSelected = currentLimit === item.limit;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectPreset(item.limit, item.name)}
              className={`w-full text-left group flex flex-col justify-between rounded-xl border p-3.5 sm:p-4 cursor-pointer transition-all hover:border-emerald-500 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1.5">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {item.name}
                  </span>
                  <span className="inline-flex items-center gap-0.5 rounded-md bg-white px-2 py-0.5 font-mono text-xs font-bold text-emerald-800 border border-slate-200 shadow-2xs">
                    {isSelected ? <Check className="h-3 w-3 text-emerald-700" /> : null}
                    {item.limit.toLocaleString()}
                  </span>
                </div>

                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {item.details && (
                  <p className="mt-1 text-[11px] text-slate-600 italic leading-snug">
                    {item.details}
                  </p>
                )}
              </div>

              <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-slate-200/60 text-[11px]">
                <span className="text-slate-600 capitalize font-medium">{item.category}</span>
                <span className="inline-flex items-center gap-0.5 font-semibold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                  {isSelected ? 'Active limit' : 'Use limit'} <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
