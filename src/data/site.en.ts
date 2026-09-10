import type { SiteContent } from './types';

/** English copy */
export const en: SiteContent = {
  meta: {
    title: "Texas's Garage",
    description:
      "Lin Jincheng's personal homepage. Freshman in the Technology Science Experimental Class at Nanjing University.",
  },

  brand: {
    icon: 'ri-tools-fill',
    name: "Texas's Garage",
    href: '/en/',
  },

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#awards' },
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
      { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/TexasLyn' },
      {
        label: 'Zhihu',
        icon: 'ri-zhihu-line',
        href: 'https://www.zhihu.com/people/sugarlin-61',
      },
      { label: 'WeChat', icon: 'ri-wechat-fill', href: '#footer' },
    ],
  },

  about: {
    titleHtml: 'Lin Jincheng<br />Technology Science Experimental Class, Nanjing University · Freshman',
    description:
      'Freshman in the Technology Science Experimental Class at Nanjing University, majoring in Intelligent Science and Technology.',
    cta: { label: 'Get in touch', href: '#footer' },
    images: [
      { src: '/images/about-1.jpg', alt: 'Nanjing University' },
      { src: '/images/about-2.jpg', alt: 'Campus' },
    ],
  },

  awards: {
    title: 'Experience',
    facts: [
      { label: 'University', value: 'Nanjing University' },
      { label: 'Major', value: 'Intelligent Science and Technology' },
      { label: 'Year', value: 'Freshman · 2026 intake' },
      { label: 'City', value: 'Nanjing, Jiangsu' },
    ],
    // Add new entries like: { year: '2027', text: '...', result: 'First Prize' }
    items: [{ year: '2026', text: 'Enrolled at Nanjing University', textBold: true }],
    images: [
      { src: '/images/award-1.jpg', alt: 'Campus' },
      { src: '/images/award-2.jpg', alt: 'Event' },
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
      { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/TexasLyn' },
      {
        label: 'Zhihu',
        icon: 'ri-zhihu-fill',
        href: 'https://www.zhihu.com/people/sugarlin-61',
      },
    ],
  },

  footer: {
    contactTitle: 'Contact',
    contactHtml:
      'Email: <a href="mailto:SugarLin0405@outlook.com">SugarLin0405@outlook.com</a><br />' +
      'Alt: <a href="mailto:Texaslyn2026@gmail.com">Texaslyn2026@gmail.com</a><br />' +
      'Campus: <a href="mailto:261880347@smail.nju.edu.cn">261880347@smail.nju.edu.cn</a><br />' +
      '<span class="footer__muted">WeChat: Texas_Lin2025</span>',
    socials: [
      { label: 'GitHub', icon: 'ri-github-fill', href: 'https://github.com/TexasLyn' },
      {
        label: 'Zhihu',
        icon: 'ri-zhihu-fill',
        href: 'https://www.zhihu.com/people/sugarlin-61',
      },
    ],
    groups: [
      {
        title: 'About',
        links: [
          { label: 'About me', href: '#about' },
          { label: 'Blog & Docs', href: '#docs' },
          { label: 'GitHub', href: 'https://github.com/TexasLyn' },
          { label: 'Zhihu', href: 'https://www.zhihu.com/people/sugarlin-61' },
        ],
      },
      {
        title: 'Support',
        links: [{ label: 'FAQ', href: '#' }],
      },
    ],
  },
};
