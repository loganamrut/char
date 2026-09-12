'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ShieldCheck, Cookie, Settings, Check, X } from 'lucide-react';
import {
  getStoredConsent,
  saveConsent,
  applyConsentToGtag,
  OPEN_COOKIE_SETTINGS_EVENT,
  CookieConsentState,
} from '@/lib/cookies/consent';

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const existing = getStoredConsent();
    if (existing) {
      applyConsentToGtag(existing.analytics);
      setAnalyticsEnabled(existing.analytics);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }

    const handleOpenSettings = () => {
      const current = getStoredConsent();
      setAnalyticsEnabled(current ? current.analytics : false);
      setShowModal(true);
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenSettings);
    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenSettings);
    };
  }, []);

  const handleAcceptAll = useCallback(() => {
    saveConsent(true);
    setAnalyticsEnabled(true);
    setShowBanner(false);
    setShowModal(false);
  }, []);

  const handleEssentialOnly = useCallback(() => {
    saveConsent(false);
    setAnalyticsEnabled(false);
    setShowBanner(false);
    setShowModal(false);
  }, []);

  const handleSaveCustom = useCallback(() => {
    saveConsent(analyticsEnabled);
    setShowBanner(false);
    setShowModal(false);
  }, [analyticsEnabled]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  if (!mounted) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      {showBanner && (
        <aside
          role="region"
          aria-label="Cookie and Privacy Consent"
          className="fixed bottom-0 inset-x-0 z-50 bg-white/98 backdrop-blur-md border-t border-slate-200 shadow-2xl p-4 sm:p-5 transition-all animate-fade-in"
        >
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3 max-w-3xl">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 shrink-0 mt-0.5 border border-emerald-100">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="space-y-1 text-sm text-slate-600">
                <p className="font-semibold text-slate-900 flex items-center gap-2">
                  We respect your privacy &amp; global cookie standards
                  <span className="inline-flex items-center gap-1 text-xs font-normal text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <ShieldCheck className="h-3 w-3" /> 100% Client-Side Text
                  </span>
                </p>
                <p className="leading-relaxed text-xs sm:text-sm">
                  We use essential storage to keep this tool fast and functional. With your permission, we use anonymous Google Analytics to understand site performance. We never inspect, store, or transmit your typed text. Learn more in our{' '}
                  <Link href="/cookies/" className="text-emerald-700 underline font-medium hover:text-emerald-800">
                    Cookie Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy/" className="text-emerald-700 underline font-medium hover:text-emerald-800">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0 justify-end pt-2 md:pt-0">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200/80 inline-flex items-center gap-1.5"
              >
                <Settings className="h-3.5 w-3.5" /> Customize
              </button>
              <button
                type="button"
                onClick={handleEssentialOnly}
                className="px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 rounded-lg transition-colors border border-slate-300"
              >
                Essential Only
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm inline-flex items-center gap-1.5"
              >
                <Check className="h-3.5 w-3.5" /> Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Granular Cookie Preferences Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-xl w-full p-5 sm:p-7 space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <Cookie className="h-5 w-5" />
                </div>
                <div>
                  <h2 id="cookie-modal-title" className="text-lg font-bold text-slate-900">
                    Cookie Preferences
                  </h2>
                  <p className="text-xs text-slate-500">
                    Manage how cookies and local storage are used on CharCount.dev
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                aria-label="Close cookie preferences modal"
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content & Options */}
            <div className="space-y-4 text-sm">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We respect international privacy laws including GDPR, CCPA, and Google Consent Mode v2. Choose which storage categories you allow below.
              </p>

              {/* Category 1: Strictly Necessary */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">Strictly Necessary</span>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                      Always Active
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  These cookies and local storage items are essential for the website to function securely and save your UI preferences (like custom limit presets and cookie preferences). They cannot be disabled.
                </p>
              </div>

              {/* Category 2: Analytics & Measurement */}
              <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <label htmlFor="analytics-toggle" className="font-bold text-slate-900 text-sm cursor-pointer">
                      Analytics &amp; Performance
                    </label>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      id="analytics-toggle"
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-emerald-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Allows anonymous measurement of visitor traffic and feature usage via Google Analytics 4. Helps us identify bugs and popular text metrics without identifying individual users or inspecting any typed text.
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <Link
                href="/cookies/"
                onClick={() => setShowModal(false)}
                className="text-xs text-emerald-700 hover:text-emerald-800 underline font-medium"
              >
                Read our full Cookie Policy →
              </Link>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
                >
                  Save Preferences
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
