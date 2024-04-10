import React from "react";
import { DataTable } from "../../../../components/data-table";
import { columns } from "../../../../components/columns";
import { MantenimientoInfoDto } from "@/src/generated/graphql";

export default function UserDocumentos({ data }: { data: MantenimientoInfoDto }) {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 pb-6 ">
      <div className=" px-2  w-full space-y-8 ">
        <h3 className="text-xl font-bold">Documentos Placa: {data.placa}</h3>
        <DataTable
          columns={columns}
          data={data.documentos || []}
          showHeader={false}
        />
      </div>
    </div>
  );
}
