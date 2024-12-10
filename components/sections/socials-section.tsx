import { SOCIALS } from "@/lib/socials.constants";
import {
  Dropdown,
  DropdownInput,
  DropdownItem,
  DropdownItems,
} from "../dropdown";
import { SectionHeading } from "./section-heading";
import { getDeviconUrl } from "@/lib/exporter";
import { UserInput } from "../user-input";
import React from "react";
import { SocialEntry, useSections } from "@/contexts/sections";

type Option = {
  value: string;
  name: string;
};

const options: Option[] = Object.entries(SOCIALS).map(([value, { name }]) => {
  return { name, value };
});

export function SocialSection() {
  const { socials, setSocials } = useSections();
  const addSocial = (social: string) => {
    setSocials((socials: SocialEntry) => {
      if (social in socials) return socials;
      return { ...socials, [social]: "" };
    });
  };

  const updateSocial = (social: string, value: string) => {
    setSocials((socials) => {
      return { ...socials, [social]: value };
    });
  };
  return (
    <div className="text-white">
      <SectionHeading text="Socials" />
      <div className="space-y-2 grid grid-cols-[auto,auto]">
        {Object.entries(socials).map(([value, _]) => (
          <React.Fragment key={value}>
            <div className="flex gap-2 items-end">
              <img src={getDeviconUrl(SOCIALS[value].icon)} className="w-4" />
              <span key={value} className="text-base">
                {SOCIALS[value].name}
              </span>
            </div>
            <UserInput
              value={socials[value]}
              onChange={(e) => updateSocial(value, e.target.value)}
              placeholder={SOCIALS[value].placeholder}
            />
          </React.Fragment>
        ))}
      </div>
      <Dropdown className="mt-4">
        <DropdownInput placeholder="Search socials like: Facebook, X, Youtube, LinkedIn etc." />
        <DropdownItems>
          {options.map((op) => (
            <DropdownItem key={op.value} onSelect={() => addSocial(op.value)}>
              <img
                src={getDeviconUrl(SOCIALS[op.value].icon)}
                className="w-4"
              />
              <span className="text-sm">{op.name}</span>
            </DropdownItem>
          ))}
        </DropdownItems>
      </Dropdown>
    </div>
  );
}
