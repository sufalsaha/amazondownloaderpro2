"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Inter } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

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
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
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
                      <FormControl className="text-[#6B7280] text-[16px] font-normal leading-[24px] py-[10px] border-[#D1D5DB] rounded-[10px] ">
                        <Input placeholder="phoneNumber" {...field} />
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
                      <FormControl className="text-[#6B7280] text-[16px] font-normal leading-[24px] py-[10px] border-[#D1D5DB] rounded-[10px] ">
                        <Textarea
                          placeholder="Type your message here."
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full px-[18px] py-[25px] bg-[#FF5671] text-[#FFFFFF] text-[20px] font-medium leading-[24px] hover:bg-primary-none "
                >
                  Send message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
