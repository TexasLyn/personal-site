/** 奖项 / 经历的一行 */
export type AwardItem = {
  /** 年份 */
  year: string;
  /** 奖项 / 经历名称 */
  text: string;
  /** 名称是否加粗 */
  textBold?: boolean;
  /** 名次或奖项等级，没有就省略 */
  result?: string;
  /** 名次是否加粗 */
  resultBold?: boolean;
};

export type ImageSlot = { src: string; alt: string };
export type SocialLink = { label: string; icon: string; href: string };

/**
 * 一个语言版本的全部文案。
 * 锚点链接只写 #xxx，跨页面时会由组件补上语言前缀。
 */
export type SiteContent = {
  meta: { title: string; description: string };
  brand: { icon: string; name: string; href: string };
  nav: { label: string; href: string }[];
  /** 语言切换按钮上显示的文字（点击后去另一种语言） */
  langSwitchLabel: string;
  themeLabel: string;

  hero: {
    kicker: string;
    /** 可写 HTML */
    titleHtml: string;
    cta: { label: string; href: string };
    image: ImageSlot;
    socials: SocialLink[];
  };

  about: {
    titleHtml: string;
    description: string;
    cta: { label: string; href: string };
    images: ImageSlot[];
  };

  awards: {
    title: string;
    stats: { value: string; labelHtml: string }[];
    items: AwardItem[];
    images: ImageSlot[];
  };

  work: {
    title: string;
    items: { title: string; description: string; image: string }[];
  };

  blog: {
    /** 区块标题 */
    title: string;
    readMore: string;
    /** 文章页返回列表的文案 */
    backToList: string;
    outline: string;
    share: string;
    previous: string;
    next: string;
    /** 文章页作者署名前缀，例如 "Written by" */
    writtenBy: string;
    /** 代码块复制按钮 */
    copy: string;
    copied: string;
    /** 复制文章链接按钮的提示 */
    copyLink: string;
  };

  subscribe: {
    title: string;
    description: string;
    socials: SocialLink[];
  };

  footer: {
    /** 可写 HTML */
    contactHtml: string;
    contactTitle: string;
    socials: SocialLink[];
    groups: { title: string; links: { label: string; href: string }[] }[];
  };
};
