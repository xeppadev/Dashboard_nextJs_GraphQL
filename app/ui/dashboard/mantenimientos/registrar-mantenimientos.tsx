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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import MantenimienForm from "./formul-mantenimientos";
import { Car, Plus } from "lucide-react";
import CalendarComponent from "../clientes/cuentas/clientdocument/calendar";
import { ScrollProduct } from "./scroll-mantenimientos";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
export default function Facturas() {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 ">
      <Card className="flex flex-col 2xl:sticky top-0 left-0  justify-between bg-background h-full  w-full xl:w-1/4 ">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Inventario</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <CardTitle className="text-gray-500">Filtrar Producto</CardTitle>
          <Input placeholder="Buscar" className="w-full h-12" />
          <CardTitle className="text-gray-500">Fecha de Operacion</CardTitle>
          <CalendarComponent
            classname={"w-full "}
            descripcion={"Ingresar una fecha"}
          />
          <CardTitle className="text-gray-500">Proveedor</CardTitle>
          <ScrollProduct />
        </CardContent>

        <CardFooter className="flex flex-col  space-y-5 ">
          <div className="flex items-center w-full space-x-2  justify-between">
            <Container className="flex p-0 items-center w-[45%]  pl-2 space-x-3  border-input bg-zinc-50 border-2 dark:bg-[#1c2536] dark:text-nav_item">
              <span className="">Cantidad</span>
              <Input
                placeholder=""
                className=" px-2 border-0 border-l-2 rounded-none border-input rounded-r-lg h-9  bg-white dark:bg-card dark:text-nav_item  no-focus-outline "
                defaultValue={1}
                min="1"
                max="20"
                type="number"
              />
            </Container>
            <Button className="pr-3  pl-1 py-5 text-sm font-semibold rounded-xl dark:text-foreground">
              <Plus className="ml-1  rounded-lg" />
              Agregar
            </Button>
          </div>
        </CardFooter>
      </Card>

      <div className=" px-1 flex-col flex  w-full  2xl:w-3/4  space-y-2 ">
        <div className="flex flex-row space-x-4 ">
        <Card className="p-3  w-1/4 ml-auto">
          <div className="flex items-center space-x-3">
            <Avatar className="bg-freelance h-[53px] w-[53px] flex items-center justify-center">
              <AvatarImage
                className="w-[52%] h-[52%]"
                src="https://api.iconify.design/solar/money-bag-bold-duotone.svg?color=%232970ff&width=28&height=28"
                alt="Avatar"
              />
              <AvatarFallback />
            </Avatar>

            <CardContent className=" p-1 space-y-1">
              <CardTitle>Total</CardTitle>
              <CardDescription className="text-sm">4 repuestos</CardDescription>
              <CardTitle className="text-sm">S/.2300.00</CardTitle>
            </CardContent>
          </div>
        </Card>
        <Card className="p-3 w-1/4  ml-auto">
          <div className="flex items-center space-x-3">
            <Avatar className="bg-active-green h-[53px] w-[53px] flex items-center justify-center">
              <AvatarImage
                className="w-[62%] h-[63%]"
                src="https://api.iconify.design/uim/check-circle.svg?color=%2316a34a&width=28&height=28"
                alt="Avatar"
              />
              <AvatarFallback />
            </Avatar>

            <CardContent className=" p-1 space-y-1">
              <CardTitle>Mantenimientos</CardTitle>
              <CardDescription className="text-sm">Completos</CardDescription>
              <CardTitle className="text-sm">4/5 realizados</CardTitle>
            </CardContent>
          </div>
        </Card>
        <Card className="p-3  w-1/4 ml-auto">
          <div className="flex items-center space-x-3">
            <Avatar className="bg-paused  h-[53px] w-[53px] flex items-center justify-center">
              <AvatarImage
                className="w-[62%] h-[63%]"
                src="https://api.iconify.design/solar/danger-circle-bold-duotone.svg?color=%23f79009&width=28&height=28"
                alt="Avatar"
              />
              <AvatarFallback />
            </Avatar>
          
            <CardContent className=" p-1 space-y-1">
              <CardTitle>Mantenimientos</CardTitle>
              <CardDescription className="text-sm">Pendientes</CardDescription>
              <CardTitle className="text-sm">2 Aplazadas</CardTitle>
            </CardContent>
          </div>
        </Card>
        <Card className="p-3  w-1/4 ml-auto">
          <div className="flex items-center space-x-3">
            <Avatar className="bg-inactive-red-2 h-[53px] w-[53px] flex items-center justify-center">
              <AvatarImage
                className="w-[62%] h-[63%]"
                src="https://api.iconify.design/solar/close-circle-bold-duotone.svg?color=%23e11d48&width=28&height=28"
                alt="Avatar"
              />
              <AvatarFallback />
            </Avatar>

            <CardContent className=" p-1 space-y-1">
              <CardTitle>Mantenimientos</CardTitle>
              <CardDescription className="text-sm">Cancelados</CardDescription>
              <CardTitle className="text-sm">2 Anulados</CardTitle>
            </CardContent>
          </div>
        </Card>
        </div>
        <h3 className="text-xl font-bold">Repuestos Usados(4)</h3>

        <div className="space-y-2">
          {[...Array(4)].map((_, index) => (
            <>
              <div className="flex flex-col  " key={index}>
                <Card className="p-3 flex flex-row items-center justify-between ">
                  <div className="flex items-center space-x-3">
                    <Avatar className="bg-freelance h-[48px] w-[48px] flex items-center justify-center">
                      <AvatarImage
                        className="w-[50%] h-[58%]"
                        src="https://api.iconify.design/mingcute/tool-fill.svg?color=%232970ff&width=26&height=26"
                        alt="Avatar"
                      />
                      <AvatarFallback />
                    </Avatar>

                    <CardContent className=" py-1 px-1 ">
                      <CardTitle className="text-[15px] font-medium">
                        Luz de Freno
                      </CardTitle>
                      <CardDescription className="font-medium">
                        Naover
                      </CardDescription>
                    </CardContent>
                  </div>
                  <CardContent className="space-y-1 py-1 px-1 ">
                    <CardTitle className="text-sm">Costo</CardTitle>
                    <CardDescription>S/.250</CardDescription>
                  </CardContent>
                  <CardContent className="space-y-1 py-1 px-1 ">
                    <CardTitle className="text-sm">Fecha</CardTitle>
                    <CardDescription>12/11/2024</CardDescription>
                  </CardContent>
                  <CardContent className="space-y-1 py-1 px-1 ">
                    <CardTitle className="text-sm">Cantidad</CardTitle>
                    <CardDescription className="flex justify-center">
                      2
                    </CardDescription>
                  </CardContent>
                  <CardContent className="space-y-1 py-1 px-1 ">
                    <button
                      type="button"
                      onClick={() => {}}
                      className=" p-3  rounded-full hover:bg-gray-50 dark:hover:bg-background hover:rounded-full "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        className="text-[#6c737f]"
                      >
                        <path
                          fill="#6c737f"
                          fillRule="evenodd"
                          d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </CardContent>
                </Card>
              </div>
            </>
          ))}
        </div>
        <div className="space-y-3 pt-3">
          <h3 className="text-xl font-bold">Informacion Adicional</h3>
          <MantenimienForm  buttonText="Registrar" />
        </div>
      </div>
    </div>
  );
}
