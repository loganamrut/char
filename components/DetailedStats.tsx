'use client';

import React, { useState } from 'react';
import { TextStatistics, formatTime } from '@/lib/counter/stats';
import { BookOpen, Mic, Sparkles, ChevronDown, ChevronUp, Layers, Info } from 'lucide-react';

interface DetailedStatsProps {
  stats: TextStatistics;
}

export function DetailedStats({ stats }: DetailedStatsProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-emerald-700" aria-hidden="true" />
          <h2 className="text-sm font-semibold text-slate-900">
            Detailed Text Statistics & Reading Metrics
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
          <span>{isOpen ? 'Collapse' : 'Expand'}</span>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-slate-600" />
          ) : (
            <ChevronDown className="h-4 w-4 text-slate-600" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-slate-100 p-4 sm:p-5 space-y-5">
          {/* Reading & Speaking Times */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/70 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-100 text-blue-700">
                <BookOpen className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-slate-600 font-medium">Reading Time</div>
                <div className="font-mono text-base font-bold text-slate-800">
                  {formatTime(stats.readingTimeSeconds)}
                </div>
                <div className="text-[11px] text-slate-600 font-medium">@ 225 WPM</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/70 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                <Mic className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-slate-600 font-medium">Speaking Time</div>
                <div className="font-mono text-base font-bold text-slate-800">
                  {formatTime(stats.speakingTimeSeconds)}
                </div>
                <div className="text-[11px] text-slate-600 font-medium">@ 135 WPM</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/70 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-purple-100 text-purple-700">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-slate-600 font-medium">Avg Word Length</div>
                <div className="font-mono text-base font-bold text-slate-800">
                  {stats.avgWordLength} <span className="text-xs font-normal text-slate-600">chars</span>
                </div>
                <div className="text-[11px] text-slate-600 font-medium">Excluding spaces</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/70 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                <Info className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-slate-600 font-medium">Avg Sentence</div>
                <div className="font-mono text-base font-bold text-slate-800">
                  {stats.avgSentenceLength} <span className="text-xs font-normal text-slate-600">words</span>
                </div>
                <div className="text-[11px] text-slate-600 font-medium">Words per sentence</div>
              </div>
            </div>
          </div>

          {/* Character Breakdown Grid */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2.5">
              Character Classification Breakdown
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              <div className="rounded-lg border border-slate-100 bg-slate-50/40 p-2.5 text-center">
                <div className="text-xs text-slate-600 font-medium">Letters</div>
                <div className="font-mono text-lg font-bold text-slate-800">{stats.letters}</div>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/40 p-2.5 text-center">
                <div className="text-xs text-slate-600 font-medium">Numbers</div>
                <div className="font-mono text-lg font-bold text-slate-800">{stats.numbers}</div>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/40 p-2.5 text-center">
                <div className="text-xs text-slate-600 font-medium">Spaces</div>
                <div className="font-mono text-lg font-bold text-slate-800">{stats.spaces}</div>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/40 p-2.5 text-center">
                <div className="text-xs text-slate-600 font-medium">Punctuation</div>
                <div className="font-mono text-lg font-bold text-slate-800">{stats.punctuation}</div>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/40 p-2.5 text-center">
                <div className="text-xs text-slate-600 font-medium">Symbols</div>
                <div className="font-mono text-lg font-bold text-slate-800">{stats.symbols}</div>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/40 p-2.5 text-center">
                <div className="text-xs text-slate-600 font-medium">Emojis</div>
                <div className="font-mono text-lg font-bold text-slate-800">{stats.emojis}</div>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/40 p-2.5 text-center">
                <div className="text-xs text-slate-600 font-medium">UTF-16 Units</div>
                <div className="font-mono text-lg font-bold text-slate-800">{stats.codeUnits}</div>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/40 p-2.5 text-center">
                <div className="text-xs text-slate-600 font-medium">UTF-8 Bytes</div>
                <div className="font-mono text-lg font-bold text-slate-800">{stats.byteSize}</div>
              </div>
            </div>
          </div>

          {/* Longest Elements */}
          {(stats.longestWord || stats.longestSentence) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs border-t border-slate-100">
              {stats.longestWord && (
                <div className="flex flex-col gap-1 rounded-lg bg-slate-50 p-2.5">
                  <span className="font-semibold text-slate-600">Longest Word:</span>
                  <span className="font-mono text-slate-800 break-all font-medium">
                    &ldquo;{stats.longestWord}&rdquo; ({stats.longestWord.length} chars)
                  </span>
                </div>
              )}
              {stats.longestSentence && (
                <div className="flex flex-col gap-1 rounded-lg bg-slate-50 p-2.5">
                  <span className="font-semibold text-slate-600">Longest Sentence:</span>
                  <span className="text-slate-800 font-medium line-clamp-2">
                    &ldquo;{stats.longestSentence}&rdquo;
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
