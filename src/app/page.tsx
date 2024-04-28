import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import ChatList from "@/components/custom/Messanger/Chat/List";
import ChatFilter from "@/components/custom/Messanger/Chat/Filter";
import ChatSort from "@/components/custom/Messanger/Chat/Sort";
import ChatChanel from "@/components/custom/Messanger/Chat/SelectChanel";
import ChatSearch from "@/components/custom/Messanger/Chat/Search";
import MessangerHeader from "@/components/custom/Messanger/Messages/Header";
import MessangerBody from "@/components/custom/Messanger/Messages/List";
import UserInfo from "@/components/custom/User/Info";
import { Input } from "@/components/ui/input";
import MessangerForm from "@/components/custom/Messanger/Messages/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-start justify-between ml-[100px] overflow-hidden">
      <h1>Main page</h1>
    </main>
  );
}
