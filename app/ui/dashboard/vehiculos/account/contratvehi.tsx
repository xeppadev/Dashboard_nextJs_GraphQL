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
export default function ContratoVehiculo({ user }: { user?: string }) {
  return (
    <div className="flex  xl:flex-col space-y-4 xl:space-y-4  ">
     
     
      <Card className=" bg-background  lg:w-full">
        <CardHeader className="pb-2 m-2">
          <CardTitle > Contrato con el dueño de la Unidad </CardTitle>
        </CardHeader>
        <CardContent>
          <CarForm
            fields={[
              {
                name: "personName",
                label: "Propietario del Vehiculo",
                placeholder: "Ingrese el nuevo nombre del propietario",

                className: "w-full",
              },
              {
                name: "startDate",
                label: "Fin del Contrato",
                placeholder: "fecha de fin de contrato actual",

                className: "w-full pt-3",
              },
              {
                name: "endDate",
                label: "Fin del Contrato",
                placeholder: "fecha de fin de contrato actual",

                className: "w-full pt-3",
              },
             
              {
                name: "pagoal",
                label: "Pago de Alquiler del Vehiculo",
                placeholder: "Ingrese el costo de alquiler",

                className: "w-full ",
              },
              
            ]}
            textarea={false}
            buttonText="Guardar "
          />
        </CardContent>
      </Card>
      <Card className=" bg-background  lg:w-full">
        <CardHeader className="pb-2 m-2">
          <CardTitle> Contrato con el Cliente de la Unidad </CardTitle>
        </CardHeader>
        <CardContent>
          <CarForm
            fields={[
              {
                name: "clientvehi",
                label: "Cliente del Vehiculo",
                placeholder: "Ingrese el cliente actual",

                className: "w-full",
              },
              {
                name: "startDate",
                label: "Inicio de Contrato",
                placeholder: "fecha de inicio de contrato actual",

                className: "w-full pt-3",
              },
              {
                name: "endDate",
                label: "Soat Vigente",
                placeholder: "fecha de fin de contrato actual",

                className: "w-full pt-3",
              },
             
              {
                name: "pagocli",
                label: "Pago Alquiler del Cliente actual",
                placeholder: "Ingrese el pago del cliente actual",

                className: "w-full ",
              },
              
            ]}
            textarea={false}
            buttonText="Guardar "
          />
        </CardContent>
      </Card>
    </div>
  );
}
