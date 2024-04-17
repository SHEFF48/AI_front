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
import CustomInput from "./inputs/Сustom";

const formSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }).min(5, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  remember: z.boolean().default(false).optional(),
});

export default function RecoveryForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
        className="flex flex-col gap-[24px]"
      >
        <h2 className="text-[36px] text-left font-bold">{"Забули пароль ?"}</h2>
        <div className="text-sm text-left text-[#3F3F3F]">
          {
            "Введіть адресу своєї електронної пошти і ми надішлемо Вам новий пароль для входу"
          }
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => <EmailInput field={field} />}
        />

        <div className="w-full h-[8px]"></div>
        <Button className="w-full h-[48px] text-bold text-white" type="submit">
          Увійти
        </Button>
        <div className="flex justify-center items-center gap-1 text-sm">
          <span className="text-[#3F3F3F]">{"Згадали пароль?"}</span>
          <Link href={"/back"} className="text-color-2 ">
            {"Повернутись назад"}
          </Link>
        </div>
      </form>
    </Form>
  );
}
