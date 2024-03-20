"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SvgComponent from "@/app/lib/logo";
import { SIDENAV_ITEMS } from "../constants";
import { SideNavItem } from "../..//ui/types";
import { SolarExitBoldDuotone } from "@/app/lib/icons";
import { signOut } from "next-auth/react";

const SideNav = () => {
  return (
    <div
      className={`fixed hidden h-screen flex-1 border-r dark:border-[#2F3746] dark:bg-nav_bg   border-[#F3F4F6] 2xl:flex md:w-60  2xl:w-[270px] overflow-y-auto`}
    >
      <div className="flex w-full flex-col justify-between space-y-6 h-full">
        <div>
          <Link
            href="/dashboard"
            className="flex h-12 w-full flex-row items-center justify-center space-x-2.5 mt-4  border-zinc-200 md:justify-start md:px-5"
          >
            <div className="flex  items-center mt-0.5  rounded-md   ">
              <SvgComponent />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="hidden text-base font-semibold  md:flex ">
                WorkFlow
              </span>
              <span className="text-xs text-[#637381]">Gestion</span>
            </div>
          </Link>

          <div className="flex flex-col space-y-4  mt-5  md:px-5 ">
            {SIDENAV_ITEMS.map((item, idx, array) => {
              const previousItem = array[idx - 1];
              const showPostTitle =
                !previousItem || item.postitle !== previousItem.postitle;
              return (
                <div key={idx}>
                  {showPostTitle && (
                    <h2 className="text-sm text-[#7C7B84]  font-semibold my-1">
                      {item.postitle}
                    </h2>
                  )}

                  <MenuItem item={item} />
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => signOut()}
          className="flex h-12 w-full flex-row items-center justify-center space-x-3  border-zinc-200 md:justify-start md:px-6"
        >
          <SolarExitBoldDuotone className="text-[#637381] dark:text-nav_item h-6 w-6" />

          <span className="hidden text-sm font-medium text-[#637381] dark:text-nav_item md:flex">
            Salir
          </span>
        </button>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const isSubItemActive = () => {
    return item.subMenuItems?.some(
      (subItem) => `/dashboard${subItem.path}` === pathname
    );
  };
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={` flex w-full flex-row items-center   justify-between text-[#637381]  rounded-lg p-2 hover:bg-zinc-200 hover:dark:bg-menu-active ${
              pathname.includes(item.path) || isSubItemActive()
                ? "bg-primary/5 dark:bg-menu-active   text-primary"
                : ""
            }`}
          >
            <div
              className={`flex flex-row items-center  dark:text-nav_item space-x-4 ${
                isSubItemActive() ? "text-primary  dark:text-primary " : ""
              }`}
            >
              {item.icon}
              <span className="flex text-sm  font-semibold">{item.title}</span>
            </div>

            <div
              className={`${
                subMenuOpen
                  ? "rotate-90 transition-all duration-400 ease-in-out"
                  : "transition-all duration-500 ease-in-out"
              } flex`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  d="m6.5 10.5l3-3l-3-3"
                />
              </svg>
            </div>
          </button>

          <div
            className={` ml-3   flex flex-col space-y-4 transition-all duration-700 ease-in-out overflow-hidden dark:text-nav_item ${
              subMenuOpen ? "max-h-screen" : "max-h-0"
            }`}
          >
            {item.subMenuItems?.map((subItem, idx) => {
              return (
                <Link
                  key={idx}
                  href={`/dashboard${subItem.path}`}
                  className={` text-sm  dark:text-nav_item rounded-lg text-[13px] font-medium text-[#637381] p-0.5  mt-4 ${
                    `/dashboard${subItem.path}` === pathname
                      ? "  text-black  "
                      : "font-normal   ml-[7px] "
                  }`}
                >
                  {`/dashboard${subItem.path}` === pathname && (
                    <span className="  inline-block h-1.5 w-1.5 rounded-full mb-0.5 bg-primary  "></span>
                  )}
                  <span className="ml-[29px] ">{subItem.title}</span>
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row items-center space-x-4 rounded-lg hover:bg-zinc-200  text-[#637381]  p-2 hover:dark:bg-menu-active dark:text-nav_item ${
            item.path === pathname
              ? "bg-primary/5  dark:bg-menu-active text-primary  dark:text-primary"
              : ""
          }`}
        >
          {item.icon}
          <span className="flex text-sm font-semibold ">{item.title}</span>
        </Link>
      )}
    </div>
  );
};
