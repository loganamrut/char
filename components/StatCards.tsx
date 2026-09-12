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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3" role="region" aria-label="Quick Text Statistics">
      {items.map((item) => (
        <div
          key={item.id}
          className={`relative flex flex-col justify-between rounded-xl border p-3 sm:p-3.5 transition-all ${
            item.primary
              ? 'border-emerald-200/80 bg-emerald-50/40 shadow-xs'
              : 'border-slate-200/80 bg-white shadow-xs'
          }`}
        >
          <div className="flex items-baseline justify-between gap-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {item.label}
            </span>
          </div>

          <div className="mt-1 flex items-baseline gap-1.5">
            <span
              className={`font-mono text-2xl sm:text-3xl font-bold tracking-tight ${
                item.primary ? 'text-slate-900' : 'text-slate-800'
              }`}
              aria-live="polite"
            >
              {item.value}
            </span>
          </div>

          <span className="mt-0.5 text-[11px] text-slate-400 font-medium truncate">
            {item.sublabel}
          </span>
        </div>
      ))}
    </div>
  );
}
