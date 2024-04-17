import React from "react";
import Menu from "../custom/Menu";
import Link from "next/link";
import { FileText } from "lucide-react";

const Navbar = () => {
  return (
    <section className="navbar flex flex-col justify-between items-center gap-[32px] hover:items-start pt-[20px]  w-[100px] hover:w-[230px] h-full bg-color-1 text-white fixed left-0 top-0 bottom-0 group transition-all overflow-hidden z-50">
      <div className="top flex flex-col justify-start items-center gap-[32px] group-hover:items-start">
        <div className="logo w-[60px] h-[58px] text-[48px] font-bold text-color-4  group-hover:ml-[36px] flex justify-center items-center">
          <Link href={"/"}>Ai</Link>
        </div>
        <Menu />
      </div>

      <div className="flex items-center justify-center text-[#B1B6D1] hover:text-white group-hover:justify-start gap-[16px] px-[36px] cursor-pointer h-[60px] mb-10">
        <span className="icon flex justify-center items-center h-[28px] w-[28px] shrink-0">
          <FileText size={28} />
        </span>

        <Link
          href={"/privacy-policy"}
          className="title  text-[16px] font-medium break-words w-full  hidden group-hover:block  shrink-0 "
        >
          {"Політика конфіденційності"}
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
