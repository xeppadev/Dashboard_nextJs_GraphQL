"use client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTableRowActions } from "@/app/ui/components/data-table-row-actions";

import { PersonalDto } from "@/src/generated/graphql";
import { getInitials, salarioMasReciente } from "@/app/lib/utils/utils";
import { es } from "date-fns/locale";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Regist = PersonalDto;

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
    header: "Nombre",
    accessorKey: "nombre",
    cell: ({ row }) => {
      const column = row.original;
      const initial = getInitials(column.nombre);

      return (
        <Link
          href={`/dashboard/personal/cuentas/${column._id}`}
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
              <span className="font-medium ">{row.getValue("nombre")}</span>
              <span className="font-normal text-[#6c737f]"> {column._id}</span>
            </div>
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "salarioFecha",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <span>Salario</span>

          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const column = row.original;
      const salario = salarioMasReciente(column.salarioFecha);
      return (
        <div className="flex max-w-fit items-center font-bold bg-freelance text-[#2970FF]  text-xs px-1.5 py-1 rounded-md">
          ${salario?.salario}
        </div>
      );
    },
  },

  {
    accessorKey: "numero",
    header: "Telefono",
  },

  {
    accessorKey: "fechaIngreso",
    header: "Fecha Ingreso",
    cell: ({ row }) => {
      return (
        <div className="font-normal max-w-fit   text-center  justify-center flex flex-col">
          <span className="text-sm">
            {format(parseISO(row.getValue("fechaIngreso")), "dd MMM yyyy", {
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
        <div className="flex float-right  items-center mt-1 max-w-[50px] ">
          <DataTableRowActions
            row={row}
            ruta={`/dashboard/personal/cuentas/${column._id}`}
          />
        </div>
      );
    },
  },
];
