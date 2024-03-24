"use client";
import { states } from "./data/data";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { DialogEdit } from "../../personal/listar/accionedit";
import { DataTableRowActions } from "../../clientes/listar/data-table-row-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Regist = {
  id: string;
  unidades: string;
  inicio: string;
  termino: string;
  cambios: string;
  costo: string;
  mantenimiento: string;
  cliente: string;
};


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
    accessorKey: "unidades",
    header: "Unidades",
    cell: ({ row }) => {
      const column = row.original;
     
      
      return (
        <Link
          href={`/dashboard/vehiculos/unidades/${column.id}`}
          className="flex item-center min-w-[180px] "
        >
          <div className=" space-x-4  inline-flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            className="duoicon duoicon-car  rounded-full p-2  bg-freelance"
            style={{ color: "#2970FF" }}
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5.553 5.658A3 3 0 0 1 8.236 4h7.528a3 3 0 0 1 2.683 1.658l1.386 2.771c.244-.1.484-.208.72-.324a1 1 0 0 1 .894 1.79c-.24.107-.482.211-.725.312l.961 1.923c.209.417.317.877.317 1.343V16a2.991 2.991 0 0 1-1 2.236V19.5a1.5 1.5 0 0 1-3 0V19H6v.5a1.5 1.5 0 0 1-3 0v-1.264c-.614-.55-1-1.348-1-2.236v-2.528c0-.466.109-.925.317-1.341l.953-1.908c-.241-.102-.48-.21-.715-.327a1.01 1.01 0 0 1-.45-1.343 1 1 0 0 1 1.342-.448c.236.117.477.224.72.324l1.386-2.77v-.001Z"
              className="duoicon-secondary-layer"
              opacity=".3"
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M7.342 6.553A.998.998 0 0 1 8.236 6h7.528c.379 0 .725.214.894.553l1.27 2.538C16.38 9.555 14.294 10 12 10s-4.38-.445-5.927-.91l1.269-2.537ZM16.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              className="duoicon-primary-layer"
            ></path>
          </svg>
          <div className="flex-col flex justify-center ">
              <span className="font-medium text-normal">{row.getValue("unidades")}</span>
              <span className="font-normal text-[#6c737f]">{column.cliente}</span>
              </div>
              
          </div>
        </Link>
      );
    },
    filterFn: (rows, id, value) => {
      return value.includes(rows.getValue(id));
    },
  },
  {
    accessorKey: "inicio",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <span>Fecha Inicio</span>

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
      return (
        <div className="font-normal max-w-fit   text-center  justify-center flex flex-col">
          <span className="text-sm">
            {format(parseISO(row.getValue("inicio")), "dd MMM yyyy")}
          </span>
          <span className="text-xs text-[#637381]">
          {format(parseISO(row.getValue("inicio")), "h:mm a")}
        </span>
        </div>
      );
    },
  },
  {
    accessorKey: "termino",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <span>Fecha Termino</span>

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
      return (
        <div className="font-normal max-w-fit   text-center  justify-center flex flex-col">
          <span className="text-sm">
            {format(parseISO(row.getValue("termino")), "dd MMM yyyy")}
          </span>
          <span className="text-xs text-[#637381]">
          {format(parseISO(row.getValue("termino")), "h:mm a")}
        </span>
        </div>
      );
    },
  },

  {
    accessorKey: "mantenimiento",
    header: "Mantenimiento",
    cell: ({ row }) => {
      const state = states.find(
        (state) => state.value === row.getValue("mantenimiento")
      );
      return (
        <div
          className={`flex max-w-fit items-center font-bold  text-xs px-1.5 py-1 rounded-md ${
            state?.label == "Correctivo"
              ? "text-red-500 bg-inactive-red-2"
              :  state?.label == "Preventivo"? "text-[#2970FF] bg-freelance" : "text-[#16a34a] bg-active-green"
          } `}
        >
          {state?.label}
        </div>
      );
    },
    
  },
  {
    accessorKey: "costo",
    header: "Costo",
  },

  {
    accessorKey: "cambios",
    header: () => {
      return (
        <div className="flex justify-center  items-center">
          <span>Repuestos Usados</span>
        </div>
      );
    },
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="flex items-center justify-center  ">
          <span className="font-medium text-normal">{row.getValue("cambios")}</span>
          
        </div>
      );
    }
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
