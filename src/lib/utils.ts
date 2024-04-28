import { type ClassValue, clsx } from "clsx";
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
