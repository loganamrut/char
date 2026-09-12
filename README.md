# CharCount.dev

> **The fastest, most useful, and privacy-first online Character Counter.**  
> Count characters, words, sentences, spaces, and more instantly — free, private, and 100% in your browser.

🌐 **Production URL:** [https://charcount.dev/](https://charcount.dev/)

---

## ⚡ Key Features

- **Dual Real-Time Counting:** Live counting of *Characters with spaces* and *Characters without spaces*.
- **Comprehensive Text Metrics:** Words, sentences, paragraphs, lines, letters, numbers, spaces, punctuation, symbols, and emojis.
- **Reading & Speaking Time:** Calculated dynamically at 225 WPM (reading) and 135 WPM (speaking).
- **Deep Text Statistics:** Average word length, average sentence length, longest word, and longest sentence.
- **Unicode & Grapheme Cluster Precision:** Powered by `Intl.Segmenter` with an ASCII fast-path. Accurately counts multi-byte emojis (e.g. `👨‍👩‍👧‍👦` as 1 character) while exposing UTF-16 code units and UTF-8 byte sizes.
- **Character Limit Engine:** Customizable limit input, live countdown, percentage badge, and dynamic color progress bar (green -> amber -> red).
- **18 Platform Limits & Presets:** Click-to-load limits for X (Twitter), Threads, Instagram, LinkedIn, Facebook, YouTube, TikTok, Pinterest, Reddit, Google SEO Titles, Google Meta Descriptions, and SMS.
- **In-Browser Text Actions:** Copy, Paste, Select All, Undo/Redo, Trim Spaces, Clean Extra Spaces, Remove Line Breaks, UPPERCASE, lowercase, Title Case, Sentence case, and Download as `.txt`.
- **100% Client-Side Privacy:** No text is ever uploaded or transmitted over the network. Zero databases, zero accounts.
- **SEO-Optimized Silos:** Includes dedicated pages for `/word-counter`, `/letter-counter`, `/sentence-counter`, `/character-counter-with-spaces`, `/character-counter-without-spaces`, `/about`, `/privacy`, and `/terms`.
- **Structured Data:** Built-in JSON-LD schemas for `WebApplication`, `WebSite`, and `FAQPage`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, pnpm, or yarn

### Installation

```bash
git clone https://github.com/loganamrut/char.git
cd char
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Tests

```bash
npm test
```

### Production Build

```bash
npm run build
npm start
```

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Typography:** Native System Font Stack (zero external font latency, zero CLS)

---

## 📄 License

MIT
