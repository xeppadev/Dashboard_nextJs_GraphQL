import { columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import { DataTableToolbar } from "@/app/ui/components/data-table-toolbar";
import { buscarRepuestoModel } from "@/src/models/buscarRepuestoModel";
import Pagination from "@/app/ui/components/pagination";

export default async function TableStock({ query, currentPage  }: { query: string; currentPage : number}) {
  const { data: dataRepuestos } = await buscarRepuestoModel(query , currentPage);

  return (
    <>
      <DataTableToolbar
        placeholder="Buscar Repuesto"
        url={"/stock/registrar_stock"}
        buttonName={"Registrar Repuesto"}
      />
      <DataTable showHeader={true} columns={columns} data={dataRepuestos.repuestos} />
      <Pagination totalPages={dataRepuestos.totalPages} />
    </>
  );
}
