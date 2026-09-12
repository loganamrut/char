import { SITE_CONFIG } from '../constants/site-config';
import { FAQS, FAQItem } from '../constants/faqs';

export function getWebApplicationSchema(customTool?: {
  name: string;
  url: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${customTool ? customTool.url : SITE_CONFIG.domain}/#webapp`,
    name: customTool ? customTool.name : 'CharCount - Online Character Counter',
    alternateName: customTool
      ? [customTool.name, 'CharCount.dev']
      : ['CharCount.dev', 'Character Counter Online', 'Free Character Counter'],
    url: customTool ? customTool.url : SITE_CONFIG.domain,
    description: customTool ? customTool.description : SITE_CONFIG.description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Works in all modern browsers.',
    inLanguage: 'en-US',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Real-time live character counting',
      'Characters with spaces and characters without spaces',
      'Word, sentence, paragraph, and line counting',
      'Unicode and emoji-aware grapheme clustering',
      'Customizable character limits and social media presets',
      'Text transformation actions (case change, space removal)',
      '100% client-side privacy-first processing'
    ]
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.domain}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    description: SITE_CONFIG.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
  };
}

export function getFaqSchema(customFaqs?: FAQItem[]) {
  const list = customFaqs || FAQS;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
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
        item: fullUrl
      };
    })
  };
}
