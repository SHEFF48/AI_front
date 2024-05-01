// POST ----------------------------------------------------------------------------------------------

import { FC } from "react";

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

  if (!res.ok) {
    throw new Error("Failed to fetch data POST");
  }

  return res.json();
}

// ----------------------------------------------------------------------------------------------

export async function sendMessage(data: any, chatId: string | undefined) {
  const URL = `/api/messages/${chatId}`;
  await postData(URL, data);
}

// GET ----------------------------------------------------------------------------------------------

async function getData(API_URL: string | undefined) {
  if (!API_URL) {
    throw new Error("API URL is not defined");
  }

  const res = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return Response.json(data);
}

// ----------------------------------------------------------------------------------------------

export async function getChatById(chatId: string) {
  const URL = `/api/messages/${chatId}`;
  const res = await getData(URL);
  const data = await res.json();
  return Response.json(data);
}

// LONG POLLING --------------------------------------------------------------

interface ILongPolling {
  getData: Function;
  isMounted: boolean;
  setCurrentData: Function;
  revalidateData: Function;
  getCurrentTime: Function;
}

export async function longPolling({
  getData,
  isMounted,
  setCurrentData,
  revalidateData,
  getCurrentTime,
}: ILongPolling): Promise<void> {
  try {
    const response = await getData();

    if (!isMounted) return;

    if (!response.message) {
      throw new Error("Failed to fetch data long");
    }

    // Проверка входящего сообщения
    if (response.message !== "Some message text") {
      setCurrentData((prev: []) =>
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
      await revalidateData();
    }
    // Обработка полученных данных
    // console.log("Received data:", response.message);
    // revalidatePath(`/messages/${chatId}`);
    // Повторяем запрос после обработки данных
    longPolling({
      getData,
      isMounted,
      setCurrentData,
      revalidateData,
      getCurrentTime,
    });
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
      longPolling({
        getData,
        isMounted,
        setCurrentData,
        revalidateData,
        getCurrentTime,
      });
    } else {
      // Handle other errors
    }
  }
}
