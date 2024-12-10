"use client";
import { cn } from "@/lib/utils/cn";
import React from "react";
import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={cn(
          "px-4 py-1 rounded-md w-full bg-transparent border focus:outline focus:outline-1 focus:outline-blue-600 focus:border-transparent text-white",
          className
        )}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
