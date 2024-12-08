type SkillType = {
  icon: string;
  name: string;
};

type SocialType = {
  icon: string;
  name: string;
};

// We use devicons, look for that in github
// TODO: Add more skills
export const SKILLS: Record<string, SkillType> = {
  python: { icon: "python/python-original.svg", name: "Python" },
  javascript: {
    icon: "javascript/javascript-original.svg",
    name: "JavaScript",
  },
  rust: { icon: "rust/rust-original.svg", name: "Rust" },
  java: { icon: "java/java-original.svg", name: "Java" },
  c: { icon: "c/c-original.svg", name: "C" },
  cpp: { icon: "cplusplus/cplusplus-original.svg", name: "C++" },
  typescript: {
    icon: "typescript/typescript-original.svg",
    name: "TypeScript",
  },
  go: { icon: "go/go-original.svg", name: "Go" },
  ruby: { icon: "ruby/ruby-original.svg", name: "Ruby" },
  php: { icon: "php/php-original.svg", name: "PHP" },
  swift: { icon: "swift/swift-original.svg", name: "Swift" },
  kotlin: { icon: "kotlin/kotlin-original.svg", name: "Kotlin" },
  dart: { icon: "dart/dart-original.svg", name: "Dart" },
  shell: { icon: "bash/bash-original.svg", name: "Shell" },
  perl: { icon: "perl/perl-original.svg", name: "Perl" },
  scala: { icon: "scala/scala-original.svg", name: "Scala" },
  elixir: { icon: "elixir/elixir-original.svg", name: "Elixir" },
  haskell: { icon: "haskell/haskell-original.svg", name: "Haskell" },
  lua: { icon: "lua/lua-original.svg", name: "Lua" },
  r: { icon: "r/r-original.svg", name: "R" },
  matlab: { icon: "matlab/matlab-original.svg", name: "MATLAB" },
  julia: { icon: "julia/julia-original.svg", name: "Julia" },
  clojure: { icon: "clojure/clojure-original.svg", name: "Clojure" },
  groovy: { icon: "groovy/groovy-original.svg", name: "Groovy" },
};

// TODO: Add more socials
export const SOCIALS: Record<string, SocialType> = {
  twitter: {
    icon: "twitter/twitter-original.svg",
    name: "Twitter",
  },
  facebook: {
    icon: "facebook/facebook-original.svg",
    name: "Facebook",
  },
};
