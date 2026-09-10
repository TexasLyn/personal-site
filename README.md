# 个人主页

Astro + Tailwind CSS v4 的静态个人主页。设计稿来自 `reference/`（`code.html` 单文件版本 + 截图），视觉规范见 `DESIGN.md`。

## 开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 产物输出到 dist/
npm run preview  # 本地预览构建产物
npm run check    # Astro / TypeScript 类型检查
```

## 目录结构

```
src/
  data/site.ts          全站内容（姓名、简介、项目、文章），改内容只动这里
  layouts/BaseLayout.astro   html head、字体、主题初始化、SEO meta
  components/
    Nav.astro           顶部胶囊导航 + 主题切换
    Hero.astro          滚动视差首屏
    Updates.astro       动态 / 里程碑
    Projects.astro      项目列表容器
    ProjectCard.astro   单个项目（左右交替布局）
    Writing.astro       文章列表
    Footer.astro
    visuals/            项目卡片里的三个终端/报告视觉（纯 CSS/HTML，非图片）
  styles/global.css     Tailwind 引入、设计令牌、动画
public/
  hero-bg.jpg           首屏背景图（当前 512x286，需换成高清图）
  favicon.svg
reference/              原始设计稿，仅作对照，不参与构建
```

## 已知待处理

- 全站内容是假数据，见 `src/data/site.ts`
- `astro.config.mjs` 里的 `SITE` 是占位域名 `https://example.com`，部署前要改
- 首屏背景图分辨率过低
- 字体仍走 Google Fonts CDN；后续可换成本地字体（`@fontsource`）避免外链
- `material-symbols-outlined` 图标字体体积较大，后续可换成内联 SVG
- 首屏文案依赖滚动进度控制透明度，首屏初始状态不可见；滚动渐显依赖 JS，禁用 JS 时内容会保持隐藏
- 页脚 RSS 链接指向 `/rss.xml`，该订阅源尚未实现
