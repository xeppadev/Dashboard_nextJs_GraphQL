
import { Plus } from "lucide-react";
import Search from "@/app/ui/components/search";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DataTableToolbar() {
  return (
    <div className="flex  pt-5 pb-1  flex-row space-x-4 items-start w-full">
      <Search placeholder={`Buscar Cliente`} />
      <div className="flex lspace-y-0 space-x-4 flex-row ">
        {/* <DataTableViewOptions table={table} /> */}
        <Link href={`/dashboard/personal/registrar_personal`}>
          <Button className="pr-3 pl-4 py-[21px] text-sm  font-semibold rounded-[10px] dark:text-foreground">
            Registrar Personal
            <Plus className="ml-4 rounded-lg" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
