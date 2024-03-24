import React from "react";
import Facturas from "@/app/ui/dashboard/mantenimientos/registrar-mantenimientos";

export default function Page() {
  return (
    <div className="flex flex-col items-stretch w-full sm:w-auto">
      <div className="flex items-center mb-3">
        <h2 className="text-3xl  font-bold ">Registrar Mantenimientos</h2>
      </div>
      <Facturas />
    </div>
  );
}
