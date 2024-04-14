"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DialogEdit } from "./editarusers";
import { UserOutput } from "@/src/generated/graphql";
import { AlertDialogDemo } from "@/app/ui/components/dialogdelete";
import { eliminarUserModel } from "@/src/models/eliminarUserModel";
import { useRouter } from "next/navigation";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Regist = UserOutput;

export const columns: ColumnDef<Regist>[] = [
  {
    accessorKey: "email",
    cell: ({ row }) => {
      const column = row.original;
      const names = column.name.split(" ");
      const initial = names.length > 1 ? names[1].charAt(0) : "C";

      return (
        <div className="flex space-x-4 ml-4 items-center min-w-[180px] ">
          <Avatar className={`h-11 w-11 bg-primary`}>
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback
              className={`text-lg font-semibold text-white bg-primary`}
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
      );
    },
  },
  {
    accessorKey: "username",
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="font-normal max-w-fit text-center justify-center flex flex-col">
          <span className="text-sm">Username</span>
          <span className="text-sm text-[#6c737f]">{column.username}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "ClienteAsociado",
    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="font-normal max-w-fit    text-center  justify-center flex flex-col">
          <span className="text-sm">Cliente</span>
          <span className="text-sm text-[#6c737f] ">
            {column?.clienteAsociado}
          </span>
        </div>
      );
    },
  },

  {
    accessorKey: "nivelUser",

    cell: ({ row }) => {
      const column = row.original;
      return (
        <div className="flex max-w-fit items-center font-bold  text-xs px-1.5 py-1 rounded-md text-[#2970FF] bg-freelance">
          {column?.nivelUser}
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
        <div className="flex float-right space-x-2  items-center mt-1 mr-3 ">
          <AlertDialogDemo
            handleDelete={async () => {
              try {
                await eliminarUserModel(payment._id);
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
