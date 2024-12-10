"use client";
import { Button } from "@/components/button";
import { Section, useSections } from "@/contexts/sections";
import { cn } from "@/lib/utils/cn";

export function SectionButton({
  label,
  section,
}: {
  label: string;
  section: Section;
}) {
  const { sections, addSection, removeSection } = useSections();
  return (
    <Button
      onClick={() => {
        if (!sections[section]) addSection(section);
        else removeSection(section);
      }}
      className={cn(sections[section] && "bg-red-500")}
    >
      {!sections[section] ? `Add ${label}` : `Remove ${label}`}
    </Button>
  );
}
