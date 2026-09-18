'use client';

import React, { useRef, useState } from 'react';
import { Play, Clock, ShieldCheck, CheckCircle2, ChevronDown, FileText, Sparkles } from 'lucide-react';

interface Chapter {
  step: string;
  title: string;
  time: string;
  seconds: number;
  desc: string;
}

const CHAPTERS: Chapter[] = [
  {
    step: '01',
    title: 'Input & Paste Text',
    time: '0:00',
    seconds: 0,
    desc: 'Type or paste directly into the editor. Keystrokes are detected with zero delay.',
  },
  {
    step: '02',
    title: 'In-Browser Privacy Engine',
    time: '0:05',
    seconds: 5,
    desc: 'Intl.Segmenter accurately processes multi-byte emojis and accents with 0 server uploads.',
  },
  {
    step: '03',
    title: 'Dual Counts & Limits',
    time: '0:10',
    seconds: 10,
    desc: 'Live counts for characters with/without spaces, words, reading time, and social meters.',
  },
  {
    step: '04',
    title: '1-Click Format & Copy',
    time: '0:15',
    seconds: 15,
    desc: 'Clean extra whitespace, convert cases, and copy the verified text immediately.',
  },
];

export function HowItWorksVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const seekTo = (seconds: number, index: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      videoRef.current.play().catch(() => {});
      setActiveChapter(index);
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const t = videoRef.current.currentTime;
    if (t < 5) setActiveChapter(0);
    else if (t < 10) setActiveChapter(1);
    else if (t < 15) setActiveChapter(2);
    else setActiveChapter(3);
  };

  return (
    <div className="space-y-4">
      {/* Video Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-md">
        <video
          ref={videoRef}
          controls
          preload="metadata"
          playsInline
          poster="/images/how-character-counter-works.png"
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full aspect-video block object-cover bg-slate-950"
          aria-label="Video Tutorial: How the Online Character Counter Works"
        >
          <source src="/videos/how-character-counter-works.webm" type="video/webm" />
          <source src="/videos/how-character-counter-works.mp4" type="video/mp4" />
          <track
            kind="captions"
            src="/videos/how-character-counter-works.vtt"
            srcLang="en"
            label="English"
            default
          />
          Your browser does not support HTML5 video playback.
        </video>
      </div>

      {/* Interactive Key Moments / Chapter Navigation (Google Key Moments) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="font-semibold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-blue-600" />
            Key Moments &bull; Jump to Step
          </span>
          <span className="font-mono text-[11px] text-slate-500">20s Full HD</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {CHAPTERS.map((ch, idx) => {
            const isActive = activeChapter === idx;
            return (
              <button
                key={ch.step}
                type="button"
                onClick={() => seekTo(ch.seconds, idx)}
                className={`text-left p-3 rounded-xl border transition-all ${
                  isActive
                    ? 'border-blue-500 bg-blue-50/70 shadow-xs ring-1 ring-blue-500/30'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span
                    className={`text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    Step {ch.step}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-500">
                    {ch.time}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900 leading-snug line-clamp-1">
                  {ch.title}
                </div>
                <p className="text-[11px] text-slate-500 leading-normal mt-1 line-clamp-2">
                  {ch.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accessible Video Transcript (Expandable for Users & Crawlers) */}
      <details className="group rounded-xl border border-slate-200 bg-slate-50/60 p-4 text-xs transition-colors">
        <summary className="font-semibold text-slate-800 cursor-pointer flex items-center justify-between list-none select-none">
          <span className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-slate-500" />
            <span>Read Complete Video Transcript (Text Version)</span>
          </span>
          <ChevronDown className="h-4 w-4 text-slate-400 group-open:rotate-180 transition-transform" />
        </summary>
        <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-2.5 text-slate-600 leading-relaxed font-normal">
          <p>
            <strong className="text-slate-900 font-mono">[00:00 - 00:05] Step 1: Input &amp; Paste Text:</strong> Type or paste your writing directly into the CharCount editor. Live keyboard and clipboard event listeners calculate total characters, word counts, and whitespace metrics instantaneously without debounce delay.
          </p>
          <p>
            <strong className="text-slate-900 font-mono">[00:05 - 00:10] Step 2: 100% Private In-Browser Engine:</strong> All character segmentation is computed inside your local web browser using JavaScript&rsquo;s native <code>Intl.Segmenter</code>. Multi-byte emojis (such as family zero-width joiner sequences) and accented letters are accurately counted as single graphemes. No text is ever uploaded to a server or used to train AI models.
          </p>
          <p>
            <strong className="text-slate-900 font-mono">[00:10 - 00:15] Step 3: Dual Character Counts &amp; Platform Limit Meters:</strong> Instantly inspect two independent character counts: characters with spaces (for Twitter/X, SMS, and Google title tags) and characters without spaces (for editorial and translation benchmarks). Dynamic progress meters display live capacity for social networks and SEO snippets.
          </p>
          <p>
            <strong className="text-slate-900 font-mono">[00:15 - 00:20] Step 4: 1-Click Text Transformations &amp; Copy:</strong> Apply one-click formatting actions to trim trailing spaces, clean excessive double whitespace, strip blank line breaks, or toggle letter case (UPPERCASE, lowercase, Title Case). Copy the clean text to your clipboard or download a verified plain text file.
          </p>
        </div>
      </details>
    </div>
  );
}
