import { cn } from "@/lib/utils";
import React, { FC } from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MessagesItem from "./Item";
import UserAvatar from "../../User/Avatar";

interface Message {
  created_time: string;
  from: {
    email: string;
    id: string;
    name: string;
  };
  id: string;
  message: string;
  to: {
    data: {
      email: string;
      id: string;
      name: string;
    }[];
  };
}

// interface IMessage {
//   id: number;
//   body: string;
//   role: "user" | "ai" | undefined;
//   time: string;
//   date: string;
// }

const MessagesList: FC<{ messages?: Message[] }> = ({ messages }) => {
  return (
    <div className="messanger-body flex flex-col justify-start gap-[20px] pr-[24px]">
      {messages?.map((message, index) => {
        return (
          <div
            key={message.id}
            className={cn(
              "flex gap-[16px] max-w-[calc(100%/4*3)] 2xl:max-w-[calc(100%/4*2)]",
              message.from.id !== "1459051531069575"
                ? " self-start flex-row"
                : " self-end flex-row-reverse"
            )}
          >
            <div className="icon w-[28px] h-[28px] relative">
              {message.from.id !== "1459051531069575" && (
                <UserAvatar sizeMain={28} />
              )}
              {message.from.id === "1459051531069575" && (
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
