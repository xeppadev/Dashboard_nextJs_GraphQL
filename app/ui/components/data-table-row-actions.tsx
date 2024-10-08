"use client";

import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  ruta: string;
}

export function DataTableRowActions<TData>({
  row,
  ruta,
}: DataTableRowActionsProps<TData>) {
  const task = row.original;
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted text-right "
        >
          <DotsVerticalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={ruta}>
        <DropdownMenuItem >
          Edit
        </DropdownMenuItem>
        </Link>
       
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
