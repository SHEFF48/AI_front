"use client";

import React, { FC } from "react";
import UserAvatar from "../../User/Avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface IUser {
  firstName?: string | undefined;
  lastName?: string | undefined;
  username?: string | undefined;
  avatar?: string | undefined;
}

interface IChatCard {
  id?: number;
  chat_id?: number | string;
  user?: IUser | undefined;
  username?: string | undefined;
  lastMessage?: string;
  lastMessageTime?: string;
  source?: "instagram" | "telegram" | "facebook" | "custom";
}

const ChatCard: FC<IChatCard> = ({
  chat_id,
  user,
  username,
  lastMessage = "bla bla",
  lastMessageTime = "17:17",
}) => {
  const pathname = usePathname();

  const isActive = pathname?.includes(chat_id!.toString());

  return (
    <div
      className={cn(
        "w-[377px] h-[104px] p-[20px] flex items-center justify-between border border-color-5  hover:outline outline-offset-[-3px]  hover:outline-color-2 rounded-[8px] relative",
        isActive && "outline outline-color-2"
      )}
    >
      <div className="user flex justify-start items-center gap-[20px]">
        <UserAvatar sizeMain={60} sizeSecondary={28} showSecondary />

        <div className="info flex flex-col justify-center items-start gap-[4px]">
          <div className="name text-color-1 font-semibold">{username}</div>
          <div className="last-message text-color-8 font-medium">
            {lastMessage}
          </div>
        </div>
      </div>
      <div className="time self-start text-color-8 font-medium">
        {lastMessageTime}
      </div>
      <div className="new h-[7px] w-[7px] bg-[#D0285D] rounded-full top-[8px] right-[8px] absolute"></div>
      <Link
        href={`/messages/${chat_id}`}
        className="absolute w-full h-full block z-10"
      >
        {""}
      </Link>
    </div>
  );
};

export default ChatCard;
