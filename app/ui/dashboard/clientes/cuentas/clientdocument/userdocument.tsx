import React from "react";
import { DataTable } from "../../../../components/data-table";
import { columns } from "./columns";
import { data } from "./data/datosfetch";

export default function UserDocument({user}: {user?: string}) {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 ">
      
      <div className=" px-2  w-full space-y-8 ">
        <h3 className="text-xl font-bold">Contratos Minera Barrick Peru SAC</h3>
        <DataTable
          columns={columns}
          data={data}
          toolBarComponet2={false}
          paginationComponet={false}
          showHeader={false}
          paginationComponet2={true}
          type={"table"}
        />
        
      </div>
    </div>
  );
}
