import { cn, extractTime } from "@/lib/utils";
import React, { FC } from "react";

// interface IMessage {
//   id?: number;
//   body?: string;
//   time?: string;
//   date?: string;
//   role?: "user" | "ai";
// }

interface IMessage {
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

const MessagesItem: FC<IMessage> = ({ message, created_time, from }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-[3px] py-[10px] px-[16px] rounded-lg",
        from.id !== "1459051531069575" ? "bg-color-6" : "bg-color-2"
      )}
    >
      <p
        className={cn(
          "text-[16px] font-normal ",
          from.id !== "1459051531069575" ? "text-color-9" : "text-white"
        )}
      >
        {message}
      </p>
      <time
        className={cn(
          "",
          from.id !== "1459051531069575" ? "text-color-2" : "text-white"
        )}
      >
        {extractTime(created_time)}
      </time>
    </div>
  );
};

export default MessagesItem;
