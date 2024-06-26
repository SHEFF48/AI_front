import React, { FC } from "react";
import { cn } from "@/lib/utils";

interface IMessage {
  id?: number;
  body?: string;
  time?: string;
  date?: string;
  role?: "user" | "ai";
}

const MessagesItem: FC<IMessage> = ({ body, time, role }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-[3px] py-[10px] px-[16px] rounded-lg",
        role === "user" ? "bg-color-6" : "bg-color-2"
      )}
    >
      <p
        className={cn(
          "text-[16px] font-normal ",
          role === "user" ? "text-color-9" : "text-white"
        )}
      >
        {body}
      </p>
      <time className={cn("", role === "user" ? "text-color-2" : "text-white")}>
        {time}
      </time>
    </div>
  );
};

export default MessagesItem;
