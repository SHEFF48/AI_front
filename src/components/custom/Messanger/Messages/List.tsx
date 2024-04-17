import { cn } from "@/lib/utils";
import React from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MessagesItem from "./Item";
import UserAvatar from "../../User/Avatar";

interface IMessage {
  id: number;
  body: string;
  role: "user" | "ai" | undefined;
  time: string;
  date: string;
}

const MessagesList = () => {
  const messages: IMessage[] = [
    {
      id: 0,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "user",
      time: "17:15",
      date: "23.23.2024",
    },
    {
      id: 1,
      body: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est magnam, maxime quo tempore numquam autem exercitationem corporis. Magnam est nobis suscipit minus, nihil, vero cumque eum qui dignissimos animi ea!",
      role: "ai",
      time: "17:15",
      date: "23.23.2024",
    },
    {
      id: 2,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "user",
      time: "17:15",
      date: "23.23.2024",
    },
    {
      id: 3,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "ai",
      time: "17:15",
      date: "23.23.2024",
    },
    {
      id: 4,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "ai",
      time: "17:15",
      date: "23.23.2024",
    },
    {
      id: 5,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "user",
      time: "17:15",
      date: "23.23.2024",
    },
    {
      id: 6,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "ai",
      time: "17:15",
      date: "23.23.2024",
    },
    {
      id: 7,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "user",
      time: "17:15",
      date: "23.23.2024",
    },
    {
      id: 8,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "ai",
      time: "17:15",
      date: "23.23.2024",
    },
    {
      id: 9,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "user",
      time: "17:15",
      date: "23.23.2024",
    },
    {
      id: 100,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "ai",
      time: "17:15",
      date: "23.23.2024",
    },
    {
      id: 11,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "user",
      time: "17:15",
      date: "23.23.2024",
    },
    {
      id: 12,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "ai",
      time: "17:15",
      date: "23.23.2024",
    },

    {
      id: 13,
      body: "А замшевые есть в наличии? Очень хочу такие ",
      role: "user",
      time: "17:15",
      date: "23.23.2024",
    },
  ];

  return (
    <div className="messanger-body flex flex-col justify-start gap-[20px] pr-[24px]">
      {messages.map((message, index) => {
        return (
          <div
            key={message.id}
            className={cn(
              "flex gap-[16px] max-w-[calc(100%/4*3)] 2xl:max-w-[calc(100%/4*2)]",
              message.role === "user"
                ? " self-start flex-row"
                : " self-end flex-row-reverse"
            )}
          >
            <div className="icon w-[28px] h-[28px] relative">
              {message.role === "user" && <UserAvatar sizeMain={28} />}
              {message.role === "ai" && (
                <Avatar className="w-[28px] h-[28px] bg-color-2">
                  {/* <AvatarImage src="./img/user.jpeg" /> */}
                  <AvatarFallback className="front-bold text-white bg-color-2">
                    {"Ai"}
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
            <div>
              <MessagesItem {...message} />
              {/* {message.body} */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessagesList;
