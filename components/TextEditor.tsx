'use client';

import React, { useRef, useState } from 'react';
import { TextTransformActions } from './TextTransformActions';
import { FileText, Upload } from 'lucide-react';

interface TextEditorProps {
  text: string;
  onChange: (value: string) => void;
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
  charCount: number;
  wordCount: number;
}

export function TextEditor({
  text,
  onChange,
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
  charCount,
  wordCount,
}: TextEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Handle native file drop (client-side only FileReader)
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('text/') || file.name.endsWith('.txt') || file.name.endsWith('.md')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result;
          if (typeof content === 'string') {
            onChange(content);
          }
        };
        reader.readAsText(file);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleSelectAllInternal = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.select();
    }
    onSelectAll();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`relative rounded-xl border bg-white shadow-xs transition-all ${
        isDragging
          ? 'border-emerald-500 ring-2 ring-emerald-400/30'
          : 'border-slate-200 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-400/20'
      }`}
    >
      {/* Action Toolbar */}
      <TextTransformActions
        onCopy={onCopy}
        onPaste={onPaste}
        onClear={onClear}
        onSelectAll={handleSelectAllInternal}
        onUndo={onUndo}
        onRedo={onRedo}
        canUndo={canUndo}
        canRedo={canRedo}
        onTrim={onTrim}
        onRemoveExtraSpaces={onRemoveExtraSpaces}
        onRemoveLineBreaks={onRemoveLineBreaks}
        onUppercase={onUppercase}
        onLowercase={onLowercase}
        onTitleCase={onTitleCase}
        onSentenceCase={onSentenceCase}
        onDownload={onDownload}
        hasText={text.length > 0}
      />

      {/* Textarea Area */}
      <div className="relative">
        <label htmlFor="main-character-counter-editor" className="sr-only">
          Character Counter Text Input
        </label>
        <textarea
          id="main-character-counter-editor"
          ref={textareaRef}
          value={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Start typing or paste your text here (Ctrl+V / Cmd+V)... Everything is counted instantly in your browser."
          rows={11}
          autoFocus
          className="w-full resize-y rounded-b-xl border-none p-4 sm:p-5 font-sans text-base leading-relaxed text-slate-800 placeholder-slate-400 outline-none focus:ring-0"
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />

        {/* Drag Overlay Hint */}
        {isDragging && (
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-b-xl bg-emerald-50/90 backdrop-blur-xs text-emerald-800 pointer-events-none">
            <Upload className="h-8 w-8 animate-bounce mb-2" />
            <p className="font-semibold text-sm">Drop text file here to load into counter</p>
          </div>
        )}
      </div>

      {/* Editor Status Bar */}
      <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-4 py-2 text-[11px] text-slate-600 rounded-b-xl font-medium">
        <div className="flex items-center gap-3">
          <span className="font-mono font-medium text-slate-800">
            {charCount.toLocaleString()} {charCount === 1 ? 'character' : 'characters'}
          </span>
          <span>•</span>
          <span className="font-mono font-medium text-slate-800">
            {wordCount.toLocaleString()} {wordCount === 1 ? 'word' : 'words'}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-slate-600 font-medium">
          <FileText className="h-3 w-3" />
          <span>Supports UTF-8, Emojis, Accents, and Multilingual Scripts</span>
        </div>
      </div>
    </div>
  );
}
