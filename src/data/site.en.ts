import type { SiteContent } from './types';

/** English copy */
export const en: SiteContent = {
  meta: {
    title: 'Liang Yiyan — Personal Homepage',
    description:
      "Liang Yiyan's personal homepage. School of Electronics Engineering and Computer Science, Peking University, majoring in Information and Computing Science. Notes on awards, contests and ongoing projects.",
  },

  brand: {
    icon: 'ri-home-heart-fill',
    name: "Miao Miao's Home",
    href: '/en/',
  },

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Awards', href: '#awards' },
    { label: 'Work', href: '#work' },
    { label: 'Blog / Docs', href: '#docs' },
  ],

  langSwitchLabel: '中文',
  themeLabel: 'Dark mode',

  hero: {
    kicker: 'Even when we never look up,',
    titleHtml: '<b>The stars</b> are still<br />watching over us',
    cta: { label: 'Learn more', href: '#about' },
    image: { src: '/images/hero.jpg', alt: 'Starry sky' },
    socials: [
      { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/SKlight-Liang' },
      {
        label: 'Zhihu',
        icon: 'ri-zhihu-line',
        href: 'https://www.zhihu.com/people/67-38-50-46',
      },
      { label: 'WeChat', icon: 'ri-wechat-fill', href: '#footer' },
    ],
  },

  about: {
    titleHtml: 'Liang Yiyan<br />CS in Peking University',
    description:
      'Undergraduate at the School of Electronics Engineering and Computer Science, Peking University, majoring in Information and Computing Science. Currently working on data cleaning and analysis, aiming to provide more accurate and efficient data support for specific agent training pipelines.',
    cta: { label: 'Get in touch', href: '#footer' },
    images: [
      { src: '/images/about-1.jpg', alt: 'Peking University' },
      { src: '/images/about-2.jpg', alt: 'Campus research' },
    ],
  },

  awards: {
    title: 'Awards & Experience',
    stats: [
      { value: '1', labelHtml: 'Year of<br />scholarship' },
      { value: '5', labelHtml: 'Contest<br />awards' },
      { value: '117+', labelHtml: 'Zhihu<br />articles' },
    ],
    items: [
      { year: '2023', text: 'Qin Wanshun–Jin Yunhui Scholarship', textBold: true },
      { year: '2023', text: 'Peking University Merit Student', textBold: true },
      { year: '2023', text: '(CUPT) Undergraduate Project Presentation', result: 'Third Prize' },
      {
        year: '2023',
        text: 'Peking University Outstanding Paper on Ideological Education',
        textBold: true,
      },
      { year: '2023', text: 'Jiukun Cup Collegiate Programming Contest', result: 'Third Prize' },
      {
        year: '2024',
        text: 'Peking University Collegiate Programming Contest',
        result: 'Second Prize',
      },
      {
        year: '2025',
        text: 'Mathematical Contest in Modeling (MCM/ICM)',
        result: 'Honorable Mention',
        textBold: true,
        resultBold: true,
      },
      {
        year: '2025',
        text: 'Tsinghua Collegiate Programming Contest & Invitational',
        result: '10th Place',
        textBold: true,
        resultBold: true,
      },
    ],
    images: [
      { src: '/images/award-1.jpg', alt: 'Award certificate' },
      { src: '/images/award-2.jpg', alt: 'Programming contest' },
    ],
  },

  work: {
    title: 'Ongoing Work',
    items: [
      { title: 'Creeper', description: 'They say creepers explode~', image: '/images/work-1.jpg' },
      {
        title: 'Draw!',
        description: 'A surprisingly pretty table-making tool',
        image: '/images/work-2.jpg',
      },
      {
        title: 'Slacking~',
        description: 'Who could possibly work every single day',
        image: '/images/work-3.jpg',
      },
      {
        title: 'Question Generation',
        description: "Let's stump the AI!",
        image: '/images/work-4.jpg',
      },
    ],
  },

  blog: {
    title: 'Blog & Docs',
    readMore: 'Read more',
    backToList: 'Back to the list',
    outline: 'Outline',
    share: 'Share',
    previous: 'Previous',
    next: 'Next',
    writtenBy: 'Written by',
    copy: 'Copy',
    copied: 'Copied',
    copyLink: 'Copy link',
  },

  subscribe: {
    title: 'Subscribe on Zhihu & GitHub',
    description: 'Follow me on Zhihu and GitHub for the latest updates and project progress!',
    socials: [
      { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/SKlight-Liang' },
      {
        label: 'Zhihu',
        icon: 'ri-zhihu-fill',
        href: 'https://www.zhihu.com/people/67-38-50-46',
      },
    ],
  },

  footer: {
    contactTitle: 'Contact',
    contactHtml:
      'Email: 2200011633@stu.pku.edu.cn <br />Phone: +86 188 5751 7710 <br />Homepage: https://sklight-liang.github.io/',
    socials: [
      { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/SKlight-Liang' },
      {
        label: 'Zhihu',
        icon: 'ri-zhihu-fill',
        href: 'https://www.zhihu.com/people/67-38-50-46',
      },
    ],
    groups: [
      {
        title: 'About',
        links: [
          { label: 'About me', href: '#about' },
          { label: 'Blog & Docs', href: '#docs' },
          { label: 'GitHub', href: 'https://github.com/SKlight-Liang' },
          { label: 'Zhihu', href: 'https://www.zhihu.com/people/67-38-50-46' },
        ],
      },
      {
        title: 'Support',
        links: [
          {
            label: 'FAQ',
            href: 'https://github.com/SKlight-Liang/SKlight-Liang.github.io/issues',
          },
        ],
      },
    ],
  },
};
