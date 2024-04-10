import { columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import { buscarFacturasModel } from "@/src/models/buscarFacturasModel";
import { DataTableToolbar } from "@/app/ui/components/data-table-toolbar";
import Pagination from "@/app/ui/components/pagination";

export default async function TableFacturas({ query , currentPage }: { query: string; currentPage: number}) {
  const { data: dataFacturas, loading } = await buscarFacturasModel(query, currentPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DataTableToolbar
        placeholder="Buscar Factura..."
        url={"/facturacion/registrar_factura"}
        buttonName={"Registrar Factura"}
      />
      <DataTable showHeader={true} columns={columns} data={dataFacturas.facturas} />
      <Pagination totalPages={dataFacturas.totalPages} />
    </>
  );
}
