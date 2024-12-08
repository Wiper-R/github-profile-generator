import { cn } from "@/lib/utils/cn";
import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;
export function UserInput({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cn("border-b bg-transparent outline-none", className)}
    />
  );
}
