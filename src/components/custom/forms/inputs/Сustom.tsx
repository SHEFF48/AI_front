"use client";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface ICustomInput {
  field: any;
  placeholder?: string | undefined;
  label?: string | undefined;
  description?: string | undefined;
}

const CustomInput: FC<ICustomInput> = ({
  field,
  placeholder,
  label,
  description,
}) => {
  return (
    <FormItem className="flex flex-col">
      {label && (
        <FormLabel className="text-left text-sm font-medium">{label}</FormLabel>
      )}

      <FormControl>
        <Input
          type="text"
          placeholder={placeholder || ""}
          className="h-[48px]"
          {...field}
        />
      </FormControl>

      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};

export default CustomInput;
