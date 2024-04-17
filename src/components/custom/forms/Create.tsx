"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";

import Image from "next/image";
import CustomInput from "./inputs/Сustom";
import SelectInput from "./inputs/Select";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const formSchema = z.object({
  channelName: z.string().min(5, {
    message: "Username must be at least 2 characters.",
  }),
  channel: z.string(),
});

export default function CreateForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      channelName: "",
      channel: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-color-2  text-white w-full text-[16px] font-bold  h-[42px] rounded-none">
          {"Додати канал +"}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[416px] p-7 rounded-2xl shadow">
        <DialogHeader>
          {/* <DialogTitle className="text-[36px] text-left font-bold">
            {"Новый канал"}
          </DialogTitle> */}
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-[20px]"
          >
            <h2 className="text-[36px] text-left font-bold">{"Новый канал"}</h2>
            <FormField
              control={form.control}
              name="channelName"
              render={({ field }) => (
                <CustomInput
                  field={field}
                  label="Назва каналу"
                  placeholder="Назва каналу"
                />
              )}
            />
            <FormField
              control={form.control}
              name="channel"
              render={({ field }) => (
                <SelectInput
                  field={field}
                  label="Канал"
                  // placeholder="Назва каналу"
                />
              )}
            />

            <div className="w-full h-[8px]"></div>
            <Button variant={"normal"}>
              <div className="flex justify-start items-center gap-[27px] font-medium w-full ">
                <div className="w-[28px] h-[28px] shrink-0">
                  <Image
                    src={"/icons/facebook.svg"}
                    alt="insta facebook"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="flex justify-start items-center w-full">
                  {"Продовжити через Facebook"}
                </div>
              </div>
            </Button>
            <div className="w-full h-[8px]"></div>
            <div className="flex flex-col gap-[14px]">
              <Button variant={"main"} type="submit">
                Створити
              </Button>
              <DialogClose asChild>
                <Button variant={"secondary"}>Відміна</Button>
              </DialogClose>
            </div>
          </form>
        </Form>
        <DialogFooter className="sm:justify-start"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
