
import React from "react";

import Cardmantenimiento from "./carmantenimiento";
import { MantenimientoInfoDto } from "@/src/generated/graphql";
import UserRepuestos from "./table/table-repuestos";

export default function Main({ data }: { data: MantenimientoInfoDto }) {
  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-5 pb-6 px-3 pt-2">
      <Cardmantenimiento data={data} />
      <UserRepuestos data={data} />
      
    </div>
  );
}