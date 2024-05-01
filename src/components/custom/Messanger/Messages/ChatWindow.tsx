/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { FC, useEffect, useState } from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import MessangerHeader from "@/components/custom/Messanger/Messages/Header";
import MessagesList from "@/components/custom/Messanger/Messages/List";

import MessagesForm from "@/components/custom/Messanger/Messages/Form";
import { getChatByIdLong } from "@/lib/data";
import { getChatById } from "@/lib/api";
import { getCurrentTime } from "@/lib/utils";

interface IChatWindow {
  messages?: any;
  chatId?: any;
  userId?: any;
}

const ChatWindow: FC<IChatWindow> = ({ messages, chatId, userId }) => {
  const [currentMessages, setCurrentMessages] = useState(messages);

  const revalidateMessages = async () => {
    const res = await getChatById(chatId);
    const chatMessages = await res.json();

    setCurrentMessages(chatMessages);
  };

  const addMessage = (message: string) => {
    setCurrentMessages((prev: []) =>
      prev
        ? [
            ...(prev || []),
            {
              created_time: getCurrentTime(),
              from: {
                email: "1459051531069575@facebook.com",
                id: "1459051531069575",
                name: "Gem",
              },
              id: Date.now().toString(),
              message: message,
              to: {
                data: [
                  {
                    email: "string",
                    id: "string",
                    name: "string",
                  },
                ],
              },
            },
          ]
        : undefined
    );
    setTimeout(() => revalidateMessages(), 10000);
  };

  // useEffect(() => {
  //   revalidateMessages(chatId);
  // }, [chatId]);

  useEffect(() => {
    console.log("MESSAGES IS REVALIDATED");
    if (messages) {
      setCurrentMessages(messages);
    }
  }, [messages]);

  useEffect(() => {
    let isMounted = true;

    async function longPolling(): Promise<void> {
      try {
        const response = await getChatByIdLong();

        if (!isMounted) return;

        if (!response.message) {
          throw new Error("Failed to fetch data long");
        }

        if (response.message !== "Some message text") {
          setCurrentMessages((prev: []) =>
            prev
              ? [
                  ...(prev || []),
                  {
                    created_time: getCurrentTime(),
                    from: {
                      email: "string",
                      id: "string",
                      name: "string",
                    },
                    id: Date.now().toString(),
                    message: response.message,
                    to: {
                      data: [
                        {
                          email: "string",
                          id: "string",
                          name: "Gem",
                        },
                      ],
                    },
                  },
                ]
              : undefined
          );
          await revalidateMessages();
        }
        // Обработка полученных данных
        console.log("Received data:", response.message);
        // revalidatePath(`/messages/${chatId}`);
        // Повторяем запрос после обработки данных
        longPolling();
      } catch (error) {
        // Обработка ошибок
        console.error("Error during long polling x:", error);

        // Handle network errors separately
        if (
          error instanceof Error &&
          (error.message.includes("network error") ||
            error.message.includes("NetworkError") ||
            error.message.includes("failed to fetch"))
        ) {
          // Implement retry mechanism or notify user
          await new Promise((resolve) => setTimeout(resolve, 10000)); // Retry after a delay
          longPolling();
        } else {
          // Handle other errors
        }
      }
    }

    longPolling();

    return () => {
      isMounted = false;
    };
  }, [currentMessages, chatId]);

  return (
    <>
      <MessangerHeader user={{ firstName: "Ivan", lastName: "Ivanov" }} />
      <div className="chat-list h-[calc(100%-390px)] p-[24px] overflow-hidden ">
        <ScrollArea type="auto" className=" h-full  w-full ">
          <MessagesList messages={currentMessages} chatId={chatId} />

          <ScrollBar
            className="flex select-none touch-none p-0 rounded bg-color-7 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-[6px] data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[6px]"
            orientation="vertical"
          ></ScrollBar>
        </ScrollArea>
      </div>
      <div className="w-full px-[24px]">
        <MessagesForm
          chat_id={chatId}
          user_id={userId}
          addMessage={addMessage}
        />
      </div>
    </>
  );
};

export default ChatWindow;
