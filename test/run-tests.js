const assert = require('assert');

function getGraphemeClusters(text) {
  if (!text) return [];
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
    const clusters = [];
    for (const { segment } of segmenter.segment(text)) {
      clusters.push(segment);
    }
    return clusters;
  }
  return text.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || Array.from(text);
}

function getWords(text) {
  if (!text.trim()) return [];
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'word' });
    const words = [];
    for (const { segment, isWordLike } of segmenter.segment(text)) {
      if (isWordLike && segment.trim()) {
        words.push(segment);
      }
    }
    return words;
  }
  return text.trim().split(/\s+/).filter(Boolean);
}

const emojiRegex = /\p{Extended_Pictographic}/u;
const unicodeLetterRegex = /\p{L}/u;
const unicodeNumberRegex = /\p{N}/u;
const unicodePunctuationRegex = /\p{P}/u;
const unicodeSymbolRegex = /\p{S}/u;

function calculateTextStatistics(text) {
  if (!text) {
    return {
      characters: 0,
      charactersNoSpaces: 0,
      words: 0,
      paragraphs: 0,
      lines: 0,
      letters: 0,
      numbers: 0,
      spaces: 0,
      punctuation: 0,
      symbols: 0,
      emojis: 0,
      codeUnits: 0,
      byteSize: 0,
    };
  }

  const graphemes = getGraphemeClusters(text);
  const characters = graphemes.length;

  let charactersNoSpaces = 0;
  let letters = 0;
  let numbers = 0;
  let spaces = 0;
  let punctuation = 0;
  let symbols = 0;
  let emojis = 0;

  for (let i = 0; i < graphemes.length; i++) {
    const g = graphemes[i];
    const code = g.charCodeAt(0);

    // Fast-path: Single ASCII character
    if (code < 128 && g.length === 1) {
      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        letters++;
        charactersNoSpaces++;
      } else if (code >= 48 && code <= 57) {
        numbers++;
        charactersNoSpaces++;
      } else if (code === 32 || code === 9 || code === 10 || code === 13) {
        spaces++;
      } else if (
        (code >= 33 && code <= 47) ||
        (code >= 58 && code <= 64) ||
        (code >= 91 && code <= 96) ||
        (code >= 123 && code <= 126)
      ) {
        if (code === 36 || code === 43 || code === 60 || code === 61 || code === 62 || code === 94 || code === 96 || code === 124 || code === 126) {
          symbols++;
        } else {
          punctuation++;
        }
        charactersNoSpaces++;
      } else {
        symbols++;
        charactersNoSpaces++;
      }
      continue;
    }

    // Unicode path
    const isSpace = /^\s+$/.test(g);
    if (isSpace) {
      spaces++;
    } else {
      charactersNoSpaces++;
      if (emojiRegex.test(g)) {
        emojis++;
      } else if (unicodeLetterRegex.test(g)) {
        letters++;
      } else if (unicodeNumberRegex.test(g)) {
        numbers++;
      } else if (unicodePunctuationRegex.test(g)) {
        punctuation++;
      } else if (unicodeSymbolRegex.test(g)) {
        symbols++;
      }
    }
  }

  const wordsList = getWords(text);
  const words = wordsList.length;
  const rawParagraphs = text.split(/\r?\n+/).filter(p => p.trim().length > 0);
  const paragraphs = rawParagraphs.length;
  const lines = text.split(/\r?\n/).length;
  const codeUnits = text.length;
  const byteSize = Buffer.from(text, 'utf-8').length;

  return {
    characters,
    charactersNoSpaces,
    words,
    paragraphs,
    lines,
    letters,
    numbers,
    spaces,
    punctuation,
    symbols,
    emojis,
    codeUnits,
    byteSize,
  };
}

let passed = 0;
let total = 0;

function test(name, fn) {
  total++;
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error(err);
  }
}

console.log('Running CharCount.dev Test Suite...\n');

// 1. Basic "hello world"
test('hello world', () => {
  const res = calculateTextStatistics('hello world');
  assert.strictEqual(res.characters, 11, 'characters with spaces must be 11');
  assert.strictEqual(res.charactersNoSpaces, 10, 'characters without spaces must be 10');
  assert.strictEqual(res.words, 2, 'words must be 2');
  assert.strictEqual(res.spaces, 1, 'spaces must be 1');
});

// 2. "Hello, world!" with punctuation
test('Hello, world! with punctuation', () => {
  const res = calculateTextStatistics('Hello, world!');
  assert.strictEqual(res.characters, 13, 'characters with spaces must be 13');
  assert.strictEqual(res.charactersNoSpaces, 12, 'characters without spaces must be 12');
  assert.strictEqual(res.words, 2, 'words must be 2');
  assert.strictEqual(res.punctuation, 2, 'punctuation must be 2 (, and !)');
});

// 3. Unicode diacritics: "café"
test('Unicode diacritics: café', () => {
  const res = calculateTextStatistics('café');
  assert.strictEqual(res.characters, 4, 'café has 4 grapheme characters');
  assert.strictEqual(res.letters, 4, 'café has 4 letters');
  assert.strictEqual(res.words, 1, 'café is 1 word');
});

