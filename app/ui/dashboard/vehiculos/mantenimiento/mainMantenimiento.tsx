
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FormularioChange } from "./formmantenimiento";
import Cardmantenimiento from "./carmantenimiento";
import { MantenimientoInfoDto } from "@/src/generated/graphql";

export default function Main({ data }: { data: MantenimientoInfoDto }) {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-5 pb-6 px-3 pt-2">
      <Cardmantenimiento data={data} />
     
      <Card className=" bg-background  lg:w-[75%]">
        <CardHeader className="pb-2 m-2">
          <CardTitle> Datos del Mantenimiento </CardTitle>
        </CardHeader>
        <CardContent>
          <FormularioChange data={data} />
        </CardContent>
      </Card>
    </div>
  );
}