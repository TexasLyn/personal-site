import { en } from './site.en';
import { zh } from './site.zh';
import type { SiteContent } from './types';

export const sites = { zh, en } as const;
export type Lang = keyof typeof sites;

/** 把 Astro 的 locale 归一化成 'zh' | 'en'，默认中文 */
export const getLang = (locale?: string): Lang => (locale === 'en' ? 'en' : 'zh');

/** 取当前语言的文案 */
export const getSite = (locale?: string): SiteContent => sites[getLang(locale)];

/** 语言首页路径：中文 '/'，英文 '/en/' */
export const homePath = (locale?: string): string => (getLang(locale) === 'en' ? '/en/' : '/');

/** 文章页路径 */
export const postPath = (locale: string | undefined, id: string): string =>
  `${homePath(locale)}blog/${id}/`;

export { en, zh };
export type { AwardItem, SiteContent } from './types';
