import TableHistorial from "@/app/ui/dashboard/vehiculos/historial/table-historial";
import ButtonReporte from "@/app/ui/components/buttonReporte";
import {format} from "date-fns";
export default async function Historial({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    date1?: string;
    date2?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const date1 = searchParams?.date1 ? new Date(searchParams.date1) : null;
  const date2 = searchParams?.date2 ? new Date(searchParams.date2) : null;
  const page = Number(searchParams?.page) || 1;
  const fecha1 = date1 ? format(date1, "yyyy-MM-dd") : "";
  const fecha2 = date2 ? format(date2, "yyyy-MM-dd") : "";
  return (
    <div className="flex flex-col items-stretch 2xl:mx-16 space-y-5  w-full sm:w-auto">
      <div className="flex flex-row  items-center justify-between">
        <h2 className=" text-3xl  font-bold ">Historial Clinico</h2>
        <ButtonReporte  buttonName="Descargar Reporte" date1={fecha1} date2={fecha2} />
        
      </div>
      <TableHistorial
        query={query}
        date1={date1}
        date2={date2}
        currentPage={page}
      />
    </div>
  );
}
