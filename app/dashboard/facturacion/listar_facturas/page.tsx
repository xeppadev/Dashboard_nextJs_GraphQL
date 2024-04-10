import TableFacturas from "@/app/ui/dashboard/facturas/listar/table-facturas";
export default async function ListarFacturas({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
 
  return (
    <div className="flex flex-col   2xl:mx-16 space-y-5  w-full sm:w-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Facturas</h2>
        </div>
      </div>
      <TableFacturas query={query} currentPage={currentPage} />
    </div>
  );
}
