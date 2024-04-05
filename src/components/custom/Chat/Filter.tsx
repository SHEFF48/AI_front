"use client";
import React from "react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ChatFilter = () => {
  const menu = [...Array(5)].map((_, i, a) => `Menu ${i + 1}`);

  const filter = [
    {
      id: 0,
      source: {
        type: "all",
        title: "All messages",
        unreadMessagesCount: 10,
      },
    },
    {
      id: 1,
      source: {
        type: "messanger",
        title: "Messanger",
        unreadMessagesCount: 10,
      },
    },
    {
      id: 2,
      source: {
        type: "instagram",
        title: "Instagram",
        unreadMessagesCount: 10,
      },
    },
    {
      id: 3,
      source: {
        type: "facebook",
        title: "Facebook",
        unreadMessagesCount: 10,
      },
    },
    {
      id: 4,
      source: {
        type: "facebook_comments",
        title: "Facebook comments",
        unreadMessagesCount: 10,
      },
    },
  ];

  const [value, setValue] = React.useState([]);

  return (
    <ToggleGroup
      type="multiple"
      size="lg"
      value={value}
      className="flex items-center justify-start gap-[14px] h-[90px]"
      // value={value.includes("all") ? setValue(value) : []}
      // onValueChange={(value) => {
      //   console.log("value p: ", value);
      //   !value.includes("all") ? setValue(value) : "";
      //   console.log("value: ", value);
      // }}
    >
      {filter.map((item) => {
        return (
          <ToggleGroupItem
            key={item.id}
            value={item.source.type}
            aria-label="Toggle bold"
            className="h-[42px] w-[200px] flex justify-center items-center text-color-1 font-medium border rounded-lg border-color-7 "
            onClick={() => {
              // item.id === 0 ? setValue(["all"]) : setValue(value);
              // return "val: ", value;
            }}
          >
            {item.source.title}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
};

export default ChatFilter;
