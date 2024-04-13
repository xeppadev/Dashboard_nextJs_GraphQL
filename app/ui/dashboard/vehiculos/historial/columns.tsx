"use client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { DialogEdit } from "../../personal/listar/accionedit";
import { DataTableRowActions } from "../../clientes/listar/data-table-row-actions";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MingcuteCarFillDualtone } from "@/app/lib/icons";
import { Mantenimientos } from "@/src/generated/graphql";

export type Regist = Mantenimientos;

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
    accessorKey: "placa",
    header: "Vehiculos",
    cell: ({ row }) => {
      const column = row.original;

      return (
        <Link
          href={`/dashboard/vehiculos/unidades/${column.placa}`}
          className="flex item-center  min-w-[180px] "
        >
          <div className=" space-x-4  inline-flex items-center ">
            <MingcuteCarFillDualtone className="rounded-full p-2 bg-freelance text-[#2970FF] w-[48px] h-[48px]" />
            <div className="flex-col flex justify-center ">
              <span className="font-medium text-normal">
                {row.getValue("placa")}
              </span>
              <span className="font-normal text-[#6c737f]">
                {column.cliente}
              </span>
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
    accessorKey: "fechaInicio",
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
            {format(parseISO(row.getValue("fechaInicio")), "dd MMM yyyy")}
          </span>
          <span className="text-xs text-[#637381]">
            {format(parseISO(row.getValue("fechaInicio")), "h:mm a")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "fechaFin",
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
            {format(parseISO(row.getValue("fechaFin")), "dd MMM yyyy")}
          </span>
          <span className="text-xs text-[#637381]">
            {format(parseISO(row.getValue("fechaFin")), "h:mm a")}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "tipo",
    header: "Mantenimiento",
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div
          className={`flex max-w-fit items-center font-bold  text-xs px-1.5 py-1 rounded-md ${
            column.tipo == "Mantenimiento Correctivo"
              ? "text-[#16a34a] bg-active-green"
              : "text-[#2970FF] bg-freelance"
          } `}
        >
          {column?.tipo ? column.tipo.split(" ")[1] : ""}
        </div>
      );
    },
  },
  {
    accessorKey: "costoRepuestos",
    header: "Costo",
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="flex items-center justify-center  ">
          <span className="font-medium text-normal">
           S/ {column.costoRepuestos}
          </span>
        </div>
      );
    }
  },

  {
    accessorKey: "repuestoUsados",
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
          <span className="font-medium text-normal">
            {column.repuestoUsados}
          </span>
        </div>
      );
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
