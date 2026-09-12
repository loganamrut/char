'use client';

import React from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'error';
  onClose: () => void;
}

export function Toast({ message, type = 'success', onClose }: ToastProps) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-xl transition-all animate-in fade-in slide-in-from-bottom-3"
    >
      {type === 'success' ? (
        <CheckCircle className="h-4 w-4 text-emerald-400" aria-hidden="true" />
      ) : (
        <AlertCircle className="h-4 w-4 text-amber-400" aria-hidden="true" />
      )}
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 rounded p-0.5 text-slate-300 hover:bg-slate-800 hover:text-white"
        aria-label="Dismiss notification"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
