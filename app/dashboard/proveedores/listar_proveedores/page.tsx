import TableProveedor from "@/app/ui/dashboard/proveedores/listar/table-proveedor";

export default function ListarProve({
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
    <div className="flex flex-col items-stretch  2xl:mx-16 space-y-5  w-full sm:w-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Proveedores</h2>
      </div>
      <TableProveedor query={query} currentPage={currentPage} />
    </div>
  );
}
