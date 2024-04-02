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
    { title: "New", value: "new" },
    { title: "Old", value: "old" },
  ];
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-[180px] h-[36px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {values.map(({ value, title }) => (
            <SelectItem key={value} value={value}>
              {title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ChatSort;
