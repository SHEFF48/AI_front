"use server";

import { revalidatePath } from "next/cache";

const API_BASE_URL: string | undefined = process.env.API_BASE_URL;
const test = "2";

async function getData(API_URL: string | undefined) {
  if (!API_URL) {
    throw new Error("API URL is not defined");
  }
  const res = await fetch(API_URL);

  if (!res.ok) {
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

  console.log("response POST:", res);

  if (!res.ok) {
    throw new Error("Failed to fetch data POST");
  }

  return res.json();
}

export async function getAllChats() {
  const URI = "/get_all_chats";
  const URL = `${API_BASE_URL!}${URI!}`;

  return await getData(URL);
}

export async function getChatById(chatId: string) {
  const URI = `/get_chat_messages?chatId=${chatId}`;
  const URL = `${API_BASE_URL!}${URI!}`;

  return await getData(URL);
}

export async function sendMessage(data: any) {
  const URI = `/send_message`;
  const URL = `${API_BASE_URL!}${URI!}`;

  console.log("URL URL:", URL);
  await postData(URL, data);
  revalidatePath("/messages");
}
