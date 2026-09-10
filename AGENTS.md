# 项目约定

这是一个 Astro 做的中英双语个人主页。改这个仓库时遵循以下约定。

## 每次完成请求后

调用一次 confetti（`fire_confetti`）庆祝一下。这是用户明确要求保留的习惯。

## 内容规则

- 中英文文案必须同步修改：`src/data/site.zh.ts` 和 `src/data/site.en.ts`，字段结构定义在 `src/data/types.ts`
- 文章：中文放 `src/content/blog/`，英文放 `src/content/blog-en/`，两边用同样的文件名，语言切换才能对上
- 不要出现设计稿模板作者的任何真实信息（SKlight-Liang、sklight-liang.github.io、北大邮箱、原手机号）
- 没拿到真实信息的地方留空或者注释掉，不要编造

## 工程规则

- 改完跑 `npm run check` 和 `npm run build`，保持 0 错误
- 视觉改动用 headless Chrome 截图核对（沙箱里需要申请授权）
- 提交信息用中文，带 Conventional Commits 前缀（feat / fix / chore）
- 沙箱限制：本地端口绑定、写 .git、联网安装依赖都需要申请授权
