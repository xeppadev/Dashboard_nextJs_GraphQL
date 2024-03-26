"use client";
import { states } from "../data/data";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Regist = {
  id: string;
  inicio: string;
  termino: string;
  costo: string;
  mantenimiento: string;
  cambios: string;
  reparaciones: string[];
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
    header: "Reparaciones",
    accessorKey: "cambios",
    cell: ({ row }) => {
      const column = row.original;
      const names = column.cambios.split(" ");
      const initial =
        names.length > 1
          ? `${names[0].charAt(0)}${names[1].charAt(0)}`
          : names[0].charAt(0);
      const color = colors[Math.floor(Math.random() * colors.length)];
      return (
        <Link
          href={`/dashboard/clientes/cuentas/${column.id}`}
          className="flex item-center ml-3 min-w-[180px] "
        >
          <div className="flex space-x-4 justify-center  ">
            <Avatar className={`h-11 w-11 ${color}`}>
              <AvatarImage src="" alt="@shadcn" />
              <AvatarFallback
                className={`text-base font-medium text-white ${color}`}
              >
                {initial}
              </AvatarFallback>
            </Avatar>
            <div className="flex-col flex justify-center ">
              <span className="font-medium ">
                {row.getValue("cambios")} Reparaciones
              </span>
              <span className="font-normal text-[#6c737f]">
                {" "}
                {column.costo}
              </span>
            </div>
          </div>
        </Link>
      );
    },
  },

  {
    accessorKey: "inicio",
    cell: ({ row }) => {
      return (
        <div className="font-normal max-w-fit    text-center  justify-center flex flex-col">
          <span className="text-sm"> Inicio</span>
          <span className="text-sm text-[#6c737f] ">
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

    cell: ({ row }) => {
      return (
        <div className="font-normal max-w-fit   text-center  justify-center flex flex-col">
          <span className="text-sm"> Termino</span>
          <span className="text-sm text-[#6c737f]">
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
              : state?.label == "Preventivo"
              ? "text-[#2970FF] bg-freelance"
              : "text-[#16a34a] bg-active-green"
          } `}
        >
          {state?.label}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="flex justify-center items-center mt-1  ">
          <Link href={`/dashboard/clientes/cuentas/${payment.id}`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-gray-500 hover:text-gray-800 mt-1"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 12h16m-7-7l7 7l-7 7"
                />
              </svg>
            </button>
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "reparaciones",
    cell: ({ row }) => {
      const state: string[] = row.getValue("reparaciones");

      return (
        <div className="font-normal max-w-fit     text-left flex flex-col space-y-3 px-4 py-3 mx-3 ">
          <div className="space-y-3 flex-col">
            {state.map((item) => (
              <div className="flex flex-row space-x-2" key={item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g transform="rotate(90 12 12)">
                    <g fill="none" fill-rule="evenodd">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        d="M7.527 2.657a7.001 7.001 0 0 1 8.26 9.347l4.599 3.893a3.3 3.3 0 1 1-4.651 4.65l-3.891-4.597a7.001 7.001 0 0 1-9.35-8.26a1.01 1.01 0 0 1 1.72-.432l3.045 3.307l2.297-.845l.847-2.3l-3.309-3.04a1.01 1.01 0 0 1 .433-1.723"
                      />
                    </g>
                  </g>
                </svg>
                <span className="text-sm">{item} (marca)</span>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },
];
