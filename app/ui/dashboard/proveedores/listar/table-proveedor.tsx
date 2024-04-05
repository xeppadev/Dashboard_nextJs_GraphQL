import {  columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import { buscarProveedoresModel } from "@/src/models/buscarProveedoresModel";
import { DataTableToolbar } from "@/app/ui/components/data-table-toolbar";
import Pagination from "@/app/ui/components/pagination";

export default async function TableProveedor({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const { data, loading } = await buscarProveedoresModel(query, currentPage);
  return (
    <>
      <DataTableToolbar
        placeholder="Buscar Proveedor"
        url={"/proveedores/registrar_proveedores"}
        buttonName={"Registrar Proveedor"}
      />
      <DataTable showHeader={true} columns={columns} data={data.proveedor} />
      <Pagination totalPages={data.totalPages} />
    </>
  );
}
