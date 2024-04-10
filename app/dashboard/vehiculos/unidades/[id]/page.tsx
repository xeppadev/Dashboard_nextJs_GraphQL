import React from "react";
import TabsVehiculo from "@/app/ui/dashboard/vehiculos/account/tabvehiculo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SolarPenBold } from "@/app/lib/icons";

const Page = ({ params }: { params?: { id?: string } }) => {
  const id = params?.id;
  return (
    <div className="flex flex-col items-stretch w-full sm:w-auto">
      <div className="flex   items-center justify-between lg:container">
        <div className="space-x-4 flex flex-row items-center">
        <h2 className="  text-3xl  font-bold ">Unidad Vehicular</h2>
        </div>
        <div className="flex items-center ml-4">
          <Link href={`/dashboard/clientes/registrar_clientes`}>
            <Button className="pr-4 pl-4 py-5 text-sm font-semibold rounded-xl dark:text-foreground">
            <SolarPenBold className="mr-2 rounded-lg w-6 h-6"  />
              Editar
            </Button>
          </Link>
        </div>
      </div>
      <TabsVehiculo user={id} />
    </div>
  );
};

export default Page;
