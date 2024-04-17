"use client";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FC, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

interface IPasswordInput {
  field: any;
  placeholder?: string | undefined;
  label?: string | undefined;
  description?: string | undefined;
}

const PasswordInput: FC<IPasswordInput> = ({
  field,
  placeholder,
  label,
  description,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <FormItem className="flex flex-col">
      {label && (
        <FormLabel className="text-left text-sm font-medium">{label}</FormLabel>
      )}
      <div className="relative">
        <FormControl>
          <Input
            type={isVisible ? "text" : "password"}
            placeholder={placeholder || ""}
            className="h-[48px]"
            {...field}
          />
        </FormControl>
        <div
          className="flex justify-center items-center text-color-2 absolute right-[13px] top-0 bottom-0 my-auto cursor-pointer"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {isVisible ? <EyeIcon size={24} /> : <EyeOffIcon size={24} />}
        </div>
      </div>

      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};

export default PasswordInput;
