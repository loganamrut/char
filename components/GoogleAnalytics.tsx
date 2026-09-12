'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { SITE_CONFIG } from '@/lib/constants/site-config';

export function GoogleAnalyticsTracker() {
  const pathname = usePathname();
  const gaId = SITE_CONFIG.googleAnalyticsId;
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!gaId || typeof window === 'undefined') return;

    if (typeof (window as any).gtag === 'function') {
      const pagePath = pathname + (window.location.search || '');
      (window as any).gtag('config', gaId, {
        page_path: pagePath,
        page_location: window.location.href,
      });
    }
  }, [pathname, gaId]);

  return null;
}
