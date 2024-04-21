"use client";

import React from "react";
import MenuItem from "./Item";
import { LogInIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menu = [
  {
    id: 0,
    title: "Повідомлення",
    url: "/messages",
    icon: "MessageSquareText",
  },
  {
    id: 1,
    title: "Чат GPT",
    url: "/chat-gpt",
    icon: "Aperture",
  },
  {
    id: 2,
    title: "Налаштування",
    url: "/settings",
    icon: "Settings",
  },
  {
    id: 3,
    title: "Користувач",
    url: "/user",
    icon: "User",
  },
];

const MenuList = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-[40px] px-[36px]">
      {menu &&
        menu?.map((menuItem) => {
          const isActive = menuItem.url === pathname;

          return (
            <MenuItem key={menuItem.id} {...menuItem} isActive={isActive} />
          );
        })}
      <li className="w-full">
        <Link
          href={"/login"}
          className="flex items-center justify-center text-[#B1B6D1] hover:text-white group-hover:justify-start gap-[16px] cursor-pointer"
        >
          <span className="icon flex justify-center items-center h-[28px] w-[28px] shrink-0">
            <LogInIcon className="rotate-180" size={28} />
          </span>
          <span className="title  text-[16px] font-medium break-words w-full  hidden group-hover:block  shrink-0 ">
            {"Вихід"}
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default MenuList;
