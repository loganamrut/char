import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, FileText } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center space-y-6">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 font-mono text-2xl font-bold">
        404
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900">Page Not Found</h1>
      <p className="text-slate-600 text-sm max-w-md mx-auto">
        The page you are looking for does not exist or has been moved. You can return to our free character counter tool or explore related writing tools below.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors shadow-xs"
        >
          <Home className="h-4 w-4" />
          <span>Character Counter</span>
        </Link>
        <Link
          href="/word-counter"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
        >
          <FileText className="h-4 w-4" />
          <span>Word Counter</span>
        </Link>
      </div>
    </div>
  );
}
