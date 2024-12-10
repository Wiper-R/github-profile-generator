import { SectionHeading } from "./section-heading";

export function ContributionSnakeSection() {
  return (
    <div className="text-white">
      <SectionHeading text="Contributions" />
      <img src="/example-snake.svg" />
      <div className="italic text-sm mt-4">
        This is just a demonstration, this grid will reflect your github
        contributions/commits after publishing.
      </div>
    </div>
  );
}
