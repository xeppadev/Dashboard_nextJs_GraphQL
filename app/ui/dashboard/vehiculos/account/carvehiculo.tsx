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

export default function CardVehiculo({ user }: { user?: string }) {
  return (
    <Card className="flex flex-col justify-between bg-background  lg:w-[75%]  xl:w-1/4">
      <CardHeader className=" m-2 pr-3 pt-3   ">
        <div className="ml-auto flex flex-row items-center space-x-1  bg-[#fff5cc] dark:bg-card dark:px-0 font-semibold text-sm  px-1.5 py-1 max-w-fit rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
            className="text-[#ffab00]"
          >
            <path
              fill="currentColor"
              d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"
            />
          </svg>
          <span className="text-sm ">7.8</span>
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
          PLACA: AEH-742
        </CardTitle>
        <Badge className="text-xs dark:text-white">id: {user}</Badge>
      </CardContent>

      <CardFooter className="flex flex-col justify-center space-y-10 ">
        <div className="flex flex-row space-x-1 border rounded-xl p-3 items-center w-full">
          <div className="space-y-1 flex-row items-center w-full justify-between flex">
            <div className="space-y-2">
              <CardTitle className="text-sm ">Cliente:</CardTitle>
              <CardDescription className="text-sm font-medium">
                Minera Barrick Peru SAC
              </CardDescription>
            </div>
            <div>
              <h3 className="ml-auto  text-green-500 bg-active-green font-semibold text-sm  px-1.5 py-1 max-w-fit rounded-md">
                Activo
              </h3>
            </div>
          </div>
        </div>
        <AlertDialogDemo buttonText="Eliminar Vehiculo" />
      </CardFooter>
    </Card>
  );
}
