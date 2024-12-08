"use client";
import { SectionHeading } from "./section-heading";
import { Input } from "../input";
import { useSections } from "@/contexts/sections";
import { useMemo, useState } from "react";
import { SKILLS } from "@/lib/constants";
import { getSkillUrl } from "@/lib/exporter";

type Option = {
  value: string;
  name: string;
};

const options: Option[] = Object.entries(SKILLS).map(([value, { name }]) => {
  return { name, value };
});

export function SkillsSection() {
  const { skills, addSkill, removeSkill } = useSections();
  const [search, setSearch] = useState("");
  const filtered = useMemo(
    () =>
      options
        .filter(
          (op) =>
            op.value.toLowerCase().includes(search) &&
            !skills.includes(op.value)
        )
        .slice(0, 5),
    [options, search, skills]
  );
  return (
    <div className="text-white">
      <SectionHeading text="Skills" />
      <div className="gap-y-2 gap-x-2 flex flex-wrap">
        {skills.map((skill) => (
          <span
            className="bg-blue-600 text-white rounded-md px-2 py-1 text-sm flex items-center gap-2"
            onClick={() => removeSkill(skill)}
          >
            <img src={getSkillUrl(SKILLS[skill].icon)} className="w-6" />
            <span>{SKILLS[skill].name}</span>
          </span>
        ))}
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="peer"
        />
        {/* hidden peer-focus:block */}
        <div className=" rounded-md my-2 space-y-2 bg-gray-900">
          {filtered.map((op) => (
            <div
              key={op.value}
              className="border border-blue-500 px-2 py-1"
              onClick={() => {
                addSkill(op.value);
              }}
            >
              {op.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
