import { columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import { buscarClientesModel } from "@/src/models/buscarClienteModel";
import { DataTableToolbar } from "../../../components/data-table-toolbar";


export default async function DemoPage({ query }: { query: string }) {
  const { data: dataclientes, loading } = await buscarClientesModel(query);

  if (loading) {
    return <div>Loading...</div>;
  }
 
  return (
    <>
      <DataTableToolbar placeholder="Buscar Cliente"  url={"/clientes/registrar_clientes"}  buttonName="Registrar Cliente" />
      <DataTable
        showHeader={true}
        columns={columns}
        data={dataclientes}
        paginationComponet={true}
        toolBarComponet2={false}
        paginationComponet2={false}
        type={"list"}
      />
    </>
  );
}
