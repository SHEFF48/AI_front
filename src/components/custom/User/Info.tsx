import React, { FC } from "react";

import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";
import UserAvatar from "./Avatar";
import { UserInfoForm } from "./InfoForm";
import UserNotes from "./Notes";

interface IUser {
  id?: number;
  firstName?: string | undefined;
  lastName?: string | undefined;
  avatar?: string | undefined;
}

interface IInfo {
  id?: number;
  user?: IUser | undefined;
  phoneNumber?: string;
  city?: string;
  source?: "instagram" | "telegram" | "facebook" | "custom";
  delivery?: "string";
}

const UserInfo: FC<IInfo> = ({ user }) => {
  return (
    <div className="flex flex-col justify-start w-full">
      <div className="w-full border-b">
        <div className="flex flex-col  gap-[18px] w-[276px] py-[24px] mx-auto">
          <div className="user flex justify-start items-start gap-[16px] ">
            <UserAvatar sizeMain={60} sizeSecondary={28} showSecondary />
            <div className="info flex flex-col justify-center items-start gap-[1px]">
              <div className="name text-color-1 font-semibold">
                {user?.firstName} {user?.lastName}
              </div>
              <div className="last-message text-color-2 text-[14px] font-medium">
                <Link
                  href={"/"}
                  className="flex items-center justify-start gap-[4px]"
                >
                  AlexandraLozinska <LinkIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
          <UserInfoForm />
        </div>
      </div>

      <div className="flex flex-col  gap-[18px] w-[276px] py-[24px] items-center">
        <UserNotes />
      </div>
    </div>
  );
};

export default UserInfo;
