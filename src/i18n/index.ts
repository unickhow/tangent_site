import { en } from './en';
import { zhTW } from './zh-tw';

export const dicts = { en, 'zh-tw': zhTW } as const;
export type Locale = keyof typeof dicts;

// hreflang codes for <link rel="alternate">; `en` is also x-default.
export const hreflang: Record<Locale, string> = { en: 'en', 'zh-tw': 'zh-TW' };
