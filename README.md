# 个人主页（梁忆炎 Liang Yiyan）

Astro 静态个人主页，设计稿来自 `reference/v2/`。

## 怎么改文案

打开 **`src/data/site.ts`**，全站文字都在这个文件里，改完保存就生效（dev 模式下浏览器自动刷新）。

- 姓名、简介、标题 → `about` / `hero`
- 三个大数字（1 / 5 / 117+）→ `awards.stats`
- 奖项经历列表 → `awards.items`，每行一个 `{ year, text, result }`
- 工作轮播卡片 → `work.items`，加一项就多一张卡片
- 联系方式、页脚链接 → `footer`
- 顶部导航 → `nav`

`titleHtml` / `contactHtml` 这类字段可以直接写 HTML，用 `<br />` 换行、`<b>` 加粗。

## 怎么改图片

图片都在 **`public/images/`**，两类改法：

1. **换图**：把你的图片放进 `public/images/`，然后改 `src/data/site.ts` 里对应的 `src`，例如
   `image: { src: '/images/hero.svg' }` → `image: { src: '/images/我的星空.jpg' }`
2. **不写路径**：直接覆盖同名文件（比如把新图命名成 `hero.svg` 放进去），data 不用动

对应关系：

| 图片 | 用在哪 | 建议尺寸 |
| --- | --- | --- |
| `hero.svg` | 首屏右侧大图 | 方形，800×800 以上 |
| `about-1.svg` / `about-2.svg` | 介绍区两张错位图 | 竖图，400×520 左右 |
| `award-1.svg` / `award-2.svg` | 奖项区两张错位图 | 竖图，400×520 左右 |
| `work-1.svg` ~ `work-4.svg` | 工作轮播卡片 | 横图，800×500 左右 |
| `favicon.svg` | 浏览器标签图标 | 方形 |

现在是占位图，灰色方块 + 文件名，换成真图即可。

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
  components/            ← 每个区块一个组件
    Header  Hero  About  Awards  Work  Subscribe  Footer  ScrollUp
  layouts/BaseLayout.astro
  styles/global.css      ← 样式（颜色变量都在最上面）
public/images/           ← 图片
reference/v2/            ← 原始设计稿（code.html + 截图），只作对照
legacy/v1-astro/         ← 第一版 Astro 代码，已停用，保留备查
```

## 待处理

- `astro.config.mjs` 里的 `SITE` 是占位域名 `https://example.com`，部署前要改
- 页脚里有手机号，公网可见，自己确认要不要留
- 没有英文版（原设计稿导航里有 English 入口，暂时去掉了）
- 依赖 `scrollreveal` 是 GPL-3.0 授权，介意的话可以换成本地写的滚动入场动画
- 图片走 `public/` 原样输出，不做压缩；要自动压缩转 WebP 可以改用 `astro:assets`
