export interface PlatformLimit {
  id: string;
  name: string;
  category: 'social' | 'seo' | 'messaging' | 'general';
  limit: number;
  label: string;
  description: string;
  details?: string;
  recommendedMax?: number;
}

export const COMMON_NUMERIC_PRESETS = [140, 160, 280, 500, 1000, 2000];

export const PLATFORM_LIMITS: PlatformLimit[] = [
  // Social Media
  {
    id: 'x-post',
    name: 'X (Twitter) Post',
    category: 'social',
    limit: 280,
    label: '280 chars',
    description: 'Standard post limit for regular accounts.',
    details: 'Verified/Premium subscribers can post up to 25,000 characters. Emojis and URLs count toward the total (URLs take up 23 characters regardless of length).'
  },
  {
    id: 'x-bio',
    name: 'X (Twitter) Bio',
    category: 'social',
    limit: 160,
    label: '160 chars',
    description: 'Maximum profile bio length.'
  },
  {
    id: 'threads-post',
    name: 'Threads Post',
    category: 'social',
    limit: 500,
    label: '500 chars',
    description: 'Standard character limit for posts on Meta Threads.'
  },
  {
    id: 'instagram-caption',
    name: 'Instagram Caption',
    category: 'social',
    limit: 2200,
    label: '2,200 chars',
    description: 'Maximum caption length for feed posts and Reels.',
    details: 'Captions truncate with a "...more" link after roughly 125 characters, so put your primary hook in the first sentence.'
  },
  {
    id: 'instagram-bio',
    name: 'Instagram Bio',
    category: 'social',
    limit: 150,
    label: '150 chars',
    description: 'Maximum characters for your profile bio.'
  },
  {
    id: 'linkedin-post',
    name: 'LinkedIn Post',
    category: 'social',
    limit: 3000,
    label: '3,000 chars',
    description: 'Maximum characters for personal and page feed posts.',
    details: 'Truncates after about 140–210 characters ("...see more"). Optimize the opening line to drive clicks.'
  },
  {
    id: 'linkedin-headline',
    name: 'LinkedIn Headline',
    category: 'social',
    limit: 220,
    label: '220 chars',
    description: 'Professional profile headline limit.'
  },
  {
    id: 'facebook-post',
    name: 'Facebook Post',
    category: 'social',
    limit: 63206,
    label: '63,206 chars',
    description: 'Technical limit for Facebook status updates.',
    details: 'While the technical ceiling is extremely high, posts between 40 and 80 characters typically generate the highest engagement.'
  },
  {
    id: 'youtube-title',
    name: 'YouTube Title',
    category: 'social',
    limit: 100,
    label: '100 chars',
    description: 'Maximum video title length.',
    details: 'YouTube truncates titles past ~60–70 characters depending on device screen width and font kerning.'
  },
  {
    id: 'youtube-desc',
    name: 'YouTube Description',
    category: 'social',
    limit: 5000,
    label: '5,000 chars',
    description: 'Full video description length limit.'
  },
  {
    id: 'tiktok-caption',
    name: 'TikTok Caption',
    category: 'social',
    limit: 2200,
    label: '2,200 chars',
    description: 'Maximum caption length for video uploads.'
  },
  {
    id: 'pinterest-title',
    name: 'Pinterest Pin Title',
    category: 'social',
    limit: 100,
    label: '100 chars',
    description: 'Maximum pin title length.'
  },
  {
    id: 'pinterest-desc',
    name: 'Pinterest Description',
    category: 'social',
    limit: 500,
    label: '500 chars',
    description: 'Maximum description length for Pins.'
  },
  {
    id: 'reddit-title',
    name: 'Reddit Post Title',
    category: 'social',
    limit: 300,
    label: '300 chars',
    description: 'Maximum characters for submission titles.'
  },

  // SEO
  {
    id: 'seo-title',
    name: 'Google SEO Title',
    category: 'seo',
    limit: 60,
    label: '60 chars',
    description: 'Recommended maximum length for search engine result title tags.',
    details: 'Google measures snippet titles by pixels (~600px width limit). Keeping titles between 50–60 characters prevents truncation on 95% of desktop and mobile SERPs.'
  },
  {
    id: 'seo-meta-desc',
    name: 'Google Meta Description',
    category: 'seo',
    limit: 160,
    label: '160 chars',
    description: 'Optimal limit to prevent snippet truncation on desktop and mobile SERPs.',
    details: 'Desktop displays up to ~960px (~155–160 characters), whereas mobile SERPs truncate at ~680px (~110–120 characters). Aim for 140–155 characters for safest cross-device visibility.'
  },

  // Messaging & SMS
  {
    id: 'sms-single',
    name: 'SMS Message (GSM-7)',
    category: 'messaging',
    limit: 160,
    label: '160 chars',
    description: 'Single SMS segment using standard GSM 7-bit Latin alphabet.',
    details: 'Adding a single emoji or special Unicode symbol forces UCS-2 encoding, which reduces the per-segment limit from 160 down to 70 characters.'
  },
  {
    id: 'sms-unicode',
    name: 'SMS Message (Unicode / Emoji)',
    category: 'messaging',
    limit: 70,
    label: '70 chars',
    description: 'Single SMS segment when Unicode or emoji characters are present.'
  },
];
