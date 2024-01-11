"use client";
import type { HTMLAttributes } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SlideButtonProps extends HTMLAttributes<HTMLButtonElement> {
  direction: "previous" | "next";
}

export const SlideButton: React.FC<SlideButtonProps> = ({
  direction,
  ...rest
}) => {
  return direction === "previous" ? (
    <button className="h-[383px] w-max items-center justify-center" {...rest}>
      <FaChevronLeft
        size={30}
        className="cursor-pointer text-muted hover:text-foreground"
      />
    </button>
  ) : (
    <button className="h-[383px] w-max items-center justify-center" {...rest}>
      <FaChevronRight
        size={30}
        className="ext-muted cursor-pointer hover:text-foreground"
      />
    </button>
  );
};
