"use client";

import { cn } from "@/lib/utils/cn";
import { UserInput } from "../user-input";
import { SectionHeading } from "./section-heading";

export function SubtitleSection({
  subtitle,
  setSubtitle,
}: {
  subtitle: string;
  setSubtitle: (title: string) => void;
}) {
  const rows = subtitle.split("\n").length;
  return (
    <div className="text-white">
      <SectionHeading text="Subtitle" />
      <textarea
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        className={cn(
          "w-full bg-transparent text-white outline-none border-b resize-none"
        )}
        rows={rows}
      />
    </div>
  );
}
