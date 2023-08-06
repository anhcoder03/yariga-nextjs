import React from "react";
import { twMerge } from "tailwind-merge";
const sizesClasses = {
  sm: "w-5 h-5 border-2",
  md: "w-8 h-8 border-4",
  lg: "w-12 h-12 border-6",
};
const Spinner = ({
  size = "sm",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        sizesClasses[size],
        className,
        "mx-auto rounded-full border-t-transparent border-b-transparent animate-spin"
      )}
    ></div>
  );
};

export default Spinner;
