import { columns } from "./columns";
import { DataTable } from "../../../components/data-table";
import BarraOptions from "./barraoptions";
import { DataTableToolbar } from "./data-table-toolbar";
import Pagination from "@/app/ui/components/pagination";
import { buscarMantenimientosModel } from "@/src/models/historialMantenimientos";
import { Suspense } from "react";
import SandboxMantenimiento from "@/app/lib/utils/skeletons/skeletonMantenimiento";

export default async function TableHistorial({
  query,
  date1,
  date2,
  currentPage,
}: {
  query?: string 
  date1?: Date | null;
  date2?: Date | null;
  currentPage?: number;
}) {
  const { data: dataHistorial } = await buscarMantenimientosModel(
    date1 || null,
    date2 || null,
    query || "",
    currentPage || 1
  );
  return (
    <div className=" flex flex-col space-y-6">
      <Suspense fallback={<SandboxMantenimiento />} key={query || "" + currentPage}>
        <BarraOptions query={query} currentPage={currentPage} />
      </Suspense>

      <DataTableToolbar />
      <DataTable
        showHeader={true}
        columns={columns}
        data={dataHistorial.mantenimientos}
      />
      <Pagination totalPages={dataHistorial.totalPages} />
    </div>
  );
}
