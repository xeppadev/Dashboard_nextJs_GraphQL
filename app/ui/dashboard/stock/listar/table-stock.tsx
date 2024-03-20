import { columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import { DataTableToolbar } from "@/app/ui/components/data-table-toolbar";
import { buscarRepuestoModel } from "@/src/models/buscarRepuestoModel";

export default async function TableStock({ query }: { query: string }) {
  const { data: dataRepuestos, loading } = await buscarRepuestoModel(query);

  return (
    <>
      <DataTableToolbar
        placeholder="Buscar Repuesto"
        url={"/stock/registrar_stock"}
        buttonName={"Registrar Repuesto"}
      />
      <DataTable
        showHeader={true}
        columns={columns}
        data={dataRepuestos}
        paginationComponet={true}
        toolBarComponet2={false}
        paginationComponet2={false}
        type={"list"}
      />
    </>
  );
}
