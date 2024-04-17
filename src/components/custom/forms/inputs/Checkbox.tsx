"use client";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { FC, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

interface IPasswordInput {
  field: any;
  placeholder?: string | undefined;
  label?: string | undefined;
  description?: string | undefined;
}

const CheckboxInput: FC<IPasswordInput> = ({
  field,
  placeholder,
  label,
  description,
}) => {
  return (
    <FormItem className="flex flex-row items-center space-x-3 space-y-0   cursor-pointer ">
      <FormControl>
        <Checkbox
          checked={field.value}
          onCheckedChange={field.onChange}
          className=" "
        />
      </FormControl>
      <div className="space-y-1 leading-none text-sm text-[#3F3F3F] cursor-pointer">
        {label && <FormLabel>{label}</FormLabel>}
        {description && <FormDescription>description</FormDescription>}
      </div>
    </FormItem>
  );
};

export default CheckboxInput;
