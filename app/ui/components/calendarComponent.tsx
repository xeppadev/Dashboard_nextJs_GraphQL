"use client";

import * as React from "react";
import { format } from "date-fns";
import { SolarCalendarDateBoldDuotone } from "@/app/lib/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { es } from "date-fns/locale";

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>(new Date());

 
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal h-11 rounded-[10px] text-gray-500 ",
            !date && "text-muted-foreground"
          )}
        >
          <SolarCalendarDateBoldDuotone className="w-6 h-6 dark:text-nav_item mr-2 text-gray-500 " />
          {date ? (
            format(date, "PPP", { locale: es })
          ) : (
            <span>Elegir Fecha</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
