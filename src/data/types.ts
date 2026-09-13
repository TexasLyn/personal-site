/** 奖项 / 经历的一行 */
export type AwardItem = {
  /** 年份 */
  year: string;
  /** 奖项 / 经历名称 */
  text: string;
  /** 名称是否加粗 */
  textBold?: boolean;
  /** 还没发生的经历，展示时颜色浅一档 */
  future?: boolean;
  /** 正在进行的这一条，圆点会填实 */
  current?: boolean;
  /** 名次或奖项等级，没有就省略 */
  result?: string;
  /** 名次是否加粗 */
  resultBold?: boolean;
};

/** 经历区那条「铁路时间轴」上的一个站点 */
export type TimelineStop = {
  /** 年份，用等宽字体显示 */
  year: string;
  /** 站名，比如 南京南站 */
  station: string;
  /** 站牌下方的拼音（中文站牌都有；英文站名本身是拉丁字母，可省） */
  latin?: string;
  /** 当前所在的站，会加一个高亮光圈 */
  current?: boolean;
  /** 还没到的站，画在虚线上 */
  future?: boolean;
};

export type ImageSlot = { src: string; alt: string };
export type SocialLink = { label: string; icon: string; href: string };

/**
 * 一个语言版本的全部文案。
 * 锚点链接只写 #xxx，跨页面时会由组件补上语言前缀。
 */
export type SiteContent = {
  meta: { title: string; description: string };
  /** 品牌名；标记本身用 LogoMark 组件渲染，不再走图标字体 */
  brand: { name: string; href: string };
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
    /** 头像，圆形显示在名字上方 */
    avatar: ImageSlot;
    images: ImageSlot[];
  };

  awards: {
    title: string;
    /** 左上角那三格。原来是「数字 + 标签」，现在用来放学校 / 班级 / 年级这类档案 */
    facts: { label: string; value: string }[];
    items: AwardItem[];
    /** 铁路时间轴：走过和将要去的站 */
    timeline: TimelineStop[];
  };

  work: {
    title: string;
    items: {
      title: string;
      description: string;
      image: string;
      /** 有链接时整张卡片可点 */
      href?: string;
    }[];
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
    /** 可写 HTML，留空就不显示这一段 */
    contactHtml?: string;
    contactTitle: string;
    socials: SocialLink[];
    groups: { title: string; links: { label: string; href: string }[] }[];
  };
};
