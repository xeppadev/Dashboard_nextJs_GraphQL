"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { differenceInDays,  parseISO } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DialogEdit } from "./dialog-edit";
import { DataTableRowActions } from "./data-table-row-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { StatusComponent, getInitials } from "@/app/lib/utils/utils";
import { ClienteDto } from "@/src/generated/graphql";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Regist = ClienteDto;

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
    header: "Cliente",
    accessorKey: "nombreCliente",
    cell: ({ row }) => {
      const column = row.original;
      let initial = "";
      if (column?.nombreCliente) {
        initial = getInitials(column.nombreCliente);
      }

      return (
        <Link
          href={`/dashboard/clientes/cuentas/${column._id}`}
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
                {row.getValue("nombreCliente")}
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
    accessorKey: "ruc",
    header: "RUC",
  },
  {
    accessorKey: "nombre",
    header: "Contacto",
  },

  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "numeroContacto",
    header: "Telefono",
  },
  {
    accessorKey: "direccion",
    header: "Nro Contratos",
    cell: ({ row }) => {
      const column = row.original;

      return (
        <div className="font-normal  justify-center flex flex-col">
           {column.contratos?.length} contrato{column.contratos?.length !== 1 ? 's' : ''}
        </div>
      );
    },
    filterFn: (rows, id, value) => {
      return value.includes(rows.getValue(id));
    },
  },
  {
    accessorKey: "contratos",
    header: "Vigencia ",
    cell: ({ row }) => {
      const column = row.original;
      return <StatusComponent contratos={column.contratos} />;
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
