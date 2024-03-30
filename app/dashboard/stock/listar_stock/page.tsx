
import { Plus, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TableStock from "@/app/ui/dashboard/stock/listar/table-stock";


export default function ListarStock({
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
        <div>
        <h2 className="text-3xl font-bold">
           Stock de Repuestos
        </h2>
        
        </div>
        
      </div>
      <TableStock query={query} currentPage={currentPage}  />
    </div>
  );
  }
  