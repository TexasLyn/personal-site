import type { SiteContent } from './types';

/** 中文版文案 */
export const zh: SiteContent = {
  meta: {
    title: "Texas's Garage",
    description: '林锦承 (Lin Jincheng) 的个人主页。南京大学技术科学实验班，大一。',
  },

  brand: {
    icon: 'ri-tools-fill',
    name: "Texas's Garage",
    href: '/',
  },

  nav: [
    { label: '首页', href: '#home' },
    { label: '介绍', href: '#about' },
    { label: '经历', href: '#awards' },
    { label: '工作', href: '#work' },
    { label: '文档 / 博客', href: '#docs' },
  ],

  langSwitchLabel: 'English',
  themeLabel: '深色模式',

  hero: {
    kicker: '即使我们不抬头仰望，',
    titleHtml: '<b>星空</b>，也在<br />注视着我们',
    cta: { label: '了解更多', href: '#about' },
    image: { src: '/images/hero.jpg', alt: '星空' },
    socials: [
      { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/TexasLyn' },
      {
        label: '知乎',
        icon: 'ri-zhihu-line',
        href: 'https://www.zhihu.com/people/sugarlin-61',
      },
      { label: '微信', icon: 'ri-wechat-fill', href: '#footer' },
    ],
  },

  about: {
    titleHtml: '林锦承, Lin Jincheng<br />南京大学技术科学实验班 · 大一',
    description: '现就读于南京大学技术科学实验班，方向为智能科学与技术，大一。',
    cta: { label: '立即联系我！', href: '#footer' },
    images: [
      { src: '/images/about-1.jpg', alt: '南京大学' },
      { src: '/images/about-2.jpg', alt: '校园' },
    ],
  },

  awards: {
    title: '经历',
    facts: [
      { label: '学校', value: '南京大学' },
      { label: '方向', value: '智能科学与技术' },
      { label: '年级', value: '大一 · 2026 级' },
      { label: '城市', value: '江苏南京' },
    ],
    // 之后有新奖项就往这里加：{ year: '2027', text: 'xxx', result: '一等奖' }
    items: [{ year: '2026', text: '南京大学 入学', textBold: true }],
    images: [
      { src: '/images/award-1.jpg', alt: '校园' },
      { src: '/images/award-2.jpg', alt: '活动' },
    ],
  },

  work: {
    title: '正在进行的工作',
    items: [
      { title: '苦力怕', description: '听说苦力怕会爆炸哦~', image: '/images/work-1.jpg' },
      { title: '画画!', description: '一个很漂亮的表格制作工具', image: '/images/work-2.jpg' },
      { title: '摸鱼~', description: '怎么会有人要天天工作呢', image: '/images/work-3.jpg' },
      { title: '问题生成', description: '让我们把AI难倒！', image: '/images/work-4.jpg' },
    ],
  },

  blog: {
    title: '文档与博客 (Blog & Docs)',
    readMore: '阅读全文',
    backToList: '返回文章列表',
    outline: '目录',
    share: '分享',
    previous: '上一篇',
    next: '下一篇',
    writtenBy: '作者',
    copy: '复制',
    copied: '已复制',
    copyLink: '复制链接',
  },

  subscribe: {
    title: '订阅我的知乎和GitHub',
    description: '订阅我的知乎和GitHub，获取最新动态和项目进展！',
    socials: [
      { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/TexasLyn' },
      {
        label: '知乎',
        icon: 'ri-zhihu-fill',
        href: 'https://www.zhihu.com/people/sugarlin-61',
      },
    ],
  },

  footer: {
    contactTitle: '联系方式',
    contactHtml:
      '邮箱: <a href="mailto:SugarLin0405@outlook.com">SugarLin0405@outlook.com</a><br />' +
      '备用: <a href="mailto:Texaslyn2026@gmail.com">Texaslyn2026@gmail.com</a><br />' +
      '校园: <a href="mailto:261880347@smail.nju.edu.cn">261880347@smail.nju.edu.cn</a><br />' +
      '<span class="footer__muted">微信: Texas_Lin2025</span>',
    socials: [
      { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/TexasLyn' },
      {
        label: '知乎',
        icon: 'ri-zhihu-fill',
        href: 'https://www.zhihu.com/people/sugarlin-61',
      },
    ],
    groups: [
      {
        title: '关于',
        links: [
          { label: '关于我', href: '#about' },
          { label: '技术文档与博客', href: '#docs' },
          { label: 'GitHub', href: 'https://github.com/TexasLyn' },
          { label: '知乎', href: 'https://www.zhihu.com/people/sugarlin-61' },
        ],
      },
      {
        title: '支持',
        // TODO: 有仓库之后换成 issues 地址
        links: [{ label: '常见问题', href: '#' }],
      },
    ],
  },
};
