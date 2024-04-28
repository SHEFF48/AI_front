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
import { useRouter, usePathname } from "next/navigation";
import { sendMessage } from "@/lib/data";

const FormSchema = z.object({
  userMessage: z.string().min(2, {
    message: "Повідомлення повинно мати мінимум 2 символи.",
  }),
  // file: z.string().min(2, {
  //   message: "city must be at least 2 characters.",
  // }),
  // delivery: z.string().min(2, {
  //   message: "delivery must be at least 2 characters.",
  // }),
});

function MessagesForm({
  chat_id,
  user_id,
}: {
  chat_id?: string;
  user_id?: string;
}) {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userMessage: "",
    },
  });
  // const ENV = process.env.NEXTAUTH_URL;

  function onSubmit(formData: z.infer<typeof FormSchema>) {
    const data = { pageId: user_id, message: formData?.userMessage };

    // console.log("ENV:", ENV);

    sendMessage(data);
    form.reset();
    // router.push(`/messages/${chat_id}`);

    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
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
                <>
                  <Input
                    placeholder="Відповісти в Instagram"
                    {...field}
                    className="pr-[18px] pl-[28px] h-[78px] placeholder:text-color-11"
                  />
                  <FormMessage className="absolute bg-white top-0 left-[28px]" />
                </>
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}

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
                <div className="flex  items-center gap-[20px] shrink-0 ">
                  <LinkIcon size={24} color="#4D4CAC" />
                  <PaperclipIcon size={24} color="#4D4CAC" />
                  <SmileIcon size={24} color="#4D4CAC" />
                </div>

                <Button
                  type="submit"
                  className="flex gap-[10px] items-center px-0 pl-[22px] pr-[11px] h-[42px] text-[14px] text-color-2 bg-color-5 hover:bg-color-2 hover:text-white group"
                >
                  Відправити
                  <SendIcon size={20} className="group-hover:text-white" />
                </Button>
              </div>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default MessagesForm;
