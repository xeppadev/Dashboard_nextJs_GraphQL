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
import { es } from "date-fns/locale";

export default function Cardmantenimiento({
  data,
}: {
  data: MantenimientoInfoDto;
}) {
  return (
    <Card className="flex flex-col justify-between bg-background  lg:w-[75%]  space-y-6 xl:w-1/4">
      <CardHeader className=" m-2 pr-3 pt-3  "></CardHeader>
      <CardContent className="flex flex-col items-center space-y-4 pt-5 flex-grow">
        <div className=" rounded-full p-1.5">
          <Avatar className="bg-freelance h-[48px] w-[48px] flex items-center justify-center">
            <AvatarImage
              className="w-[70%] h-[70%]"
              src="https://api.iconify.design/mingcute/tool-fill.svg?color=%232970ff&width=50&height=50"
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
            <span className=" text-green-500 bg-active-green font-semibold text-sm  px-1.5 py-1 max-w-fit rounded-md">
              {data.estado}
            </span>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <CardTitle className="text-sm ">Fecha Programacion: </CardTitle>
            <CardDescription className="text-sm font-medium">
              {format(new Date(data.fecha), "PPP", { locale: es })}
            </CardDescription>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <CardTitle className="text-sm ">Repuestos Usados: </CardTitle>
            <CardDescription className="text-sm font-medium">
              {data.repuestos?.length} respuestos usados
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
