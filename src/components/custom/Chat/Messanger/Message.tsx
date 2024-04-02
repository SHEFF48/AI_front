import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface IMessage {
  id?: number;
  body?: string;
  time?: string;
  date?: string;
  role?: "user" | "ai";
}

const MessangerMessage: FC<IMessage> = ({ body, time, role }) => {
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

export default MessangerMessage;
