import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`
      px-6
      h-11
      text-[14px]
      font-semibold
      rounded-sm
      transition-all
      duration-300
      ${
        variant === "primary"
          ? "bg-[#2d8cff] text-white hover:bg-[#1f76e5]"
          : "border border-[#2d8cff] text-[#2d8cff] hover:bg-[#2d8cff] hover:text-white"
      }
    `}
    >
      {children}
    </button>
  );
}