import TablePerson from "@/app/ui/dashboard/personal/listar/table-personal";


export default function ListarPer({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <div className="flex flex-col items-stretch  2xl:mx-16 space-y-5  w-full sm:w-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Personal</h2>
        </div>
      </div>
      <TablePerson query={query} />
    </div>
  );
}
