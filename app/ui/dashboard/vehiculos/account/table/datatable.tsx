import React from "react";
import { DataTable } from "../../../../components/data-table";
import { columns } from "./columns";

import { CarInfo } from "@/src/generated/graphql";


export default function UserMantenimientos({ data }: { data: CarInfo }) {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 ">
      <div className=" px-2 pb-7  w-full space-y-8 ">
        <h3 className="text-xl font-bold">Mantenimientos Realizados: </h3>
        <DataTable columns={columns} data={data.Mantenimientos || []} showHeader={false} />
      </div>
    </div>
  );
}
