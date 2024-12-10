type SocialType = {
  icon: string;
  name: string;
  url: string;
  placeholder: string;
};

// TODO: Add icons for socials
export const SOCIALS: Record<string, SocialType> = {
  twitter: {
    icon: "twitter/twitter-original.svg",
    name: "X",
    url: "https://twitter.com/",
    placeholder: "https://x.com/username",
  },
  facebook: {
    icon: "facebook/facebook-original.svg",
    name: "Facebook",
    url: "https://facebook.com/",
    placeholder: "https://www.facebook.com/profile.php?id=000000000000000",
  },
  github: {
    icon: "github/github-original.svg",
    name: "GitHub",
    url: "https://github.com/",
    placeholder: "https://github.com/username",
  },
  linkedin: {
    icon: "linkedin/linkedin-original.svg",
    name: "LinkedIn",
    url: "https://linkedin.com/in/",
    placeholder: "https://linkedin.com/in/wiperr",
  },
  instagram: {
    icon: "instagram/instagram-original.svg",
    name: "Instagram",
    url: "https://instagram.com/",
    placeholder: "https://instagram.com/username",
  },
  youtube: {
    icon: "youtube/youtube-original.svg",
    name: "YouTube",
    url: "https://youtube.com/",
    placeholder: "https://youtube.com/@username",
  },
  devto: {
    icon: "devto/devto-original.svg",
    name: "Dev.to",
    url: "https://dev.to/",
    placeholder: "https://dev.to/username",
  },
  reddit: {
    icon: "reddit/reddit-original.svg",
    name: "Reddit",
    url: "https://reddit.com/user/",
    placeholder: "https://reddit.com/user/username",
  },
  stackoverflow: {
    icon: "stackoverflow/stackoverflow-original.svg",
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/",
    placeholder: "https://stackoverflow.com/users/123456/username",
  },
  codepen: {
    icon: "codepen/codepen-original.svg",
    name: "CodePen",
    url: "https://codepen.io/",
    placeholder: "https://codepen.io/username",
  },
  medium: {
    icon: "medium/medium-original.svg",
    name: "Medium",
    url: "https://medium.com/@",
    placeholder: "https://medium.com/@username",
  },
  discord: {
    icon: "discord/discord-original.svg",
    name: "Discord",
    url: "https://discordapp.com/users/",
    placeholder: "https://discordapp.com/users/123456789012345678",
  },
  tiktok: {
    icon: "tiktok/tiktok-original.svg",
    name: "TikTok",
    url: "https://tiktok.com/@",
    placeholder: "https://tiktok.com/@username",
  },
  pinterest: {
    icon: "pinterest/pinterest-original.svg",
    name: "Pinterest",
    url: "https://pinterest.com/",
    placeholder: "https://pinterest.com/username",
  },
  behance: {
    icon: "behance/behance-original.svg",
    name: "Behance",
    url: "https://behance.net/",
    placeholder: "https://behance.net/username",
  },
  dribbble: {
    icon: "dribbble/dribbble-original.svg",
    name: "Dribbble",
    url: "https://dribbble.com/",
    placeholder: "https://dribbble.com/username",
  },
  gitlab: {
    icon: "gitlab/gitlab-original.svg",
    name: "GitLab",
    url: "https://gitlab.com/",
    placeholder: "https://gitlab.com/username",
  },
  telegram: {
    icon: "telegram/telegram-original.svg",
    name: "Telegram",
    url: "https://t.me/",
    placeholder: "https://t.me/username",
  },
  whatsapp: {
    icon: "whatsapp/whatsapp-original.svg",
    name: "WhatsApp",
    url: "https://wa.me/",
    placeholder: "https://wa.me/1234567890",
  },
};
