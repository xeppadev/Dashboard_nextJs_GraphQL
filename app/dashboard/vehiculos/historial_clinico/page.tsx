import TableHistorial from "@/app/ui/dashboard/vehiculos/historial/table-historial";

export default function Historial({
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

  return (
    <div className="flex flex-col items-stretch 2xl:mx-16 space-y-5  w-full sm:w-auto">
      <div className="flex  items-center  ">
        <h2 className=" text-3xl  font-bold ">Historial Clinico</h2>
      </div>
      <TableHistorial query={query} date1={date1} date2={date2} currentPage={page} />
    </div>
  );
}
