"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Maybe } from "graphql/jsutils/Maybe";
import { processColumn } from "@/app/lib/utils/utils";
import DownloadFile from "./downloadComponent";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type StringOutput = Maybe<string>;

// Funcion DownloadFile que se encarga de descargar un archivo

export const columns: ColumnDef<StringOutput>[] = [
  {
    header: "Nombre",
    id: "nombre",
    cell: ({ row }) => {
      const column = row.original;
      const { fileName } = processColumn(column || "");

      return (
        <div className="flex space-x-4 ml-4   items-center  min-w-[180px] ">
          <Avatar className={`h-11 w-11 bg-primary `}>
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback
              className={`text-base font-medium text-white bg-primary `}
            >
              A
            </AvatarFallback>
          </Avatar>
          <div className="flex-col flex justify-center ">
            <span className="font-medium ">Archivo </span>
            <span className="font-normal text-[#6c737f]"> {fileName}</span>
          </div>
        </div>
      );
    },
  },

  {
    id: "tipo",
    header: "Tipo de Archivo",
    cell: ({ row }) => {
      const column = row.original;
      const { fileType } = processColumn(column || "");
      return (
        <div className="font-normal max-w-fit    text-center  justify-center flex flex-col">
          <span className="flex max-w-fit items-center font-bold  text-xs px-1.5 py-1 rounded-md text-[#2970FF] bg-freelance">
            {fileType}
          </span>
        </div>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const column = row.original;
      const { fileName } = processColumn(column || "");
      return <DownloadFile file={column || ""} fileName={fileName || ""} />;
    },
  },
];
