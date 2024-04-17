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

  const [value, setValue] = React.useState<string[]>(["all"]);

  return (
    <ToggleGroup
      type="multiple"
      size="lg"
      value={value}
      className="flex items-center justify-start gap-[14px] h-[90px]"
      // value={value.includes("all") ? setValue(value) : []}
      onValueChange={(value) => {
        setValue(value);
        // console.log("value p: ", value);

        // !value.includes("all")
        //   ? setValue(value)
        //   : (setValue([]), setValue(["all"]));
      }}
    >
      {filter.map((item) => {
        return (
          <ToggleGroupItem
            key={item.id}
            value={item.source.type}
            aria-label="Toggle bold"
            className="h-[42px] w-[200px] flex justify-center items-center text-color-1 font-medium border rounded-lg border-color-7 hover:border-color-2 hover:border-2 hover:bg-white hover:text-black data-[state=on]:bg-color-2 data-[state=on]:text-white"
            onClick={() => {
              // console.log("value px: ", value);
              // setValue([
              //   ...value.filter((valueItem) => valueItem != item.source.type),
              //   item.source.type,
              // ]);
              // setValue(
              //   value?.filter((valueItem) => valueItem !== item.source.type)
              // );
              // item.id === 0 && !value.includes("all")
              //   ? setValue(["all"])
              //   : setValue([]);
              // item.id !== 0 && !value.includes("all")
              //   ? setValue([...value, item.source.type])
              //   : setValue([item.source.type]);
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
