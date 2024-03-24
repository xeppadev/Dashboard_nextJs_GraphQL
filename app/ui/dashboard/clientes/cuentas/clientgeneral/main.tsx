"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { AlertDialogDemo } from "./dialogdelete";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {FormularioChange} from "./formuCambiarDatos";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ClienteDto } from "@/src/generated/graphql";
export default function Main({ data }: { data: ClienteDto }) {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-5 ">
      <Card className="flex flex-col justify-between bg-background  lg:w-[75%]    xl:w-1/4">
        <CardHeader className=" m-2 pr-3 pt-3  ">
          <h3 className="ml-auto  text-green-500 bg-active-green font-semibold text-sm  px-1.5 py-1 max-w-fit rounded-md">
            Activo
          </h3>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4 pt-5 flex-grow">
          <div className=" rounded-full p-1.5">
            <Avatar className="h-24 w-24  dark:bg-card  ">
              <AvatarImage
                src="https://img.icons8.com/color/96/engineer.png"
                alt="Avatar"
              />
              <AvatarFallback />
            </Avatar>
          </div>
          <CardTitle className="whitespace-nowrap  ">
            {data.nombreCliente}
          </CardTitle>
          <Badge className="text-xs dark:text-white">id: {data._id}</Badge>
        </CardContent>

        <CardFooter className="flex flex-col justify-center space-y-10 ">
          <div className="flex flex-row space-x-1 border rounded-xl p-3 items-center ">
            <div className="space-y-1">
              <CardTitle className="text-sm ">Desactivar</CardTitle>
              <CardDescription className="text-sm">
                Inabilita la cuenta de este cliente
              </CardDescription>
            </div>
            <Switch id="airplane-mode" />
          </div>
          <AlertDialogDemo buttonText="Eliminar Cuenta" />
        </CardFooter>
      </Card>
      <Card className=" bg-background  lg:w-[75%]">
        <CardHeader className="pb-2 m-2">
          <CardTitle> Datos del Cliente</CardTitle>
        </CardHeader>
        <CardContent>
          <FormularioChange  data={data}/>
          
        </CardContent>
      </Card>
    </div>
  );
}
