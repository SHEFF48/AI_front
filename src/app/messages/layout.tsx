import type { Metadata } from "next";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import ChatList from "@/components/custom/Messanger/Chat/List";
import ChatFilter from "@/components/custom/Messanger/Chat/Filter";
import ChatSort from "@/components/custom/Messanger/Chat/Sort";
import SelectChanel from "@/components/custom/Messanger/Chat/SelectChanel";
import ChatSearch from "@/components/custom/Messanger/Chat/Search";

import UserInfo from "@/components/custom/User/Info";

import { Suspense } from "react";

// import { Providers } from "@/components/providers/Providers";

export const metadata: Metadata = {
  title: "AI Application - Messages",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen  items-start justify-between ml-[100px] overflow-hidden">
      <div className="main-content  w-full h-svh overflow-hidden ">
        <section className="choose-chanel flex items-center h-[90px] w-full border-b pl-[24px]">
          <SelectChanel />
        </section>
        <section className="massenger-filter w-full px-[24px] border-b overflow-hidden">
          <ScrollArea
            type="auto"
            className=" h-full  w-full flex items-center "
          >
            <ChatFilter />
            <ScrollBar
              className="flex select-none touch-none p-0 rounded bg-color-7 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-[6px] data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[6px]"
              orientation="horizontal"
            ></ScrollBar>
          </ScrollArea>
          {/* <ChatFilter /> */}
        </section>
        <section className="chat flex h-full w-full items-end justify-start ">
          <div className="chat-list-block  w-[439px] py-[22px]  h-full border-r shrink-0">
            <div className="flex flex-col gap-[16px] w-[400px]  h-full ml-[24px] shrink-0">
              <header className="flex justify-between items-center">
                <h3 className="text-[18px] font-bold">Chat</h3>
                <ChatSort />
              </header>

              <ChatSearch />
              <div className="chat-list h-full overflow-hidden">
                <ScrollArea
                  type="auto"
                  className=" h-[calc(100%-180px)]  w-full "
                >
                  <ChatList />

                  <ScrollBar
                    className="flex select-none touch-none p-0 rounded bg-color-7 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-[6px] data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[6px]"
                    orientation="vertical"
                  ></ScrollBar>
                </ScrollArea>
              </div>
            </div>
          </div>

          <div className="messandger-block flex flex-col justify-start w-full h-full overflow-hidden">
            <Suspense
              fallback={
                <div className="flex justify-center m-10">Loading ... </div>
              }
            >
              {children}
            </Suspense>
          </div>
        </section>
      </div>
      <div className="right-bar flex flex-col items-center w-0 2xl:w-[325px]  h-svh border-l  border-b shrink-0">
        <UserInfo user={{ firstName: "Anna", lastName: "Ivanova" }} />
      </div>
    </main>
  );
}
