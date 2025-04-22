/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from "next/image";
import manu from "@/static/icon/menu.svg";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { AlignJustify, ChevronDown } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export function SheetDemo() {
  const pathname = usePathname() || "";
  const [open, setOpen] = useState(false);
  return (
    <div className={`${inter.className}  flex justify-center  `}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Link href={"#"}>
            <div className="px-[4px] py-[4px] rounded-[4px]">
              <AlignJustify className="text-[#fff] size-[30px] " />
              {/* <Image
                src={manu}
                alt={"Manu"}
                className="w-[25px] h-[25px] xl:hidden "
              /> */}
            </div>
          </Link>
        </SheetTrigger>
        <SheetContent className=" bg-[#041120]">
          <SheetTitle></SheetTitle>
          <div className="mt-[24px]">
            <div className="h-[1px] w-full bg-[#F5F5F5] top-5 "></div>
            <div className="mt-[24px]">
              <div className="w-full mt-[24px] flex flex-col gap-[8px] ">
                <div className="overflow-scroll">
                  <SidebarProvider>
                    <SidebarMenu>
                      <SidebarMenuItem className="">
                        <Link href={"/"} onClick={() => setOpen(false)}>
                          <div
                            className={clsx(
                              "hover:text-[#FFFFFF] w-full px-[16px] py-[12px] text-[16px] leading-[24px] font-medium md:text-[16px] md:leading-[26px]",
                              {
                                "text-[#888E9B]": pathname != "/",
                                "text-[#FFFFFF]": pathname == "/",
                              }
                            )}
                          >
                            Home
                          </div>
                        </Link>
                      </SidebarMenuItem>

                      <SidebarMenuItem>
                        <Link
                          href={"/#"}
                          className=" "
                          onClick={() => setOpen(false)}
                        >
                          <div
                            className={clsx(
                              "hover:text-[#FFFFFF] w-full px-[16px] py-[12px] text-[16px] leading-[24px] font-medium md:text-[16px] md:leading-[26px]",
                              {
                                "text-[#888E9B]": pathname != "/#",
                                "text-[#FFFFFF]": pathname == "/#",
                              }
                            )}
                          >
                            About
                          </div>
                        </Link>
                      </SidebarMenuItem>

                      <SidebarMenuItem>
                        <Link
                          href={"/#"}
                          className=" "
                          onClick={() => setOpen(false)}
                        >
                          <div
                            className={clsx(
                              "hover:text-[#FFFFFF] w-full px-[16px] py-[12px] text-[16px] leading-[24px] font-medium md:text-[16px] md:leading-[26px]",
                              {
                                "text-[#888E9B]": pathname != "/#",
                                "text-[#FFFFFF]": pathname == "/#",
                              }
                            )}
                          >
                            PORTFOLO
                          </div>
                        </Link>
                      </SidebarMenuItem>

                      <SidebarMenuItem>
                        <Link
                          href={"/#"}
                          className=" "
                          onClick={() => setOpen(false)}
                        >
                          <div
                            className={clsx(
                              "hover:text-[#FFFFFF] w-full px-[16px] py-[12px] text-[16px] leading-[24px] font-medium md:text-[16px] md:leading-[26px]",
                              {
                                "text-[#888E9B]": pathname != "/#",
                                "text-[#FFFFFF]": pathname == "/#",
                              }
                            )}
                          >
                            BLOG
                          </div>
                        </Link>
                      </SidebarMenuItem>

                      <SidebarMenuItem>
                        <Link
                          href={"//#"}
                          className=" "
                          onClick={() => setOpen(false)}
                        >
                          <div
                            className={clsx(
                              "hover:text-[#FFFFFF] w-full px-[16px] py-[12px] text-[16px] leading-[24px] font-medium md:text-[16px] md:leading-[26px]",
                              {
                                "text-[#888E9B]": pathname != "//#",
                                "text-[#FFFFFF]": pathname == "/#",
                              }
                            )}
                          >
                            SHOP
                          </div>
                        </Link>
                      </SidebarMenuItem>

                      <SidebarMenuItem>
                        <Link
                          href={"#"}
                          className=" "
                          onClick={() => setOpen(false)}
                        >
                          <div
                            className={clsx(
                              "hover:text-[#FFFFFF] w-full px-[16px] py-[12px] text-[16px] leading-[24px] font-medium md:text-[16px] md:leading-[26px]",
                              {
                                "text-[#888E9B]": pathname != "#",
                                "text-[#FFFFFF]": pathname == "/#",
                              }
                            )}
                          >
                            COURSES
                          </div>
                        </Link>
                      </SidebarMenuItem>

                      <SidebarMenuItem>
                        <div className="px-[16px] py-[24px]">
                          <Link
                            href={"/contact"}
                            onClick={() => setOpen(false)}
                          >
                            <div className=" flex justify-center  px-[20px] py-[10px] bg-[#3B8BEA] hover:bg-[#176CD4] rounded-[8px] ">
                              <div className="text-[#FFFFFF] text-[18px] text-center font-semibold leading-[135%] ">
                                Hire us
                              </div>
                            </div>
                          </Link>
                        </div>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarProvider>
                </div>
              </div>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
