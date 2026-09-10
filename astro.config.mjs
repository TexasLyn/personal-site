import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: 换成真实域名，sitemap / canonical / OG 都依赖它
export const SITE = 'https://example.com';

export default defineConfig({
  site: SITE,
  // 关掉遥测：否则 Astro 会往 ~/Library/Preferences/astro 写文件
  telemetry: false,
  integrations: [sitemap()],
});
