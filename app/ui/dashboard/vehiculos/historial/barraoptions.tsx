import React from "react";
import {
  MingcuteCarFillDualtone,
  SolarCard2BoldDuotone,
  SolarKeySquare2BoldDuotone,
  SolarFileTextBoldDuotone,
  MileageDuotone,
  LetsIconsTimeDuotone,
} from "@/app/lib/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { format } from "date-fns";
import { historialMantenimientosModel } from "@/src/models/historialMantenimientos";

export default async function BarraOptions({
  query,
  currentPage,
}: {
  query?: string;
  currentPage?: Number;
}) {
  const { data, error } = await historialMantenimientosModel(query || "");

  return (
    <Card className=" flex-inline flex 2xl:p-6 p-4  2xl:space-x-5 space-x-1 overflow-x-auto">
      <div className="flex items-center 2xl:space-x-3 pr-2 space-x-1 justify-center w-full min-w-[160px]   border-r border-dashed ">
        <MingcuteCarFillDualtone className="rounded-full px-2   bg-freelance text-[#2970FF] w-[62px] h-[61px]" />
        <CardContent className="space-y-0.5 py-1 px-0.5 flex-col justify-center">
          <CardTitle className="text-sm 2xl:text-[1rem] ">
            Placa: {data?.placa || "PP-PPP"}
          </CardTitle>
          <CardDescription>{data?.cliente || "sin datos"} </CardDescription>
        </CardContent>
      </div>

      <div className="flex items-center  2xl:space-x-4 space-x-1 justify-center min-w-[150px] w-full   border-r border-dashed">
        <SolarCard2BoldDuotone className="rounded-full p-2.5 bg-active-green text-[#16A34A] w-[62px] h-[62px]" />
        <CardContent className="space-y-0.5 py-1 px-1 ">
          <CardTitle className="text-sm 2xl:text-[1rem]">
            Vigencia SOAT
          </CardTitle>
          <CardDescription>
            {data?.fechaSoat
              ? format(new Date(data?.fechaSoat), "dd MMM yyyy")
              : "DD MMM YYYY"}
          </CardDescription>
        </CardContent>
      </div>
      <div className="flex items-center  2xl:space-x-4  space-x-1 justify-center min-w-[160px] w-full   border-r border-dashed">
        <SolarKeySquare2BoldDuotone className="rounded-full lg:p-2.5  p-1.5 bg-paused text-[#f79009] w-[68px] h-[60px]" />
        <CardContent className="space-y-0.5 py-1 px-1 ">
          <CardTitle className="text-sm 2xl:text-[1rem] ">
            Ultima Revision Tecnica
          </CardTitle>
          <CardDescription>
            {data?.ultimaRevision
              ? format(new Date(data?.ultimaRevision), "dd MMM yyyy")
              : "DD MMM YYYY"}
          </CardDescription>
        </CardContent>
      </div>
      <div className="flex items-center  2xl:space-x-4  space-x-1 justify-center w-full min-w-[160px]   border-r border-dashed">
        <SolarFileTextBoldDuotone className="rounded-full p-3 bg-inactive-red text-[#E11D48] w-[60px] h-[60px]" />
        <CardContent className="space-y-0.5 py-1 px-1 ">
          <CardTitle className="text-sm 2xl:text-[1rem] ">
            Vigencia Contrato
          </CardTitle>
          <CardDescription>
            {data?.vigenciaContrato
              ? format(new Date(data?.vigenciaContrato), "dd MMM yyyy")
              : "DD MMM YYYY"}
          </CardDescription>
        </CardContent>
      </div>
      <div className="flex items-center  2xl:space-x-3  space-x-1 justify-center w-full min-w-[150px]    border-dashed">
        <MileageDuotone className="rounded-full p-2 bg-time text-[#6366f1] w-[60px] h-[60px]" />

        <CardContent className="space-y-0.5 py-1 px-1 ">
          <CardTitle className="text-sm 2xl:text-[1rem] ">
            Kilometraje Actual
          </CardTitle>
          <CardDescription>{`${data?.kmActual} km` || "sin datos"}</CardDescription>
        </CardContent>
      </div>
      <div className="flex items-center justify-center 2xl:space-x-3 min-w-[150px]  space-x-1 w-full  border-l border-dashed">
        <LetsIconsTimeDuotone className="rounded-full p-1 bg-gris text-[#212b36] w-[58px] h-[58px]" />
        <CardContent className="space-y-0.5 py-1 px-1 ">
          <CardTitle className="text-sm 2xl:text-[1rem] ">
            Operatividad
          </CardTitle>
          <CardDescription>
            {data?.operatividad ? `${Math.round(data?.operatividad * 100)} %` : "sin datos"}
          </CardDescription>
        </CardContent>
      </div>
    </Card>
  );
}
