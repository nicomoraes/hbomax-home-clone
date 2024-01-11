"use client";
import { useRef } from "react";

import type SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "./components/Card";

import { HBO_BRAND_CARDS_DATA } from "@/constants/brand-cards";

const BrandCard = () => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <>
      {/* Large screens - grid */}
      <div className="mx-auto mt-12 flex h-max w-full flex-col gap-y-4 max-sm:hidden">
        <div className="mx-auto grid max-w-screen-xl grid-cols-3 items-center justify-center gap-6 bg-background">
          {HBO_BRAND_CARDS_DATA.map((brand) => (
            <Card
              key={`brand-${brand.standard.split("-")[0]}-card`}
              standard={brand.standard}
              hover={brand.hover}
            />
          ))}
        </div>
      </div>
      {/* Mobile - slide */}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="!hidden h-max w-full max-sm:!block"
      >
        {HBO_BRAND_CARDS_DATA.map((brand, index) => (
          <SwiperSlide
            className="!w-max"
            key={`brand-${brand.standard.split("-")[0]}-card`}
            onClick={() => swiperRef.current?.slideTo(index)}
          >
            <Card standard={brand.standard} hover={brand.hover} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BrandCard;
