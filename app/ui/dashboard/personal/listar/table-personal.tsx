import { columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import { buscarPersonalModel } from "@/src/models/buscarPersonalModel";
import { DataTableToolbar } from "@/app/ui/components/data-table-toolbar";
import Pagination from "@/app/ui/components/pagination";

export default async function TablePerson({ query , currentPage }: { query: string; currentPage: number}) {
  const { data: dataPersonal, loading } = await buscarPersonalModel(query , currentPage);

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
      <DataTable showHeader={true} columns={columns} data={dataPersonal.personal} />
      <Pagination totalPages={dataPersonal.totalPages} />
    </>
  );
}
