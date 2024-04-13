
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Maybe } from "graphql/jsutils/Maybe";
import { SolarDownloadTwiceSquareBold } from "@/app/lib/icons";
import { DataTable } from "../../../components/data-table";
import { columns } from "@/app/ui/components/columns";
type StringOutput = Maybe<string[]>;

export function ViewDownload({ datos }: { datos: StringOutput }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <SolarDownloadTwiceSquareBold className="h-8 w-8 text-[#2970FF] hover:text-[#2970FF]/90 " />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] ">
        <DialogHeader>
          <DialogTitle>Archivos de Facturas</DialogTitle>
          <DialogDescription>
            Descarga los archivos de la factura
          </DialogDescription>
        </DialogHeader>
        <div className="w-full ">
          <DataTable showHeader={false} columns={columns} data={datos || []} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
