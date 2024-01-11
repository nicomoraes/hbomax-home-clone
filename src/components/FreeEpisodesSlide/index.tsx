"use client";
import "swiper/css";
import { useRef } from "react";

import type SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SlideItem from "./components/SlideItem";
import { SlideButton } from "./components/SlideButton";

import { FREE_EPISODES } from "@/constants/free-episodes";

const FreeEpisodesSlide = () => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="flex h-max w-full max-w-[1140px] max-lg:px-4 lg:mx-auto">
      <SlideButton
        direction={"previous"}
        draggable={false}
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {FREE_EPISODES.map((ep) => (
          <SwiperSlide
            className="!w-max"
            key={`free-episode-${ep.title
              .toLowerCase()
              .split(" ")
              .join("-")}-slide`}
          >
            <SlideItem {...ep} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SlideButton
        direction={"next"}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
};

export default FreeEpisodesSlide;
