import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: 换成真实域名，sitemap / canonical / OG 都依赖它
export const SITE = 'https://example.com';

export default defineConfig({
  site: SITE,
  // 关掉遥测：否则 Astro 会往 ~/Library/Preferences/astro 写文件
  telemetry: false,
  integrations: [sitemap()],
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
