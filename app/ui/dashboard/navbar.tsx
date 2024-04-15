"use client";
import { FC } from "react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMounted } from "@/src/hooks/use-is-mounted";
import { NotificacionDto } from "@/src/generated/graphql";
import { useSession } from "next-auth/react";
import { ToggleMenu } from "../components/toglemenu";
import {
  CiMenuAlt03,
  JamSearch,
  SolarSettingsBoldDuotone,
} from "@/app/lib/icons";

import Modal from "./modal";
type NavbarProps = {
  dataNotificaciones: NotificacionDto[];
 
};

const Navbar: FC<NavbarProps> = ({ dataNotificaciones }) => {
  const { setTheme, theme } = useTheme();
  const isMounted = useIsMounted();
  const isSelected = theme === "light" && isMounted;
  const { data: session } = useSession();

  const onChange = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <header className=" z-50 flex h-[52px] sticky items-center justify-between   backdrop-blur  w-auto top-0 md:w-full  ">
      <div className="flex items-center mt-3 ml-5 space-x-5">
        <ToggleMenu />
        <JamSearch className=" text-[#637381] w-6 h-6" />
      </div>

      <div className=" content-center  justify-center mt-3 mr-3 space-x-7  flex items-center">
        {session?.nivelUser === "admin" && <Modal datos={dataNotificaciones} />}
        <button className="w-fit h-fit  rounded-full">
          <SolarSettingsBoldDuotone className=" text-[#637381] w-6 h-6 spin360" />
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
