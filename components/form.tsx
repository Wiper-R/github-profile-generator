"use client";
import { cn } from "@/lib/utils/cn";
import React from "react";
import { ComponentProps } from "react";

const FormField = React.forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn("space-y-0.5", className)} {...props} ref={ref} />
    );
  }
);

FormField.displayName = "FormField";

export { FormField };
