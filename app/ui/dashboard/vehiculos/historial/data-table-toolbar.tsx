"use client";


import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// import CalendarComponent from "../../clientes/cuentas/clientContratos/calendar";
interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar2<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-col items-center space-x-2 py-5 px-5 lg:flex-row lg:space-x-4 lg:items-start lg:w-full space-y-3 lg:space-y-0">
      <div className="flex flex-col space-x-0 space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row w-full lg:w-[23%]">
       

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-11 px-2 lg:px-3 rounded-lg text-red-500 hover:bg-red-500 hover:bg-opacity-10 hover:text-red-600"
          >
            Reset
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="ml-2 text-red-500 "
            >
              <path
                fill="currentColor"
                d="M3 6.524c0-.395.327-.714.73-.714h4.788c.006-.842.098-1.995.932-2.793A3.68 3.68 0 0 1 12 2a3.68 3.68 0 0 1 2.55 1.017c.834.798.926 1.951.932 2.793h4.788c.403 0 .73.32.73.714a.722.722 0 0 1-.73.714H3.73A.722.722 0 0 1 3 6.524"
              />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.34 1.181-5.246l.267-4.187c.1-1.577.15-2.366-.303-2.866c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5c-.454.5-.404 1.289-.303 2.866l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.044.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.044-.713-.43-.672-.864l.5-5.264c.04-.433.409-.75.82-.707"
                clip-rule="evenodd"
              />
            </svg>
          </Button>
        )}
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:w-[46%] space-x-0 lg:space-x-4 space-y-3 lg:space-y-0">
        {/* <CalendarComponent 
          classname={"w-full xl:w-1/2"}
          descripcion={"Fecha Inicio"}
          />
        <CalendarComponent
         classname={"w-full xl:w-1/2"}
         descripcion={"Fecha Termino"}
                /> */}
        </div>
        <Input
          placeholder="Filter Placas..."
          value={(table.getColumn("unidades")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("unidades")?.setFilterValue(event.target.value)
          }
          className="w-full lg:w-[31%] h-12 rounded-lg"
        />
      
    </div>
  );
}
