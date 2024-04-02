import { chatList } from "@/data/chat-list";

import React from "react";
import ChatCard from "./Card";

const ChatList = () => {
  return (
    <div className="flex flex-col gap-[8px] ">
      {chatList.map((chatItem) => (
        <ChatCard key={chatItem.id} {...chatItem} />
      ))}
    </div>
  );
};

export default ChatList;
