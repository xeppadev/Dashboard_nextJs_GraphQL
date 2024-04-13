"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format, parseISO } from "date-fns";
import { eliminarContratoClienteModel } from "@/src/models/eliminarcontratoClienteModel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusComponent } from "@/app/lib/utils/utils";
import { Contrato2Dto } from "@/src/generated/graphql";
import { AlertDialogDemo } from "@/app/ui/components/dialogdelete";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Contrato2Dto | undefined | null>[] = [
  {
    header: "Contrato",
    accessorKey: "numeroContrato",
    cell: ({ row }) => {
      const column = row.original;
     

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
      const column = row.original;
        const contato = column?.numeroContrato;
       

      return (
        <div className="flex float-right  items-center mt-1 mr-3 max-w-[50px] ">
          <AlertDialogDemo
            handleDelete={async () => {
              try {
                await eliminarContratoClienteModel(
                  column?.clienteId || "",
                  contato || ""
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
