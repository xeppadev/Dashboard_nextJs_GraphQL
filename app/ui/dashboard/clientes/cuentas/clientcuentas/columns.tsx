"use client";
import { states } from "./data/data";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { format, parseISO } from "date-fns";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DialogEdit } from "./editarusers";

import { Button } from "@/components/ui/button";
import { DataTableRowActions } from "../../listar/table/data-table-row-actions";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Regist = {
  id: string;
  name: string;
  email: string;
  alias: string;
  registro: string;
  state: string;
};


const colors: string[] = [
  "bg-yellow-500",
  "bg-lime-500",
  "bg-red-500",
  "bg-cyan-500",
  "bg-blue-500",
  "bg-sky-500",
  "bg-emerald-500",
];


export const columns: ColumnDef<Regist>[] = [
  {
    accessorKey: "email",
    cell: ({ row }) => {
      const column = row.original;
           const names = column.name.split(" ");
      const initial = names.length > 1 ? names[1].charAt(0) : "";
      const color = colors[Math.floor(Math.random() * colors.length)];
      return (
        <Link
          href={`/dashboard/clientes/cuentas/${column.id}`}
          className="flex item-center max-w-[210px] pl-5"
        >
          
          <div className="flex space-x-2 justify-center  ">
          <Avatar className={`h-10 w-10 ${color} `}>
              <AvatarImage src="" alt="@shadcn" />
              <AvatarFallback
                className={`text-lg font-semibold text-white ${color}`}
              >
                {initial}
              </AvatarFallback>
            </Avatar>
            <div className="flex-col flex justify-center ">
              <span className="font-medium">{column.name}</span>
              <span className="font-normal text-[#6c737f]">
                {row.getValue("email")}
              </span>
            </div>
          </div>
        </Link>
      );
    },
  },
  {
    accessorKey: "alias",
  },
  {
    accessorKey: "registro",
    cell: ({ row }) => {
      return (
        <div className="font-normal max-w-fit    text-center  justify-center flex flex-col">
          <span className="text-sm">Registrado</span>
          <span className="text-sm text-[#6c737f] ">
            {format(parseISO(row.getValue("registro")), "dd MMM yyyy")}
          </span>
          {/* <span className="text-xs text-[#637381]">
            {format(parseISO(row.getValue("vencimiento")), "h:mm a")}
          </span> */}
        </div>
      );
    },
  },

  {
    accessorKey: "state",

    cell: ({ row }) => {
      const state = states.find(
        (state) => state.value === row.getValue("state")
      );
      return (
        <div
          className={`flex max-w-fit items-center font-bold  text-xs px-1.5 py-1 rounded-md ${
            state?.label == "Activo"
              ? "text-green-500 bg-active-green"
              : "text-red-500 bg-inactive-red-2"
          } `}
        >
          {state?.label}
        </div>
      );
    },
    filterFn: (rows, id, value) => {
      return value.includes(rows.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="flex float-right  items-center mt-1  ">
          <DialogEdit />
          <DataTableRowActions row={row}  />
        </div>
      );
    },
  },
];
