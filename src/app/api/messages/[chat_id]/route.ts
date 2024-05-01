import { NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL;

// GET -----------------------------------------------------------------
export async function GET(
  req: Request,
  { params }: { params: { chat_id: string } }
) {
  const chatId = params.chat_id;

  const res = await fetch(`${API_BASE_URL}/get_chat_messages?chatId=${chatId}`);
  const data = await res.json();

  return Response.json(data);
}

// POST -----------------------------------------------------------------
export async function POST(
  req: Request,
  { params }: { params: { chat_id: string } }
) {
  const body = await req.json();

  const res = await fetch(`${API_BASE_URL}/send_message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data POST");
  }

  return NextResponse.json({ res });
}
