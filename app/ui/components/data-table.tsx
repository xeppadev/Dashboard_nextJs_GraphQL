"use client";
import React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTableToolbar2 } from "../dashboard/vehiculos/historial/data-table-toolbar";

import { DataTablePagination } from "../dashboard/clientes/listar/data-table-pagination";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  
  paginationComponet: boolean;
  showHeader: boolean;
  paginationComponet2: boolean;
  toolBarComponet2: boolean;
  type: string;
  
}

export function DataTable<TData, TValue>({

  paginationComponet,
  paginationComponet2,
  toolBarComponet2,
  showHeader,
  columns,
  data,
  type,
  
}: DataTableProps<TData, TValue>) {
  // const [sorting, setSorting] = React.useState<SortingState>([]);
  // const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
  //   []
  // );
  // const [columnVisibility, setColumnVisibility] =
  //   React.useState<VisibilityState>({});
  // const [rowSelection, setRowSelection] = React.useState({});
  // const [openRowId, setOpenRowId] = React.useState<string | null>(null);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      {toolBarComponet2 && <DataTableToolbar2 table={table} />}
    
      <div className=" rounded-[12px]  bg-background shadow-custom dark:bg-card  dark:shadow-none ">
        <Table>
          {showHeader && (
            <TableHeader className="bg-[#F8F9FA] dark:bg-[#1c2536]   text-[#637381] h-[60px]">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
          )}
         <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="h-[78px]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        </Table>

        {paginationComponet && (
          <DataTablePagination table={table} type={type} />
        )}
      </div>
      {paginationComponet2 && <DataTablePagination table={table} type={type} />}
    </>
  );
}
