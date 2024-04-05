"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTableRowActions } from "../../clientes/listar/data-table-row-actions";
import { DialogEdit } from "./accionedit";
import { ProveedorDto } from "@/src/generated/graphql";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Regist = ProveedorDto;

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
      const names = column.nombre.split(" ");
      const initial =
        names.length > 1
          ? `${names[0].charAt(0)}${names[1].charAt(0)}`
          : names[0].charAt(0);

      return (
        <Link
          href={`/dashboard/clientes/cuentas/${column._id}`}
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
              <span className="font-normal text-[#6c737f]">
                {" "}
                {column.rubro}
              </span>
            </div>
          </div>
        </Link>
      );
    },
  },

  {
    accessorKey: "nombreContacto",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <span>Contacto</span>

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
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "ruc",
    header: "Ruc",
  },

  {
    accessorKey: "numeroContacto",
    header: "Telefono",
  },

  {
    accessorKey: "direccion",
    header: "Direccion",
  },

  {
    id: "actions",

    cell: ({ row }) => {
      const payment = row.original;
      return (
        <div className="flex float-right  items-center mt-1 max-w-[50px] ">
          <DialogEdit />
          <DataTableRowActions row={row} />
        </div>
      );
    },
  },
];
