import React from "react";
import { DataTable } from "../../../../components/data-table";
import { columns } from "../../../../components/columns";
import { ClienteDto } from "@/src/generated/graphql";

export default function UserDocumentos({ data }: { data: ClienteDto }) {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 ">
      <div className=" px-2  w-full space-y-8 ">
        <h3 className="text-xl font-bold">Documentos {data.nombreCliente}</h3>
        <DataTable
          columns={columns}
          data={data.documentos || []}
          
          paginationComponet={false}
          showHeader={false}
          paginationComponet2={true}
          type={"table"}
        />
      </div>
    </div>
  );
}
