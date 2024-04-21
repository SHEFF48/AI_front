"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const FacebookButton = () => {
  const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl");
  // const callbackUrl = currentcallbackUrl === "/login" ? "messages" : currentcallbackUrl;

  const callbackUrl = "messages";

  return (
    <Button
      variant={"normal"}
      type="button"
      onClick={() => signIn("facebook", { callbackUrl })}
    >
      <div className="flex justify-start items-center  font-medium w-full ">
        <div className="w-[28px] h-[28px] shrink-0">
          <Image
            src={"/icons/facebook.svg"}
            alt="insta facebook"
            width={28}
            height={28}
          />
        </div>
        <div className="flex justify-center items-center w-full">
          {"Увійти через Facebook"}
        </div>
      </div>
    </Button>
  );
};

export default FacebookButton;
