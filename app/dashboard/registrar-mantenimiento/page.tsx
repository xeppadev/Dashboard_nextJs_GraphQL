import React from "react";
import Mantenimientos from "@/app/ui/dashboard/mantenimientos/registrar-mantenimientos";
import { buscarRepuestoModel } from "@/src/models/buscarRepuestoModel";
import { placasUnidadesModel } from "@/src/models/placasunidadesModel";
import { useObtrinfosomeplacaModel } from "@/src/models/obtrinfosomeplacaModel";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    placa?: string;
  };
}) {
  const query = searchParams?.query || "";
  const placa = searchParams?.placa || "";
  
  const { data: dataRepuestos } = await buscarRepuestoModel(query);
  const { placasUnidades } = await placasUnidadesModel();
  const { obtenerInfo } = await useObtrinfosomeplacaModel(placa);

  return (
    <div className="flex flex-col items-stretch w-full sm:w-auto">
      <div className="flex items-center mb-2 2xl:sticky top-[85px]">
        <h2 className="text-3xl  font-bold  ">Registrar Mantenimientos</h2>
      </div>
      <Mantenimientos data={dataRepuestos} placas={placasUnidades} obtenerInfo={obtenerInfo} />
    </div>
  );
}
