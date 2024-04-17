"use client";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const EmailInput = ({ field }: { field: any }) => {
  return (
    <FormItem className="flex flex-col">
      <FormLabel className="text-left text-sm font-medium">Email</FormLabel>
      <FormControl>
        <Input
          type="email"
          placeholder="Email"
          {...field}
          className="h-[48px]"
        />
      </FormControl>
      {/* <FormDescription>This is your email.</FormDescription> */}
      <FormMessage />
    </FormItem>
  );
};

export default EmailInput;
