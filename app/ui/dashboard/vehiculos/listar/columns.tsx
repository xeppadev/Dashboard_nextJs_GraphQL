"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DialogEdit } from "./dialog-edit";
import { DataTableRowActions } from "../../../components/data-table-row-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { getInitials } from "@/app/lib/utils/utils";
import { GetPlacasDto } from "@/src/generated/graphql";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Regist = GetPlacasDto; // This is the type of the data that will be displayed in the table

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
    header: "Vehiculo",
    accessorKey: "placa",
    cell: ({ row }) => {
      const column = row.original;
      let initial = "";
      if (column?.placa) {
        initial = getInitials(column.placa);
      }

      return (
        <Link
          href={`/dashboard/vehiculos/unidades/${column.placa}`}
          className="flex item-center min-w-[180px] "
        >
          <div className="flex space-x-4 justify-center  ">
            <Avatar className={`h-11 w-11 bg-primary `}>
              <AvatarImage src="" alt="@shadcn" />
              <AvatarFallback
                className={`text-base font-medium text-white bg-primary`}
              >
                {initial}
              </AvatarFallback>
            </Avatar>
            <div className="flex-col flex justify-center ">
              <span className="font-medium text-sm">
                {row.getValue("placa")}
              </span>
              <span className="font-medium  dark:text-[#A0AEC0] text-[#6c737f]">
                {column._id}
              </span>
            </div>
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "cliente",
    header: "Cliente",
  },
  {
    accessorKey: "fechaSoat",
    header: "Vigencia Soat",
    cell: ({ row }) => {
      return (
        <div className="font-normal max-w-fit   text-center  justify-center flex flex-col">
          <span className="text-sm">
            {format(parseISO(row.getValue("fechaSoat")), "dd MMM yyyy", {
              locale: es,
            })}
          </span>
          
        </div>
      );
    },
  },
  {
    accessorKey: "propietario",
    header: "Propietario",
  },

  {
    accessorKey: "tipoContrato",
    header: "Tipo de Contrato",
  },

  {
    id: "actions",

    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="flex float-right  items-center mt-1 max-w-[50px] ">
         
          <DataTableRowActions row={row} ruta={`/dashboard/vehiculos/unidades/${column.placa}`} />
        </div>
      );
    },
  },
];
