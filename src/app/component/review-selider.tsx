"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Image from "next/image";
// import blogimg from "@/static/664564563-440x440.jpg";
// import { Inter } from "next/font/google";
import { Autoplay } from "swiper/modules";
import { ReviewComponent } from "./review-section";

export function ReviewSelider() {
  const review = [...Array(10)];
  //   console.log(review);

  return (
    <>
      <div className="overflow-hidden">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="mySwiper w-[1440px]"
        >
          {review.map((_, i) => {
            return (
              <SwiperSlide key={i} className="">
                <ReviewComponent />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide className="">
            <ReviewComponent />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}
