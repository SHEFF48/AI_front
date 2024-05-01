import { NextPage } from "next";
import { getChatById } from "@/lib/data";

import ChatWindow from "@/components/custom/Messanger/Messages/ChatWindow";

const ChatPage: NextPage = async ({ params }: any) => {
  const chat_id = params.chat_id;
  const chatMessages = await getChatById(chat_id);
  const userId = "7380789558708287";

  return (
    <ChatWindow messages={chatMessages} chatId={chat_id} userId={userId} />
  );
};

export default ChatPage;
