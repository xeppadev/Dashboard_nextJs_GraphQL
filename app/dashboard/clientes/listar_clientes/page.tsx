import TablaClientes from "@/app/ui/dashboard/clientes/listar/table";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
export default async function ListarCli({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const session = await getServerSession(options)

  const token = session?.access_token;
  return (
    <div className="flex flex-col   2xl:mx-16 space-y-5  w-full sm:w-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Clientes</h2>
        </div>
      </div>
      <TablaClientes query={query} currentPage={currentPage} token={token} />
    </div>
  );
}
