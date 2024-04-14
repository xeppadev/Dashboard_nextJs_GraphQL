import React from "react";
import { DataTable } from "@/app/ui/components/data-table";
import { columns } from "./columns";
import { MantenimientoInfoDto } from "@/src/generated/graphql";




export default function UserRepuestos({ data }: { data: MantenimientoInfoDto }) {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:w-3/4  pb-6 ">
      <div className=" px-2 pb-7  w-full space-y-4 ">
        <h3 className="text-normal font-medium">Respuestos Cambiados: </h3>
        <DataTable columns={columns} data={data.repuestos || []} showHeader={false} />
      </div>
    </div>
  );
}
