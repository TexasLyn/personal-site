import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * 博客 / 文档。新增文章 = 在 src/content/blog/ 里加一个 .md 文件，
 * 文件名就是文章的 id（也用于 #blog/<id> 这个链接）。
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    /** 分类标签，显示在标题上方 */
    category: z.string(),
    /** 日期，格式 YYYY-MM-DD，列表按它倒序 */
    date: z.string(),
    /** 自定义阅读时长文案，例如 "8 分钟阅读" */
    readTime: z.string(),
    author: z.string(),
    /** 列表卡片里的两行摘要 */
    excerpt: z.string(),
    /** 封面图，留空则不显示封面 */
    cover: z.string().optional(),
  }),
});

/** English posts. Same fields, files live in src/content/blog-en/ */
const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-en' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    readTime: z.string(),
    author: z.string(),
    excerpt: z.string(),
    cover: z.string().optional(),
  }),
});

export const collections = { blog, blogEn };
