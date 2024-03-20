"use client";
import { FC } from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMounted } from "@/src/hooks/use-is-mounted";

import Modal from "./modal";
const Navbar: FC = () => {
  const { setTheme, theme } = useTheme();
  const isMounted = useIsMounted();
  const isSelected = theme === "light" && isMounted;

  const onChange = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  

  return (
    <header className=" z-50 flex h-[52px] sticky items-center justify-between   backdrop-blur  w-auto top-0 md:w-full  ">
      <div className="flex items-center mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          className="ml-5 text-[#637381] "
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 17h8m-8-5h14M5 7h8"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="-2.5 -2.5 24 24"
          className="ml-5 text-[#637381]"
        >
          <path
            fill="currentColor"
            d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"
          />
        </svg>
      </div>

      <div className=" content-center  justify-center mt-3 mr-3 space-x-7  flex items-center">
        <Modal />
        <button className="w-fit h-fit  rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            className=" spin360  text-[#637381]"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2.008 2.008 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361c0 .558-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a1.99 1.99 0 0 0-.399 1.479c.053.394.287.798.757 1.605c.47.807.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a1.99 1.99 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361c0-.558.306-1.064.782-1.36c.324-.203.533-.364.682-.556a1.99 1.99 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605c-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.615 1.615 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 0 0-1.09-1.083Z"
              clipRule="evenodd"
              opacity=".5"
            />
            <path
              fill="currentColor"
              d="M15.523 12c0 1.657-1.354 3-3.023 3c-1.67 0-3.023-1.343-3.023-3S10.83 9 12.5 9c1.67 0 3.023 1.343 3.023 3Z"
            />
          </svg>
        </button>

        <Switch checked={isSelected} onCheckedChange={onChange} />

        <div className="p-0.5 border border-[#F3F4F6] rounded-full  dark:bg-[#F3F4F6]">
          <Avatar className=" h-[36px] w-[38px]    bg-zinc-200   ">
            <AvatarImage src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e5354037488c27f4c47477f_peep-27.svg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
