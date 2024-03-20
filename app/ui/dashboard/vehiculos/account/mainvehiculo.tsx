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

import { CarForm } from "./formularcar";

import CardVehiculo from "./carvehiculo";
export default function Main({ user }: { user?: string }) {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-5 ">
      <CardVehiculo user={user} />
     
      <Card className=" bg-background  lg:w-[75%]">
        <CardHeader className="pb-2 m-2">
          <CardTitle> Datos de la Unidad </CardTitle>
        </CardHeader>
        <CardContent>
          <CarForm
            fields={[
              {
                name: "licensePlate",
                label: "Placa del Vehiculo",
                placeholder: "Ingresar placa del vehiculo",

                className: "w-full",
              },
              {
                name: "mileage",
                label: "Ingresar Kilometraje  Actual",
                placeholder: "Ingresar Kilometraje Actual",

                className: "w-full",
              },
              {
                name: " yesNoSelect",
                label: "Soat Vigente",
                placeholder: "Seleccionar una opcion",

                className: "w-full",
              },
             
              {
                name: "expirationDate",
                label: "Fecha de Vencimiento",
                placeholder: "Ingresar fecha actual",

                className: "w-full pt-3",
              },
              
            ]}
            textarea={true}

            buttonText="Guardar Cambios"
            space="pt-4"
          />
        </CardContent>
      </Card>
    </div>
  );
}
