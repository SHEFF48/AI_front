import { type ClassValue, clsx } from "clsx";
import { exit } from "process";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// -------------------------------------------------------------------------------------------

export function getCurrentTime(): string {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

// -------------------------------------------------------------------------------------------

export function extractTime(createdTime: string): string {
  const dateObj = new Date(createdTime);
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

// -------------------------------------------------------------------------------------------

export async function getUserId(messages: any[]) {
  let userId = "";

  messages.forEach((element) => {
    if (element?.from?.name !== "Gem" && element.from.id) {
      userId = element.from.id;
      return;
    }
  });

  return userId;
}
