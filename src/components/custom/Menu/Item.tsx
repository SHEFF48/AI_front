import React, { FC } from "react";

import * as Icons from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Define a type for Lucide icons
type LucideIconType = {
  [key: string]: React.FC<any> | any;
};

interface IMenuItem {
  id: string | number;
  title: string;
  url: string;
  icon?: string;
  isActive?: boolean;
}

const MenuItem: FC<IMenuItem> = ({ id, title, url, icon, isActive }) => {
  const CurentIcon =
    (icon && ((Icons as LucideIconType)[icon] as typeof Icons.Tent)) ||
    undefined;
  return (
    <li
      className={cn(
        "flex items-center justify-center text-[#B1B6D1] hover:text-white group-hover:justify-start gap-[16px] cursor-pointer",
        isActive ? "text-white" : ""
      )}
    >
      <span className="icon flex justify-center items-center h-[28px] w-[28px]  shrink-0">
        {CurentIcon && <CurentIcon className="h-[28px] w-[28px]" />}
      </span>

      <Link
        href={url}
        className="title  text-[16px] font-medium break-words w-full hidden group-hover:block  shrink-0 "
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;
