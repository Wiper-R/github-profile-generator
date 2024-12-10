import { SectionHeading } from "./section-heading";
import { UserInput } from "../user-input";
import { Button } from "../button";
import { useSections } from "@/contexts/sections";

export function AchievementSection() {
  const { achievements, setAchievements } = useSections();
  // TODO: Implement row delete feature
  return (
    <div className="text-white">
      <SectionHeading text="Achievements" />
      {achievements.map((value, idx) => (
        <UserInput
          key={idx}
          className="w-full my-2"
          value={value}
          onChange={(e) =>
            setAchievements((value) => {
              value[idx] = e.target.value;
              return [...value];
            })
          }
        />
      ))}
      <Button
        className="mt-4 flex"
        onClick={() => setAchievements((value) => [...value, ""])}
      >
        Add Achievement
      </Button>
    </div>
  );
}
