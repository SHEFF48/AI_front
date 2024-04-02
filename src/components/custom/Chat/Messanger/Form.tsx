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
import { toast } from "@/components/ui/use-toast";
import { LinkIcon, PaperclipIcon, SendIcon, SmileIcon } from "lucide-react";

const FormSchema = z.object({
  userMessage: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  file: z.string().min(2, {
    message: "city must be at least 2 characters.",
  }),
  delivery: z.string().min(2, {
    message: "delivery must be at least 2 characters.",
  }),
});

function MessageForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userMessage: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-[12px] "
      >
        <FormField
          control={form.control}
          name="userMessage"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center gap-[6px]  space-y-0 border rounded-[8px] relative">
              <FormControl>
                <Input
                  placeholder="Відповісти в Instagram"
                  {...field}
                  className="pr-[18px] pl-[28px] h-[78px] placeholder:text-color-11"
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
              <div className="flex items-center gap-[20px] h-full absolute right-[18px] bottom-0 top-0 ">
                {/* <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-[6px] space-y-0">
                      <FormControl>
                        <Input
                          type="file"
                          placeholder="placeholder"
                          {...field}
                          className="h-[42px]"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
                <LinkIcon size={24} color="#4D4CAC" />
                <PaperclipIcon size={24} color="#4D4CAC" />
                <SmileIcon size={24} color="#4D4CAC" />
                <Button
                  type="submit"
                  className="flex gap-[10px] items-center pl-[22px] pr-[11px] h-[42px] text-[14px] text-color-2 bg-color-5"
                >
                  Відправити
                  <SendIcon size={20} fill="#4D4CAC" color="#4D4CAC" />
                </Button>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default MessageForm;
