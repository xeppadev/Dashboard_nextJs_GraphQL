"use client";
import { DatePickerComponent } from "@/app/ui/components/dataComponent";
import Search from "@/app/ui/components/search";

export function DataTableToolbar() {
  return (
    <div className="flex flex-col items-center space-x-2 py-3  lg:flex-row lg:space-x-3 lg:items-start lg:w-full space-y-3 lg:space-y-0">
      <Search placeholder={"Buscar Vehiculo"} />
      <DatePickerComponent label="Fecha Inicio" paramName="date1" />
      <DatePickerComponent label="Fecha Termino" paramName="date2" />
    </div>
  );
}
