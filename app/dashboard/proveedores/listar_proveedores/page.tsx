import TablePerson from "@/app/ui/dashboard/proveedores/listar/table-proveedor";
import { Plus, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function ListarProve() {
  return (
    <div className="flex flex-col items-stretch  2xl:mx-16 space-y-5  w-full sm:w-auto">
      <div className="flex justify-between items-center">
        <div>
        <h2 className="text-3xl font-bold">
           Proveedores
        </h2>
        <span className="text-sm text-[#637381]">
          Se encontraron 21 Proveedores registrados
        </span>
        </div>
        <div className="flex items-center space-x-3">
        <Link href={`/dashboard/clientes/documents`}>
          <Button className='pr-4 pl-5 py-5  text-sm font-semibold rounded-xl'variant="ghost">
             Documents
             <File className='ml-1 rounded-lg h-5 w-5'  />
          </Button>
        </Link>
        <Link href={`/dashboard/proveedores/registrar_proveedores`}>
          <Button className='pr-4 pl-5 py-5 text-sm font-semibold rounded-xl dark:text-foreground' >
             Registrar
             <Plus className='ml-1 rounded-lg' />
          </Button>
        </Link>
        </div>
      </div>
      <TablePerson />
    </div>
  );
  }
  