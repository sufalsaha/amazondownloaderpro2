"use client";

import Image from "next/image";
import logo from "@/static/logo/logo-W.svg";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ArrowRight, Check, Gem } from "lucide-react";
import { Icon } from "@/static/component-icons/icon";
import { Icon3 } from "@/static/component-icons/icon3";
import { Icon2 } from "@/static/component-icons/icon2";
import { Icon1 } from "@/static/component-icons/icon1";
import { ReviewSelider } from "./component/review-selider";
import { AccordionDemo } from "./component/questions";
import ContactUs from "./component/contact";
import { SheetDemo } from "./component/mobile-nevber";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import SyncedSwipersManual from "./component/heroselider";
import { CuratedBlog } from "./component/curated-blog";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  const pathname = usePathname() || "";
  return (
    <div className={`${inter.className} bg-[#1F2328]`}>
      <div>
        <div className={`${inter.className} flex justify-center navgb`}>
          <div className="max-w-[1400px] w-full bg-[#272C31] rounded-[12px] mt-[30px] mx-[20px] md:mx-[30] ">
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

        <section className="flex justify-center bg-[#1F2328] ">
          <div className=" w-full">
            <div className=" mx-[20px] md:mx-[40px] py-[20px] mt-[30px] ">
              <div className="w-full ">
                <SyncedSwipersManual />
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center bg-[#1F2328] ">
          <div className="max-w-[1400px]  w-full">
            <div className="mx-[40px] py-[20px] mt-[80px] ">
              <div>
                <div>
                  <div className="flex flex-col lg:flex-row gap-[30px] lg:justify-between lg:items-center mb-[30px]  xl:mb-[0px] ">
                    <h2 className="text-[28px] font-[700] leading-[36px] md:text-[34px] md:leading-[44px] lg:text-[40px] lg:leading-[52px] text-[#fff] lg:max-w-[552px] w-full ">
                      No Hidden Charges. Pick Your Plan.
                    </h2>
                    <p className="text-[16px] font-[400] leading-[28px] text-[#D1D4DB] lg:max-w-[513px] w-full ">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Mauris nullam the as integer quam dolor nunc semper.
                      Ornare non nulla faucibus the pulvinar vulputate neque.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-center items-center gap-[20px] h-full">
                    <div className=" px-[35px] py-[40px] border-[2px] border-[#fff] rounded-[12px] group ">
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
                    <div className=" px-[35px] py-[40px] border-[2px] border-[#fff] rounded-[12px] group xl:mt-[150px]">
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
                    <div className=" px-[35px] py-[40px] border-[2px] border-[#fff] rounded-[12px] group ">
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
                    <div className=" px-[35px] py-[40px] border-[2px] border-[#fff] rounded-[12px] group xl:mt-[150px]">
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
          </div>
        </section>

        <section className="flex justify-center bg-[#1F2328] ">
          <div className="max-w-[1440px]  w-full">
            <div className="mx-[20px] md:mx-[40px] py-[20px] mt-[30px] ">
              <div className="flex flex-col gap-[20px] mb-[50px] ">
                <h2 className="text-[28px] font-[700] leading-[36px] md:text-[34px] md:leading-[44px] lg:text-[40px] lg:leading-[52px] text-[#fff] flex flex-col">
                  <span>Your Time is Precious</span>
                  <span>Spend It on the Best: Our Curated Blog!</span>
                </h2>
                <p className="max-w-[660px] w-full text-[17px] font-[400]  tracking-[0.5px] text-[#D1D4DB] ">
                  Design A Professional Website In Minutes With Syron. Use Free
                  Customizable Templates, Easy Drag-and-drop Tools.
                </p>
              </div>
              <div className="">
                <CuratedBlog />
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center bg-[#1F2328] ">
          <div className="max-w-[1440px]  w-full">
            <div className="mx-[20px] md:mx-[40px] py-[20px] mt-[30px] ">
              <div>
                <div className="flex flex-col lg:flex-row gap-[30px] lg:justify-between lg:items-center mb-[50px] ">
                  <h2 className="text-[28px] font-[700] leading-[36px] md:text-[34px] md:leading-[44px] lg:text-[40px] lg:leading-[52px] text-[#fff] lg:max-w-[552px] w-full ">
                    No Hidden Charges. Pick Your Plan.
                  </h2>
                  <p className="text-[16px] font-[400] leading-[28px] text-[#fff] lg:max-w-[513px] w-full ">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Mauris nullam the as integer quam dolor nunc semper. Ornare
                    non nulla faucibus the pulvinar vulputate neque.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-center gap-[24px] ">
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
        </section>

        <section className="flex justify-center bg-[#1F2328] ">
          <div className=" w-full">
            <div className=" py-[20px] mt-[30px] ">
              <div className="w-full ">
                <div className="mb-[70px] mx-[20px] md:mx-[40px]">
                  <h2 className="text-[#fff] text-[28px] font-[700] leading-[36px] md:text-[34px] md:leading-[44px] lg:text-[40px] lg:leading-[52px] text-center ">
                    {`Don't just take our word for it`}
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
        </section>

        <section className="flex justify-center bg-[#1F2328] ">
          <div className="max-w-[1440px] w-full">
            <div className="mx-[20px] md:mx-[40px] py-[50px] mt-[30px] ">
              <div className="w-full flex flex-col lg:flex-row justify-center  gap-[30px] ">
                <div className="lg:w-1/2">
                  <AccordionDemo />
                </div>

                <div className="lg:w-1/2">
                  <ContactUs />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center bg-[#22272B] ">
          <div className="max-w-[1440px] w-full">
            <div className="mx-[20px] md:mx-[40px] py-[50px] mt-[30px] ">
              <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-[30px] md:gap-[50px]  ">
                <div className="lg:w-8/12  items-center">
                  <div className="flex flex-col gap-[10px] ">
                    <Image src={logo} alt="LOGO" className="w-[110px]  " />

                    <p className="text-[15px] font-[400] leading-[15px] text-[#fff] ">
                      Personal Blog Website
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-[30px] w-full">
                  <div className="flex flex-col justify-center items-center md:items-start gap-[10px] ">
                    <div>
                      <h4 className="text-[18px] font-[600] leading-[21px] text-[#fff] mb-[3px] ">
                        Quick links
                      </h4>
                      <div className="h-[2px] w-[50px] bg-[#fff]   "></div>
                    </div>
                    <div className="text-[15px] font-[400] leading-[28px] flex flex-col justify-center items-center md:items-start gap-[10px] mt-[20px] ">
                      <Link
                        href={"#"}
                        className="text-[#fff] hover:text-[#FF5671] "
                      >
                        About Us
                      </Link>
                      <Link
                        href={"#"}
                        className="text-[#fff] hover:text-[#FF5671] "
                      >
                        Cookie Policy
                      </Link>
                      <Link
                        href={"#"}
                        className="text-[#fff] hover:text-[#FF5671] "
                      >
                        Terms & Conditions
                      </Link>
                      <Link
                        href={"#"}
                        className="text-[#fff] hover:text-[#FF5671] "
                      >
                        Privacy Policy
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center md:items-start gap-[10px] ">
                    <div>
                      <h4 className="text-[18px] font-[600] leading-[21px] text-[#fff] mb-[3px] ">
                        Follow Us
                      </h4>
                      <div className="h-[2px] w-[50px] bg-[#fff]   "></div>
                    </div>
                    <div className="text-[15px] font-[400] leading-[28px] text-[#fff]  flex flex-col justify-center items-center md:items-start gap-[10px] mt-[20px] ">
                      <Link
                        href={"#"}
                        className="text-[#fff] hover:text-[#FF5671] "
                      >
                        Behance
                      </Link>
                      <Link
                        href={"#"}
                        className="text-[#fff] hover:text-[#FF5671] "
                      >
                        Dribbble
                      </Link>
                      <Link
                        href={"#"}
                        className="text-[#fff] hover:text-[#FF5671] "
                      >
                        Facebook
                      </Link>
                      <Link
                        href={"#"}
                        className="text-[#fff] hover:text-[#FF5671] "
                      >
                        Instagram
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center md:items-start gap-[10px] ">
                    <div>
                      <h4 className="text-[18px] font-[600] leading-[21px] text-[#fff] mb-[3px] ">
                        Contact Info
                      </h4>
                      <div className="h-[2px] w-[50px] bg-[#fff]   "></div>
                    </div>
                    <div className="text-[15px] font-[400] leading-[28px] text-[#fff]  flex flex-col justify-center items-center md:items-start gap-[10px] mt-[20px] ">
                      <Link
                        href={"#"}
                        className="text-[#fff] hover:text-[#FF5671] "
                      >
                        +49 241 241
                      </Link>
                      <Link
                        href={"#"}
                        className="text-[#fff] hover:text-[#FF5671] "
                      >
                        demo@rivaxstudio.com
                      </Link>
                      <Link
                        href={"#"}
                        className="text-[#fff] hover:text-[#FF5671] "
                      >
                        Dieter Wellhausen, D-11179 Berlin
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[50px]">
                <div className="w-full h-[2px] bg-[#fff] "></div>
                <div className=" mt-[30px] flex justify-center items-center ">
                  <p className="text-[12px] font-[400] leading-[20px] text-[#fff] ">
                    Copyright & Design By @Rivaxstudio - 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
