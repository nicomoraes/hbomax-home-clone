"use client";
import "swiper/css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SlideItem from "./components/SlideItem";
import { SlideButton, SlideDotButton } from "./components/SlideButton";

import { RELEASES_DATA } from "@/constants/new-releases";

const NewReleasesSlide = () => {
  const slideLenght = RELEASES_DATA.length;
  const [slidePage, setSlidePage] = useState<number>(1);
  return (
    <>
      <div className="mx-auto mt-14 flex w-full max-w-screen-lg overflow-hidden sm:px-2">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideNextTransitionStart={() => setSlidePage(slidePage + 1)}
          onSlidePrevTransitionStart={() => setSlidePage(slidePage - 1)}
          className="h-max w-full"
        >
          {RELEASES_DATA.map((release) => (
            <SwiperSlide key={`slide-${release.title}`} className="h-max w-max">
              <SlideItem {...release} />
            </SwiperSlide>
          ))}
          <section className="mt-5 flex w-full items-center justify-center text-xl">
            {/* Large screen slide navigation */}
            <div className="hidden items-center justify-center sm:flex">
              {slidePage > 1 && <SlideButton direction="previous" />}
              <span className="ml-2 text-foreground">{slidePage}</span>
              <span className="mx-2 text-muted">/</span>
              <span className="mr-2 text-muted">{slideLenght}</span>
              {slidePage >= 1 && slidePage < slideLenght && (
                <SlideButton direction="next" />
              )}
            </div>
            {/* Mobile slide navigation */}
            <div className="flex items-center justify-center gap-4 sm:hidden">
              {RELEASES_DATA.map((_, index) => (
                <SlideDotButton key={`dot-btn-${index}`} slideIndex={index} />
              ))}
            </div>
          </section>
        </Swiper>
      </div>
    </>
  );
};

export default NewReleasesSlide;
