'use client';

import React from 'react';
import {
  Copy,
  ClipboardPaste,
  Trash2,
  Undo2,
  Redo2,
  Download,
  Scissors,
  AlignLeft,
  Minimize2,
  Type,
  Check,
} from 'lucide-react';

interface TextTransformActionsProps {
  onCopy: () => void;
  onPaste: () => void;
  onClear: () => void;
  onSelectAll: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  onTrim: () => void;
  onRemoveExtraSpaces: () => void;
  onRemoveLineBreaks: () => void;
  onUppercase: () => void;
  onLowercase: () => void;
  onTitleCase: () => void;
  onSentenceCase: () => void;
  onDownload: () => void;
  hasText: boolean;
}

export function TextTransformActions({
  onCopy,
  onPaste,
  onClear,
  onSelectAll,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onTrim,
  onRemoveExtraSpaces,
  onRemoveLineBreaks,
  onUppercase,
  onLowercase,
  onTitleCase,
  onSentenceCase,
  onDownload,
  hasText,
}: TextTransformActionsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/90 bg-slate-50/80 px-3 py-2 text-xs">
      {/* Left group: Clipboard & History */}
      <div className="flex flex-wrap items-center gap-1">
        <button
          type="button"
          onClick={onCopy}
          disabled={!hasText}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          title="Copy text to clipboard"
          aria-label="Copy text to clipboard"
        >
          <Copy className="h-3.5 w-3.5" />
          <span>Copy</span>
        </button>

        <button
          type="button"
          onClick={onPaste}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 transition-colors"
          title="Paste text from clipboard"
          aria-label="Paste text from clipboard"
        >
          <ClipboardPaste className="h-3.5 w-3.5" />
          <span>Paste</span>
        </button>

        <button
          type="button"
          onClick={onSelectAll}
          disabled={!hasText}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          title="Select all text"
          aria-label="Select all text"
        >
          <Check className="h-3.5 w-3.5" />
          <span>Select All</span>
        </button>

        <div className="h-4 w-[1px] bg-slate-300 mx-1 hidden sm:block" />

        <button
          type="button"
          onClick={onUndo}
          disabled={!canUndo}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          title="Undo transformation"
          aria-label="Undo"
        >
          <Undo2 className="h-3.5 w-3.5" />
          <span>Undo</span>
        </button>

        <button
          type="button"
          onClick={onRedo}
          disabled={!canRedo}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          title="Redo transformation"
          aria-label="Redo"
        >
          <Redo2 className="h-3.5 w-3.5" />
          <span>Redo</span>
        </button>
      </div>

      {/* Right group: Text Transformations */}
      <div className="flex flex-wrap items-center gap-1">
        {/* Case conversions dropdown or inline buttons */}
        <div className="inline-flex items-center rounded-md bg-slate-200/70 p-0.5">
          <button
            type="button"
            onClick={onSentenceCase}
            disabled={!hasText}
            className="rounded px-1.5 py-0.5 font-medium text-slate-700 hover:bg-white hover:text-slate-900 disabled:opacity-40 transition-colors"
            title="Sentence case"
            aria-label="Convert to Sentence case"
          >
            Aa
          </button>
          <button
            type="button"
            onClick={onTitleCase}
            disabled={!hasText}
            className="rounded px-1.5 py-0.5 font-medium text-slate-700 hover:bg-white hover:text-slate-900 disabled:opacity-40 transition-colors"
            title="Title Case"
            aria-label="Convert to Title Case"
          >
            Title
          </button>
          <button
            type="button"
            onClick={onUppercase}
            disabled={!hasText}
            className="rounded px-1.5 py-0.5 font-medium text-slate-700 hover:bg-white hover:text-slate-900 disabled:opacity-40 transition-colors"
            title="UPPERCASE"
            aria-label="Convert to UPPERCASE"
          >
            UPPER
          </button>
          <button
            type="button"
            onClick={onLowercase}
            disabled={!hasText}
            className="rounded px-1.5 py-0.5 font-medium text-slate-700 hover:bg-white hover:text-slate-900 disabled:opacity-40 transition-colors"
            title="lowercase"
            aria-label="Convert to lowercase"
          >
            lower
          </button>
        </div>

        {/* Space cleaners */}
        <button
          type="button"
          onClick={onTrim}
          disabled={!hasText}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          title="Trim leading and trailing whitespace"
          aria-label="Trim whitespace"
        >
          <Scissors className="h-3.5 w-3.5" />
          <span className="hidden md:inline">Trim</span>
        </button>

        <button
          type="button"
          onClick={onRemoveExtraSpaces}
          disabled={!hasText}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          title="Remove extra spaces"
          aria-label="Remove extra spaces"
        >
          <Minimize2 className="h-3.5 w-3.5" />
          <span className="hidden md:inline">Clean Spaces</span>
        </button>

        <button
          type="button"
          onClick={onRemoveLineBreaks}
          disabled={!hasText}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          title="Remove all line breaks"
          aria-label="Remove line breaks"
        >
          <AlignLeft className="h-3.5 w-3.5" />
          <span className="hidden md:inline">Unbreak</span>
        </button>

        {/* Download TXT */}
        <button
          type="button"
          onClick={onDownload}
          disabled={!hasText}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
          title="Download text as .txt file"
          aria-label="Download TXT"
        >
          <Download className="h-3.5 w-3.5" />
          <span className="hidden lg:inline">.TXT</span>
        </button>

        {/* Clear Button */}
        <button
          type="button"
          onClick={onClear}
          disabled={!hasText}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium text-rose-600 hover:bg-rose-50 hover:text-rose-700 disabled:opacity-40 disabled:hover:bg-transparent transition-colors ml-1"
          title="Clear all text"
          aria-label="Clear all text"
        >
          <Trash2 className="h-3.5 w-3.5" />
          <span>Clear</span>
        </button>
      </div>
    </div>
  );
}
