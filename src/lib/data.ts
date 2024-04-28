import { string } from "zod";

const API_BASE_URL: string | undefined = process.env.API_BASE_URL;

async function getData(API_URL: string | undefined) {
  if (!API_URL) {
    throw new Error("API URL is not defined");
  }
  const res = await fetch(API_URL);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function postData(API_URL: string | undefined, data: any) {
  if (!API_URL) {
    throw new Error("API URL is not defined");
  }
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const getAllChats = async () => {
  const URI = "/get_all_chats";
  const URL = `${API_BASE_URL!}${URI!}`;

  return await getData(URL);
};

export const getChatById = async (chatId: string) => {
  const URI = `/get_chat_messages?chatId=${chatId}`;
  const URL = `${API_BASE_URL!}${URI!}`;

  return await getData(URL);
};

export const sendMessage = async (data: any) => {
  const URI = `/send_message`;
  const URL = `${API_BASE_URL!}${URI!}`;

  return await postData(URL, data);
};
