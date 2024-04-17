"use client";

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ISelectInput {
  field: any;
  placeholder?: string | undefined;
  label?: string | undefined;
  description?: string | undefined;
}

const SelectInput: FC<ISelectInput> = ({
  field,
  placeholder,
  label,
  description,
}) => {
  return (
    <FormItem className="flex flex-col ">
      {label && (
        <FormLabel className="text-left text-sm font-medium">{label}</FormLabel>
      )}
      <FormControl>
        <Select>
          <SelectTrigger className="text-[16px] font-bold w-full h-[48px] rounded-[8px]">
            <SelectValue placeholder="Канали" />
          </SelectTrigger>
          <SelectContent className="!p-0 !m-0 inline-0 rounded-b-[8px] rounded-t-none">
            <SelectGroup className=" rounded-b-[8px]  !m-0 !p-0">
              {/* <SelectLabel>Chanels</SelectLabel> */}
              <SelectItem
                className="text-[16px] font-bold h-[48px] flex gap-[16px] border-b"
                value="Instagram"
              >
                <div className="flex justify-center items-center gap-[16px] font-medium">
                  <Image
                    src={"/icons/instagram.svg"}
                    alt="insta icon"
                    width={25}
                    height={25}
                  />
                  Instagram
                </div>
              </SelectItem>
              <SelectItem
                className="text-[16px] font-bold  h-[42px] rounded-none  border-b"
                value="Facebook"
              >
                <div className="flex justify-center items-center gap-[16px] font-medium">
                  <Image
                    src={"/icons/facebook.svg"}
                    alt="insta facebook"
                    width={25}
                    height={25}
                  />
                  Facebook
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormControl>
      <div className="space-y-1 leading-none text-sm text-[#3F3F3F] cursor-pointer">
        {description && <FormDescription>description</FormDescription>}
      </div>
    </FormItem>
  );
};

export default SelectInput;
