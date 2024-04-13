import React from "react";
import { DataTable } from "../../../../components/data-table";
import { columns } from "./columns";
import { Cliente2Dto } from "@/src/generated/graphql";

export default function UserDocument({ data }: { data:  Cliente2Dto }) {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 pb-6">
      <div className=" px-2  w-full space-y-8 ">
        <h3 className="text-xl font-bold">Contratos {data.nombreCliente}</h3>
        <DataTable
          columns={columns}
          data={data.contratos || []}
          showHeader={false}
        />
      </div>
    </div>
  );
}
