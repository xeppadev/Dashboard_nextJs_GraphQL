import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabinline";
import React, { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { SolarBellBoldDuotone } from "@/app/lib/icons";
import{SolarNotificationUnreadBold} from "@/app/lib/icons";
import { es } from "date-fns/locale";
import { NotificacionDto } from "@/src/generated/graphql";

type ModalProps = {
  datos: NotificacionDto[];
  // datasus: NotificacionDto;
};

export default function Modal({ datos }: ModalProps) {
  const [notificaciones, setNotificaciones] =
    useState<NotificacionDto[]>(datos);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="  relative   w-fit h-fit rounded-full">
          <SolarBellBoldDuotone className="w-[21px] h-[21px] text-[#637381]" />
          <span className="absolute bottom-3 left-3 p-0.5 px-[7px]  w-fit h-fit  text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
            {notificaciones.length}
          </span>
        </button>
      </SheetTrigger>
      <SheetContent className="backdrop-blur-2xl bg-white/30 px-0 dark:bg-[#0B0F18]/50 ">
        <SheetHeader className="px-5">
          <SheetTitle>Notificaciones</SheetTitle>
        </SheetHeader>
        <Tabs
          defaultValue="user"
          className="w-full  my-5 overflow-y-auto h-full "
        >
          <TabsList className="inline-flex lg:space-x-5 space-x-2 pt-3 px-5 border-y w-full sticky top-0 bg-white  dark:bg-background">
            <TabsTrigger className="space-x-[5px]" value="add">
              {" "}
              <span>Todos</span>
              <span className="py-[3px] px-[6px] bg-black rounded-md text-white">
                {" "}
                {notificaciones.length < 10
                  ? `0${notificaciones.length}`
                  : notificaciones.length}
              </span>
            </TabsTrigger>
            <TabsTrigger className="space-x-[5px]" value="program">
              {" "}
              <span>Mantenimientos</span>
              <span className="py-[3px] px-[6px] bg-[#2970FF]/20 rounded-md text-[#2970FF]">
                {" "}
                15
              </span>
            </TabsTrigger>
            <TabsTrigger className="space-x-[5px]" value="confirm">
              {" "}
              <span>Facturas</span>
              <span className="py-[3px] px-[6px] bg-active-green rounded-md text-[#16a34a]">
                {" "}
                08
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent className="mt-0 z-0" value="add">
            {notificaciones.map((data) => (
              <div
                className="flex flex-col border-b border-dashed p-5 space-y-2"
                key={data._id}
              >
                <div className="flex flex-row  space-x-3">
                  <SolarNotificationUnreadBold className="w-12 h-12 text-black" />
                 
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm ">
                      <strong>{data.titulo}</strong>
                    </span>
                    <span className="text-sm">{data.descripcion}</span>
                    <span className="w-fit rounded-[64px] border text-center font-semibold transition-all duration-300 ease-in-out h-5 px-2 py-0.5 text-xs leading-tight border-blue-300 bg-blue-50 text-blue-600 dark:bg-black dark:text-white dark:border-black">
                      {data.tipo}
                    </span>
                  </div>
                </div>
                <span className="text-xs pl-[52px] text-gray-500">
                  {formatDistanceToNow(new Date(data.fecha), {
                    addSuffix: false,
                  })}
                </span>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="program"></TabsContent>
          <TabsContent value="confirm"></TabsContent>
        </Tabs>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
