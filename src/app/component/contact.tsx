"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
// import contactHero from "@/static/image/contactimg.png";
// import contactHeroxl from "@/static/image/contactxl.png";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  //   FormLabel,
  FormMessage,
} from "@/components/ui/form";

// import arra1 from "@/static/icon/Frame.png";
import { Inter } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
// import Link from "next/link";
// import ProjectMind from "../component/project-mind";

const inter = Inter({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  lastname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  phoneNumber: z.string().min(10, {
    message: "phoneNumber must be at least 11 characters.",
  }),

  message: z.string().min(2, {
    message: "message must be at least 2 characters.",
  }),
});

export default function ContactUs() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      message: "",
      //   chakbox: boolean,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <section
        className={`${inter.className} bg-[#272C31] rounded-[10px] flex justify-center items-center`}
      >
        <div className="w-full p-[20px]">
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[#fff] text-[30px] font-semibold leading-[38px] xl:text-[36px] xl:leading-[44px]  ">
              Reach out to us
            </h3>
            <p className="text-[#fff] text-[18px] font-normal leading-[28px]">
              Contact us for questions, feedback, or inquiries.
            </p>
          </div>
          <div className="mt-[48px] ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel className="text-[#374151] dark:text-[#FFFFFF] text-[14px] font-medium leading-[20px]">
                              First name
                            </FormLabel> */}
                      <FormControl className="text-[#6B7280] text-[16px] font-normal leading-[24px] py-[10px] border-[#D1D5DB] rounded-[10px] ">
                        <Input placeholder="First name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel className="text-[#374151] text-[14px] font-medium leading-[20px]">
                              Last name
                            </FormLabel> */}
                      <FormControl className="text-[#6B7280] text-[16px] font-normal leading-[24px] py-[10px] border-[#D1D5DB] rounded-[10px] ">
                        <Input placeholder="Last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel className="text-[#374151] dark:text-[#FFFFFF] text-[14px] font-medium leading-[20px]">
                              Email
                            </FormLabel> */}
                      <FormControl className="text-[#6B7280] text-[16px] font-normal leading-[24px] py-[10px] border-[#D1D5DB] rounded-[10px] ">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel className="text-[#374151] dark:text-[#FFFFFF] text-[14px] font-medium leading-[20px]">
                              Email
                            </FormLabel> */}
                      <FormControl className="text-[#6B7280] text-[16px] font-normal leading-[24px] py-[10px] border-[#D1D5DB] rounded-[10px] ">
                        <Input
                          //   type="phoneNumber"
                          placeholder="phoneNumber"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel className="text-[#374151] dark:text-[#FFFFFF] text-[14px] font-medium leading-[20px]">
                              Message
                            </FormLabel> */}
                      <FormControl className="text-[#6B7280] text-[16px] font-normal leading-[24px] py-[10px] border-[#D1D5DB] rounded-[10px] ">
                        <Textarea
                          placeholder="Type your message here."
                          {...field}
                        />
                      </FormControl>
                      {/* <p className="text-[#6B7280] text-[14px] font-normal leading-[20px]"> Helper text</p> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full px-[18px] py-[10px] bg-[#0072DE] text-[#FFFFFF] text-[16px] font-medium leading-[24px] hover:bg-primary-none "
                >
                  Send message
                  {/* <Image
                        //   src={arra1}
                          alt="arra1 "
                          className="w-[24px] h-[24px] "
                        /> */}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
