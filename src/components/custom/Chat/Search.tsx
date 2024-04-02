import { Input } from "@/components/ui/input";
import React from "react";

const ChatSearch = () => {
  return (
    <div className="search-line h-[48px]">
      <Input
        // className="h-full"
        placeholder="Search"
        className="bg-color-6 text-color-1 font-medium"
      />
    </div>
  );
};

export default ChatSearch;
