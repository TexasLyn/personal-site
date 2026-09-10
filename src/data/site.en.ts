import type { SiteContent } from './types';

/** English copy */
export const en: SiteContent = {
  meta: {
    title: "Texas's Home",
    description:
      "Lin Jincheng's personal homepage. Freshman in the Technology Science Experimental Class at Nanjing University.",
  },

  brand: {
    icon: 'ri-home-heart-fill',
    name: "Texas's Home",
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
      // TODO: replace with your own GitHub / Zhihu links
      { label: 'GitHub', icon: 'ri-github-fill', href: '#' },
      { label: 'Zhihu', icon: 'ri-zhihu-line', href: '#' },
      { label: 'WeChat', icon: 'ri-wechat-fill', href: '#footer' },
    ],
  },

  about: {
    titleHtml: 'Lin Jincheng<br />Technology Science Experimental Class, Nanjing University · Freshman',
    description:
      'Freshman in the Technology Science Experimental Class at Nanjing University.',
    cta: { label: 'Get in touch', href: '#footer' },
    images: [
      { src: '/images/about-1.jpg', alt: 'Nanjing University' },
      { src: '/images/about-2.jpg', alt: 'Campus' },
    ],
  },

  awards: {
    title: 'Awards & Experience',
    stats: [
      { value: '0', labelHtml: 'Year of<br />scholarship' },
      { value: '0', labelHtml: 'Contest<br />awards' },
      { value: '0', labelHtml: 'Zhihu<br />articles' },
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
      // TODO: replace with your own GitHub / Zhihu links
      { label: 'GitHub', icon: 'ri-github-fill', href: '#' },
      { label: 'Zhihu', icon: 'ri-zhihu-fill', href: '#' },
    ],
  },

  footer: {
    contactTitle: 'Contact',
    // Add email / homepage back once you have them
    contactHtml: 'Phone: 15658114885',
    socials: [
      { label: 'GitHub', icon: 'ri-github-fill', href: '#' },
      { label: 'Zhihu', icon: 'ri-zhihu-fill', href: '#' },
    ],
    groups: [
      {
        title: 'About',
        links: [
          { label: 'About me', href: '#about' },
          { label: 'Blog & Docs', href: '#docs' },
          { label: 'GitHub', href: '#' },
          { label: 'Zhihu', href: '#' },
        ],
      },
      {
        title: 'Support',
        links: [{ label: 'FAQ', href: '#' }],
      },
    ],
  },
};
