import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const ChatSearch = () => {
  return (
    <div className="search-line h-[48px] w-full relative">
      <Input
        // className="h-full"
        placeholder="Пошук"
        className="bg-color-6 text-color-1 font-medium h-full w-full focus:border-color-2"
      />
      <SearchIcon
        size={20}
        className="absolute right-[14px] top-[13px] bottom-[13px] my-auto"
      />
    </div>
  );
};

export default ChatSearch;
