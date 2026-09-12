/**
 * Unicode-aware segmentation utilities.
 * Uses Intl.Segmenter where available for standard-compliant grapheme cluster,
 * word, and sentence boundary identification, with robust fallbacks.
 */

// Check for Intl.Segmenter support once
export const hasIntlSegmenter = typeof Intl !== 'undefined' && 'Segmenter' in Intl;

let graphemeSegmenter: Intl.Segmenter | null = null;
let wordSegmenter: Intl.Segmenter | null = null;
let sentenceSegmenter: Intl.Segmenter | null = null;

if (hasIntlSegmenter) {
  try {
    graphemeSegmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
    wordSegmenter = new Intl.Segmenter(undefined, { granularity: 'word' });
    sentenceSegmenter = new Intl.Segmenter(undefined, { granularity: 'sentence' });
  } catch (e) {
    // Graceful fallback if parameters aren't supported
  }
}

/**
 * Splits text into user-perceived grapheme clusters (visual characters).
 * Accurately treats emojis (including skin tone modifiers, multi-person ZWJ sequences),
 * combining accent marks, and Indic/CJK scripts.
 */
export function getGraphemeClusters(text: string): string[] {
  if (!text) return [];

  if (graphemeSegmenter) {
    const clusters: string[] = [];
    for (const { segment } of graphemeSegmenter.segment(text)) {
      clusters.push(segment);
    }
    return clusters;
  }

  // Fallback: match surrogate pairs or standard characters
  const surrogateRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g;
  return text.match(surrogateRegex) || Array.from(text);
}

/**
 * Splits text into words using Unicode-aware word boundaries.
 */
export function getWords(text: string): string[] {
  if (!text.trim()) return [];

  if (wordSegmenter) {
    const words: string[] = [];
    for (const { segment, isWordLike } of wordSegmenter.segment(text)) {
      if (isWordLike && segment.trim()) {
        words.push(segment);
      }
    }
    return words;
  }

  // Fallback: match continuous sequences of Unicode letters/numbers/marks
  try {
    const unicodeWords = text.match(/[\p{L}\p{N}\p{M}]+(?:['’\-][\p{L}\p{N}\p{M}]+)*/gu);
    if (unicodeWords) return unicodeWords;
  } catch (e) {
    // Fallback if Unicode property escapes aren't available
  }

  return text.trim().split(/\s+/).filter(Boolean);
}

/**
 * Splits text into sentences.
 */
export function getSentences(text: string): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];

  if (sentenceSegmenter) {
    const sentences: string[] = [];
    for (const { segment } of sentenceSegmenter.segment(trimmed)) {
      const s = segment.trim();
      if (s) {
        sentences.push(s);
      }
    }
    return sentences;
  }

  // Fallback: split on sentence terminal punctuation followed by space or end of text
  const rawSentences = trimmed.split(/(?<=[.!?…])\s+/);
  return rawSentences.map(s => s.trim()).filter(Boolean);
}
