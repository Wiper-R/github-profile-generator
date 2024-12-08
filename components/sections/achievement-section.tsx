import { useState } from "react";
import { SectionHeading } from "./section-heading";
import { Input } from "../input";
import { UserInput } from "../user-input";
import { Button } from "../button";

export function AchievementSection() {
  const [rows, setRows] = useState(1);
  return (
    <div className="text-white">
      <SectionHeading text="Achievements" />
      {new Array(rows).fill(0).map((_, idx) => (
        <UserInput key={idx} className="w-full my-2" />
      ))}
      <Button className="my-10 flex" onClick={() => setRows((r) => r + 1)}>
        Add Entry
      </Button>
    </div>
  );
}
