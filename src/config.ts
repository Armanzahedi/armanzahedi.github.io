import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://armanzahedi.com", // replace this with your deployed domain
  author: "Arman Zahedi",
  desc: "My digital coding notebook.",
  title: "Arman's Blog",
  ogImage: "",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/armanzahedi",
    linkTitle: ` Me on Github`,
    active: true,
  },
  {
    name: "Devto",
    href: "https://dev.to/armanzahedi",
    linkTitle: `Me on dev.to`,
    active: true,
  },

  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/armanzahedi",
    linkTitle: `Me on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:armanzdii@gmail.com",
    linkTitle: `Email me`,
    active: true,
  },

  {
    name: "Medium",
    href: "https://medium.com/@armanzahedi",
    linkTitle: `Me on Medium`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/itstiredmilk",
    linkTitle: `Me on X`,
    active: true,
  },
  {
    name: "YouTube",
    href: "",
    linkTitle: `Me on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+971501749678",
    linkTitle: `Me on WhatsApp`,
    active: false,
  },


  {
    name: "TikTok",
    href: "",
    linkTitle: `Me on TikTok`,
    active: false,
  },
  {
    name: "Discord",
    href: "",
    linkTitle: `Me on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "",
    linkTitle: `Me on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "",
    linkTitle: `Me on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "",
    linkTitle: `Me on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "",
    linkTitle: `Me on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/armanzdii",
    linkTitle: `Me on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "",
    linkTitle: `Me on Mastodon`,
    active: false,
  },
];
