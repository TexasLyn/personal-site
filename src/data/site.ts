/**
 * 全站内容集中在这里。
 * 现在全是占位假数据，之后换成真实内容只需要改这个文件。
 */

export const profile = {
  handle: 'alex.dev',
  name: 'Alex Chen',
  role: 'AI & Intelligent Systems Explorer',
  headline:
    'Exploring Machine Intelligence, Complex Systems & Playful Web Architectures.',
  bio: 'Freshman CS & AI researcher exploring low-latency vector dynamics, autonomous agents, and elegant digital experiences at the intersection of intelligence and human interaction.',
  email: 'alex@example.com',
  links: {
    github: 'https://github.com',
    resume: '#',
  },
  copyrightYear: 2025,
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Updates', href: '/#updates' },
  { label: 'Blog', href: '/#blog' },
] as const;

export type Milestone = {
  date: string;
  tag: string;
  tagTone: 'emerald' | 'amber' | 'indigo';
  title: string;
  body: string;
  /** body 中需要用等宽内联代码包裹的词，可选 */
  codeWord?: string;
  icon: string;
  footer: string;
};

export const milestones: Milestone[] = [
  {
    date: 'Nov 2024',
    tag: 'Release',
    tagTone: 'emerald',
    title: 'Astro + Tailwind Blog Starter',
    body: 'Published modern minimal blog starter template focused on content collections and type safety. Reached 1.2k stars on GitHub within two weeks.',
    icon: 'star',
    footer: '1,200+ GitHub Stars',
  },
  {
    date: 'Oct 2024',
    tag: 'Award',
    tagTone: 'amber',
    title: 'LocalRAG Offline Assistant',
    body: 'Awarded 1st Place at University Hackathon building an offline contextual knowledge assistant running entirely within browser WASM runtimes.',
    codeWord: 'LocalRAG',
    icon: 'emoji_events',
    footer: '1st Place Winner',
  },
  {
    date: 'Sep 2024',
    tag: 'Education',
    tagTone: 'indigo',
    title: 'Undergraduate Computer Science',
    body: 'Commenced studies in Computer Science, concentrating on systems architecture, discrete mathematics, and compiler design fundamentals.',
    icon: 'school',
    footer: 'Candidate for B.S. CS',
  },
];

export type Project = {
  index: string;
  status: string;
  statusTone: 'emerald' | 'muted';
  domain: string;
  /** 决定右/左视觉列渲染哪个组件 */
  visual: 'neural' | 'agent' | 'audit';
  title: string;
  body: string;
  stack: { label: string; tone: string }[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string; icon: string };
  /** 视觉列在左还是右，桌面端交替排布 */
  visualFirst?: boolean;
};

export const projects: Project[] = [
  {
    index: '02.01',
    status: 'Active Neural Cluster',
    statusTone: 'emerald',
    domain: '',
    visual: 'neural',
    title: 'OmniSearch AI',
    body: 'Local-first vector search agent engineered for personal knowledge bases. Operates with sub-15ms semantic retrieval times without transmitting unstructured data over external networks.',
    stack: [
      { label: 'Astro', tone: 'indigo' },
      { label: 'TypeScript', tone: 'sky' },
      { label: 'pgvector', tone: 'emerald' },
      { label: 'Neural Graph', tone: 'zinc' },
    ],
    primaryCta: { label: 'Source code', href: '#' },
    secondaryCta: { label: 'Live demo', href: '#', icon: 'arrow_outward' },
  },
  {
    index: '02.02',
    status: 'Intelligent Telemetry',
    statusTone: 'muted',
    domain: '',
    visual: 'agent',
    title: 'DevPulse CLI',
    body: 'Lightweight developer workflow analytics tool compiling local commit frequencies, shell friction indices, and context switching overhead into actionable metrics without background telemetry.',
    stack: [
      { label: 'Rust', tone: 'amber' },
      { label: 'SQLite', tone: 'sky' },
      { label: 'Autonomous DAG', tone: 'zinc' },
    ],
    primaryCta: { label: 'crates.io / devpulse', href: '#' },
    secondaryCta: { label: 'Read design note', href: '#', icon: 'arrow_forward' },
    visualFirst: true,
  },
  {
    index: '02.03',
    status: 'Open Source',
    statusTone: 'muted',
    domain: '',
    visual: 'audit',
    title: 'Minimalist Blog Template',
    body: 'High-performance Astro v5 starter designed specifically for architectural monographs, systems research docs, and hyper-clean engineer personal domains with flawless Lighthouse metrics.',
    stack: [
      { label: 'Astro v5', tone: 'indigo' },
      { label: 'Content Collections', tone: 'emerald' },
      { label: 'Tailwind', tone: 'zinc' },
    ],
    primaryCta: { label: 'View repository', href: '#' },
  },
];

export type Post = {
  date: string;
  title: string;
  category: 'Articles' | 'Notes';
  readingTime: string;
  href: string;
};

export const posts: Post[] = [
  {
    date: 'Nov 18, 2024',
    title: 'Deep Dive: Astro Content Collections Architecture & Type Safety',
    category: 'Articles',
    readingTime: '6 min',
    href: '#',
  },
  {
    date: 'Nov 05, 2024',
    title: 'Building a Zero-Config Dark Mode Toggle in Pure JavaScript',
    category: 'Notes',
    readingTime: '3 min',
    href: '#',
  },
  {
    date: 'Oct 24, 2024',
    title: 'Why I Switched from Next.js to Astro for My Personal Site',
    category: 'Articles',
    readingTime: '8 min',
    href: '#',
  },
];

/** 文章总数（用于「Archive (14 posts)」这类计数文案），先写死为假数据 */
export const postCount = 14;
