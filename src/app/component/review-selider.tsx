"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { ReviewComponent } from "./review-section";

export function ReviewSelider() {
  const review = [...Array(10)];

  return (
    <>
      <div className="overflow-hidden">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={7}
          spaceBetween={20}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="mySwiper w-[2500px]"
        >
          {review.map((_, i) => {
            return (
              <SwiperSlide key={i} className="">
                <ReviewComponent />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
