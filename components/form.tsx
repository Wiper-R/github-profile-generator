"use client";
import React from "react";
import { ComponentProps } from "react";

// type ButtonProps = ComponentProps<"button">;

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   (props, ref) => {
//     return (
//       <button
//         {...props}
//         ref={ref}
//         className="px-4 py-1 ronded-md w-full bg-green-700 rounded-md text-white"
//       />
//     );
//   }
// );
//
const FormField = React.forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return <div className="space-y-0.5" {...props} ref={ref} />;
  }
);

FormField.displayName = "FormField";

export { FormField };
