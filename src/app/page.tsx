/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import Image from "next/image";
import logo from "@/static/logo/logo-W.svg";
import hero1 from "@/static/image/slider-image1.png";
import icon1 from "@/static/icon/icon1.svg";
import icon2 from "@/static/icon/image.svg";
import Link from "next/link";
import { Nunito_Sans, Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ArrowRight, Check, ChevronRight, Gem, Search } from "lucide-react";
import CustomSliderss from "./test/selider";
import SyncedSwipersManual from "./add/page";
import { Icon } from "@/static/component-icons/icon";
import { Icon3 } from "@/static/component-icons/icon3";
import { Icon2 } from "@/static/component-icons/icon2";
import { Icon1 } from "@/static/component-icons/icon1";
import { CuratedBlog } from "./selider/page";
import { Daimon } from "@/static/component-icons/daimon";
import { ReviewComponent } from "./component/review-section";
import { ReviewSelider } from "./component/review-selider";
import { AccordionDemo } from "./component/questions";
import ContactUs from "./component/contact";
import { SheetDemo } from "./component/mobile-nevber";
import clsx from "clsx";
import { usePathname } from "next/navigation";
// import { AccordionDemo } from "./component/questions";

// import App111 from "./selider/add";

const nunito = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  const pathname = usePathname() || "";
  return (
    <div className={`${inter.className} bg-[#1F2328]`}>
      <div>
        <div className={`${inter.className} flex justify-center navgb`}>
          <div className="max-w-[1400px] w-full bg-[#272C31] rounded-[12px] mt-[30px] mx-[30px] ">
            <div className="px-[25px] py-[19px] ">
              <nav className="w-full flex justify-end lg:justify-center items-center relative  ">
                <div className="absolute left-0">
                  <Image src={logo} alt="LOGO" className="w-[110px]  " />
                </div>
                <div className=" justify-center items-center hidden lg:flex ">
                  <div className="text-[15.3px] font-[500] leading-[32px] tracking-[0.5px] text-[#fff] flex justify-between items-center gap-[30px]  ">
                    <Link
                      href={"/"}
                      className={clsx(
                        " px-[12px]  hover:bg-[#3E434A] rounded-[5px] ",
                        {
                          "bg-[#272C31]": pathname != "/",
                          "bg-[#3E434A]": pathname == "/",
                        }
                      )}
                    >
                      HOME
                    </Link>
                    <Link
                      href={"#"}
                      className={clsx(
                        " px-[12px]  hover:bg-[#3E434A] rounded-[5px] ",
                        {
                          "bg-[#272C31]": pathname != "#",
                          "bg-[#3E434A]": pathname == "#",
                        }
                      )}
                    >
                      PAGES
                    </Link>
                    <Link
                      href={"#"}
                      className={clsx(
                        " px-[12px]  hover:bg-[#3E434A] rounded-[5px] ",
                        {
                          "bg-[#272C31]": pathname != "#",
                          "bg-[#3E434A]": pathname == "#",
                        }
                      )}
                    >
                      COURSES
                    </Link>
                    <Link
                      href={"#"}
                      className={clsx(
                        " px-[12px]  hover:bg-[#3E434A] rounded-[5px] ",
                        {
                          "bg-[#272C31]": pathname != "/#",
                          "bg-[#3E434A]": pathname == "#",
                        }
                      )}
                    >
                      PORTFOLO
                    </Link>
                    <Link
                      href={"#"}
                      className={clsx(
                        " px-[12px]  hover:bg-[#3E434A] rounded-[5px] ",
                        {
                          "bg-[#272C31]": pathname != "#",
                          "bg-[#3E434A]": pathname == "#",
                        }
                      )}
                    >
                      BLOG
                    </Link>
                    <Link
                      href={"#"}
                      className={clsx(
                        " px-[12px]  hover:bg-[#3E434A] rounded-[5px] ",
                        {
                          "bg-[#272C31]": pathname != "/#",
                          "bg-[#3E434A]": pathname == "#",
                        }
                      )}
                    >
                      SHOP
                    </Link>
                  </div>
                </div>
                <div className="lg:hidden right-0 ">
                  <SheetDemo />
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* <section className="flex justify-center bg-[#1F2328] ">
          <div className=" w-full">
            <div className="mx-[40px] py-[20px] mt-[30px] ">
              <div className="w-full ">
                <SyncedSwipersManual />
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="flex justify-center bg-[#1F2328] ">
          <div className="max-w-[1400px]  w-full">
            <div className="mx-[40px] py-[20px] mt-[30px] ">
              <div>
                <div>
                  <div className="flex justify-between items-center mb-[50px] ">
                    <h2 className="text-[40px] font-[700] leading-[52px] text-[#fff] max-w-[552px] w-full ">
                      No Hidden Charges. Pick Your Plan.
                    </h2>
                    <p className="text-[16px] font-[400] leading-[28px] text-[#fff] max-w-[513px] w-full ">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Mauris nullam the as integer quam dolor nunc semper.
                      Ornare non nulla faucibus the pulvinar vulputate neque.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-[20px]">
                  <div className="w-[305px] h-[360wpx] px-[35px] py-[40px] border-[2px] border-[#fff] rounded-[12px] group ">
                    <div className="w-[70px] h-[70px] bg-[#FFF4EB] flex justify-center items-center rounded-[5px] group-hover:bg-[#FF760E] group-hover:rounded-[70px] ">
                      <Icon className="fill-[#FF760E] group-hover:fill-[#fff] " />
                    </div>
                    <h3
                      className={`${inter.className} mt-[20px] text-[20px] font-[700] leading-[28px] text-[#fff]  `}
                    >
                      Core Features
                    </h3>
                    <p className="mt-[8px] mb-[20px] text-[16px] font-[400] leading-[28px] text-[#fff]">
                      Lorem ipsum dolor consectetur at adipiscing elit. Mauris
                      nullam integer quam dolor.
                    </p>

                    <div>
                      <button className="text-[15px] font-[600] leading-[28px] text-[#7D51F8] px-[30px] py-[12px] rounded-[30px] bg-[#F7F4FF] flex justify-center items-center gap-[8px] hover:bg-[#7D51F8] hover:text-[#fff] group/button">
                        Read More
                        <span>
                          <ArrowRight className="size-5 font-[900] hidden  group-hover/button:block" />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="w-[305px] h-[360wpx] px-[35px] py-[40px] border-[2px] border-[#fff] rounded-[12px] group mt-[150px]">
                    <div className="w-[70px] h-[70px] bg-[#FFF4EB] flex justify-center items-center rounded-[5px] group-hover:bg-[#FF760E] group-hover:rounded-[70px] ">
                      <Icon1 className="fill-[#FF760E] group-hover:fill-[#fff] " />
                    </div>
                    <h3
                      className={`${inter.className} mt-[20px] text-[20px] font-[700] leading-[28px] text-[#fff]  `}
                    >
                      Core Features
                    </h3>
                    <p className="mt-[8px] mb-[20px] text-[16px] font-[400] leading-[28px] text-[#fff]">
                      Lorem ipsum dolor consectetur at adipiscing elit. Mauris
                      nullam integer quam dolor.
                    </p>

                    <div>
                      <button className="text-[15px] font-[600] leading-[28px] text-[#7D51F8] px-[30px] py-[12px] rounded-[30px] bg-[#F7F4FF] flex justify-center items-center gap-[8px] hover:bg-[#7D51F8] hover:text-[#fff] group/button">
                        Read More
                        <span>
                          <ArrowRight className="size-5 font-[900] hidden  group-hover/button:block" />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="w-[305px] h-[360wpx] px-[35px] py-[40px] border-[2px] border-[#fff] rounded-[12px] group ">
                    <div className="w-[70px] h-[70px] bg-[#FFF4EB] flex justify-center items-center rounded-[5px] group-hover:bg-[#FF760E] group-hover:rounded-[70px] ">
                      <Icon2 className="fill-[#FF760E] group-hover:fill-[#fff] " />
                    </div>
                    <h3
                      className={`${inter.className} mt-[20px] text-[20px] font-[700] leading-[28px] text-[#fff]  `}
                    >
                      Core Features
                    </h3>
                    <p className="mt-[8px] mb-[20px] text-[16px] font-[400] leading-[28px] text-[#fff]">
                      Lorem ipsum dolor consectetur at adipiscing elit. Mauris
                      nullam integer quam dolor.
                    </p>

                    <div>
                      <button className="text-[15px] font-[600] leading-[28px] text-[#7D51F8] px-[30px] py-[12px] rounded-[30px] bg-[#F7F4FF] flex justify-center items-center gap-[8px] hover:bg-[#7D51F8] hover:text-[#fff] group/button">
                        Read More
                        <span>
                          <ArrowRight className="size-5 font-[900] hidden  group-hover/button:block" />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="w-[305px] h-[360wpx] px-[35px] py-[40px] border-[2px] border-[#fff] rounded-[12px] group mt-[150px]">
                    <div className="w-[70px] h-[70px] bg-[#FFF4EB] flex justify-center items-center rounded-[5px] group-hover:bg-[#FF760E] group-hover:rounded-[70px] ">
                      <Icon3 className="fill-[#FF760E] group-hover:fill-[#fff] " />
                    </div>
                    <h3
                      className={`${inter.className} mt-[20px] text-[20px] font-[700] leading-[28px] text-[#fff]  `}
                    >
                      Core Features
                    </h3>
                    <p className="mt-[8px] mb-[20px] text-[16px] font-[400] leading-[28px] text-[#fff]">
                      Lorem ipsum dolor consectetur at adipiscing elit. Mauris
                      nullam integer quam dolor.
                    </p>

                    <div>
                      <button className="text-[15px] font-[600] leading-[28px] text-[#7D51F8] px-[30px] py-[12px] rounded-[30px] bg-[#F7F4FF] flex justify-center items-center gap-[8px] hover:bg-[#7D51F8] hover:text-[#fff] group/button">
                        Read More
                        <span>
                          <ArrowRight className="size-5 font-[900] hidden  group-hover/button:block" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="flex justify-center bg-[#1F2328] ">
          <div className="max-w-[1440px]  w-full">
            <div className="mx-[40px] py-[20px] mt-[30px] ">
              <div className="flex flex-col gap-[20px] mb-[50px] ">
                <h2 className=" text-[36px] font-[600] leading-[50px] text-[#fff] flex flex-col">
                  <span>Your Time is Precious</span>
                  <span>Spend It on the Best: Our Curated Blog!</span>
                </h2>
                <p className="max-w-[660px] w-full text-[17px] font-[400]  tracking-[0.5px] text-[#606385] ">
                  Design A Professional Website In Minutes With Syron. Use Free
                  Customizable Templates, Easy Drag-and-drop Tools.
                </p>
              </div>
              <div className="">
                <CuratedBlog />
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="flex justify-center bg-[#1F2328] ">
          <div className="max-w-[1440px]  w-full">
            <div className="mx-[40px] py-[20px] mt-[30px] ">
              <div>
                <div className="flex justify-between items-center mb-[50px] ">
                  <h2 className="text-[40px] font-[700] leading-[52px] text-[#fff] max-w-[552px] w-full ">
                    No Hidden Charges. Pick Your Plan.
                  </h2>
                  <p className="text-[16px] font-[400] leading-[28px] text-[#fff] max-w-[513px] w-full ">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Mauris nullam the as integer quam dolor nunc semper. Ornare
                    non nulla faucibus the pulvinar vulputate neque.
                  </p>
                </div>
                <div className=" flex justify-center gap-[24px] ">
                  <div className="w-full h-[590px] px-[30px] pt-[50px] pb-[45px] bg-[#272C31] rounded-[5px] group hover:bg-[#f64040] transition-all duration-500  ">
                    <div>
                      <div className="relative">
                        <Gem className="size-15 text-[#15e60e] -rotate-45 group-hover:-rotate-0 group-hover:text-[#fff] duration-300 absolute z-1 " />
                        <div className=" w-[50px] h-[50px] bg-[#b3b3b3] rounded-[50px] absolute top-0 left-7   "></div>
                      </div>
                    </div>

                    <div className="mt-[90px] mb-[18px] ">
                      <h4 className="text-[24px] font-[700] leading-[36px] text-[#fff] mb-[4px] ">
                        Regular Plan
                      </h4>
                      <p className="text-[16px] font-[400] leading-[28px] text-[#E3E7ED] ">
                        Perfect Plan for Your Business
                      </p>
                    </div>

                    <div className="mb-[20px] ">
                      <h4 className="text-[40px] font-[700] leading-[50px] text-[#fff] ">
                        Free
                      </h4>
                      <p className="text-[16px] font-[500] leading-[28px] text-[#E3E7ED] ">
                        per month
                      </p>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center mb-[20px] mt-[5px] ">
                      <button className="text-[18px] font-[500] text-[#8C65F9] px-[30px] py-[14px] rounded-[43px] bg-[#F7F4FF] ">
                        Purchase Now
                      </button>
                    </div>

                    <div className="flex flex-col gap-[12px] ">
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Product Recommendations
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Advance Statistic
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Profile Badge
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Access to the community
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full h-[590px] px-[30px] pt-[50px] pb-[45px] bg-[#272C31] rounded-[5px] group hover:bg-[#f64040] transition-all duration-500  ">
                    <div>
                      <div className="relative">
                        <Gem className="size-15 text-[#15e60e] -rotate-45 group-hover:-rotate-0 group-hover:text-[#fff] duration-300 absolute z-1 " />
                        <div className=" w-[50px] h-[50px] bg-[#b3b3b3] rounded-[50px] absolute top-0 left-7   "></div>
                      </div>
                    </div>

                    <div className="mt-[90px] mb-[18px] ">
                      <h4 className="text-[24px] font-[700] leading-[36px] text-[#fff] mb-[4px] ">
                        Regular Plan
                      </h4>
                      <p className="text-[16px] font-[400] leading-[28px] text-[#E3E7ED] ">
                        Perfect Plan for Your Business
                      </p>
                    </div>

                    <div className="mb-[20px] ">
                      <h4 className="text-[40px] font-[700] leading-[50px] text-[#fff] ">
                        Free
                      </h4>
                      <p className="text-[16px] font-[500] leading-[28px] text-[#E3E7ED] ">
                        per month
                      </p>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center mb-[20px] mt-[5px] ">
                      <button className="text-[18px] font-[500] text-[#8C65F9] px-[30px] py-[14px] rounded-[43px] bg-[#F7F4FF] ">
                        Purchase Now
                      </button>
                    </div>

                    <div className="flex flex-col gap-[12px] ">
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Product Recommendations
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Advance Statistic
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Profile Badge
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Access to the community
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" w-full h-[590px] px-[30px] pt-[50px] pb-[45px] bg-[#272C31] rounded-[5px] group hover:bg-[#f64040] transition-all duration-500  ">
                    <div>
                      <div className="relative">
                        <Gem className="size-15 text-[#15e60e] -rotate-45 group-hover:-rotate-0 group-hover:text-[#fff] duration-300 absolute z-1 " />
                        <div className=" w-[50px] h-[50px] bg-[#b3b3b3] rounded-[50px] absolute top-0 left-7   "></div>
                      </div>
                    </div>

                    <div className="mt-[90px] mb-[18px] ">
                      <h4 className="text-[24px] font-[700] leading-[36px] text-[#fff] mb-[4px] ">
                        Regular Plan
                      </h4>
                      <p className="text-[16px] font-[400] leading-[28px] text-[#E3E7ED] ">
                        Perfect Plan for Your Business
                      </p>
                    </div>

                    <div className="mb-[20px] ">
                      <h4 className="text-[40px] font-[700] leading-[50px] text-[#fff] ">
                        Free
                      </h4>
                      <p className="text-[16px] font-[500] leading-[28px] text-[#E3E7ED] ">
                        per month
                      </p>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center mb-[20px] mt-[5px] ">
                      <button className="text-[18px] font-[500] text-[#8C65F9] px-[30px] py-[14px] rounded-[43px] bg-[#F7F4FF] ">
                        Purchase Now
                      </button>
                    </div>

                    <div className="flex flex-col gap-[12px] ">
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Product Recommendations
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Advance Statistic
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Profile Badge
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Access to the community
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[590px] px-[30px] pt-[50px] pb-[45px] bg-[#272C31] rounded-[5px] group hover:bg-[#f64040] transition-all duration-500  ">
                    <div>
                      <div className="relative">
                        <Gem className="size-15 text-[#15e60e] -rotate-45 group-hover:-rotate-0 group-hover:text-[#fff] duration-300 absolute z-1 " />
                        <div className=" w-[50px] h-[50px] bg-[#b3b3b3] rounded-[50px] absolute top-0 left-7   "></div>
                      </div>
                    </div>

                    <div className="mt-[90px] mb-[18px] ">
                      <h4 className="text-[24px] font-[700] leading-[36px] text-[#fff] mb-[4px] ">
                        Regular Plan
                      </h4>
                      <p className="text-[16px] font-[400] leading-[28px] text-[#E3E7ED] ">
                        Perfect Plan for Your Business
                      </p>
                    </div>

                    <div className="mb-[20px] ">
                      <h4 className="text-[40px] font-[700] leading-[50px] text-[#fff] ">
                        Free
                      </h4>
                      <p className="text-[16px] font-[500] leading-[28px] text-[#E3E7ED] ">
                        per month
                      </p>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center mb-[20px] mt-[5px] ">
                      <button className="text-[18px] font-[500] text-[#8C65F9] px-[30px] py-[14px] rounded-[43px] bg-[#F7F4FF] ">
                        Purchase Now
                      </button>
                    </div>

                    <div className="flex flex-col gap-[12px] ">
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Product Recommendations
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Advance Statistic
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Profile Badge
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px] ">
                        <Check className="text-[#2CDD5F] size-[20px] " />
                        <p className="text-[16px] font-[400] leading-[28px] text-[#fff] ">
                          Access to the community
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="flex justify-center bg-[#1F2328] ">
          <div className="max-w-[1440px] w-full">
            <div className="mx-[40px] py-[20px] mt-[30px] ">
              <div className="w-full ">
                <div className="mb-[70px]">
                  <h2 className="text-[#fff] text-[38px] font-[600] leading-[48px] text-center md:text-[48px] md:leading-[56px]">
                    Don't just take our word for it
                  </h2>
                  <div className="flex justify-center flex-wrap gap-[25px] lg:gap-[48px] mt-[24px] ">
                    <div className="w-[200px] ">
                      <h4
                        className={` text-[#fff] text-[20px] font-[500] leading-[32px] text-center `}
                      >
                        4.9 stars
                      </h4>
                      <p className="text-[#fff] text-[16px] font-[400]  text-center ">
                        In Chrome Web Store
                      </p>
                    </div>
                    <div className="w-[200px] ">
                      <h4
                        className={` text-[#fff] text-[20px] font-[500] leading-[32px] text-center `}
                      >
                        263 million
                      </h4>
                      <p className="text-[#fff] text-[16px] font-[400]  text-center ">
                        Downloads
                      </p>
                    </div>
                    <div className="w-[200px] ">
                      <h4
                        className={` text-[#fff] text-[20px] font-[500] leading-[32px] text-center `}
                      >
                        16 years
                      </h4>
                      <p className="text-[#fff] text-[16px] font-[400]  text-center ">
                        16 years
                      </p>
                    </div>
                    <div className="w-[200px] ">
                      <h4
                        className={` text-[#fff] text-[20px] font-[500] leading-[32px] text-center `}
                      >
                        195 countries
                      </h4>
                      <p className=" text-[#fff] text-[16px] font-[400]  text-center ">
                        to browse from
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <ReviewSelider />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="flex justify-center bg-[#1F2328] ">
          <div className="max-w-[1440px] w-full">
            <div className="mx-[40px] py-[50px] mt-[30px] ">
              <div className="w-full flex justify-center  gap-[30px] ">
                <div className="w-1/2">
                  <AccordionDemo />
                </div>

                <div className="w-1/2">
                  <ContactUs />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="flex justify-center bg-[#22272B] ">
          <div className="max-w-[1440px] w-full">
            <div className="mx-[40px] py-[50px] mt-[30px] ">
              <div className="w-full flex justify-center items-center gap-[30px]  ">
                <div className="w-8/12  items-center">
                  <div className="flex flex-col gap-[10px] ">
                    <Image src={logo} alt="LOGO" className="w-[110px]  " />

                    <p className="text-[15px] font-[400] leading-[15px] text-[#fff] ">
                      Personal Blog Website
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-centerv w-full">
                  <div className="flex flex-col gap-[10px] ">
                    <div>
                      <h4 className="text-[18px] font-[600] leading-[21px] text-[#fff] mb-[3px] ">
                        Quick links
                      </h4>
                      <div className="h-[2px] w-[50px] bg-[#fff]   "></div>
                    </div>
                    <div className="text-[15px] font-[400] leading-[28px] text-[#fff]  flex flex-col gap-[10px] mt-[20px] ">
                      <Link href={"#"}>About Us</Link>
                      <Link href={"#"}>Cookie Policy</Link>
                      <Link href={"#"}>Terms & Conditions</Link>
                      <Link href={"#"}>Privacy Policy</Link>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[10px] ">
                    <div>
                      <h4 className="text-[18px] font-[600] leading-[21px] text-[#fff] mb-[3px] ">
                        Follow Us
                      </h4>
                      <div className="h-[2px] w-[50px] bg-[#fff]   "></div>
                    </div>
                    <div className="text-[15px] font-[400] leading-[28px] text-[#fff]  flex flex-col gap-[10px] mt-[20px] ">
                      <Link href={"#"}>Behance</Link>
                      <Link href={"#"}>Dribbble</Link>
                      <Link href={"#"}>Facebook</Link>
                      <Link href={"#"}>Instagram</Link>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[10px] ">
                    <div>
                      <h4 className="text-[18px] font-[600] leading-[21px] text-[#fff] mb-[3px] ">
                        Contact Info
                      </h4>
                      <div className="h-[2px] w-[50px] bg-[#fff]   "></div>
                    </div>
                    <div className="text-[15px] font-[400] leading-[28px] text-[#fff]  flex flex-col gap-[10px] mt-[20px] ">
                      <Link href={"#"}>+49 241 241</Link>
                      <Link href={"#"}>demo@rivaxstudio.com</Link>
                      <Link href={"#"}>Dieter Wellhausen, D-11179 Berlin</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

// .navgb {
//   box-shadow: 0px 0px 12px 0px #1c1c1c1f;
// }

// .swiper {
//   /* width: 100%;
//   height: 70vh; */
//   /* position: relative; */
//   /* height: 100%; */
// }

// .swiper-slide {
//   background-position: center;
//   background-size: cover;
// }

// .swiper-slide img {
//   /* display: block; */
//   /* object-fit: cover;
//   width: 100%; */
// }

// .swiper-pagination {
//   display: flex !important;
//   gap: 15px;
//   flex-direction: column !important;
//   position: absolute !important;
//   left: 1rem !important;
//   top: 50% !important;
//   text-align: left !important;
//   z-index: 10;
// }

// .swiper-pagination-bullet {
//   display: block !important;
//   background-color: #ffffff !important;
//   width: 20px !important;
//   height: 20px !important;
// }

// .swiper-pagination-bullet-active {
//   /* content: " " !important; */
//   background-color: #ffffff !important;
//   position: relative;
//   /* width: 20px !important;
//   height: 20px !important; */
//   z-index: 1 !important;
//   /* padding: 10px !important; */
//   /* border: 2px solid #fff !important; */
// }

// .swiper-pagination .swiper-pagination-bullet-active::after {
//   content: "" !important;
//   /* background-color: #ffffff !important; */
//   position: absolute;
//   left: -50% !important;
//   top: -10px !important;
//   width: 40px !important;
//   height: 40px !important;
//   border-radius: 100px !important;
//   padding: 10px !important;
//   border: 4px solid #fff !important;
// }
