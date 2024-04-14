"use client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { RepuestoType } from "@/src/generated/graphql";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Regist = RepuestoType;

export const columns: ColumnDef<Regist>[] = [
  {
    header: "Repuesto",
    accessorKey: "producto",
    cell: ({ row }) => {
      const column = row.original;

      return (
        <div className="flex space-x-4 item-center ml-2">
          <Avatar className="bg-freelance h-[40px] w-[40px] flex items-center justify-center">
            <AvatarImage
              className="w-[60%] h-[60%]"
              src="https://api.iconify.design/mingcute/tool-fill.svg?color=%232970ff&width=50&height=50"
              alt="Avatar"
            />
            <AvatarFallback />
          </Avatar>
          <div className="flex-col flex justify-center ">
            <span className="font-medium ">{row.getValue("producto")}</span>
            <span className="font-normal text-[#6c737f]"> {column.id}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "marca",
    header: "Marca",
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="font-normal max-w-fit    text-center  justify-center flex flex-col">
          <span className="text-sm">Marca</span>
          <span className="text-sm text-[#6c737f]">{column.marca}</span>
        </div>
      );
    },
  },

  {
    accessorKey: "cantidad",
    header: "Cantidad",
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="font-normal max-w-fit    text-center  justify-center flex flex-col">
          <span className="text-sm">Cantidad </span>
          <span className="text-sm text-[#6c737f] ">{column.cantidad} repuestos</span>
        </div>
      );
    },
  },

  {
    accessorKey: "precio",
    header: "Precio",
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="font-normal max-w-fit    text-center  justify-center flex flex-col">
          <span className="text-sm">Precio</span>
          <span className="text-sm text-[#6c737f] ">${column.precio}</span>
        </div>
      );
    },
  },
 
];
