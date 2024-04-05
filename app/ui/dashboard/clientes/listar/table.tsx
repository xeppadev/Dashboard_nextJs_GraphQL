import { columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import { buscarClientesModel } from "@/src/models/buscarClienteModel";
import { DataTableToolbar } from "../../../components/data-table-toolbar";
import Pagination from "@/app/ui/components/pagination";
import { Session } from "next-auth";

export default async function TablaVehiculos({
  query,
  currentPage,
  token,

}: {
  query: string;
  currentPage: number;
  token: string | undefined;

}) {
  const { data: dataclientes } = await buscarClientesModel(query, currentPage, token);

  return (
    <>
      <DataTableToolbar
        placeholder="Buscar vehiculos..."
        url={"/vehiculos/registrar_vehiculos"}
        buttonName="Registrar Vehiculo"
      />
      <DataTable
        showHeader={true}
        columns={columns}
        data={dataclientes.clientes}
      />
      <Pagination totalPages={dataclientes.totalPages} />
    </>
  );
}
