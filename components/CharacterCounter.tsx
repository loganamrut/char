'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { calculateTextStatistics, TextStatistics } from '@/lib/counter/stats';
import {
  trimWhitespace,
  removeExtraSpaces,
  removeLineBreaks,
  toTitleCase,
  toSentenceCase,
  downloadAsTxtFile,
} from '@/lib/counter/transforms';
import { StatCards } from './StatCards';
import { TextEditor } from './TextEditor';
import { CharacterLimitControl } from './CharacterLimitControl';
import { DetailedStats } from './DetailedStats';
import { PlatformLimitPresets } from './PlatformLimitPresets';
import { Toast } from './Toast';

export function CharacterCounter({ initialText = '' }: { initialText?: string }) {
  const [text, setText] = useState(initialText);
  const [history, setHistory] = useState<string[]>([initialText]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Character limit state
  const [limit, setLimit] = useState<number | null>(null);
  const [activePresetName, setActivePresetName] = useState<string | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3000);
  };

  // Push new state to undo/redo history
  const updateTextWithHistory = useCallback((newText: string) => {
    setText(newText);
    setHistory((prev) => {
      const nextHistory = prev.slice(0, historyIndex + 1);
      return [...nextHistory, newText];
    });
    setHistoryIndex((prev) => prev + 1);
  }, [historyIndex]);

  // Regular typing change (instantaneous without lag)
  const handleTextChange = useCallback((newText: string) => {
    setText(newText);
  }, []);

  // Compute text statistics efficiently
  const stats: TextStatistics = useMemo(() => {
    return calculateTextStatistics(text);
  }, [text]);

  // Undo / Redo
  const handleUndo = useCallback(() => {
    if (historyIndex > 0) {
      const prevText = history[historyIndex - 1];
      setHistoryIndex((prev) => prev - 1);
      setText(prevText);
      showToast('Action undone');
    }
  }, [history, historyIndex]);

  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const nextText = history[historyIndex + 1];
      setHistoryIndex((prev) => prev + 1);
      setText(nextText);
      showToast('Action redone');
    }
  }, [history, historyIndex]);

  // Text actions with multi-browser fallbacks
  const handleCopy = useCallback(async () => {
    if (!text) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        showToast('Copied to clipboard!');
        return;
      }
      throw new Error('Clipboard API unavailable');
    } catch (e) {
      // Cross-browser legacy fallback for mobile webviews & older browsers
      try {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = text;
        tempTextArea.style.position = 'fixed';
        tempTextArea.style.left = '-9999px';
        tempTextArea.style.top = '0';
        document.body.appendChild(tempTextArea);
        tempTextArea.focus();
        tempTextArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(tempTextArea);
        if (successful) {
          showToast('Copied to clipboard!');
          return;
        }
      } catch (err) {}
      showToast('Please select all text and copy manually.');
    }
  }, [text]);

  const handlePaste = useCallback(async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        const pasted = await navigator.clipboard.readText();
        if (pasted) {
          updateTextWithHistory(text ? text + '\n' + pasted : pasted);
          showToast('Text pasted from clipboard');
          return;
        }
      }
      throw new Error('Paste blocked');
    } catch (e) {
      showToast('Clipboard access was blocked. Use Ctrl+V / Cmd+V or long-press to paste.');
    }
  }, [text, updateTextWithHistory]);

  const handleClear = useCallback(() => {
    if (!text) return;
    updateTextWithHistory('');
    showToast('Text cleared. Click Undo to restore.');
  }, [text, updateTextWithHistory]);

  const handleSelectAll = useCallback(() => {
    showToast('All text selected');
  }, []);

  // Text transformations
  const handleTrim = useCallback(() => {
    const trimmed = trimWhitespace(text);
    if (trimmed !== text) {
      updateTextWithHistory(trimmed);
      showToast('Whitespace trimmed');
    }
  }, [text, updateTextWithHistory]);

  const handleRemoveExtraSpaces = useCallback(() => {
    const cleaned = removeExtraSpaces(text);
    if (cleaned !== text) {
      updateTextWithHistory(cleaned);
      showToast('Extra spaces removed');
    }
  }, [text, updateTextWithHistory]);

  const handleRemoveLineBreaks = useCallback(() => {
    const cleaned = removeLineBreaks(text);
    if (cleaned !== text) {
      updateTextWithHistory(cleaned);
      showToast('Line breaks removed');
    }
  }, [text, updateTextWithHistory]);

  const handleUppercase = useCallback(() => {
    const upper = text.toUpperCase();
    if (upper !== text) {
      updateTextWithHistory(upper);
      showToast('Converted to UPPERCASE');
    }
  }, [text, updateTextWithHistory]);

  const handleLowercase = useCallback(() => {
    const lower = text.toLowerCase();
    if (lower !== text) {
      updateTextWithHistory(lower);
      showToast('Converted to lowercase');
    }
  }, [text, updateTextWithHistory]);

  const handleTitleCase = useCallback(() => {
    const titled = toTitleCase(text);
    if (titled !== text) {
      updateTextWithHistory(titled);
      showToast('Converted to Title Case');
    }
  }, [text, updateTextWithHistory]);

  const handleSentenceCase = useCallback(() => {
    const sentenced = toSentenceCase(text);
    if (sentenced !== text) {
      updateTextWithHistory(sentenced);
      showToast('Converted to Sentence case');
    }
  }, [text, updateTextWithHistory]);

  const handleDownload = useCallback(() => {
    if (!text) return;
    downloadAsTxtFile(text);
    showToast('Document downloaded as .txt');
  }, [text]);

  const handleSelectPreset = useCallback((newLimit: number, name: string) => {
    setLimit(newLimit);
    setActivePresetName(name);
    showToast(`Limit set to ${newLimit.toLocaleString()} chars (${name})`);
  }, []);

  const handleSetCustomLimit = useCallback((newLimit: number | null) => {
    setLimit(newLimit);
    if (newLimit === null) {
      setActivePresetName(null);
    }
  }, []);

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* 1. Primary Live Stat Cards */}
      <StatCards stats={stats} />

      {/* 2. Main Text Editor */}
      <TextEditor
        text={text}
        onChange={handleTextChange}
        onCopy={handleCopy}
        onPaste={handlePaste}
        onClear={handleClear}
        onSelectAll={handleSelectAll}
        onUndo={handleUndo}
        onRedo={handleRedo}
        canUndo={historyIndex > 0}
        canRedo={historyIndex < history.length - 1}
        onTrim={handleTrim}
        onRemoveExtraSpaces={handleRemoveExtraSpaces}
        onRemoveLineBreaks={handleRemoveLineBreaks}
        onUppercase={handleUppercase}
        onLowercase={handleLowercase}
        onTitleCase={handleTitleCase}
        onSentenceCase={handleSentenceCase}
        onDownload={handleDownload}
        charCount={stats.characters}
        wordCount={stats.words}
      />

      {/* 3. Character Limit Monitor */}
      <CharacterLimitControl
        currentCount={stats.characters}
        limit={limit}
        onSetLimit={handleSetCustomLimit}
        activePresetName={activePresetName}
      />

      {/* 4. Detailed Statistics Drawer */}
      <DetailedStats stats={stats} />

      {/* 5. Interactive Social Media & SEO Presets */}
      <PlatformLimitPresets
        currentLimit={limit}
        onSelectPreset={handleSelectPreset}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}
