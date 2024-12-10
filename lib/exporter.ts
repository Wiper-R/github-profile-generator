import { SocialEntry } from "@/contexts/sections";
import { SKILLS } from "./skills.constants";
import { SOCIALS } from "./socials.constants";
type ExportReadmeProps = {
  title?: string;
  subTitle?: string;
  achievements?: string[];
  skills?: string[];
  socials?: SocialEntry;
};

const ICONSIZE = "32px";

export function getDeviconUrl(path: string): string {
  const url = new URL(
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/"
  );
  url.pathname += path;
  return url.toString();
}
export default function prepareTemplate(props: ExportReadmeProps) {
  let template = "";
  if (props.title) {
    template += `# Hi, I am ${props.title}`;
  }
  if (props.subTitle) {
    template += `\n${props.subTitle}`;
  }
  if (props.achievements) {
    let achievements = props.achievements
      .filter((e) => e.length > 0)
      .map((e, idx) => `${idx + 1}. ${e}`)
      .join("\n");

    if (achievements.length) template += `\n## Achievements\n${achievements}`;
  }

  if (props.skills) {
    let skills = props.skills
      .map(
        (key) =>
          `<a href="${SKILLS[key].url}"><img src="${getDeviconUrl(
            SKILLS[key].icon
          )}" style="width: ${ICONSIZE};"/></a>`
      )
      .join(" ");
    if (skills.length) template += `\n## Skills\n${skills}`;
  }

  if (props.socials) {
    let socials = Object.entries(props.socials)
      .map(
        ([key, value]) =>
          `<img src="${getDeviconUrl(
            SOCIALS[key].icon
          )}" style="width: ${ICONSIZE};"/>`
      )
      .join(" ");
    if (socials.length) template += `\n## Socials\n${socials}`;
  }

  return template;
}
