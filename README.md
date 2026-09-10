# 个人主页（梁忆炎 Liang Yiyan）

Astro 静态站点，中英双语，含博客 / 文档二级页面。设计稿来自 `reference/v2.1/`。

| 页面 | 中文 | 英文 |
| --- | --- | --- |
| 首页 | `/` | `/en/` |
| 文章 | `/blog/<文件名>/` | `/en/blog/<文件名>/` |

## 改文案

- 中文：[src/data/site.zh.ts](/Users/texas/Documents/ChatGPT/个人主页/src/data/site.zh.ts)
- 英文：[src/data/site.en.ts](/Users/texas/Documents/ChatGPT/个人主页/src/data/site.en.ts)

两个文件字段完全一样（结构定义在 `src/data/types.ts`），改完保存就生效。各处对应：

- 姓名、简介、标题 → `about` / `hero`
- 三个大数字（1 / 5 / 117+）→ `awards.stats`
- 奖项经历列表 → `awards.items`，每行一个 `{ year, text, result }`
- 工作轮播卡片 → `work.items`，加一项就多一张卡片
- 联系方式、页脚链接 → `footer`
- 顶部导航、语言切换按钮文字 → `nav` / `langSwitchLabel`
- 博客区块标题、目录、分享等界面文字 → `blog`

`titleHtml` / `contactHtml` 这类字段可以直接写 HTML，用 `<br />` 换行、`<b>` 加粗。

## 加文章

中文放 `src/content/blog/`，英文放 `src/content/blog-en/`。两边用**同样的文件名**，语言切换按钮就能跳到对应译文。

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

正文用 Markdown 写，`## 标题` 会自动进右侧目录。
```

代码块这样写，会自动带文件名和复制按钮，语法高亮在构建时生成：

````markdown
```python title="trajectory_cleaner.py"
print("hello")
```
````

文章按 `date` 倒序排列，底部自动生成上一篇 / 下一篇。

## 改图片

图片都在 `public/images/`，两种改法：换文件后改 data 里的路径，或者直接同名覆盖。

| 图片 | 用在哪 | 建议尺寸 |
| --- | --- | --- |
| `hero.jpg` | 首屏背景大图 | 横图，1920×1080 以上 |
| `about-1.jpg` / `about-2.jpg` | 介绍区两张错位图 | 横图，1400×800 左右 |
| `award-1.jpg` / `award-2.jpg` | 奖项区两张错位图 | 横图，1400×800 左右 |
| `work-*.jpg` | 工作轮播卡片（两个真实项目的界面截图） | 竖图，3:4 |
| `avatar.jpg` | 介绍区圆形头像 | 方形，460×460 以上 |
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
  data/
    site.zh.ts / site.en.ts   ← 中英文文案
    site.ts                   ← 语言工具函数（取文案、拼路径）
    types.ts                  ← 文案字段定义
  content/
    blog/*.md                 ← 中文文章
    blog-en/*.md              ← 英文文章
  components/                 ← 首页各区块
    Header  Hero  About  Awards  Work  Docs  Subscribe  Footer  ScrollUp
  layouts/
    BaseLayout.astro          ← 全站 head / 语言 / 深色模式初始化
    ArticleLayout.astro       ← 文章页：标题、封面、正文、目录、上下篇
  pages/
    index.astro               ← 中文首页
    blog/[id].astro           ← 中文文章页
    en/index.astro            ← 英文首页
    en/blog/[id].astro        ← 英文文章页
  styles/global.css           ← 样式（颜色变量在最上面，改主色调只改 --hue-color）
public/images/                ← 图片
reference/v2.1/               ← 原始设计稿，只作对照
legacy/v1-astro/              ← 第一版 Astro 代码，已停用
```

## 已知待处理

- `astro.config.mjs` 里的 `SITE` 是占位域名 `https://example.com`，部署前要改
- 页脚里有手机号，公网可见，自己确认要不要留
- 英文版文章是我按中文稿翻的，用词自己再核一遍
- 依赖 `scrollreveal` 是 GPL-3.0 授权，介意的话可以换成本地写的滚动入场动画
- 图片走 `public/` 原样输出，不做压缩；要自动压缩转 WebP 可以改用 `astro:assets`
- 没有搜索、没有 RSS、没有文章列表分页（文章多了需要加）
