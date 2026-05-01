export type Locale = "en" | "zh";

export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  return pathname?.startsWith("/zh") ? "zh" : "en";
}

export function localePrefix(locale: Locale) {
  return locale === "zh" ? "/zh" : "";
}

export function localizeHref(href: string, locale: Locale) {
  if (locale === "en") return href;
  if (href === "/") return "/zh";
  return `/zh${href}`;
}

export const navLabels = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    speak: "Speak with us"
  },
  zh: {
    home: "首页",
    about: "关于我们",
    services: "服务",
    contact: "联系我们",
    speak: "联系我们"
  }
};

export const taglines = {
  en: "Your European Market Access Partner",
  zh: "您的欧洲市场准入合作伙伴"
};
