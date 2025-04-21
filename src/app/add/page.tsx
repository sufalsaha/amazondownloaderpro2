/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
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

export default function SyncedSwipersManual() {
  const topSwiperRef = useRef<any>(null);
  const bottomSwiperRef = useRef<any>(null);
  // const slides = [...Array(5)];

  const isSyncing = useRef(false); // Prevents infinite loop

  const handleTopChange = () => {
    if (isSyncing.current) return;
    isSyncing.current = true;

    const realIndex = topSwiperRef.current?.realIndex;
    if (bottomSwiperRef.current && realIndex !== undefined) {
      bottomSwiperRef.current.slideToLoop(realIndex);
    }

    setTimeout(() => {
      isSyncing.current = false;
    }, 100);
  };

  const handleBottomChange = () => {
    if (isSyncing.current) return;
    isSyncing.current = true;

    const realIndex = bottomSwiperRef.current?.realIndex;
    if (topSwiperRef.current && realIndex !== undefined) {
      topSwiperRef.current.slideToLoop(realIndex);
    }

    setTimeout(() => {
      isSyncing.current = false;
    }, 100);
  };

  const handleBottomClick = (index: number) => {
    topSwiperRef.current?.slideToLoop(index);
  };

  return (
    <div className="relative w-full h-[700px] bg-black rounded-[12px]">
      {/* Top Swiper (autoplay, loop, 1 slide per view) */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={"fade"}
        onSwiper={(swiper) => (topSwiperRef.current = swiper)}
        onSlideChange={handleTopChange}
        pagination={{ clickable: true }}
        // spaceBetween={30}

        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        className="w-full h-full rounded-[12px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="">
            <div
              className="relative w-full h-full bg-center bg-cover flex items-center justify-center rounded-[12px]"
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

      {/* Bottom Swiper (loop, 3 slides per view, swipe-to-sync) */}
      <div className="absolute left-1/2 -translate-x-1/2  bottom-[-50px] z-1  w-full max-w-[400px] px-4">
        <Swiper
          onSwiper={(swiper) => (bottomSwiperRef.current = swiper)}
          onSlideChange={handleBottomChange}
          loop={true}
          slidesPerView={3}
          spaceBetween={10}
          className="w-full max-w-lg"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="w-100 h-100 rounded-full overflow-hidden border-2  transition-transform duration-300 border-white/40 swiper-slide-thumb "
            >
              <Image
                onClick={() => handleBottomClick(index)}
                src={slide.image}
                alt={`Thumb ${index}`}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .swiper-slide-thumb-active {
          border-color: #fff !important;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}
