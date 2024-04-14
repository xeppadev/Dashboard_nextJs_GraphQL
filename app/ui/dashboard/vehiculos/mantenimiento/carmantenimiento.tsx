import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MantenimientoInfoDto } from "@/src/generated/graphql";
import { format } from "date-fns";
import { da, es } from "date-fns/locale";

export default function Cardmantenimiento({
  data,
}: {
  data: MantenimientoInfoDto;
}) {
  return (
    <Card className="flex flex-col justify-between bg-background  lg:w-[75%] pt-10  space-y-4 xl:w-1/4">
      <CardContent className="flex flex-col items-center space-y-4  flex-grow">
        <div className=" rounded-full p-1.5">
          <Avatar className="bg-freelance h-[54px] w-[54px] flex items-center justify-center">
            <AvatarImage
              className="w-[75%] h-[75%]"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2.4em' height='2.4em' viewBox='0 0 20 20'%3E%3Cpath fill='%232970ff' d='M6 4.5V6H4a2 2 0 0 0-2 2v2h4v-.5a.5.5 0 0 1 1 0v.5h6v-.5a.5.5 0 0 1 1 0v.5h4.003V8a2 2 0 0 0-2-2H14V4.5A1.5 1.5 0 0 0 12.5 3h-5A1.5 1.5 0 0 0 6 4.5M7.5 4h5a.5.5 0 0 1 .5.5V6H7V4.5a.5.5 0 0 1 .5-.5m10.503 7H14v.5a.5.5 0 1 1-1 0V11H7v.5a.5.5 0 0 1-1 0V11H2v4a2 2 0 0 0 2 2h12.003a2 2 0 0 0 2-2z'/%3E%3C/svg%3E"
              alt="Avatar"
            />
            <AvatarFallback />
          </Avatar>
        </div>
        <CardTitle className="whitespace-nowrap overflow-hidden font-semibold ">
          {data.tipo}
        </CardTitle>
        <Badge className="text-xs dark:text-white">Placa: {data.placa}</Badge>

        <div className="space-y-3 flex flex-col items-start w-full pt-6 ">
          <div className="flex flex-row items-center space-x-2">
            <CardTitle className="text-sm ">Estado: </CardTitle>
            <span
              className={`text-sm font-semibold px-1.5 py-1 max-w-fit rounded-md ${
                data.estado === "completado" || data.estado === "aprobado"
                  ? "text-green-500 bg-active-green"
                  : data.estado === "pendiente" || data.estado === "revision"
                  ? "text-[#f79009] bg-paused"
                  : data.estado === "programado" ?
                  "text-[#2970FF] bg-freelance" : "text-[#E11D48] bg-inactive-red"
              } `}
            >
              {data.estado ? data.estado.charAt(0).toUpperCase() + data.estado.slice(1) : "sin datos"}
            </span>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <CardTitle className="text-sm ">Fecha Programacion: </CardTitle>
            <CardDescription className="text-sm font-medium">
              {data.fecha
                ? format(new Date(data.fecha), "PPP", { locale: es })
                : "sin datos"}
            </CardDescription>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <CardTitle className="text-sm ">Fecha Inicio: </CardTitle>
            <CardDescription className="text-sm font-medium">
              {data.fechaInicio
                ? format(new Date(data.fechaInicio), "PPP", { locale: es })
                : "sin datos"}
            </CardDescription>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <CardTitle className="text-sm ">Fecha Termino: </CardTitle>
            <CardDescription className="text-sm font-medium">
              {data.fechaFin
                ? format(new Date(data.fechaFin), "PPP", { locale: es })
                : "sin datos"}
            </CardDescription>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <CardTitle className="text-sm ">Repuestos Usados: </CardTitle>
            <CardDescription className="text-sm font-medium">
              {data.repuestos?.length} respuestos usados
            </CardDescription>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <CardTitle className="text-sm ">KmPrevio: </CardTitle>
            <CardDescription className="text-sm font-medium">
              {`${data.kmPrevio} km` || "sin datos"}
            </CardDescription>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <CardTitle className="text-sm ">KmMedido: </CardTitle>
            <CardDescription className="text-sm font-medium">
              {`${data.kmMedido} km` || "sin datos"}
            </CardDescription>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <CardTitle className="text-sm ">Vigencia Soat: </CardTitle>
            <CardDescription className="text-sm font-medium">
              {data.fechaSoat
                ? format(new Date(data.fechaSoat), "PPP", { locale: es })
                : "sin datos"}
            </CardDescription>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <CardTitle className="text-sm ">Mecanico: </CardTitle>
            <CardDescription className="text-sm font-medium">
              {data.tecnico}
            </CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
