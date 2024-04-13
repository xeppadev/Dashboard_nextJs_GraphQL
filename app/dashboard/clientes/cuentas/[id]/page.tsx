import React from "react";
import TabsAccount from "@/app/ui/dashboard/clientes/cuentas/genertal";
import { AgregarOpciones } from "@/app/ui/dashboard/clientes/cuentas/dialog-edit";


export default async function Page({ params }: { params?: { id?: string } }) {
  const id = params?.id;
 
  return (
    <div className="flex flex-col items-stretch w-full sm:w-auto">
      <div className="flex   items-center justify-between lg:container">
        <h2 className="  text-3xl  font-bold ">Cuenta</h2>
        <div className="flex items-center ml-4">
          <AgregarOpciones id={id} />
        </div>
      </div>
      <TabsAccount user={id} />
    </div>
  );
}
