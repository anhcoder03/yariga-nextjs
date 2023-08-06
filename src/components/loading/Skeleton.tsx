import React from "react";
import { twMerge } from "tailwind-merge";

const Skeleton = ({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={twMerge("animate-pulse bg-gray-300", className)}>
      {children}
    </div>
  );
};

export default Skeleton;
