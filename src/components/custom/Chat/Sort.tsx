"use client";
import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ChatSort = () => {
  const [value, setValue] = useState("new");
  const values = [
    { title: "Нові", value: "new" },
    { title: "Старі", value: "old" },
    { title: "Не прочитані", value: "not read" },
  ];
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-[140px] h-[36px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="p-0 m-0 rounded-t-none">
        <SelectGroup className="p-0 m-0">
          {values.map(({ value, title }) => (
            <SelectItem
              key={value}
              value={value}
              className="focus:bg-color-2 focus:text-white cursor-pointer border-b rounded-none"
            >
              {title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ChatSort;
