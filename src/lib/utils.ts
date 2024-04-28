import { type ClassValue, clsx } from "clsx";
import { exit } from "process";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractTime(createdTime: string): string {
  const dateObj = new Date(createdTime);
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function getUserId(messages: any[]): string {
  let userId = "";

  messages.forEach((element) => {
    if (element?.from?.name !== "Gem" && element.from.id) {
      userId = element.from.id;
      return;
    }
  });

  return userId;
}
