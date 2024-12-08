"use client";
import { cn } from "@/lib/utils/cn";
import React from "react";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          "px-4 py-1 ronded-md bg-green-700 rounded-md text-white",
          className
        )}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
