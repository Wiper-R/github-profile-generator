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
      options.filter(
        (op) =>
          op.value.toLowerCase().includes(search) && !skills.includes(op.value)
      ),
    [options, search, skills]
  );
  return (
    <div className="text-white space-y-4">
      <SectionHeading text="Skills" />
      <div className="gap-y-2 gap-x-2 flex flex-wrap">
        {skills.map((skill) => (
          <span
            className="bg-blue-600 text-white rounded-md px-2 py-1 text-sm flex items-center gap-2 relative group cursor-pointer"
            onClick={() => removeSkill(skill)}
            key={skill}
          >
            <img src={getSkillUrl(SKILLS[skill].icon)} className="w-4" />
            <span>{SKILLS[skill].name}</span>
            <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-gray-200/80 backdrop-blur-sm grid place-items-center transition-opacity duration-300 text-red-600 select-none font-bold">
              Delete
            </div>
          </span>
        ))}
      </div>

      <div className="relative">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="peer"
        />
        <div className="opacity-0 rounded-md my-2 w-full overflow-auto max-h-0 border-0 peer-focus:border peer-focus:max-h-44 transition-all peer-focus:opacity-100 absolute top-full">
          {filtered.map((op) => (
            <div
              key={op.value}
              className="px-2 py-1 w-full cursor-pointer hover:bg-gray-800 flex gap-2 items-center"
              onClick={() => {
                addSkill(op.value);
              }}
            >
              <img
                src={getSkillUrl(SKILLS[op.value].icon)}
                alt=""
                className="w-4"
              />
              <span className="text-sm">{op.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
