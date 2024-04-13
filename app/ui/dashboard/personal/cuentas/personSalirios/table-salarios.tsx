import React from "react";
import { DataTable } from "../../../../components/data-table";
import { columns } from "./column";
import { PersonalDto } from "@/src/generated/graphql";

export default function UserSalarios({ data }: { data: PersonalDto }) {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4  pb-6">
      <div className=" px-2  w-full space-y-8 ">
        <h3 className="text-xl font-bold">Salarios {data.nombre}</h3>
        <DataTable
          columns={columns}
          data={data.salarioFecha || []}
          showHeader={false}
        />
      </div>
    </div>
  );
}
