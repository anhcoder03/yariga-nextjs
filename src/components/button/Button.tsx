import React from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../loading";
interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  isLoading?: boolean;
}
const variantsClasses = {
  primary: "text-white bg-primary",
  secondary: "text-white bg-secondary",
};
const sizesClasses = {
  sm: "text-[10px]",
  md: "text-base",
  lg: "text-lg ",
};
const Button = ({
  children,
  className = "",
  size = "md",
  variant = "primary",
  isLoading = false,
  ...props
}: ButtonProps) => {
  const child = !!isLoading ? (
    <Spinner size="sm" className="border-white" />
  ) : (
    children
  );
  return (
    <button
      className={twMerge(
        "flex items-center justify-center font-semibold p-2.5 gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variantsClasses[variant],
        sizesClasses[size],
        className,
        isLoading ? "opacity-50 pointer-events-none" : ""
      )}
      {...props}
    >
      {child}
    </button>
  );
};

export default Button;
