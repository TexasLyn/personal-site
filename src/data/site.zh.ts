import type { SiteContent } from './types';

/** 中文版文案 */
export const zh: SiteContent = {
  meta: {
    title: "Miao Miao's Home",
    description:
      '梁忆炎 (Liang Yiyan) 的个人主页。北京大学信息科学技术学院，信息与计算科学专业。记录奖项、竞赛与正在进行的工作。',
  },

  brand: {
    icon: 'ri-home-heart-fill',
    name: "Miao Miao's Home",
    href: '/',
  },

  nav: [
    { label: '首页', href: '#home' },
    { label: '介绍', href: '#about' },
    { label: '奖项', href: '#awards' },
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
      { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/SKlight-Liang' },
      {
        label: '知乎',
        icon: 'ri-zhihu-line',
        href: 'https://www.zhihu.com/people/67-38-50-46',
      },
      { label: '微信', icon: 'ri-wechat-fill', href: '#footer' },
    ],
  },

  about: {
    titleHtml: '梁忆炎, Liang Yiyan<br />CS in Peking University',
    description:
      '现就读于北京大学信息科学技术学院，攻读信息与计算科学专业。目前致力于数据清洗和分析工作，旨在为特定的智能体训练过程提供更加精准和高效的数据支撑。',
    cta: { label: '立即联系我！', href: '#footer' },
    images: [
      { src: '/images/about-1.jpg', alt: '北京大学' },
      { src: '/images/about-2.jpg', alt: '校园科研' },
    ],
  },

  awards: {
    title: '奖项与经历',
    stats: [
      { value: '1', labelHtml: '年<br />奖学金' },
      { value: '5', labelHtml: '竞赛<br />获奖' },
      { value: '117+', labelHtml: '知乎<br />文章' },
    ],
    items: [
      { year: '2023', text: '秦宛顺-靳云汇奖学金', textBold: true },
      { year: '2023', text: '北京大学三好学生', textBold: true },
      { year: '2023', text: '(CUPT)本科生项目展示', result: '三等奖' },
      { year: '2023', text: '北京大学思政教育优秀论文', textBold: true },
      { year: '2023', text: '九坤杯大学生程序设计竞赛', result: '三等奖' },
      { year: '2024', text: '北京大学大学生程序设计竞赛', result: '二等奖' },
      {
        year: '2025',
        text: '美国大学生建模大赛',
        result: 'Honorable Mention',
        textBold: true,
        resultBold: true,
      },
      {
        year: '2025',
        text: '清华大学大学生程序设计竞赛暨高校邀请赛',
        result: '第十名',
        textBold: true,
        resultBold: true,
      },
    ],
    images: [
      { src: '/images/award-1.jpg', alt: '获奖证书' },
      { src: '/images/award-2.jpg', alt: '程序设计竞赛' },
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
      { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/SKlight-Liang' },
      {
        label: '知乎',
        icon: 'ri-zhihu-fill',
        href: 'https://www.zhihu.com/people/67-38-50-46',
      },
    ],
  },

  footer: {
    contactTitle: '联系方式',
    contactHtml:
      '邮箱: 2200011633@stu.pku.edu.cn <br />电话: +86 188 5751 7710 <br />主页: https://sklight-liang.github.io/',
    socials: [
      { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/SKlight-Liang' },
      {
        label: '知乎',
        icon: 'ri-zhihu-fill',
        href: 'https://www.zhihu.com/people/67-38-50-46',
      },
    ],
    groups: [
      {
        title: '关于',
        links: [
          { label: '关于我', href: '#about' },
          { label: '技术文档与博客', href: '#docs' },
          { label: 'GitHub', href: 'https://github.com/SKlight-Liang' },
          { label: '知乎', href: 'https://www.zhihu.com/people/67-38-50-46' },
        ],
      },
      {
        title: '支持',
        links: [
          {
            label: '常见问题',
            href: 'https://github.com/SKlight-Liang/SKlight-Liang.github.io/issues',
          },
        ],
      },
    ],
  },
};
