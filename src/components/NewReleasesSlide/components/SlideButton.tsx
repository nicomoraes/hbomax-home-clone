"use client";
import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface SlideDotButtonProps {
  slideIndex: number;
}

export const SlideDotButton: React.FC<SlideDotButtonProps> = ({
  slideIndex,
}) => {
  const swiper = useSwiper();
  return (
    <span
      className={`h-[10px] w-[10px] cursor-pointer rounded-full 
      ${swiper.activeIndex === slideIndex ? "bg-muted" : "bg-foreground"}`}
      onClick={() => swiper.slideTo(slideIndex)}
    />
  );
};

interface SlideButtonProps {
  direction: "previous" | "next";
}

export const SlideButton: React.FC<SlideButtonProps> = ({ direction }) => {
  const swiper = useSwiper();
  return direction === "previous" ? (
    <button className="flex h-max w-max" onClick={() => swiper.slidePrev()}>
      <FaChevronLeft
        size={25}
        className="cursor-pointer text-muted hover:text-foreground"
        style={{ verticalAlign: "middle" }}
      />
    </button>
  ) : (
    <button className="h-max w-max" onClick={() => swiper.slideNext()}>
      <FaChevronRight
        size={25}
        className="cursor-pointer text-muted hover:text-foreground"
      />
    </button>
  );
};
