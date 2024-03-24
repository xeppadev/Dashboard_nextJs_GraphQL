"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { DialogEdit } from "../clientcuentas/editarusers";
import { DataTableRowActions } from "../../listar/data-table-row-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusComponent } from "@/app/lib/utils/utils";
import { ContratoDto } from "@/src/generated/graphql";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<ContratoDto | undefined | null>[] = [
  {
    header: "Contrato",
    accessorKey: "numeroContrato",
    cell: ({ row }) => {
      const column = row.original;
      // const names = column.contrato.split(" ");
      // const initial =
      //   names.length > 1
      //     ? `${names[0].charAt(0)}${names[1].charAt(0)}`
      //     : names[0].charAt(0);

      return (
        <div className="flex space-x-4 ml-4   items-center  min-w-[180px] ">
          <Avatar className={`h-11 w-11 bg-primary `}>
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback
              className={`text-base font-medium text-white bg-primary `}
            >
              C
            </AvatarFallback>
          </Avatar>
          <div className="flex-col flex justify-center ">
            <span className="font-medium ">CONTRATO </span>
            <span className="font-normal text-[#6c737f]">
              {" "}
              {column?.numeroContrato}
            </span>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "fechaInicio",
    cell: ({ row }) => {
      return (
        <div className="font-normal max-w-fit    text-center  justify-center flex flex-col">
          <span className="text-sm">Registrado</span>
          <span className="text-sm text-[#6c737f] ">
            {format(parseISO(row.getValue("fechaInicio")), "dd MMM yyyy")}
          </span>
          {/* <span className="text-xs text-[#637381]">
            {format(parseISO(row.getValue("vencimiento")), "h:mm a")}
          </span> */}
        </div>
      );
    },
  },

  {
    accessorKey: "fechaFin",
    header: "Vencimiento",

    cell: ({ row }) => {
      return (
        <div className="font-normal max-w-fit   text-center  justify-center flex flex-col">
          <span className="text-sm">Vencimiento</span>
          <span className="text-sm text-[#6c737f]">
            {format(parseISO(row.getValue("fechaFin")), "dd MMM yyyy")}
          </span>
          {/* <span className="text-xs text-[#637381]">
          {format(parseISO(row.getValue("vencimiento")), "h:mm a")}
        </span> */}
        </div>
      );
    },
  },
  {
    id: "vigencia",
    header: "Vigencia",

    cell: ({ row }) => {
      const column = row.original;
      return column ? <StatusComponent contratos={[column]} /> : null;
        
      
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
