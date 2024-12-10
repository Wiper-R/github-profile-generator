"use client";
import React from "react";
import { ComponentProps } from "react";

const FormField = React.forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return <div className="space-y-0.5" {...props} ref={ref} />;
  }
);

FormField.displayName = "FormField";

export { FormField };