// 4. Simple Emoji: "😀"
test('Simple Emoji: 😀', () => {
  const res = calculateTextStatistics('😀');
  assert.strictEqual(res.characters, 1, '😀 is 1 visual character');
  assert.strictEqual(res.emojis, 1, '😀 is 1 emoji');
  assert.strictEqual(res.codeUnits, 2, '😀 occupies 2 UTF-16 code units');
  assert.strictEqual(res.byteSize, 4, '😀 occupies 4 UTF-8 bytes');
});

// 5. Complex ZWJ Emoji sequence: Family "👨‍👩‍👧‍👦"
test('Complex ZWJ Emoji sequence: 👨‍👩‍👧‍👦', () => {
  const res = calculateTextStatistics('👨‍👩‍👧‍👦');
  assert.strictEqual(res.characters, 1, '👨‍👩‍👧‍👦 is 1 visual grapheme cluster');
  assert.strictEqual(res.emojis, 1, '👨‍👩‍👧‍👦 counts as 1 emoji');
  assert.ok(res.codeUnits > 1, 'code units > 1');
  assert.strictEqual(res.byteSize, 25, 'UTF-8 byte size is 25 bytes');
});

// 6. Multiple spaces & tabs
test('Multiple spaces and tabs', () => {
  const res = calculateTextStatistics('word1    \t   word2');
  assert.strictEqual(res.words, 2, 'words must be 2');
  assert.strictEqual(res.charactersNoSpaces, 10, 'characters without spaces must be 10');
  assert.strictEqual(res.spaces, 8, '8 whitespace characters');
});

// 7. Multiple line breaks & paragraphs
test('Multiple line breaks and paragraphs', () => {
  const text = 'Paragraph 1.\n\n\nParagraph 2.\nParagraph 3.';
  const res = calculateTextStatistics(text);
  assert.strictEqual(res.paragraphs, 3, 'paragraphs must be 3');
  assert.strictEqual(res.lines, 5, 'total lines must be 5');
});

// 8. Hindi text (Devanagari script)
test('Hindi text: नमस्ते दुनिया', () => {
  const text = 'नमस्ते दुनिया';
  const res = calculateTextStatistics(text);
  assert.strictEqual(res.words, 2, '2 words');
  assert.strictEqual(res.spaces, 1, '1 space');
  assert.ok(res.characters > 0, 'characters counted');
  assert.ok(res.byteSize > res.characters, 'UTF-8 multi-byte encoding');
});

// 9. Arabic text
test('Arabic text: مرحبا بالعالم', () => {
  const text = 'مرحبا بالعالم';
  const res = calculateTextStatistics(text);
  assert.strictEqual(res.words, 2, '2 words');
  assert.strictEqual(res.spaces, 1, '1 space');
  assert.strictEqual(res.characters, 13, '13 characters');
});

// 10. CJK text (Chinese, Japanese, Korean)
test('CJK text: 你好世界 (Hello World in Chinese)', () => {
  const text = '你好世界';
  const res = calculateTextStatistics(text);
  assert.strictEqual(res.characters, 4, '4 Chinese characters');
  assert.strictEqual(res.charactersNoSpaces, 4, '4 characters without spaces');
  assert.strictEqual(res.byteSize, 12, '12 UTF-8 bytes (3 per char)');
});

// 11. 10,000 characters performance
test('10,000 characters speed check', () => {
  const paragraph = 'The quick brown fox jumps over the lazy dog. 🚀 12345! ';
  const midText = paragraph.repeat(200); // ~11,000 characters
  const start = performance.now();
  const res = calculateTextStatistics(midText);
  const duration = performance.now() - start;

  assert.ok(res.characters > 10000, 'over 10,000 characters');
  console.log(`    Processing time for ${res.characters.toLocaleString()} chars: ${duration.toFixed(1)}ms`);
  assert.ok(duration < 100, 'Should compute 10k+ chars in <100ms');
});

// 12. Large text performance (50,000+ characters)
test('Large text performance (50,000+ characters)', () => {
  const paragraph = 'The quick brown fox jumps over the lazy dog. 🚀 12345! ';
  const longText = paragraph.repeat(1000); // ~55,000 characters
  const start = performance.now();
  const res = calculateTextStatistics(longText);
  const duration = performance.now() - start;

  assert.ok(res.characters > 50000, 'over 50,000 characters counted');
  assert.strictEqual(res.words, 10000, '10,000 words');
  assert.strictEqual(res.emojis, 1000, '1,000 emojis');
  console.log(`    Processing time for ${res.characters.toLocaleString()} chars: ${duration.toFixed(1)}ms`);
  assert.ok(duration < 600, 'Should compute 50k+ chars within 600ms');
});

console.log(`\nResults: ${passed} / ${total} tests passed.\n`);

if (passed !== total) {
  process.exit(1);
}
