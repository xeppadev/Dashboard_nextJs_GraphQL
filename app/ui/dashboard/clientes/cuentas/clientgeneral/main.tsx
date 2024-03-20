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
import AccountForm from "../../registrar/formularidocument";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
export default function Main({ user }: { user?: string }) {
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
          <CardTitle className="whitespace-nowrap overflow-hidden ">
            Minera Barrick Peru SAC
          </CardTitle>
          <Badge className="text-xs dark:text-white">id: {user}</Badge>
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
          <AccountForm
            fields={[
              {
                name: "name",
                label: "Nombre del Cliente",
                placeholder: "Nombre",

                className: "w-full",
              },
              {
                name: "ruc",
                label: "Numero de RUC",
                placeholder: "RUC",

                className: "w-full",
              },
              {
                name: "address",
                label: "Direccion de Cliente",
                placeholder: "Direccion",

                className: "w-full",
              },
              {
                name: "contacto",
                label: "Nombre de Contacto",
                placeholder: "Nombre de Contacto",

                className: "w-full",
              },
              {
                name: "numero",
                label: "Numero de Contacto",
                placeholder: "Numero de Contacto",

                className: "w-full",
              },
              {
                name: "email",
                label: "Correo de Contacto",
                placeholder: "Email",

                className: "w-full",
              },
              {
                name: "dob",
                label: "Fecha de Cambio",
                placeholder: "Elegir una fecha",
                className: "w-full",
              },
            ]}
            buttonText="Guardar Cambios"
          />
        </CardContent>
      </Card>
    </div>
  );
}
