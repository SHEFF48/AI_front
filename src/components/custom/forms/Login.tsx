"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import PasswordInput from "./inputs/Password";
import EmailInput from "./inputs/Email";
import CheckboxInput from "./inputs/Checkbox";
import Link from "next/link";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).min(5, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  remember: z.boolean().default(false).optional(),
});

export default function LoginForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[14px]"
      >
        <h2 className="text-[36px] text-left font-bold">{"Вхід"}</h2>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => <EmailInput field={field} />}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <PasswordInput
              field={field}
              placeholder={"Пароль"}
              label={"Password"}
            />
          )}
        />
        <FormField
          control={form.control}
          name="remember"
          render={({ field }) => (
            <div className="flex justify-between items-center py-2">
              <CheckboxInput field={field} label="Запам’ятати мене" />
              <Link href={"/forget"} className="text-color-2 text-sm">
                {"Забули пароль?"}
              </Link>
            </div>
          )}
        />
        <Button className=" text-bold text-white" type="submit">
          Увійти
        </Button>
        <div className="flex justify-center items-center gap-1 text-sm">
          <span className="text-[#3F3F3F]">{"Немає облікового запису?"}</span>
          <Link href={"/forget"} className="text-color-2 ">
            {"Зареєструватися?"}
          </Link>
        </div>
        <div className="flex justify-center items-center relative">
          <span className="p-2 z-20 text-[14px] bg-white text-[#CACACA]">
            {"або"}
          </span>
          <div className="h-[1px] w-full bg-[#CACACA] absolute m-auto z-10"></div>
        </div>
        <div className="flex flex-col gap-[14px]">
          <Button variant={"normal"} type="button">
            <div className="flex justify-start items-center  font-medium w-full ">
              <div className="w-[28px] h-[28px] shrink-0">
                <Image
                  src={"/icons/facebook.svg"}
                  alt="insta facebook"
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex justify-center items-center w-full">
                {"Увійти через Facebook"}
              </div>
            </div>
          </Button>
          {/* <Button variant={"normal"} type="button">
            <div className="flex justify-start items-center font-medium w-full">
              <div className="w-[28px] h-[28px] shrink-0">
                <Image
                  src={"/icons/facebook.svg"}
                  alt="insta facebook"
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex justify-center items-center w-full">
                {"Увійти через Google"}
              </div>
            </div>
          </Button> */}
        </div>
      </form>
    </Form>
  );
}
