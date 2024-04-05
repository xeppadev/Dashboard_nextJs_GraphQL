import {
    Card,
   CardContent,    
  } from "@/components/ui/card";
  import Image from "next/image";
  import { MaterialSymbolsStoreRounded, IconoirStarSolid } from "@/app/lib/icons";
  import { EstadisticWebDto } from "@/src/generated/graphql";

  export function PuntuacionUnidad({ data }: { data: EstadisticWebDto}) {  
    return (
        <Card className="overflow-hidden flex flex-row items-center   ">
        <CardContent className=" justify-between items-center w-4/6  py-6 ">
          <div className="flex items-start flex-col space-y-4 ">
            <p className="text-[15px] font-medium">
              Puntuacion Unidad Vehicular
            </p>
            <div className="flex flex-row items-center space-x-1  dark:bg-card dark:px-0 font-semibold text-sm   pt-1 max-w-fit rounded-lg">
              <IconoirStarSolid className="text-[#ffab00] w-[30px] h-[30px] " />

              <span className="text-2xl ">{data.puntaje}</span>
              <span className="text-lg ">/10</span>
            </div>
            <div className="flex-row flex space-x-1 items-center">
              <div className="rounded-full p-1 bg-freelance">
                <MaterialSymbolsStoreRounded className="text-[#2563EB]" />
              </div>
              <div className="flex-row flew space-x-1">
                <span className="text-[14px] text-gray-500 ">
                  {data.cliente ? data.cliente : "sin datos"}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
        <Image
          src="/icons/camioneta.png"
          className=""
          width={120}
          height={100}
          alt="Picture of the author"          
        />
      </Card>
    );
    }