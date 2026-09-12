export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'What is a character counter?',
    answer: 'A character counter is an online utility that calculates the total number of characters in a given text snippet or document. Depending on the selected metric, it can compute total characters including spaces, characters excluding whitespace, individual letters, words, sentences, and lines.'
  },
  {
    question: 'How do you count characters?',
    answer: 'Characters are counted by evaluating each symbol in your text sequence. On CharCount.dev, we utilize standard Unicode grapheme cluster segmentation via Intl.Segmenter. This ensures that every visual character—including letters, punctuation, spaces, accents, and multi-code-point emoji sequences—is accurately recognized.'
  },
  {
    question: 'Does a character counter count spaces?',
    answer: 'Yes, standard character counters count spaces because whitespace occupies memory, affects column layouts, and counts against limits on social platforms, SMS gateways, and SEO snippets. However, CharCount.dev displays both "Characters (with spaces)" and "Characters (without spaces)" simultaneously so you have complete visibility.'
  },
  {
    question: 'What is the difference between characters with and without spaces?',
    answer: '"Characters with spaces" calculates every single character, including spacebar taps, tabs, and line breaks. "Characters without spaces" strips all whitespace characters before counting, measuring only the letters, numbers, punctuation, and symbols. Academic assignments, publishing houses, and translation agencies frequently specify whether their limits include or exclude spaces.'
  },
  {
    question: 'Does punctuation count as a character?',
    answer: 'Yes. Every punctuation mark—such as periods, commas, quotation marks, colons, hyphens, and apostrophes—counts as a valid character in both character counting tools and platform submission fields.'
  },
  {
    question: 'Do emojis count as characters?',
    answer: 'Visually, an emoji is 1 character (a grapheme cluster). However, computationally, many emojis consist of multiple Unicode code points combined using Zero-Width Joiners (ZWJ). For example, a family emoji "👨‍👩‍👧‍👦" visually looks like 1 character, but contains 7 Unicode code points and 25 bytes in UTF-8. CharCount.dev accurately counts emojis as individual visual graphemes while also exposing exact code unit and byte sizes.'
  },
  {
    question: 'How are Unicode characters counted?',
    answer: 'Unicode characters are mapped to unique code points ranging from U+0000 to U+10FFFF. In systems using UTF-16 (such as JavaScript strings), characters outside the Basic Multilingual Plane require surrogate pairs (two 16-bit code units). CharCount.dev segments text into human-perceived grapheme clusters so that multi-byte and accented characters are counted as single visual glyphs.'
  },
  {
    question: 'How many characters are in a word on average?',
    answer: 'In standard English writing, the average word contains approximately 4.7 to 5.1 characters (excluding spaces). When including a trailing space, an accepted rule of thumb used by typists and editors is 5 to 6 characters per word. For instance, a 500-word essay is roughly 2,500 to 3,000 characters with spaces.'
  },
  {
    question: 'What is the character limit for X (formerly Twitter)?',
    answer: 'Standard free accounts have a limit of 280 characters per post. Verified subscribers on X Premium can post up to 25,000 characters. Profile bios have a strict limit of 160 characters, and direct messages support up to 10,000 characters.'
  },
  {
    question: 'What is the character limit for Instagram?',
    answer: 'Instagram captions allow up to 2,200 characters and up to 30 hashtags. However, captions are truncated in the feed with a "...more" button after approximately 125 characters. Profile bios have a strict 150-character limit.'
  },
  {
    question: 'How many characters should an SEO title tag have?',
    answer: 'Google truncates desktop title tags beyond 600 pixels in width, which corresponds to roughly 50 to 60 characters for typical Latin typography. Keeping your title under 60 characters ensures that your primary keywords and brand name remain visible in over 95% of desktop and mobile search results.'
  },
  {
    question: 'How long should a meta description be?',
    answer: 'Google typically displays up to 960 pixels on desktop search results (approximately 155 to 160 characters) and around 680 pixels on mobile devices (roughly 110 to 120 characters). We recommend writing meta descriptions between 140 and 155 characters to ensure your message fits neatly without being cut off.'
  },
  {
    question: 'Can I count characters without uploading my text?',
    answer: 'Yes! CharCount.dev works 100% locally in your web browser. When you type or paste text into our editor, the text never leaves your device. No data packets containing your text are transmitted to our servers or any third-party APIs.'
  },
  {
    question: 'Is this character counter free?',
    answer: 'Yes, CharCount.dev is completely free with no usage limits, no premium paywalls, and no registration or credit card required.'
  },
  {
    question: 'Does this character counter store or log my text?',
    answer: 'No. We do not store, log, cache, or transmit your text. When you close or refresh your browser tab, your text is completely erased from your browser memory.'
  },
  {
    question: 'Why do character counts differ across different text editors or apps?',
    answer: 'Discrepancies usually occur due to differing treatments of line breaks and Unicode. Windows systems represent line breaks with two characters (Carriage Return + Line Feed: \\r\\n), while Unix/macOS uses one (\\n). Additionally, some editors count UTF-16 code units (where emojis count as 2), while advanced tools like CharCount.dev count true visual graphemes.'
  }
];
