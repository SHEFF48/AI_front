import React, { FC } from "react";

import {
  OctagonAlert,
  Trash2,
  Star,
  Mail,
  TriangleAlert,
  SquareCheckBig,
} from "lucide-react";
import UserAvatar from "../../User/Avatar";

interface IUser {
  firstName?: string | undefined;
  lastName?: string | undefined;
  avatar?: string | undefined;
}

interface IMessangerHeader {
  user?: IUser;
}

const MessangerHeader: FC<IMessangerHeader> = ({ user }) => {
  return (
    <header className="flex justify-between items-center h-[108px] shrink-0 pl-[24px] pr-[30px]  border-b">
      <div className="user flex justify-start items-center gap-[20px]">
        <UserAvatar sizeMain={60} />
        <div className="info flex flex-col justify-center items-start gap-[4px]">
          <div className="name text-color-1 font-semibold">
            {user?.firstName} {user?.lastName}
          </div>
          <div className="last-message text-color-8 text-[14px] font-medium">
            Назначить переписку
          </div>
        </div>
      </div>
      <div className="actions">
        <ul className="flex gap-[22px] text-color-10">
          <li className="hover:text-color-3 cursor-pointer">
            <OctagonAlert />
          </li>

          <li className="hover:text-color-3 cursor-pointer">
            <Trash2 />
          </li>
          <li className="hover:text-color-3 cursor-pointer">
            <Star />
          </li>
          <li className="hover:text-color-3 cursor-pointer">
            <Mail />
          </li>
          <li className="hover:text-color-3 cursor-pointer">
            <TriangleAlert />
          </li>
          <li className="hover:text-color-3 cursor-pointer">
            <SquareCheckBig />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MessangerHeader;
