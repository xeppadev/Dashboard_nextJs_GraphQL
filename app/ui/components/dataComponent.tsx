"use client";

import * as React from "react";

import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { SolarCalendarDateBoldDuotone } from "@/app/lib/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

type DatePickerComponentProps = {
  label: string;
  paramName: string;
};

export function DatePickerComponent({ label, paramName }: DatePickerComponentProps) {
    const serchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleDateChange = (date: Date | undefined ) => {
        const params = new URLSearchParams(serchParams);
        if (date) {
            params.set(paramName, format(date, "yyyy-MM-dd", {}));
        } else {
            params.delete(paramName);
        }
        replace(`${pathname}?${params.toString()}`);
    };
    const dateStr = serchParams.get(paramName);
    const date = dateStr ? new Date( `${dateStr}T00:00:00.000-05:00` ) : undefined;
   
    

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "lg:w-[18%]  w-full  justify-start text-left font-normal h-[42px] rounded-[10px]",
            !date && "text-muted-foreground"
          )}
        >
          {date ? format(date, "PPP", { locale: es }) : <span>{label}</span>}
          <SolarCalendarDateBoldDuotone className=" h-6 w-6 ml-auto text-[#637381]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}