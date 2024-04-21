"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format, parseISO } from "date-fns";
import { AlertDialogDemo } from "@/app/ui/components/dialogdelete";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SalarioFecha3Dto } from "@/src/generated/graphql";
import { borrarContratoModel } from "@/src/models/borrarContratoModel";

// This type is used to define the shape of our data.

export const columns: ColumnDef<SalarioFecha3Dto | undefined | null>[] = [
  {
    accessorKey: "_id",
    cell: ({ row }) => {
      return (
        <div className="flex space-x-4 ml-4 items-center min-w-[180px]">
          <Avatar className={`h-11 w-11 bg-primary `}>
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback
              className={`text-lg font-semibold text-white bg-primary `}
            >
              S
            </AvatarFallback>
          </Avatar>
          <div className="flex-col flex justify-center ">
            <span className="font-medium">SALARIO</span>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "fecha",
    cell: ({ row }) => {
      return (
        <div className="font-normal max-w-fit    text-center  justify-center flex flex-col">
          <span className="text-sm">Fecha</span>
          <span className="text-sm text-[#6c737f] ">
            {format(parseISO(row.getValue("fecha")), "dd MMM yyyy")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "salario",

    cell: ({ row }) => {
      const column = row.original;

      return (
        <div className="flex max-w-fit items-center font-bold  text-xs px-1.5 py-1 rounded-md text-[#2970FF] bg-freelance">
         
          ${column?.salario}
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
      const column = row.original;
      return (
        <div className="flex float-right  items-center mt-1  mr-2">
          <AlertDialogDemo
            handleDelete={async () => {
              try {
                await borrarContratoModel(
                  column?._id || "",
                  column?.idPersonal || ""
                );
              } catch (error) {
                console.log(error);
              }
            }}
          />
        </div>
      );
    },
  },
];
