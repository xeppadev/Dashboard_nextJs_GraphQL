"use client";

import { format } from "date-fns";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type CalendarComponentProps = {
  classname?: string;
  descripcion?: string;

};



export default function CalendarComponent(
  { classname, descripcion }: CalendarComponentProps,

) {
  const [date, setDate] = React.useState<Date>();
  return (
    <div  className={classname}>
      <Popover>
        <PopoverTrigger asChild >
          <Button
            variant={"outline"}
            className={cn(
              "w-full h-12  text-left font-normal justify-between rounded-lg",
              !date && "text-muted-foreground"
            )}
          >
            
            {date ? format(date, "PPP") : <span>{descripcion}</span>}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"

            >
              <path
                fill="currentColor"
                d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972c.697-.67 1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724"
              />
              <path
                fill="currentColor"
                d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828C4.343 22 6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172C22 19.658 22 17.772 22 14"
                opacity=".5"
              />
              <path
                fill="currentColor"
                d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
              />
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
