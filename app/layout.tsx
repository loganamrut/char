import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GoogleAnalyticsTracker } from '@/components/GoogleAnalytics';
import { CookieConsent } from '@/components/CookieConsent';
import { SITE_CONFIG } from '@/lib/constants/site-config';
import { getWebApplicationSchema, getWebSiteSchema } from '@/lib/seo/json-ld';

export const viewport: Viewport = {
  themeColor: '#047857',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'character counter',
    'character counter online',
    'character count',
    'character count online',
    'free character counter',
    'online character counter',
    'character counter tool',
    'character counter with spaces',
    'character counter without spaces',
    'count characters',
    'count characters online',
    'letter counter',
    'word and character counter',
    'character limit checker',
    'social media character limits',
  ],
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.domain }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.twitterHandle,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webAppJsonLd = getWebApplicationSchema();
  const webSiteJsonLd = getWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        {SITE_CONFIG.googleAnalyticsId && (
          <>
            <Script
              id="google-consent-mode-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}

                  var storedAnalytics = null;
                  try {
                    var rawConsent = localStorage.getItem('charcount_cookie_consent_v1');
                    if (rawConsent) {
                      var parsed = JSON.parse(rawConsent);
                      if (parsed && typeof parsed.analytics === 'boolean') {
                        storedAnalytics = parsed.analytics;
                      }
                    }
                  } catch(e) {}

                  gtag('consent', 'default', {
                    'analytics_storage': storedAnalytics === true ? 'granted' : 'denied',
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'wait_for_update': 500
                  });

                  gtag('js', new Date());
                  gtag('config', '${SITE_CONFIG.googleAnalyticsId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.googleAnalyticsId}`}
            />
            <GoogleAnalyticsTracker />
          </>
        )}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
