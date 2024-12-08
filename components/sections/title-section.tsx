"use client";

import { UserInput } from "../user-input";
import { SectionHeading } from "./section-heading";

export function TitleSection({
  title,
  setTitle,
}: {
  title: string;
  setTitle: (title: string) => void;
}) {
  return (
    <div className="text-white">
      <SectionHeading text="Title" />
      <span>Hi, I'm</span>
      <UserInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mx-2"
      />
    </div>
  );
}
