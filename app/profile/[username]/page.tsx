"use client";
import { fetchUserDetails, GithubUserDetails } from "@/app/actions/github";
import { Button } from "@/components/button";
import { AchievementSection } from "@/components/sections/achievement-section";
import { SkillSection } from "@/components/sections/skills-section";
import { SubtitleSection } from "@/components/sections/subtitle-section";
import { TitleSection } from "@/components/sections/title-section";
import { useSections } from "@/contexts/sections";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { workflowAction } from "@/lib/constants";
import prepareTemplate from "@/lib/exporter";
import { SocialSection } from "@/components/sections/socials-section";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { ContributionSnakeSection } from "@/components/sections/contribution-snake-section";
import { SectionButton } from "./section-button";

export default function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const [userDetails, setUserDetails] = useState<GithubUserDetails | null>(
    null
  );
  const {
    sections,
    setTitle,
    title,
    subTitle,
    setSubTitle,
    skills,
    socials,
    achievements,
  } = useSections();

  useEffect(() => {
    (async () => {
      const _userDetails = await fetchUserDetails(username);
      setUserDetails(_userDetails);
      setTitle(_userDetails.name);
    })();
  }, []);
  function exportReadme() {
    let template = prepareTemplate({
      title: sections.title ? title : undefined,
      skills: sections.skills ? skills : undefined,
      subTitle: sections.subtitle ? subTitle : undefined,
      socials: sections.socials ? socials : undefined,
      achievements: sections.achievements ? achievements : undefined,
    });

    template += `
    ## Contributions
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="snake/github-dark.svg" />
      <source media="(prefers-color-scheme: light)" srcset="snake/github-light.svg" />
      <img alt="github-snake" src="snake/github-light.svg" />
    </picture>`;

    const zip = new JSZip();
    zip.file("README.md", template);
    const githubWorkflowsFolder = zip.folder(".github/workflows");
    githubWorkflowsFolder?.file("snake.yml", workflowAction);
    zip
      .generateAsync({ type: "blob" })
      .then((content) => saveAs(content, username + ".zip"));
  }
  return (
    <div className="flex flex-col h-screen">
      <div className="flex gap-4 ml-auto justify-between w-full items-center p-4 border-b border-gray-200/20">
        <h2 className="text-xl text-semibold">Github Profile Customizer</h2>
        <div className="flex items-center gap-4">
          <p className="text-right text-white">
            Editing for {userDetails && userDetails.login}
          </p>
          {userDetails && (
            <img src={userDetails.avatar_url} className="rounded-full w-10" />
          )}
        </div>
      </div>
      <div className="flex-grow flex overflow-hidden">
        <div className="flex-grow overflow-auto h-full p-10">
          <div className="space-y-10 max-w-[800px] mx-auto">
            {sections.title && (
              <TitleSection title={title} setTitle={setTitle} />
            )}
            {sections.subtitle && (
              <SubtitleSection subtitle={subTitle} setSubtitle={setSubTitle} />
            )}
            {sections.achievements && <AchievementSection />}
            {sections.skills && <SkillSection />}
            {sections.socials && <SocialSection />}
            {sections.snk && <ContributionSnakeSection />}
          </div>
        </div>
        <div className="bg-transparent w-[400px] border-l h-full overflow-auto border-gray-100/20 flex flex-col gap-2 p-4">
          <Button onClick={exportReadme}>Export</Button>
          <hr className="border-gray-200/20 my-4" />
          <SectionButton label="Title" section="title" />
          <SectionButton label="Subtitle" section="subtitle" />
          <SectionButton label="Achievements" section="achievements" />
          <SectionButton label="Skills" section="skills" />
          <SectionButton label="Socials" section="socials" />
          <SectionButton label="Contribution Snake" section="snk" />
        </div>
      </div>
    </div>
  );
}
