"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type Section = "title" | "subtitle" | "skills" | "achievements";

type SectionsContext = {
  sections: Record<Section, false>;
  addSection: (section: Section) => void;
  removeSection: (section: Section) => void;
  title: string;
  setTitle: (value: string) => void;
  subTitle: string;
  setSubTitle: (value: string) => void;

  skills: string[];
  addSkill: (value: string) => void;
  removeSkill: (value: string) => void;

  achievements: string[];
  setAchievements: (value: string[]) => void;
};

const SectionsContext = createContext<SectionsContext | undefined>(undefined);

export function SectionsProvider({ children }: PropsWithChildren) {
  const [sections, setSections] = useState<SectionsContext["sections"]>({
    title: false,
    skills: false,
    subtitle: false,
    achievements: false,
  });
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>(
    "A passionate frontend developer from India"
  );
  const [skills, setSkills] = useState<string[]>([]);
  const [achievements, setAchievements] = useState<string[]>([]);
  const addSkill = (skill: string) => {
    setSkills((skills) => {
      if (skills.includes(skill)) return skills;
      return [...skills, skill];
    });
  };
  const removeSkill = (skill: string) => {
    setSkills((skills) => {
      return [...skills.filter((value) => value != skill)];
    });
  };
  const addSection = (section: Section) => {
    setSections((sections) => {
      return { ...sections, [section]: true };
    });
  };
  const removeSection = (section: Section) => {
    setSections((sections) => {
      return { ...sections, [section]: false };
    });
  };
  return (
    <SectionsContext.Provider
      value={{
        sections,
        addSection,
        removeSection,
        title,
        setTitle,
        subTitle,
        setSubTitle,
        skills,
        addSkill,
        removeSkill,
        achievements,
        setAchievements,
      }}
    >
      {children}
    </SectionsContext.Provider>
  );
}

export function useSections() {
  const context = useContext(SectionsContext);
  if (!context)
    throw new Error("useSections should be used inside SectionsProvider");
  return context;
}
