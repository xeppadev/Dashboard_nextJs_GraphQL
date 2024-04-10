import { columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import { buscarInfoPlacas } from "@/src/models/obtenerinfoplacasModel";
import { DataTableToolbar } from "../../../components/data-table-toolbar";
import Pagination from "@/app/ui/components/pagination";

export default async function TablaVehiculos({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const { obtenerInfo: dataplacas } = await buscarInfoPlacas(
    query,
    currentPage
  );

  return (
    <>
      <DataTableToolbar
        placeholder="Buscar Vehiculos..."
        url={"/vehiculos/registrar_vehiculos"}
        buttonName="Registrar Vehiculo"
      />
      <DataTable showHeader={true} columns={columns} data={dataplacas.cars} />
      <Pagination totalPages={dataplacas.totalPages} />
    </>
  );
}
