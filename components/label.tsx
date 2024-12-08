"use client";
import React from "react";
import { ComponentProps } from "react";

type LabelProps = ComponentProps<"label">;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  return <label {...props} ref={ref} />;
});

Label.displayName = "Label";

export { Label };
