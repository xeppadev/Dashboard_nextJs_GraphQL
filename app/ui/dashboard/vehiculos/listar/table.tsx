import { columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import { buscarClientesModel } from "@/src/models/buscarClienteModel";
import { DataTableToolbar } from "../../../components/data-table-toolbar";
import Pagination from "@/app/ui/components/pagination";

export default async function TablaClientes({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const { data: dataclientes } = await buscarClientesModel(query, currentPage);

  return (
    <>
      <DataTableToolbar
        placeholder="Buscar Cliente"
        url={"/clientes/registrar_clientes"}
        buttonName="Registrar Cliente"
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
