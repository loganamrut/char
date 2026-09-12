export interface CookieConsentState {
  necessary: boolean;
  analytics: boolean;
  timestamp: string;
}

export const CONSENT_STORAGE_KEY = 'charcount_cookie_consent_v1';
export const OPEN_COOKIE_SETTINGS_EVENT = 'open-charcount-cookie-settings';

export function getStoredConsent(): CookieConsentState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed === 'object' && parsed !== null && typeof parsed.analytics === 'boolean') {
      return parsed as CookieConsentState;
    }
  } catch {
    // If local storage is disabled or corrupted, return null
  }
  return null;
}

export function saveConsent(analyticsGranted: boolean): CookieConsentState {
  const consent: CookieConsentState = {
    necessary: true,
    analytics: analyticsGranted,
    timestamp: new Date().toISOString(),
  };

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    } catch {
      // Storage unavailable or disabled
    }
    applyConsentToGtag(analyticsGranted);
  }

  return consent;
}

export function applyConsentToGtag(analyticsGranted: boolean): void {
  if (typeof window === 'undefined') return;

  const status = analyticsGranted ? 'granted' : 'denied';
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('consent', 'update', {
      analytics_storage: status,
    });
  }
}

export function openCookieSettings(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT));
}
