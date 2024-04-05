import React from "react";
import TabsAccount from "@/app/ui/dashboard/clientes/cuentas/genertal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SolarPenBold } from "@/app/lib/icons";

const Page = ({ params }: { params?: { id?: string } }) => {
  const id = params?.id;
  return (
    <div className="flex flex-col items-stretch w-full sm:w-auto">
      <div className="flex   items-center justify-between lg:container">
        <h2 className="  text-3xl  font-bold ">Cuenta</h2>
        <div className="flex items-center ml-4">
          <Link href={`/dashboard/clientes/registrar_clientes`}>
            <Button className="pr-4 pl-4 py-5 text-sm font-semibold rounded-xl dark:text-foreground">
            <SolarPenBold className="mr-2 rounded-lg w-6 h-6"  />
              Agregar
            </Button>
          </Link>
        </div>
      </div>
      <TabsAccount user={id} />
    </div>
  );
};

export default Page;
