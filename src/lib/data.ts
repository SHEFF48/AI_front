"use server";

import { revalidatePath, revalidateTag } from "next/cache";

const API_BASE_URL: string | undefined = process.env.API_BASE_URL;
const API_POLL_URL: string | undefined = process.env.API_POLL_URL;
// ------------------------------------------------------------------

async function getData(API_URL: string | undefined) {
  if (!API_URL) {
    throw new Error("API URL is not defined");
  }
  const res = await fetch(API_URL, {
    // next: { tags: ["messages"] },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// ------------------------------------------------------------------

async function getDataLong(API_URL: string | undefined) {
  if (!API_URL) {
    throw new Error("API URL is not defined LONG");
  }
  const res = await fetch(API_URL, { cache: "no-cache" });

  if (!res.ok) {
    throw new Error("Failed to fetch data LONG");
  }

  return res.json();
  // return res;
}

// ------------------------------------------------------------------

export async function getAllChats() {
  const URI = "/get_all_chats";
  const URL = `${API_BASE_URL!}${URI!}`;

  return await getData(URL);
}

// ------------------------------------------------------------------

export async function getChatById(chatId: string) {
  // "use server";
  const URI = `/get_chat_messages?chatId=${chatId}`;
  const URL = `${API_BASE_URL!}${URI!}`;

  return await getData(URL);
}

// export async function getChatByIdLong(chatId: string) {
//   const URI = `/poll?chatId=${chatId}`;
//   const URL = `${API_BASE_URL!}${URI!}`;

//   return await getData(URL);
// }

// ------------------------------------------------------------------

export async function getChatByIdLong() {
  // const URI = `/poll`;
  const URL = `${API_POLL_URL!}`;

  const message = await getDataLong(URL);

  return { message };
}

// ------------------------------------------------------------------

export async function sendMessage1(data: any, chatId: string | undefined) {
  // "use server";
  // console.log("message sended");
  // const URI = `/send_message`;
  // const URL = `${API_BASE_URL!}${URI!}`;
  // console.log("URL URL:", URL);
  // await postData(URL, data);
  // revalidatePath(`/messages/${chatId}`, "page");
  // revalidateTag("messages");
}

export async function revalidatePage(path: string) {
  revalidatePath(path, "page");
  console.log("REVALIDATED");
}
