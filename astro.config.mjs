import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// sitemap / canonical / OG 都依赖它。绑上自定义域名后记得改这里
export const SITE = 'https://temporary-swift-mistral-izmbpn7.vercel.app';

export default defineConfig({
  site: SITE,
  // 关掉遥测：否则 Astro 会往 ~/Library/Preferences/astro 写文件
  telemetry: false,
  integrations: [sitemap()],
  // 中文是默认语言（路径不带前缀），英文在 /en/ 下
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
      transformers: [
        {
          // 支持 ```python title="文件名.py" 这种写法，
          // 把文件名挂到 <pre data-filename> 上，前端再渲染成代码块标题栏
          name: 'code-block-filename',
          pre(node) {
            const raw = this.options.meta?.__raw ?? '';
            const matched = raw.match(/title="([^"]+)"/);
            if (matched) {
              node.properties['data-filename'] = matched[1];
            }
          },
        },
      ],
    },
  },
});
