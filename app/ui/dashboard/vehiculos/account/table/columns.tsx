"use client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MantenimientoInfo } from "@/src/generated/graphql";
import { PhArrowRight } from "@/app/lib/icons";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Regist = MantenimientoInfo;

export const columns: ColumnDef<Regist>[] = [
  {
    header: "Reparaciones",
    accessorKey: "tipo",
    cell: ({ row }) => {
      const column = row.original;

      return (
        <Link
          href={`/dashboard/vehiculos/mantenimientos/${column.id}`}
          className="flex item-center ml-3 min-w-[180px] "
        >
          <div className="flex space-x-4 justify-center  ">
            <Avatar className="bg-freelance h-[48px] w-[48px] flex items-center justify-center">
              <AvatarImage
                className="w-[50%] h-[58%] text-[#2970ff]"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2em' height='2em' viewBox='0 0 20 20'%3E%3Cpath fill='%232970ff' d='M6 4.5V6H4a2 2 0 0 0-2 2v2h4v-.5a.5.5 0 0 1 1 0v.5h6v-.5a.5.5 0 0 1 1 0v.5h4.003V8a2 2 0 0 0-2-2H14V4.5A1.5 1.5 0 0 0 12.5 3h-5A1.5 1.5 0 0 0 6 4.5M7.5 4h5a.5.5 0 0 1 .5.5V6H7V4.5a.5.5 0 0 1 .5-.5m10.503 7H14v.5a.5.5 0 1 1-1 0V11H7v.5a.5.5 0 0 1-1 0V11H2v4a2 2 0 0 0 2 2h12.003a2 2 0 0 0 2-2z'/%3E%3C/svg%3E"
                alt="Avatar"
              />

              <AvatarFallback />
            </Avatar>
            <div className="flex-col flex justify-center ">
              <span className="font-medium ">{row.getValue("tipo")}</span>
              <span className="font-normal text-[#6c737f]"> {column.id}</span>
            </div>
          </div>
        </Link>
      );
    },
  },

  {
    accessorKey: "fecha",
    cell: ({ row }) => {
      return (
        <div className="font-normal max-w-fit    text-center  justify-center flex flex-col">
          <span className="text-sm">Programado</span>
          <span className="text-sm text-[#6c737f] ">
            {format(parseISO(row.getValue("fecha")), "dd MMM yyyy")}
          </span>
          <span className="text-xs text-[#637381]">
            {format(parseISO(row.getValue("fecha")), "h:mm a")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "repuestosUsados",
    header: "Repuestos Usados",
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="font-normal max-w-fit    text-center  justify-center flex flex-col">
          <span className="text-sm">Repuestos </span>
          <span className="text-sm">Usados</span>
          <span className="text-sm text-[#6c737f] ">
            {column.repuestosUsados}
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
        <div className="flex justify-center items-center mt-1  ">
          <Link href={`/dashboard/vehiculos/mantenimientos/${column.id}`}>
            <button>
              <PhArrowRight className="h-5 w-5 text-gray-500 hover:text-gray-800" />
            </button>
          </Link>
        </div>
      );
    },
  },
];
