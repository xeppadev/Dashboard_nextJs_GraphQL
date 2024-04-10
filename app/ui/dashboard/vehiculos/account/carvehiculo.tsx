import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { AlertDialogDemo } from "../../clientes/cuentas/clientgeneral/dialogdelete";
import { CarInfo } from "@/src/generated/graphql";
import { PhStarFill } from "@/app/lib/icons";

export default function CardVehiculo({ data }: { data: CarInfo }) {
  return (
    <Card className="flex flex-col justify-between bg-background  lg:w-[75%]  xl:w-1/4 ">
      <CardHeader className=" m-2 pr-3 pt-3   ">
        <div className="ml-auto flex flex-row items-center space-x-1  bg-[#fff5cc] dark:bg-card dark:px-0 font-semibold text-sm  px-1.5 py-1 max-w-fit rounded-lg">
          <PhStarFill className="w-5 h-5 text-[#ffab00] " />

          <span className="text-sm ">
            {Number.isInteger(data.Puntaje)
              ? `${data.Puntaje}.0`
              : data.Puntaje}{" "}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4 pt-5 flex-grow">
        <div className=" rounded-full p-1.5">
          <Image
            src="/icons/camioneta.png"
            width={85}
            height={85}
            alt="Picture of the author"
          />
        </div>
        <CardTitle className="whitespace-nowrap overflow-hidden font-semibold ">
          Placa: {data.placa}
        </CardTitle>
        <Badge className="text-xs dark:text-white">id: {data.id}</Badge>
      </CardContent>

      <CardFooter className="flex flex-col justify-center space-y-10 ">
        {/* <div className="flex flex-row space-x-1 border rounded-xl p-3 items-center w-full">
          <div className="space-y-1 flex-row items-center w-full justify-between flex">
            <div className="space-y-2">
              <CardTitle className="text-sm ">Cliente:</CardTitle>
              <CardDescription className="text-sm font-medium">
                {data.cliente}
              </CardDescription>
            </div>
            <div>
              <h3 className="ml-auto  text-green-500 bg-active-green font-semibold text-sm  px-1.5 py-1 max-w-fit rounded-md">
                Activo
              </h3>
            </div>
          </div>
        </div> */}
        <AlertDialogDemo buttonText="Eliminar Vehiculo" />
      </CardFooter>
    </Card>
  );
}
