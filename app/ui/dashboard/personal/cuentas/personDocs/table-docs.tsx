import React from "react";
import { DataTable } from "../../../../components/data-table";
import { columns } from "@/app/ui/components/columns";
import { PersonalDto } from "@/src/generated/graphql";

export default function UserDocumentos({ data }: { data: PersonalDto }) {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 pb-6">
      <div className=" px-2  w-full space-y-8 ">
        <h3 className="text-xl font-bold">Documentos {data.nombre}</h3>
        <DataTable
          columns={columns}
          data={data.documentos || []}
          showHeader={false}
        />
      </div>
    </div>
  );
}
