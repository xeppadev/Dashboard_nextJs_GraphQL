"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabinline";
import { Container } from "@/components/ui/container";
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
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Modal() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="  relative   w-fit h-fit rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 24 24"
            className="text-[#637381]"
          >
            <path
              fill="currentColor"
              d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.794 25.794 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723a4.393 4.393 0 0 0 .693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7Z"
              opacity=".5"
            />
            <path
              fill="currentColor"
              d="M7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0Z"
            />
          </svg>
          <span className="absolute bottom-3 left-3  w-4 h-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
            5
          </span>
        </button>
      </SheetTrigger>
      <SheetContent className="backdrop-blur-2xl bg-white/30 px-0 dark:bg-[#0B0F18]/50 ">
        <SheetHeader className="px-5">
          <SheetTitle>Notificaciones</SheetTitle>
        </SheetHeader>
        <Tabs defaultValue="user" className="w-full  my-5    ">
          <TabsList className="inline-flex lg:space-x-8 space-x-2 pt-3 px-5 border-y w-full ">
            <TabsTrigger className="space-x-[5px]" value="add">
              {" "}
              <span>Todos </span>
              <span className="py-[3px] px-[6px] bg-black rounded-md text-white">
                {" "}
                22
              </span>
            </TabsTrigger>
            <TabsTrigger className="space-x-[5px]" value="program">
              {" "}
              <span>Revisiones </span>
              <span className="py-[3px] px-[6px] bg-[#2970FF]/20 rounded-md text-[#2970FF]">
                {" "}
                15
              </span>
            </TabsTrigger>
            <TabsTrigger className="space-x-[5px]" value="confirm">
              {" "}
              <span>Contratos </span>
              <span className="py-[3px] px-[6px] bg-active-green rounded-md text-[#16a34a]">
                {" "}
                08
              </span>
            </TabsTrigger>
          </TabsList>

          <TabsContent className="mt-0 " value="add" >
            
            <div className="flex flex-col border-b border-dashed p-5 space-y-2 ">
              <div className="flex flex-row items-center  space-x-3">
                <Avatar className=" h-[39px] w-[39px]    bg-zinc-200   ">
                  <AvatarImage src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e535c5dc67e79290b963f98_peep-92.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ">
                  <span className="text-sm ">
                    {" "}
                    <strong>Cristian Nunez</strong> ha solicitado el uso de 3
                    repuestos{" "}
                  </span>
                </div>
              </div>
              <span className="text-xs pl-[52px] text-gray-500">
                hace 2 horas{" "}
              </span>
              <div className="flex flex-row px-[52px] space-x-3">
                <Button className="rounded-lg" size="sm" variant="black">
                  Aceptar
                </Button>
                <Button className="rounded-lg border" size="sm" variant="ghostSecondary">
                  Rechazar
                </Button>
              </div>
            </div>
            <div className="flex flex-col border-b border-dashed p-5 space-y-2">
              <div className="flex flex-row items-center  space-x-3">
                <Avatar className=" h-[39px] w-[39px]    bg-zinc-200   ">
                  <AvatarImage src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e53578d550b76b873f53c46_peep-51.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ">
                  <span className="text-sm ">
                    {" "}
                    <strong>Luiz Chavez</strong> ha realizado una compra de
                    luces de Freno donde gasto <strong>S/.250</strong>{" "}
                  </span>
                </div>
              </div>
              <span className="text-xs pl-[52px] text-gray-500">
                hace 3 dias{" "}
              </span>
              <div className="flex flex-row pl-[52px] ">
                <Container className="w-full flex flex-row items-center  justify-between   px-2 py-2.5 border-0  space-x-2">
                  <div className=" flex flex-row items-center space-x-1  ">
                    <Image
                      src="/icons/pdf.png"
                      width={42}
                      height={47}
                      alt="Picture of pdf file"
                    />
                    <div className="flex flex-col space-y-0.5 ">
                      <span className="text-sm text-[#111927] dark:text-foreground font-medium truncate ">
                     luces-de-freno.pdf
                      </span>
                      <span className="text-gray-500 text-xs">2.3 mb</span>
                    </div>
                  </div>
                  <Button
                    className="rounded-lg border "
                    size="sm"
                    variant="ghostSecondary"
                  >
                    Descargar
                  </Button>
                </Container>
              </div>
              
            </div>
            <div className="flex flex-col border-b border-dashed p-5 space-y-2">
              <div className="flex flex-row items-center  space-x-3">
                <Avatar className=" h-[39px] w-[39px]    bg-zinc-200   ">
                  <AvatarImage src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e535a83d3992372c25556b9_peep-76.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ">
                  <span className="text-sm ">
                    {" "}
                    <strong>Jesus Paredes</strong> ha realizado el mantenimiento de la unidad <strong>FPG-345</strong>{" "}
                  </span>
                </div>
              </div>
              <span className="text-xs pl-[52px] text-gray-500">
                hace 5 min{" "}
              </span>
              <div className="flex flex-row pl-[52px] ">
                <Container className="w-full flex flex-row items-center  justify-between   px-2 py-2.5 border-0  space-x-2">
                  <div className=" flex flex-row items-center space-x-1  ">
                    <Image
                      src="/icons/imagen.png"
                      width={42}
                      height={47}
                      alt="Picture of pdf file"
                    />
                    <div className="flex flex-col space-y-0.5 ">
                      <span className="text-sm text-[#111927] dark:text-foreground font-medium truncate ">
                     imag-manten.pdf
                      </span>
                      <span className="text-gray-500 text-xs">2.3 mb</span>
                    </div>
                  </div>
                  <Button
                    className="rounded-lg border "
                    size="sm"
                    variant="ghostSecondary"
                  >
                    Descargar
                  </Button>
                </Container>
              </div>
              
            </div>
            <div className="flex flex-col border-b border-dashed p-5 space-y-2">
              <div className="flex flex-row items-center  space-x-3">
                <Avatar className=" h-[39px] w-[39px]    bg-zinc-200   ">
                  <AvatarImage src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e535d68c6b2498a0c2cbf6a_peep-101.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ">
                  <span className="text-sm ">
                    {" "}
                    <strong>Pedro Suarez</strong> ha solicitado el uso de 2
                    repuestos{" "}
                  </span>
                </div>
              </div>
              <span className="text-xs pl-[52px] text-gray-500">
                hace 24 min{" "}
              </span>
              <div className="flex flex-row px-[52px] space-x-3">
                <Button className="rounded-lg" size="sm" variant="black">
                  Aceptar
                </Button>
                <Button className="rounded-lg border" size="sm" variant="ghostSecondary">
                  Rechazar
                </Button>
              </div>
            </div>
            <div className="flex flex-col border-b border-dashed p-5 space-y-2">
              <div className="flex flex-row items-center  space-x-3">
                <Avatar className=" h-[39px] w-[39px]    bg-zinc-200   ">
                  <AvatarImage src="https://img.icons8.com/color/48/signing-a-document.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ">
                  <span className="text-sm ">
                    {" "}
                     La vigencia del contrato de la unidad <strong>FPG-345</strong>{" "}
                     va  expirar en 2 dias
                  </span>
                </div>
              </div>
              <span className="text-xs pl-[52px] text-gray-500">
                hace 24 min{" "}
              </span>
              
            </div>
            <div className="flex flex-col border-b border-dashed p-5 space-y-2 ">
              <div className="flex flex-row items-center  space-x-3">
                <Avatar className=" h-[39px] w-[39px]    bg-zinc-200   ">
                  <AvatarImage src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e535c5dc67e79290b963f98_peep-92.svg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ">
                  <span className="text-sm ">
                    {" "}
                    <strong>Cristian Nunez</strong> ha solicitado el uso de 3
                    repuestos{" "}
                  </span>
                </div>
              </div>
              <span className="text-xs pl-[52px] text-gray-500">
                hace 2 horas{" "}
              </span>
              <div className="flex flex-row px-[52px] space-x-3">
                <Button className="rounded-lg" size="sm" variant="black">
                  Aceptar
                </Button>
                <Button className="rounded-lg border" size="sm" variant="ghostSecondary">
                  Rechazar
                </Button>
              </div>
            </div>
            
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
