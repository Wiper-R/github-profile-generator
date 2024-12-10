type SkillType = {
  icon: string;
  name: string;
  url: string;
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
