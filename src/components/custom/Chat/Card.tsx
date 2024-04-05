import React, { FC } from "react";
import UserAvatar from "../User/Avatar";

interface IUser {
  firstName?: string | undefined;
  lastName?: string | undefined;
  avatar?: string | undefined;
}

interface IChatCard {
  id?: number;
  user?: IUser | undefined;
  lastMessage?: string;
  lastMessageTime?: string;
  source?: "instagram" | "telegram" | "facebook" | "custom";
}

const ChatCard: FC<IChatCard> = ({
  id,
  user,
  lastMessage,
  lastMessageTime,
}) => {
  return (
    <div className="w-[377px] h-[104px] p-[20px] flex items-center justify-between border border-color-5  hover:outline outline-offset-[-3px]  hover:outline-color-2 rounded-[8px] relative">
      <div className="user flex justify-start items-center gap-[20px]">
        <UserAvatar sizeMain={60} sizeSecondary={28} showSecondary />

        <div className="info flex flex-col justify-center items-start gap-[4px]">
          <div className="name text-color-1 font-semibold">
            {user?.firstName} {user?.lastName}
          </div>
          <div className="last-message text-color-8 font-medium">
            {lastMessage}
          </div>
        </div>
      </div>
      <div className="time self-start text-color-8 font-medium">
        {lastMessageTime}
      </div>
      <div className="new h-[7px] w-[7px] bg-[#D0285D] rounded-full top-[8px] right-[8px] absolute"></div>
    </div>
  );
};

export default ChatCard;
