'use client';

import React from 'react';
import { TextStatistics } from '@/lib/counter/stats';

interface StatCardsProps {
  stats: TextStatistics;
}

export function StatCards({ stats }: StatCardsProps) {
  const items = [
    {
      id: 'chars-with-spaces',
      label: 'Characters',
      sublabel: 'with spaces',
      value: stats.characters.toLocaleString(),
      primary: true,
    },
    {
      id: 'chars-without-spaces',
      label: 'Characters',
      sublabel: 'no spaces',
      value: stats.charactersNoSpaces.toLocaleString(),
      primary: true,
    },
    {
      id: 'words',
      label: 'Words',
      sublabel: 'total words',
      value: stats.words.toLocaleString(),
      primary: true,
    },
    {
      id: 'sentences',
      label: 'Sentences',
      sublabel: 'complete units',
      value: stats.sentences.toLocaleString(),
      primary: false,
    },
    {
      id: 'paragraphs',
      label: 'Paragraphs',
      sublabel: 'blocks',
      value: stats.paragraphs.toLocaleString(),
      primary: false,
    },
    {
      id: 'lines',
      label: 'Lines',
      sublabel: 'line breaks',
      value: stats.lines.toLocaleString(),
      primary: false,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3" role="region" aria-label="Quick Text Statistics">
      {items.map((item) => (
        <div
          key={item.id}
          className={`relative flex flex-col justify-between rounded-xl border p-2.5 sm:p-3.5 transition-all ${
            item.primary
              ? 'border-emerald-300/80 bg-emerald-50/50 shadow-xs ring-1 ring-emerald-500/10'
              : 'border-slate-200/90 bg-white shadow-xs'
          }`}
        >
          <div className="flex items-baseline justify-between gap-1">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600 truncate">
              {item.label}
            </span>
          </div>

          <div className="my-0.5 sm:my-1 flex items-baseline gap-1.5 overflow-hidden">
            <span
              className={`font-mono text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight truncate ${
                item.primary ? 'text-slate-900' : 'text-slate-800'
              }`}
              aria-live="polite"
            >
              {item.value}
            </span>
          </div>

          <span className="text-[10px] sm:text-[11px] text-slate-600 font-medium truncate">
            {item.sublabel}
          </span>
        </div>
      ))}
    </div>
  );
}
