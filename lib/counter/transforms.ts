/**
 * In-browser text transformation actions.
 * All functions are pure, fast, and process locally in memory.
 */

const MINOR_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'en', 'for', 'if', 'in',
  'nor', 'of', 'on', 'or', 'per', 'the', 'to', 'v', 'vs', 'via'
]);

/**
 * Capitalizes text according to standard Title Case conventions.
 */
export function toTitleCase(text: string): string {
  if (!text) return '';

  return text.replace(
    /([^\s:\-–—\(\)\[\]]+)/g,
    (match, word: string, index: number) => {
      const lower = word.toLowerCase();
      // Always capitalize first word or words after punctuation
      if (index === 0 || !MINOR_WORDS.has(lower)) {
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      }
      return lower;
    }
  );
}

/**
 * Capitalizes the first letter of each sentence.
 */
export function toSentenceCase(text: string): string {
  if (!text) return '';

  return text
    .toLowerCase()
    .replace(/(^\s*|[.!?…]\s+)([\p{L}])/gu, (_, prefix, char) => prefix + char.toUpperCase());
}

/**
 * Trims leading and trailing whitespace.
 */
export function trimWhitespace(text: string): string {
  return text.trim();
}

/**
 * Collapses consecutive spaces and tabs into a single space while preserving line breaks.
 */
export function removeExtraSpaces(text: string): string {
  return text
    .split(/\r?\n/)
    .map(line => line.replace(/[ \t]+/g, ' ').trim())
    .join('\n');
}

/**
 * Replaces all line breaks with a single space.
 */
export function removeLineBreaks(text: string): string {
  return text.replace(/\r?\n+/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Initiates a browser download of a text file.
 */
export function downloadAsTxtFile(text: string, filename = 'charcount-document.txt'): void {
  if (typeof window === 'undefined') return;

  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
