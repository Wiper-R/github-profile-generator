import { SKILLS } from "@/lib/constants";
type ExportReadmeProps = {
  title?: string;
  subTitle?: string;
  achievements?: string[];
  skills?: string[];
  socials?: string[];
};
export function getSkillUrl(path: string): string {
  const url = new URL(
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/"
  );
  url.pathname += path;
  return url.toString();
}
export default function prepareTemplate(props: ExportReadmeProps) {
  var template = "";
  if (props.title) {
    template += `# Hi, I am ${props.title}`;
  }
  if (props.subTitle) {
    template += `\n${props.subTitle}`;
  }
  if (props.skills) {
    var skills = props.skills
      .map((key) => `<img src="${getSkillUrl(SKILLS[key].icon)}"/>`)
      .join(" ");
    template += `\n## Skills\n${skills}`;
  }

  return template;
}
