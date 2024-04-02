import React, { FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

interface IAvatar {
  userImage?: "string";
  source?: "string";
  sizeMain?: number;
  sizeSecondary?: number;
  showSecondary?: false | true;
}

const UserAvatar: FC<IAvatar> = ({
  userImage,
  source,
  sizeMain,
  sizeSecondary,
  showSecondary,
}) => {
  return (
    <div className={`icon w-[${sizeMain}px] h-[${sizeMain}px] relative`}>
      <Avatar className={`w-[${sizeMain}px] h-[${sizeMain}px] bg-color-3`}>
        <AvatarImage
          src="./img/user.jpeg"
          className={`w-[${sizeMain}px] h-[${sizeMain}px] object-cover bg-color-3`}
        />
        <AvatarFallback>{"user"}</AvatarFallback>
      </Avatar>
      {showSecondary && (
        <Avatar
          className={`social w-[${sizeSecondary}px] h-[${sizeSecondary}px] bg-white absolute bottom-[-4px] right-[-4px] rounded-full p-[4px]`}
        >
          <AvatarImage src="./icons/instagram.svg" />
          <AvatarFallback>{"source"}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export default UserAvatar;
