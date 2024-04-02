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
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ChatChanel = () => {
  return (
    <Select>
      <SelectTrigger className="text-[16px] font-bold w-[200px] h-[42px] rounded-[8px]">
        <SelectValue placeholder="Канали" />
      </SelectTrigger>
      <SelectContent className="!p-0 !m-0 inline-0 rounded-b-[8px]">
        <SelectGroup className=" rounded-b-[8px]  !m-0 !p-0">
          {/* <SelectLabel>Chanels</SelectLabel> */}
          <SelectItem
            className="text-[16px] font-bold h-[42px] flex gap-[16px]"
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
            className="text-[16px] font-bold  h-[42px] rounded-[8px]"
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
          <Button className="bg-color-2  text-white w-full text-[16px] font-bold  h-[42px] rounded-[8px]">
            Додати канал +
          </Button>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ChatChanel;
