import React from "react";
import { DataTable } from "@/app/ui/components/data-table";
import { columns } from "../document/columns";
import { data } from "../document/data/datosfech";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
// import CalendarComponent from "../../clientes/cuentas/clientContratos/calendar";
import { ScrollAreaDemo } from "./scrollproveedor";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Facturas() {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 ">
      <Card className="flex flex-col sticky top-0 left-0  justify-between bg-background h-full  w-3/4 xl:w-1/4 ">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Filtrar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <Input placeholder="Buscar" className="w-full h-12" />
          <CardTitle className="text-gray-500">Fecha Registro</CardTitle>
          {/* <CalendarComponent 
          classname={"w-full"}
          descripcion={"Fecha Inicio"}
          /> */}
          <CardTitle className="text-gray-500">Fecha Vencimiento</CardTitle>
          {/* <CalendarComponent 
          classname={"w-full"}
          descripcion={"Fecha Final"}
          /> */}
          <CardTitle className="text-gray-500">Proveedor</CardTitle>
          <ScrollAreaDemo />
        </CardContent>

        <CardFooter className="flex flex-col  space-y-5 ">
          <div className="flex items-center mr-auto  space-x-2">
            <Switch id="contract" />
            <Label htmlFor="contract">Facturas activos</Label>
          </div>
          <div className="flex items-center mr-auto space-x-2">
            <Switch id="group" />
            <Label htmlFor="group">Todos las Facturas</Label>
          </div>
        </CardFooter>
      </Card>
      <div className=" px-2  w-3/4 space-y-8 ">
        <h3 className="text-2xl font-bold">Informacion de Facturas</h3>
        <div className="grid grid-cols-3 gap-4 ">
          <Card className="p-5">
            <div className="flex items-center space-x-4">
              <Avatar className="bg-active-green h-[52px] w-[51px] flex items-center justify-center">
                <AvatarImage
                  className="w-1/2 h-1/2"
                  src="https://api.iconify.design/solar/file-check-bold-duotone.svg?color=%2316a34a"
                  alt="Avatar"
                />
                <AvatarFallback />
              </Avatar>

              <CardContent className="space-y-1 py-1 px-1 ">
                <CardTitle>3 Facturas</CardTitle>
                <CardDescription>Activas</CardDescription>
              </CardContent>
            </div>
          </Card>
          <Card className="  p-5">
            <div className="flex items-center space-x-4">
              <Avatar className="bg-paused h-[52px] w-[51px] flex items-center justify-center">
                <AvatarImage
                  className="w-1/2 h-1/2"
                  src="https://api.iconify.design/solar/clock-circle-bold-duotone.svg?color=%23f79009"
                  alt="Avatar"
                />
                <AvatarFallback />
              </Avatar>

              <CardContent className="space-y-1 py-1 px-1 ">
                <CardTitle>2 Facturas</CardTitle>
                <CardDescription>Pendientes</CardDescription>
              </CardContent>
            </div>
          </Card>
          <Card className="  p-5">
            <div className="flex items-center space-x-4">
              <Avatar className="bg-inactive-red-2 h-[52px] w-[51px] flex items-center justify-center">
                <AvatarImage
                  className="w-1/2 h-1/2"
                  src="https://api.iconify.design/solar/file-remove-bold-duotone.svg?color=%23e11d48"
                  alt="Avatar"
                />
                <AvatarFallback />
              </Avatar>

              <CardContent className="space-y-1 py-1 px-1 ">
                <CardTitle>2 Facturas</CardTitle>
                <CardDescription>Canceladas</CardDescription>
              </CardContent>
            </div>
          </Card>
        </div>

        <DataTable columns={columns} data={data} showHeader={false} />
      </div>
    </div>
  );
}
