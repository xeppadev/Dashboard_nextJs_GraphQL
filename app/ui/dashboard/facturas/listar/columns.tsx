"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ViewDownload } from "./dialog-edit";

import { Checkbox } from "@/components/ui/checkbox";
import { format, parseISO } from "date-fns";
import { FacturaDto } from "@/src/generated/graphql";
import { es } from "date-fns/locale";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Regist = FacturaDto;

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
    header: "Factura",
    accessorKey: "numeroFactura",
    cell: ({ row }) => {
      const column = row.original;

      return (
        <div className="flex space-x-4 item-center min-w-[180px] ">
          <Avatar className={`h-11 w-11 bg-primary `}>
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback
              className={`text-base font-medium text-white bg-primary`}
            >
              F
            </AvatarFallback>
          </Avatar>
          <div className="flex-col flex justify-center ">
            <span className="font-medium text-sm">
              {row.getValue("numeroFactura")}
            </span>
            <span className="font-medium  dark:text-[#A0AEC0] text-[#6c737f]">
              {column.tipo}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "involucrado",
    header: "Involucrado",
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className=" flex items-center ">
          {column?.involucrado || "sin datos"}
        </div>
      );
    },
  },
  {
    accessorKey: "monto",
    header: "Monto",
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="flex max-w-fit items-center font-medium   text-sm px-1.5 py-1 rounded-md">
          ${column.monto}
        </div>
      );
    },
  },

  {
    accessorKey: "igv",
    header: "Igv",
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="flex max-w-fit items-center font-medium   text-sm px-1.5 py-1 rounded-md">
          ${column.igv}
        </div>
      );
    },
  },

  {
    accessorKey: "detraction",
    header: "Detraccion",
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="flex max-w-fit items-center font-medium   text-sm px-1.5 py-1 rounded-md">
          ${column.detraccion}
        </div>
      );
    },
  },
  {
    accessorKey: "fecha",
    header: "Fecha",
    cell: ({ row }) => {
      return (
        <div className="font-normal max-w-fit   text-center  justify-center flex flex-col">
          <span className="text-sm">
            {format(parseISO(row.getValue("fecha")), "dd MMM yyyy", {
              locale: es,
            })}
          </span>
        </div>
      );
    },
  },

  {
    id: "actions",

    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="flex float-right  items-center mt-1 mr-3 max-w-[50px] ">
          <ViewDownload datos={column.documentos} />
         
        </div>
      );
    },
  },
];
