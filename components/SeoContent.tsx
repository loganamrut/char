import React from 'react';
import { ShieldCheck, CheckCircle2, XCircle, Sparkles, BookOpen, Search, Cpu } from 'lucide-react';

export function SeoContent() {
  return (
    <div className="space-y-12 text-slate-700 leading-relaxed pt-6">
      {/* 1. What is a Character Counter? */}
      <section id="what-is-character-counter" className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          What Is a Character Counter?
        </h2>
        <p className="text-base text-slate-600 leading-relaxed">
          A <strong className="font-semibold text-slate-900">character counter</strong> is an online text analysis tool that computes the total quantity of characters in any written passage. In computing and typography, a &ldquo;character&rdquo; represents any individual typographic symbol: letters of the alphabet, numerical digits, punctuation marks, whitespace, line breaks, and emojis.
        </p>
        <p className="text-base text-slate-600 leading-relaxed">
          Unlike basic word processors that often bury character counts inside submenus or count multi-byte emojis unpredictably, CharCount.dev provides instantaneous, real-time feedback with dual metrics: <span className="font-medium text-slate-800">characters with spaces</span> and <span className="font-medium text-slate-800">characters without spaces</span>.
        </p>
      </section>

      {/* 2. Character Classification Comparison Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Character Classification Matrix: What Gets Counted?
        </h2>
        <p className="text-sm text-slate-600">
          Different communication channels and editorial standards calculate character limits differently. The matrix below outlines how CharCount.dev analyzes each typographic category:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-100/80 text-xs font-semibold uppercase tracking-wider text-slate-900">
              <tr>
                <th scope="col" className="px-4 py-3">Typographic Category</th>
                <th scope="col" className="px-4 py-3">Examples</th>
                <th scope="col" className="px-4 py-3">With Spaces</th>
                <th scope="col" className="px-4 py-3">Without Spaces</th>
                <th scope="col" className="px-4 py-3">Standard SMS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Letters (Alphabetic)</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-600">A-Z, a-z, é, ñ, ø, 文</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">Yes</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">Yes</td>
                <td className="px-4 py-3 text-slate-600">1 char (GSM-7)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Numbers (Digits)</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-600">0-9, ½, IV</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">Yes</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">Yes</td>
                <td className="px-4 py-3 text-slate-600">1 char (GSM-7)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Standard Spaces</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-600">[space], [tab], NBSP</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">Yes</td>
                <td className="px-4 py-3 text-rose-600 font-medium">No (Ignored)</td>
                <td className="px-4 py-3 text-slate-600">1 char (GSM-7)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Punctuation Marks</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-600">. , ; : ! ? &ldquo; &rdquo; - ( )</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">Yes</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">Yes</td>
                <td className="px-4 py-3 text-slate-600">1 char (GSM-7)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Mathematical & Currency Symbols</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-600">$, €, ¥, +, =, %, ©, ™</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">Yes</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">Yes</td>
                <td className="px-4 py-3 text-slate-600">1-2 chars</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Line Breaks (Newlines)</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-600">\n, \r\n</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">Yes</td>
                <td className="px-4 py-3 text-rose-600 font-medium">No (Ignored)</td>
                <td className="px-4 py-3 text-slate-600">1 char</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Standard Emojis</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-600">😀, 🚀, 💡, 🔥</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">1 Grapheme</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">1 Grapheme</td>
                <td className="px-4 py-3 text-amber-700 font-medium">Forces UCS-2 (70 limit)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Complex Emoji Sequences (ZWJ)</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-600">👨‍👩‍👧‍👦, 👩🏽‍💻, 🏳️‍🌈</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">1 Grapheme</td>
                <td className="px-4 py-3 text-emerald-600 font-medium">1 Grapheme</td>
                <td className="px-4 py-3 text-amber-700 font-medium">Multi-segment SMS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Characters With Spaces vs. Without Spaces */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Characters With Spaces vs. Characters Without Spaces
        </h2>
        <p className="text-base text-slate-600">
          One of the most frequent points of confusion in copywriting, academic submissions, and digital advertising is whether a stated &ldquo;character count&rdquo; includes spaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs">✓</span>
              When to Count Characters With Spaces
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Social Media Posts:</strong> X (280), Threads (500), and LinkedIn (3,000) count every space as 1 character.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Search Engine Snippets:</strong> Google title tags (~60 chars) and meta descriptions (~155–160 chars) render physical space pixels.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>SMS Messaging:</strong> Telecom carriers charge based on 160-character 7-bit blocks where each space uses 7 bits.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Paid Advertising:</strong> Google Ads headlines (30 chars) and descriptions (90 chars) strictly include spaces.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs">✓</span>
              When to Count Characters Without Spaces
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Translation & Localization:</strong> Translation agencies frequently bill per 1,000 characters without spaces (standard German/European billing).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Academic Requirements:</strong> University theses and research grants often prescribe limits excluding whitespace to prevent double-spacing manipulation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Typographic Density:</strong> Editorial designers measure raw letter count to determine ink coverage and font scaling.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Practical Example */}
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
            Practical Comparison Example:
          </h4>
          <p className="font-mono text-sm text-slate-800 bg-white p-2.5 rounded border border-slate-200">
            &ldquo;The quick brown fox jumps over the lazy dog.&rdquo;
          </p>
          <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="bg-white p-2 rounded border border-slate-200 text-center">
              <div className="text-slate-400">With Spaces</div>
              <div className="font-mono text-base font-bold text-slate-900">44 characters</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200 text-center">
              <div className="text-slate-400">Without Spaces</div>
              <div className="font-mono text-base font-bold text-slate-900">36 characters</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200 text-center">
              <div className="text-slate-400">Total Words</div>
              <div className="font-mono text-base font-bold text-slate-900">9 words</div>
            </div>
            <div className="bg-white p-2 rounded border border-slate-200 text-center">
              <div className="text-slate-400">Space Count</div>
              <div className="font-mono text-base font-bold text-slate-900">8 spaces</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Character Count vs Word Count */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Character Count vs. Word Count: Conversion Ratios
        </h2>
        <p className="text-base text-slate-600">
          While word counts measure lexical tokens, character counts measure exact typographic length. For English prose, the standard formula is:
        </p>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 text-center font-mono text-sm sm:text-base font-semibold text-emerald-900">
          1 Word ≈ 5 Characters (without spaces) | 1 Word ≈ 6 Characters (with trailing space)
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-100 text-xs font-semibold uppercase text-slate-900">
              <tr>
                <th className="px-4 py-3">Word Count</th>
                <th className="px-4 py-3">Estimated Characters (No Spaces)</th>
                <th className="px-4 py-3">Estimated Characters (With Spaces)</th>
                <th className="px-4 py-3">Estimated Reading Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="px-4 py-2.5 font-mono font-medium">100 words</td>
                <td className="px-4 py-2.5 font-mono">~500 chars</td>
                <td className="px-4 py-2.5 font-mono">~600 chars</td>
                <td className="px-4 py-2.5">27 seconds</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-mono font-medium">250 words</td>
                <td className="px-4 py-2.5 font-mono">~1,250 chars</td>
                <td className="px-4 py-2.5 font-mono">~1,500 chars</td>
                <td className="px-4 py-2.5">1 min 7 sec</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-mono font-medium">500 words</td>
                <td className="px-4 py-2.5 font-mono">~2,500 chars</td>
                <td className="px-4 py-2.5 font-mono">~3,000 chars</td>
                <td className="px-4 py-2.5">2 min 13 sec</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-mono font-medium">1,000 words</td>
                <td className="px-4 py-2.5 font-mono">~5,000 chars</td>
                <td className="px-4 py-2.5 font-mono">~6,000 chars</td>
                <td className="px-4 py-2.5">4 min 26 sec</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-mono font-medium">2,500 words</td>
                <td className="px-4 py-2.5 font-mono">~12,500 chars</td>
                <td className="px-4 py-2.5 font-mono">~15,000 chars</td>
                <td className="px-4 py-2.5">11 min 6 sec</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Unicode and Emoji Accuracy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <Cpu className="h-5 w-5 text-emerald-600" />
          Unicode, Accents, and Emoji: Why Most Online Counters Are Inaccurate
        </h2>
        <p className="text-base text-slate-600">
          Many rudimentary character counters rely on JavaScript&rsquo;s native <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-rose-600">str.length</code> property. However, in modern Unicode typography, that method produces inaccurate counts:
        </p>

        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">1. Surrogate Pairs &amp; Basic Emojis</h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              In UTF-16, astral plane characters (such as emojis like <span className="font-mono">😀</span>) require two 16-bit code units (a high surrogate and a low surrogate). A naive counter calculates <code className="font-mono text-xs">&quot;😀&quot;.length</code> as <strong className="text-rose-600">2</strong>, despite it being a single visual character.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">2. Zero-Width Joiner (ZWJ) Sequences</h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Modern emojis—such as profession emojis (<span className="font-mono">👩🏽‍🔬</span>) and family groups (<span className="font-mono">👨‍👩‍👧‍👦</span>)—combine multiple individual Unicode code points joined by hidden Zero-Width Joiner (<code className="font-mono text-xs">U+200D</code>) characters and skin-tone modifiers. A naive counter will report the family emoji as <strong className="text-rose-600">11 characters</strong>. CharCount.dev segments text into <em>User-Perceived Character Clusters</em> (graphemes), correctly reporting it as <strong className="text-emerald-600">1 visual character</strong>.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">3. Combining Diacritical Marks</h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Accented vowels such as <span className="font-mono">&eacute;</span> can be encoded as a single precomposed code point (<code className="font-mono text-xs">U+00E9</code>) or as two characters: a base &lsquo;e&rsquo; (<code className="font-mono text-xs">U+0065</code>) followed by a combining acute accent (<code className="font-mono text-xs">U+0301</code>). Our grapheme cluster algorithm identifies the combined glyph as a single character regardless of normalization.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Comprehensive Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Who Uses a Character Counter? (Common Use Cases)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">SEO Professionals</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Fine-tuning title tags (50–60 characters) and meta descriptions (150–160 characters) to prevent awkward ellipsis cutoffs in Google SERP snippets.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">Social Media Managers</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Crafting posts for X (280 limit), Instagram captions (2,200 limit), and LinkedIn updates (3,000 limit) while optimizing opening hook placement before the &ldquo;...more&rdquo; fold.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">PPC &amp; Ad Copywriters</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Writing high-converting Google Ads headlines (strictly 30 chars), Facebook ad descriptions, and Amazon bullet points within rigid publisher rules.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">Students &amp; Academics</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Meeting college admissions essay limits (e.g. UC personal insight questions, Common App short responses, and research abstract submissions).
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">Software Developers</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Validating database <code className="font-mono text-xs">VARCHAR(n)</code> limits, form input restrictions, API payload constraints, and byte sizes for localization files.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-bold text-slate-900">SMS &amp; Mobile Marketers</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
              Preventing unexpected multi-part SMS billing surcharges by staying strictly under the 160-character GSM-7 threshold and identifying UCS-2 emoji triggers.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Privacy Guarantee */}
      <section className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              100% Client-Side Privacy Guarantee
            </h2>
            <p className="text-xs sm:text-sm text-emerald-800">
              Your sensitive text never leaves your browser tab.
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed">
          Unlike many online text utilities that transmit pasted copy to backend servers or third-party AI APIs for processing, <strong className="font-semibold text-slate-900">CharCount.dev operates 100% client-side</strong>. All character segmentation, word extraction, and string transformations are computed entirely within your device&rsquo;s JavaScript runtime.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
          <div className="rounded-lg bg-white p-3 border border-emerald-100 flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800 block">No Server Logs</span>
              <span className="text-slate-500">No database stores or logs your pasted text.</span>
            </div>
          </div>

          <div className="rounded-lg bg-white p-3 border border-emerald-100 flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800 block">No Account Required</span>
              <span className="text-slate-500">Immediate access without registration or login.</span>
            </div>
          </div>

          <div className="rounded-lg bg-white p-3 border border-emerald-100 flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800 block">Zero AI Training</span>
              <span className="text-slate-500">Your proprietary writing is never used to train LLMs.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
