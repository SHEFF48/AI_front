// import { chatList } from "@/data/chat-list";

import React from "react";
import ChatCard from "./Card";
import { getAllChats } from "@/lib/data";

const ChatList = async () => {
  const chatList = await getAllChats();

  return (
    <div className="flex flex-col gap-[8px] ">
      {chatList?.data?.map((chatItem: any) => (
        <ChatCard key={chatItem.chat_id} {...chatItem} />
      ))}
    </div>
  );
};

export default ChatList;
