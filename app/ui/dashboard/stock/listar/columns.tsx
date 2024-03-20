"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTableRowActions } from "../../clientes/listar/table/data-table-row-actions";
import { DialogEdit } from "./accionesedit";
import { RepuestoType } from "@/src/generated/graphql";
import { StockStatus, getInitials } from "@/app/lib/utils/utils";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Regist = RepuestoType;

export const columns: ColumnDef<Regist>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="ml-3">
        <Checkbox
          checked={
            table.getIsAllRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(checked) => table.toggleAllRowsSelected(!!checked)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="ml-3">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(checked) => row.toggleSelected(!!checked)}
          aria-label="Select this row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "Producto",
    accessorKey: "producto",
    cell: ({ row }) => {
      const column = row.original;
      let initial = "";
      if (column?.producto) {
       initial = getInitials(column.producto);
      }
      return (
        <Link
          href={`/dashboard/clientes/cuentas/${column.id}`}
          className="flex item-center min-w-[180px] "
        >
          <div className="flex space-x-4 justify-center  ">
            <Avatar className={`h-11 w-11 bg-primary`}>
              <AvatarImage src="" alt="@shadcn" />
              <AvatarFallback
                className={`text-base font-medium text-white bg-primary`}
              >
                {initial}
              </AvatarFallback>
            </Avatar>
            <div className="flex-col flex justify-center ">
              <span className="font-medium ">{row.getValue("producto")}</span>
              <span className=" font-medium text-[#6c737f]"> {column.id}</span>
            </div>
          </div>
        </Link>
      );
    },
  },

  {
    accessorKey: "cantidad",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <span>Cantidad</span>

          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "marca",
    header: "Marca",
  },
  {
    accessorKey: "precio",
    header: "Precio",
    cell: ({ row }) => {
      return (
        <span className="font-medium text-[#6c737f] dark:text-foreground">
          S/. {row.getValue("precio")}
        </span>
      );
    },
  },
 

  {
    accessorKey: "cantidadReserva",
    header: "Estado",
    cell: ({ row }) => {
      const column = row.original;
      return <StockStatus cantidad={column.cantidad} />;
    },
    filterFn: (rows, id, value) => {
      return value.includes(rows.getValue(id));
    },
  },
  {
    id: "actions",

    cell: ({ row }) => {
      return (
        <div className="flex float-right  items-center mt-1 max-w-[50px] ">
          <DialogEdit />
          <DataTableRowActions row={row} />
        </div>
      );
    },
  },
];
