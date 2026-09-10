# 个人主页（梁忆炎 Liang Yiyan）

Astro 静态个人主页，含博客 / 文档阅读抽屉。设计稿来自 `reference/v2/`（2.1 版）。

## 怎么改文案

打开 **`src/data/site.ts`**，全站文字都在这个文件里，改完保存就生效（dev 模式下浏览器自动刷新）。

- 姓名、简介、标题 → `about` / `hero`
- 三个大数字（1 / 5 / 117+）→ `awards.stats`
- 奖项经历列表 → `awards.items`，每行一个 `{ year, text, result }`
- 工作轮播卡片 → `work.items`，加一项就多一张卡片
- 联系方式、页脚链接 → `footer`
- 顶部导航 → `nav`
- 文档 / 博客区块标题 → `docs`

`titleHtml` / `contactHtml` 这类字段可以直接写 HTML，用 `<br />` 换行、`<b>` 加粗。

## 怎么加文章

在 **`src/content/blog/`** 里新建一个 `.md` 文件就行，文件名就是文章 id（链接是 `#blog/文件名`）。

文件开头写这几行：

```markdown
---
title: 文章标题
category: AI & Agent
date: "2025-02-18"
readTime: 8 分钟阅读
author: 梁忆炎 (Miao Miao)
excerpt: 列表卡片里显示的两行摘要。
cover: /images/blog-1.jpg   # 不想要封面就整行删掉
---

正文用 Markdown 写，`## 标题` 会自动进目录导航。
```

代码块这样写，会自动带文件名和复制按钮，语法高亮在构建时生成：

````markdown
```python title="trajectory_cleaner.py"
print("hello")
```
````

## 怎么改图片

图片都在 **`public/images/`**，两类改法：

1. **换图**：把你的图片放进 `public/images/`，然后改 `src/data/site.ts`（或文章 frontmatter 里的 `cover`）指向的路径
2. **不写路径**：直接覆盖同名文件，路径不用动

| 图片 | 用在哪 | 建议尺寸 |
| --- | --- | --- |
| `hero.jpg` | 首屏背景大图 | 横图，1920×1080 以上 |
| `about-1.jpg` / `about-2.jpg` | 介绍区两张错位图 | 横图，1400×800 左右 |
| `award-1.jpg` / `award-2.jpg` | 奖项区两张错位图 | 横图，1400×800 左右 |
| `work-1.jpg` ~ `work-4.jpg` | 工作轮播卡片 | 横图，1400×800 左右 |
| `blog-1.jpg` / `blog-2.jpg` | 文章封面 | 16:9 横图 |
| `favicon.svg` | 浏览器标签图标 | 方形 |

现在这 11 张是设计稿里的示意配图（1408×768），换成你自己的即可。

## 常用命令

```bash
npm run dev      # 本地开发，http://localhost:4321，改文件自动刷新
npm run build    # 构建到 dist/
npm run preview  # 预览构建结果
npm run check    # 类型检查
```

## 目录

```
src/
  data/site.ts           ← 所有文案和图片路径
  content/blog/*.md      ← 文章正文（Markdown）
  content.config.ts      ← 文章字段定义
  components/            ← 每个区块一个组件
    Header  Hero  About  Awards  Work  Docs  Subscribe  Footer  ScrollUp
  layouts/BaseLayout.astro
  styles/global.css      ← 样式（颜色变量在最上面，改主色调只改 --hue-color）
public/images/           ← 图片
reference/v2/            ← 原始设计稿 2.1（code.html + 截图），只作对照
legacy/v1-astro/         ← 第一版 Astro 代码，已停用，保留备查
```

## 已知待处理

- `astro.config.mjs` 里的 `SITE` 是占位域名 `https://example.com`，部署前要改
- 页脚里有手机号，公网可见，自己确认要不要留
- 没有英文版（原设计稿导航里有 English 入口，暂时去掉了）
- 依赖 `scrollreveal` 是 GPL-3.0 授权，介意的话可以换成本地写的滚动入场动画
- 图片走 `public/` 原样输出，不做压缩；要自动压缩转 WebP 可以改用 `astro:assets`
- 文章正文预渲染进首页再放进隐藏 `template`，文章多了首页会变大；数量上去要改成每篇独立页面
