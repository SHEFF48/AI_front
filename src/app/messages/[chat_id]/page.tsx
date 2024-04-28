import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import ChatList from "@/components/custom/Messanger/Chat/List";
import ChatFilter from "@/components/custom/Messanger/Chat/Filter";
import ChatSort from "@/components/custom/Messanger/Chat/Sort";
import SelectChanel from "@/components/custom/Messanger/Chat/SelectChanel";
import ChatSearch from "@/components/custom/Messanger/Chat/Search";
import MessangerHeader from "@/components/custom/Messanger/Messages/Header";
import MessagesList from "@/components/custom/Messanger/Messages/List";
import UserInfo from "@/components/custom/User/Info";
import { Input } from "@/components/ui/input";
import MessagesForm from "@/components/custom/Messanger/Messages/Form";

import { NextPage } from "next";
import { getChatById } from "@/lib/data";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ChatPage: NextPage = async ({ params }: any) => {
  const { chat_id, searcParams } = params;

  const messages = [
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

  const chatMessages = await getChatById(chat_id);

  const preparedMessages = console.log("ChatPage params:", chatMessages);
  return (
    <>
      <Suspense fallback={<Skeleton className="w-10 h-10 rounded-full m-10" />}>
        <MessangerHeader user={{ firstName: "Ivan", lastName: "Ivanov" }} />
        <div className="chat-list h-[calc(100%-390px)] p-[24px] overflow-hidden ">
          <ScrollArea type="auto" className=" h-full  w-full ">
            <MessagesList messages={chatMessages} />

            <ScrollBar
              className="flex select-none touch-none p-0 rounded bg-color-7 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-[6px] data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[6px]"
              orientation="vertical"
            ></ScrollBar>
          </ScrollArea>
        </div>
        <div className="w-full px-[24px]">
          <MessagesForm chat_id={chat_id} />
        </div>
      </Suspense>
    </>
  );
};

export default ChatPage;
