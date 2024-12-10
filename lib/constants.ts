type SkillType = {
  icon: string;
  name: string;
  url: string;
};

type SocialType = {
  icon: string;
  name: string;
  url: string;
  placeholder: string;
};

// We use devicons, look for that in github
// TODO: Add more skills
// TODO: Zip all these files like readme.md, and icons/github.svg etc.
// This will help us to configure workflows etc everything with this resume generator
export const SKILLS: Record<string, SkillType> = {
  python: {
    icon: "python/python-original.svg",
    name: "Python",
    url: "https://www.python.org/",
  },
  javascript: {
    icon: "javascript/javascript-original.svg",
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  rust: {
    icon: "rust/rust-original.svg",
    name: "Rust",
    url: "https://www.rust-lang.org/",
  },
  java: {
    icon: "java/java-original.svg",
    name: "Java",
    url: "https://www.oracle.com/java/",
  },
  c: {
    icon: "c/c-original.svg",
    name: "C",
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  cpp: {
    icon: "cplusplus/cplusplus-original.svg",
    name: "C++",
    url: "https://isocpp.org/",
  },
  typescript: {
    icon: "typescript/typescript-original.svg",
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  go: { icon: "go/go-original.svg", name: "Go", url: "https://go.dev/" },
  ruby: {
    icon: "ruby/ruby-original.svg",
    name: "Ruby",
    url: "https://www.ruby-lang.org/",
  },
  php: {
    icon: "php/php-original.svg",
    name: "PHP",
    url: "https://www.php.net/",
  },
  swift: {
    icon: "swift/swift-original.svg",
    name: "Swift",
    url: "https://developer.apple.com/swift/",
  },
  kotlin: {
    icon: "kotlin/kotlin-original.svg",
    name: "Kotlin",
    url: "https://kotlinlang.org/",
  },
  dart: {
    icon: "dart/dart-original.svg",
    name: "Dart",
    url: "https://dart.dev/",
  },
  shell: {
    icon: "bash/bash-original.svg",
    name: "Shell",
    url: "https://en.wikipedia.org/wiki/Shell_script",
  },
  perl: {
    icon: "perl/perl-original.svg",
    name: "Perl",
    url: "https://www.perl.org/",
  },
  scala: {
    icon: "scala/scala-original.svg",
    name: "Scala",
    url: "https://www.scala-lang.org/",
  },
  elixir: {
    icon: "elixir/elixir-original.svg",
    name: "Elixir",
    url: "https://elixir-lang.org/",
  },
  haskell: {
    icon: "haskell/haskell-original.svg",
    name: "Haskell",
    url: "https://www.haskell.org/",
  },
  lua: {
    icon: "lua/lua-original.svg",
    name: "Lua",
    url: "https://www.lua.org/",
  },
  r: { icon: "r/r-original.svg", name: "R", url: "https://www.r-project.org/" },
  matlab: {
    icon: "matlab/matlab-original.svg",
    name: "MATLAB",
    url: "https://www.mathworks.com/products/matlab.html",
  },
  julia: {
    icon: "julia/julia-original.svg",
    name: "Julia",
    url: "https://julialang.org/",
  },
  clojure: {
    icon: "clojure/clojure-original.svg",
    name: "Clojure",
    url: "https://clojure.org/",
  },
  groovy: {
    icon: "groovy/groovy-original.svg",
    name: "Groovy",
    url: "https://groovy-lang.org/",
  },
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

export const workflowAction = `
name: generate animation

on:
  # run automatically every 24 hours
  schedule:
    - cron: "0 */24 * * *"

  # allows to manually run the job at any time
  workflow_dispatch:
  # run on every push on the master branch
  push:
    branches:
    - main
jobs:
  generate:
    permissions:
      contents: write
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
      # generates a snake game from a github user (<github_user_name>) contributions graph, output a svg animation at <svg_out_path>
      - name: generate github-contribution-grid-snake.svg
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: \${{ github.repository_owner }}
          outputs: |
            dist/snake/github-light.svg
            dist/snake/github-dark.svg?palette=github-dark
      # push the content of <build_dir> to a branch
      # the content will be available at https://raw.githubusercontent.com/<github_user>/<repository>/<target_branch>/<file> , or as github page
      - name: push github-contribution-grid-snake.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: main
          build_dir: dist
          keep_history: true
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
`;
