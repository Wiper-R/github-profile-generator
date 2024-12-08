"use client";
import { fetchUserDetails, GithubUserDetails } from "@/app/actions/github";
import { Button } from "@/components/button";
import { AchievementSection } from "@/components/sections/achievement-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { SubtitleSection } from "@/components/sections/subtitle-section";
import { TitleSection } from "@/components/sections/title-section";
import { useSections } from "@/contexts/sections";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SKILLS } from "@/lib/constants";
import prepareTemplate from "@/lib/exporter";

export default function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const [userDetails, setUserDetails] = useState<GithubUserDetails | null>(
    null
  );
  const {
    sections,
    addSection,
    setTitle,
    title,
    subTitle,
    setSubTitle,
    removeSection,
    skills,
  } = useSections();
  useEffect(() => {
    (async () => {
      const _userDetails = await fetchUserDetails(username);
      setUserDetails(_userDetails);
      setTitle(_userDetails.name);
    })();
  }, []);
  function exportReadme() {
    const template = prepareTemplate({
      title: sections.title ? title : undefined,
      skills: sections.skills ? skills : undefined,
    });
    navigator.clipboard.writeText(template);
    alert("Copied to clipboard");
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
        <div className="flex-grow overflow-auto h-full p-10 text-lg">
          <div className="space-y-10 max-w-[800px] mx-auto">
            {sections.title && (
              <TitleSection title={title} setTitle={setTitle} />
            )}
            {sections.subtitle && (
              <SubtitleSection subtitle={subTitle} setSubtitle={setSubTitle} />
            )}
            {sections.achievements && <AchievementSection />}
            {sections.skills && <SkillsSection />}
          </div>
        </div>
        <div className="bg-transparent w-[400px] border-l h-full overflow-auto border-gray-100/20 flex flex-col gap-2 p-4">
          <Button onClick={exportReadme}>Export</Button>
          <hr className="border-gray-200/20 my-4" />
          <Button
            onClick={() => {
              if (!sections.title) {
                addSection("title");
              } else {
                removeSection("title");
              }
            }}
          >
            {sections.title ? "Remove Section" : "Add Section"}
          </Button>
          <Button
            onClick={() => {
              addSection("subtitle");
            }}
          >
            Add Subtitle
          </Button>
          <Button onClick={() => addSection("skills")}>Add Skills</Button>
          <Button onClick={() => addSection("achievements")}>
            Add Achievements
          </Button>
        </div>
      </div>
    </div>
  );
}
