// POST ----------------------------------------------------------------------------------------------

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
