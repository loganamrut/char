import { SITE_CONFIG } from '../constants/site-config';
import { FAQS, FAQItem } from '../constants/faqs';

export function getWebSiteAndOrgSchema() {
  const domain = SITE_CONFIG.domain;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${domain}/#website`,
        url: `${domain}/`,
        name: SITE_CONFIG.name,
        alternateName: [
          SITE_CONFIG.shortName,
          'Character Counter Online',
          'Free Character Counter',
        ],
        description: SITE_CONFIG.description,
        inLanguage: 'en-US',
        publisher: {
          '@id': `${domain}/#organization`,
        },
      },
      {
        '@type': 'Organization',
        '@id': `${domain}/#organization`,
        name: SITE_CONFIG.name,
        url: `${domain}/`,
        logo: {
          '@type': 'ImageObject',
          '@id': `${domain}/#logo`,
          url: `${domain}/icon.svg`,
          caption: SITE_CONFIG.name,
        },
        sameAs: [
          `https://twitter.com/${SITE_CONFIG.twitterHandle.replace('@', '')}`,
        ],
        description:
          'Provider of fast, private, Unicode-aware text character and word counting utilities.',
      },
    ],
  };
}

export function getWebSiteSchema() {
  return getWebSiteAndOrgSchema();
}

export function getWebApplicationSchema(customTool?: {
  name: string;
  url: string;
  description: string;
  featureList?: string[];
}) {
  const toolUrl = customTool ? customTool.url : `${SITE_CONFIG.domain}/`;
  const toolName = customTool
    ? customTool.name
    : 'CharCount - Online Character Counter';
  const toolDesc = customTool ? customTool.description : SITE_CONFIG.description;

  const defaultFeatures = [
    'Real-time live character counting',
    'Characters with spaces and characters without spaces',
    'Word, sentence, paragraph, and line counting',
    'Unicode and emoji-aware grapheme clustering',
    'Customizable character limits and social media presets',
    'Text transformation actions (case change, space removal)',
    '100% client-side privacy-first processing',
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${toolUrl}#webapp`,
    name: toolName,
    alternateName: customTool
      ? [customTool.name, 'CharCount.dev']
      : ['CharCount.dev', 'Character Counter Online', 'Free Character Counter'],
    url: toolUrl,
    description: toolDesc,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All (Web Browser)',
    browserRequirements:
      'Requires JavaScript. Works in all modern browsers (Chrome, Safari, Firefox, Edge).',
    softwareVersion: '1.0',
    inLanguage: 'en-US',
    image: `${SITE_CONFIG.domain}/images/og-image.png`,
    screenshot: `${SITE_CONFIG.domain}/images/how-character-counter-works.png`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@id': `${SITE_CONFIG.domain}/#organization`,
    },
    featureList: customTool?.featureList || defaultFeatures,
  };
}

export interface HowToStepItem {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export function getHowToSchema(params: {
  name: string;
  description: string;
  url: string;
  image?: string;
  steps: HowToStepItem[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${params.url}#howto`,
    name: params.name,
    description: params.description,
    image: params.image || `${SITE_CONFIG.domain}/images/how-character-counter-works.png`,
    inLanguage: 'en-US',
    step: params.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url || params.url,
      ...(step.image ? { image: step.image } : {}),
    })),
  };
}

export function getImageObjectSchema(params: {
  url: string;
  name: string;
  description: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  const fullUrl = params.url.startsWith('http')
    ? params.url
    : `${SITE_CONFIG.domain}${params.url.startsWith('/') ? '' : '/'}${params.url}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': `${fullUrl}#image`,
    contentUrl: fullUrl,
    url: fullUrl,
    name: params.name,
    description: params.description,
    caption: params.caption || params.description,
    width: params.width || 1200,
    height: params.height || 520,
    inLanguage: 'en-US',
    author: {
      '@id': `${SITE_CONFIG.domain}/#organization`,
    },
    copyrightHolder: {
      '@id': `${SITE_CONFIG.domain}/#organization`,
    },
  };
}

export interface VideoClipItem {
  name: string;
  startOffset: number;
  endOffset?: number;
  url?: string;
}

export function getVideoObjectSchema(params: {
  name: string;
  description: string;
  thumbnailUrl: string[];
  uploadDate: string;
  duration: string;
  contentUrl: string;
  embedUrl: string;
  clips?: VideoClipItem[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${params.contentUrl}#video`,
    name: params.name,
    description: params.description,
    thumbnailUrl: params.thumbnailUrl,
    uploadDate: params.uploadDate,
    duration: params.duration,
    contentUrl: params.contentUrl,
    embedUrl: params.embedUrl,
    inLanguage: 'en-US',
    publisher: {
      '@id': `${SITE_CONFIG.domain}/#organization`,
    },
    ...(params.clips && params.clips.length > 0
      ? {
          hasPart: params.clips.map((clip) => ({
            '@type': 'Clip',
            name: clip.name,
            startOffset: clip.startOffset,
            ...(clip.endOffset ? { endOffset: clip.endOffset } : {}),
            url: clip.url || `${params.embedUrl}?t=${clip.startOffset}`,
          })),
        }
      : {}),
  };
}

export function getAboutPageSchema(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${params.url}#aboutpage`,
    url: params.url,
    name: params.name,
    description: params.description,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': `${SITE_CONFIG.domain}/#website`,
    },
    mainEntity: {
      '@id': `${SITE_CONFIG.domain}/#organization`,
    },
  };
}

export function getWebPageSchema(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${params.url}#webpage`,
    url: params.url,
    name: params.name,
    description: params.description,
    inLanguage: 'en-US',
    isPartOf: {
      '@id': `${SITE_CONFIG.domain}/#website`,
    },
    publisher: {
      '@id': `${SITE_CONFIG.domain}/#organization`,
    },
  };
}

export function getFaqSchema(customFaqs?: FAQItem[]) {
  const list = customFaqs || FAQS;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const fullUrl = item.url.startsWith('http')
        ? item.url
        : `${SITE_CONFIG.domain}${item.url.startsWith('/') ? '' : '/'}${item.url}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: fullUrl,
      };
    }),
  };
}
