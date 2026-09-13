/**
 * public/ 里的资源（图片、图标）都是用根路径写的，比如 `/images/hero.jpg`。
 * Astro 只会重写它自己处理的资源，这种手写字符串原样输出——所以在 GitHub Pages
 * 这种带 base 前缀的项目站点下，它们会指向站点根目录而 404。
 * 渲染时统一过一遍这个函数，路径就跟着 base 走了。
 */
export const asset = (path?: string) => {
  if (!path || !path.startsWith('/')) return path;
  // BASE_URL 形如 '/personal-site/'；部署在根路径时是 '/'
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') ? `${base.slice(0, -1)}${path}` : `${base}${path}`;
};
