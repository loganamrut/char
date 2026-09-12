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
    <div className="rounded-xl border border-slate-200 bg-white p-3.5 sm:p-4 shadow-xs space-y-3.5">
      {/* Header & Limit Input */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Target className="h-4 w-4 text-emerald-700 shrink-0" aria-hidden="true" />
          <h2 className="text-sm font-semibold text-slate-900">
            Character Limit Checker
          </h2>
          {activePresetName && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 truncate max-w-[150px]">
              {activePresetName}
            </span>
          )}
        </div>

        {/* Custom Input */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <label htmlFor="custom-limit-input" className="text-xs text-slate-600 font-medium">
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
              className="h-9 w-28 rounded-lg border border-slate-200 px-3 font-mono text-sm text-slate-800 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              aria-label="Set custom character limit"
            />
            {hasLimit && (
              <button
                type="button"
                onClick={() => onSetLimit(null)}
                className="absolute right-2 text-slate-500 hover:text-slate-800 p-0.5"
                title="Remove character limit"
                aria-label="Remove character limit"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Progress & Remaining Indicator */}
      {hasLimit ? (
        <div className="space-y-2 pt-0.5">
          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 text-xs">
            <div className="flex items-center gap-1.5 font-mono font-medium text-slate-800">
              <span>{currentCount.toLocaleString()}</span>
              <span className="text-slate-600 font-bold">/</span>
              <span>{limit.toLocaleString()}</span>
              <span className="text-slate-600 font-sans">({percentage}%)</span>
            </div>

            <div
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-medium text-xs self-start xs:self-auto ${badgeColor}`}
              aria-live="polite"
            >
              {isOver ? (
                <>
                  <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                  <span>{Math.abs(remaining!).toLocaleString()} characters over limit</span>
                </>
              ) : isNear ? (
                <>
                  <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                  <span>{remaining!.toLocaleString()} characters remaining</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>{remaining!.toLocaleString()} characters remaining</span>
                </>
              )}
            </div>
          </div>

          {/* Visual Progress Bar */}
          <div
            className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100"
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
        <p className="text-xs text-slate-600 font-medium">
          Set a custom character limit or select a preset below to see live countdown and progress alerts.
        </p>
      )}

      {/* Preset Buttons with friendly touch targets */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100">
        <span className="text-xs font-medium text-slate-600 mr-1 hidden xs:inline">Presets:</span>
        {COMMON_NUMERIC_PRESETS.map((p) => {
          const isSelected = limit === p;
          return (
            <button
              key={p}
              type="button"
              onClick={() => onSetLimit(p)}
              className={`inline-flex min-h-[34px] items-center justify-center rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-xs ring-1 ring-emerald-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 active:bg-slate-300'
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
            className="inline-flex min-h-[34px] items-center justify-center rounded-lg border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
