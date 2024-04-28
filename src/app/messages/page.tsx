import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import ChatList from "@/components/custom/Messanger/Chat/List";
import ChatFilter from "@/components/custom/Messanger/Chat/Filter";
import ChatSort from "@/components/custom/Messanger/Chat/Sort";
import SelectChanel from "@/components/custom/Messanger/Chat/SelectChanel";
import ChatSearch from "@/components/custom/Messanger/Chat/Search";
import MessangerHeader from "@/components/custom/Messanger/Messages/Header";
import MessagesList from "@/components/custom/Messanger/Messages/List";
import UserInfo from "@/components/custom/User/Info";
import MessagesForm from "@/components/custom/Messanger/Messages/Form";

export default function page() {
  return (
    <div className="flex items-start justify-center m-10 h-full w-full">
      Оберіть чат для спілкування
    </div>
  );
}
