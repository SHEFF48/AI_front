import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import CreateForm from "../../forms/Create";

const SelectChanel = () => {
  return (
    <Select>
      <SelectTrigger className="text-[16px] font-bold w-[200px] h-[42px] rounded-[8px]">
        <SelectValue placeholder="Канали" />
      </SelectTrigger>
      <SelectContent className="!p-0 !m-0 inline-0 rounded-b-[8px] rounded-t-none">
        <SelectGroup className=" rounded-b-[8px]  !m-0 !p-0">
          {/* <SelectLabel>Chanels</SelectLabel> */}
          <SelectItem
            className="text-[16px] font-bold h-[42px] flex gap-[16px] border-b"
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
          <CreateForm />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectChanel;
