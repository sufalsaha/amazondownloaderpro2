"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import blogimg from "@/static/664564563-440x440.jpg";
import { Inter } from "next/font/google";
import { Autoplay } from "swiper/modules";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export function CuratedBlog() {
  return (
    <>
      <div className="overflow-hidden">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="mySwiper w-[1440px]"
        >
          <SwiperSlide className="">
            <div
              className={`${inter.className} bg-[#272C31]  rounded-[12px]  `}
            >
              <div className=" p-[20px] ">
                <div>
                  <Image
                    src={blogimg}
                    alt="blogimg"
                    className="h-[260px] rounded-[12px]  "
                  />
                </div>
                <div className="mt-[25px]">
                  <h3 className="text-[20px] font-[600] leading-[28px] text-[#fff]">
                    Shaping Tomorrow’s Landscape Of Intelligent Machines
                  </h3>
                  <div className="mt-[15px] text-[12px] font-[500] leading-[23px] text-[#fff] flex gap-5">
                    <span>Jessica Smith </span>
                    <span>December 6, 2024 </span>
                  </div>
                </div>
                <div className="border-t-1 border-dashed border-amber-600 mt-[50px] pt-[15px] flex justify-between text-[14px] font-[500] leading-[25px] text-[#fff] ">
                  <span className="text-[#19a51b]">
                    # <span className="text-[#fff]">Entertainment</span>
                  </span>
                  <span>3 Min Read</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={`${inter.className} bg-[#272C31]  rounded-[12px]  `}
            >
              <div className=" p-[20px] ">
                <div>
                  <Image
                    src={blogimg}
                    alt="blogimg"
                    className="h-[260px] rounded-[12px]  "
                  />
                </div>
                <div className="mt-[25px]">
                  <h3 className="text-[20px] font-[600] leading-[28px] text-[#fff]">
                    Shaping Tomorrow’s Landscape Of Intelligent Machines
                  </h3>
                  <div className="mt-[15px] text-[12px] font-[500] leading-[23px] text-[#fff] flex gap-5">
                    <span>Jessica Smith </span>
                    <span>December 6, 2024 </span>
                  </div>
                </div>
                <div className="border-t-1 border-dashed border-amber-600 mt-[50px] pt-[15px] flex justify-between text-[14px] font-[500] leading-[25px] text-[#fff] ">
                  <span className="text-[#19a51b]">
                    # <span className="text-[#fff]">Entertainment</span>
                  </span>
                  <span>3 Min Read</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={`${inter.className} bg-[#272C31]  rounded-[12px]  `}
            >
              <div className=" p-[20px] ">
                <div>
                  <Image
                    src={blogimg}
                    alt="blogimg"
                    className="h-[260px] rounded-[12px]  "
                  />
                </div>
                <div className="mt-[25px]">
                  <h3 className="text-[20px] font-[600] leading-[28px] text-[#fff]">
                    Shaping Tomorrow’s Landscape Of Intelligent Machines
                  </h3>
                  <div className="mt-[15px] text-[12px] font-[500] leading-[23px] text-[#fff] flex gap-5">
                    <span>Jessica Smith </span>
                    <span>December 6, 2024 </span>
                  </div>
                </div>
                <div className="border-t-1 border-dashed border-amber-600 mt-[50px] pt-[15px] flex justify-between text-[14px] font-[500] leading-[25px] text-[#fff] ">
                  <span className="text-[#19a51b]">
                    # <span className="text-[#fff]">Entertainment</span>
                  </span>
                  <span>3 Min Read</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={`${inter.className} bg-[#272C31]  rounded-[12px]  `}
            >
              <div className=" p-[20px] ">
                <div>
                  <Image
                    src={blogimg}
                    alt="blogimg"
                    className="h-[260px] rounded-[12px]  "
                  />
                </div>
                <div className="mt-[25px]">
                  <h3 className="text-[20px] font-[600] leading-[28px] text-[#fff]">
                    Shaping Tomorrow’s Landscape Of Intelligent Machines
                  </h3>
                  <div className="mt-[15px] text-[12px] font-[500] leading-[23px] text-[#fff] flex gap-5">
                    <span>Jessica Smith </span>
                    <span>December 6, 2024 </span>
                  </div>
                </div>
                <div className="border-t-1 border-dashed border-amber-600 mt-[50px] pt-[15px] flex justify-between text-[14px] font-[500] leading-[25px] text-[#fff] ">
                  <span className="text-[#19a51b]">
                    # <span className="text-[#fff]">Entertainment</span>
                  </span>
                  <span>3 Min Read</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={`${inter.className} bg-[#272C31]  rounded-[12px]  `}
            >
              <div className=" p-[20px] ">
                <div>
                  <Image
                    src={blogimg}
                    alt="blogimg"
                    className="h-[260px] rounded-[12px]  "
                  />
                </div>
                <div className="mt-[25px]">
                  <h3 className="text-[20px] font-[600] leading-[28px] text-[#fff]">
                    Shaping Tomorrow’s Landscape Of Intelligent Machines
                  </h3>
                  <div className="mt-[15px] text-[12px] font-[500] leading-[23px] text-[#fff] flex gap-5">
                    <span>Jessica Smith </span>
                    <span>December 6, 2024 </span>
                  </div>
                </div>
                <div className="border-t-1 border-dashed border-amber-600 mt-[50px] pt-[15px] flex justify-between text-[14px] font-[500] leading-[25px] text-[#fff] ">
                  <span className="text-[#19a51b]">
                    # <span className="text-[#fff]">Entertainment</span>
                  </span>
                  <span>3 Min Read</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={`${inter.className} bg-[#272C31]  rounded-[12px]  `}
            >
              <div className=" p-[20px] ">
                <div>
                  <Image
                    src={blogimg}
                    alt="blogimg"
                    className="h-[260px] rounded-[12px]  "
                  />
                </div>
                <div className="mt-[25px]">
                  <h3 className="text-[20px] font-[600] leading-[28px] text-[#fff]">
                    Shaping Tomorrow’s Landscape Of Intelligent Machines
                  </h3>
                  <div className="mt-[15px] text-[12px] font-[500] leading-[23px] text-[#fff] flex gap-5">
                    <span>Jessica Smith </span>
                    <span>December 6, 2024 </span>
                  </div>
                </div>
                <div className="border-t-1 border-dashed border-amber-600 mt-[50px] pt-[15px] flex justify-between text-[14px] font-[500] leading-[25px] text-[#fff] ">
                  <span className="text-[#19a51b]">
                    # <span className="text-[#fff]">Entertainment</span>
                  </span>
                  <span>3 Min Read</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={`${inter.className} bg-[#272C31]  rounded-[12px]  `}
            >
              <div className=" p-[20px] ">
                <div>
                  <Image
                    src={blogimg}
                    alt="blogimg"
                    className="h-[260px] rounded-[12px]  "
                  />
                </div>
                <div className="mt-[25px]">
                  <h3 className="text-[20px] font-[600] leading-[28px] text-[#fff]">
                    Shaping Tomorrow’s Landscape Of Intelligent Machines
                  </h3>
                  <div className="mt-[15px] text-[12px] font-[500] leading-[23px] text-[#fff] flex gap-5">
                    <span>Jessica Smith </span>
                    <span>December 6, 2024 </span>
                  </div>
                </div>
                <div className="border-t-1 border-dashed border-amber-600 mt-[50px] pt-[15px] flex justify-between text-[14px] font-[500] leading-[25px] text-[#fff] ">
                  <span className="text-[#19a51b]">
                    # <span className="text-[#fff]">Entertainment</span>
                  </span>
                  <span>3 Min Read</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={`${inter.className} bg-[#272C31]  rounded-[12px]  `}
            >
              <div className=" p-[20px] ">
                <div>
                  <Image
                    src={blogimg}
                    alt="blogimg"
                    className="h-[260px] rounded-[12px]  "
                  />
                </div>
                <div className="mt-[25px]">
                  <h3 className="text-[20px] font-[600] leading-[28px] text-[#fff]">
                    Shaping Tomorrow’s Landscape Of Intelligent Machines
                  </h3>
                  <div className="mt-[15px] text-[12px] font-[500] leading-[23px] text-[#fff] flex gap-5">
                    <span>Jessica Smith </span>
                    <span>December 6, 2024 </span>
                  </div>
                </div>
                <div className="border-t-1 border-dashed border-amber-600 mt-[50px] pt-[15px] flex justify-between text-[14px] font-[500] leading-[25px] text-[#fff] ">
                  <span className="text-[#19a51b]">
                    # <span className="text-[#fff]">Entertainment</span>
                  </span>
                  <span>3 Min Read</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div
              className={`${inter.className} bg-[#272C31]  rounded-[12px]  `}
            >
              <div className=" p-[20px] ">
                <div>
                  <Image
                    src={blogimg}
                    alt="blogimg"
                    className="h-[260px] rounded-[12px]  "
                  />
                </div>
                <div className="mt-[25px]">
                  <h3 className="text-[20px] font-[600] leading-[28px] text-[#fff]">
                    Shaping Tomorrow’s Landscape Of Intelligent Machines
                  </h3>
                  <div className="mt-[15px] text-[12px] font-[500] leading-[23px] text-[#fff] flex gap-5">
                    <span>Jessica Smith </span>
                    <span>December 6, 2024 </span>
                  </div>
                </div>
                <div className="border-t-1 border-dashed border-amber-600 mt-[50px] pt-[15px] flex justify-between text-[14px] font-[500] leading-[25px] text-[#fff] ">
                  <span className="text-[#19a51b]">
                    # <span className="text-[#fff]">Entertainment</span>
                  </span>
                  <span>3 Min Read</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
