import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { data } from "../listar/data/datosfetch";
import { Checkbox } from "@/components/ui/checkbox";

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72  rounded-md border bg-zinc-50  dark:bg-[#1c2536]">
      <div className="p-4  space-y-5">
        {data.map((tag, id) => (
        <div key={tag.id} className="flex items-center space-x-4">
            <Checkbox id={tag.id} />
            <label
                htmlFor={tag.id}
                className="text-normal  font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
            >
                {tag.proveedor}
            </label>
        </div>
        ))}
      </div>
    </ScrollArea>
  );
}