'use client';

import React, { useState } from 'react';
import { PLATFORM_LIMITS, PlatformLimit } from '@/lib/constants/platform-limits';
import { Share2, Search, MessageSquare, ArrowUpRight, Check } from 'lucide-react';

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
    <section id="character-limits" className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Share2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            Social Media & SEO Character Limits
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Click any platform preset to load its exact character limit into the counter.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0" role="tablist">
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
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                activeCategory === tab.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
            <div
              key={item.id}
              onClick={() => onSelectPreset(item.limit, item.name)}
              className={`group flex flex-col justify-between rounded-lg border p-3 cursor-pointer transition-all hover:border-emerald-400 hover:shadow-xs ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-50/50 ring-1 ring-emerald-500'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-white'
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectPreset(item.limit, item.name);
                }
              }}
              aria-label={`Load ${item.name} limit of ${item.limit} characters`}
            >
              <div>
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                    {item.name}
                  </span>
                  <span className="inline-flex items-center gap-0.5 rounded bg-white px-1.5 py-0.5 font-mono text-xs font-bold text-emerald-700 border border-slate-200 shadow-2xs">
                    {isSelected ? <Check className="h-3 w-3 text-emerald-600" /> : null}
                    {item.limit.toLocaleString()}
                  </span>
                </div>

                <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
                  {item.description}
                </p>

                {item.details && (
                  <p className="mt-1 text-[10px] text-slate-400 italic">
                    {item.details}
                  </p>
                )}
              </div>

              <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-slate-200/60 text-[11px]">
                <span className="text-slate-400 capitalize font-medium">{item.category}</span>
                <span className="inline-flex items-center gap-0.5 font-semibold text-emerald-600 group-hover:translate-x-0.5 transition-transform">
                  {isSelected ? 'Active limit' : 'Use limit'} <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
