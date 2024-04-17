import React from "react";
import MenuList from "./List";

const Menu = () => {
  return (
    <div className="menu flex flex-col items-center group-hover:items-start gap-[28px]">
      <h2 className="text-[20px] font-bold group-hover:px-[36px]">Меню</h2>
      <MenuList />
    </div>
  );
};

export default Menu;
