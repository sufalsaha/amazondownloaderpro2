"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Controller,
  // EffectCoverflow,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

const slides = [
  {
    title: "The Benefits Of Traveling With A Second Language",
    category: ["Lifestyle", "Trending"],
    author: "Jessica Smith",
    date: "December 18, 2024",
    image: "/images/664564563-440x440.jpg",
  },
  {
    title: "Why Sports Cars Are Still Relevant",
    category: ["Automobile"],
    author: "David Lee",
    date: "December 16, 2024",
    image: "/images/7454574545-440x440.jpg",
  },
  {
    title: "How Skateboarding Is Changing The World",
    category: ["Culture"],
    author: "Mike Johnson",
    date: "December 14, 2024",
    image: "/images/arafed-skateboard-with-colorful-design-440x440.jpg",
  },
  {
    title: "How Skateboarding Is Changing The World",
    category: ["Culture"],
    author: "Mike Johnson",
    date: "December 14, 2024",
    image: "/images/motorcycle-safety-helmet-1024x1024.jpg",
  },
];

export default function CustomSliderss() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="relative w-full h-[700px] bg-black">
      {/* Main Slider */}
      <Swiper
        modules={[Pagination, Autoplay, Controller]}
        onSwiper={setThumbsSwiper}
        controller={{ control: mainSwiper }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        // loopedSlides={slides.length}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div className="relative z-20 text-center px-4 max-w-2xl text-white">
                <div className="space-x-2 mb-2">
                  {slide.category.map((cat, i) => (
                    <span key={i} className="text-sm text-pink-400 font-medium">
                      #{cat}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm font-medium">
                  By {slide.author} &nbsp;—&nbsp; {slide.date}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-full max-w-[420px] px-4">
        <Swiper
          onSwiper={setMainSwiper}
          controller={{ control: thumbsSwiper }}
          slidesPerView={3}
          centeredSlides={true}
          slideToClickedSlide={true}
          loop={true}
          // loopedSlides={slides.length}
          spaceBetween={10}
          watchSlidesProgress
          modules={[Controller]}
          className="cursor-pointer"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={`w-[90px] h-[90px] rounded-full overflow-hidden border-2 transition-all duration-300 ${
                thumbsSwiper?.realIndex === index
                  ? "border-white scale-105"
                  : "border-[#c62929]"
              }`}
            >
              <Image
                src={slide.image}
                alt={`Thumb ${index}`}
                width={90}
                height={90}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
