"use client";

import { UserInput } from "../user-input";
import { SectionHeading } from "./section-heading";

export function SubtitleSection({
  subtitle,
  setSubtitle,
}: {
  subtitle: string;
  setSubtitle: (title: string) => void;
}) {
  return (
    <div className="text-white">
      <SectionHeading text="Subtitle" />
      <UserInput
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        className="w-[700px]"
      />
    </div>
  );
}
