'use client';

import React from 'react';
import { COMMON_NUMERIC_PRESETS } from '@/lib/constants/platform-limits';
import { Target, AlertTriangle, CheckCircle2, X } from 'lucide-react';

interface CharacterLimitControlProps {
  currentCount: number;
  limit: number | null;
  onSetLimit: (limit: number | null) => void;
  activePresetName?: string | null;
}

export function CharacterLimitControl({
  currentCount,
  limit,
  onSetLimit,
  activePresetName,
}: CharacterLimitControlProps) {
  const hasLimit = limit !== null && limit > 0;
  const remaining = hasLimit ? limit - currentCount : null;
  const percentage = hasLimit ? Math.min(100, Math.round((currentCount / limit) * 100)) : 0;
  const isOver = hasLimit && currentCount > limit;
  const isNear = hasLimit && !isOver && percentage >= 85;

  // Determine status color styling
  let progressColor = 'bg-emerald-500';
  let badgeColor = 'bg-emerald-50 text-emerald-700 border-emerald-200';

  if (isOver) {
    progressColor = 'bg-rose-500';
    badgeColor = 'bg-rose-50 text-rose-700 border-rose-200 animate-pulse';
  } else if (isNear) {
    progressColor = 'bg-amber-500';
    badgeColor = 'bg-amber-50 text-amber-700 border-amber-200';
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs space-y-3.5">
      {/* Header & Limit Input */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Target className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          <h2 className="text-sm font-semibold text-slate-900">
            Character Limit Checker
          </h2>
          {activePresetName && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
              {activePresetName}
            </span>
          )}
        </div>

        {/* Custom Input */}
        <div className="flex items-center gap-2">
          <label htmlFor="custom-limit-input" className="text-xs text-slate-500 font-medium">
            Limit:
          </label>
          <div className="relative flex items-center">
            <input
              id="custom-limit-input"
              type="number"
              min="1"
              max="1000000"
              placeholder="e.g. 280"
              value={limit ?? ''}
              onChange={(e) => {
                const val = e.target.value.trim();
                onSetLimit(val ? Math.max(1, parseInt(val, 10)) : null);
              }}
              className="h-8 w-24 rounded-lg border border-slate-200 px-2.5 font-mono text-sm text-slate-800 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              aria-label="Set custom character limit"
            />
            {hasLimit && (
              <button
                type="button"
                onClick={() => onSetLimit(null)}
                className="absolute right-1.5 text-slate-400 hover:text-slate-600"
                title="Remove character limit"
                aria-label="Remove character limit"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Progress & Remaining Indicator */}
      {hasLimit ? (
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 font-mono font-medium text-slate-700">
              <span>{currentCount.toLocaleString()}</span>
              <span className="text-slate-400">/</span>
              <span>{limit.toLocaleString()}</span>
              <span className="text-slate-400 font-sans">({percentage}%)</span>
            </div>

            <div
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-medium ${badgeColor}`}
              aria-live="polite"
            >
              {isOver ? (
                <>
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span>{Math.abs(remaining!).toLocaleString()} characters over limit</span>
                </>
              ) : isNear ? (
                <>
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span>{remaining!.toLocaleString()} characters remaining</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>{remaining!.toLocaleString()} characters remaining</span>
                </>
              )}
            </div>
          </div>

          {/* Visual Progress Bar */}
          <div
            className="h-2 w-full overflow-hidden rounded-full bg-slate-100"
            role="progressbar"
            aria-valuenow={currentCount}
            aria-valuemin={0}
            aria-valuemax={limit}
            aria-label="Character limit progress"
          >
            <div
              className={`h-full transition-all duration-200 ${progressColor}`}
              style={{ width: `${Math.min(100, (currentCount / limit) * 100)}%` }}
            />
          </div>
        </div>
      ) : (
        <p className="text-xs text-slate-500">
          Set a custom character limit or select a preset below to see live countdown and progress alerts.
        </p>
      )}

      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100">
        <span className="text-xs font-medium text-slate-400 mr-1">Presets:</span>
        {COMMON_NUMERIC_PRESETS.map((p) => {
          const isSelected = limit === p;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onSetLimit(p)}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                isSelected
                  ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {p.toLocaleString()}
            </button>
          );
        })}
        {hasLimit && (
          <button
            type="button"
            onClick={() => onSetLimit(null)}
            className="rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
