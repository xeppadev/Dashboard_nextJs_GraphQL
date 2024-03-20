import { columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import { buscarPersonalModel } from "@/src/models/buscarPersonal";
import { DataTableToolbar } from "@/app/ui/components/data-table-toolbar";

export default async function TablePerson({ query }: { query: string }) {
  const { data: dataPersonal, loading } = await buscarPersonalModel(query);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DataTableToolbar
        placeholder="Buscar Personal"
        url={"/personal/registrar_personal"}
        buttonName={"Registrar Personal"}
      />
      <DataTable
        showHeader={true}
        columns={columns}
        data={dataPersonal}
        paginationComponet={true}
        toolBarComponet2={false}
        paginationComponet2={false}
        type={"list"}
      />
    </>
  );
}
