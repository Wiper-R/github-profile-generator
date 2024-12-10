"use client";
import { SectionHeading } from "./section-heading";
import { useSections } from "@/contexts/sections";
import { useMemo, useState } from "react";
import { SKILLS } from "@/lib/constants";
import { getDeviconUrl } from "@/lib/exporter";
import {
  Dropdown,
  DropdownInput,
  DropdownItem,
  DropdownItems,
} from "../dropdown";

type Option = {
  value: string;
  name: string;
};

const options: Option[] = Object.entries(SKILLS).map(([value, { name }]) => {
  return { name, value };
});

export function SkillSection() {
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
            <img src={getDeviconUrl(SKILLS[skill].icon)} className="w-4" />
            <span>{SKILLS[skill].name}</span>
            <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-gray-200/80 backdrop-blur-sm grid place-items-center transition-opacity duration-300 text-red-600 select-none font-bold overflow-hidden">
              Delete
            </span>
          </span>
        ))}
      </div>
      <Dropdown>
        <DropdownInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search skills like: Python, Javascript, Rust etc."
        />
        <DropdownItems>
          {filtered.length ? (
            filtered.map((op) => (
              <DropdownItem onSelect={() => addSkill(op.value)} key={op.value}>
                <img
                  src={getDeviconUrl(SKILLS[op.value].icon)}
                  alt=""
                  className="w-4"
                />
                <span className="text-sm">{op.name}</span>
              </DropdownItem>
            ))
          ) : (
            <div className="px-2 py-1 text-gray-400 text-sm">No results</div>
          )}
        </DropdownItems>
      </Dropdown>
    </div>
  );
}
