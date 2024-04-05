
import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Checkbox } from "@/components/ui/checkbox";
import { UimBox } from "@/app/lib/icons";
import { RepuestoSearchType } from "@/src/generated/graphql";

type Props = {
  data: RepuestoSearchType[];
  onSelectedProduct: (product: RepuestoSearchType) => void;
};


export default  function ScrollProduct({data, onSelectedProduct} : Props) {

  const handleCheckboxChange = (product: RepuestoSearchType) => (checked: boolean | 'indeterminate') => {
    if (checked) {
      onSelectedProduct(product);
    } else {
      onSelectedProduct(product);
    }
  };
  return (
    <ScrollArea className="h-96 rounded-xl border bg-zinc-50 dark:bg-[#1c2536] dark:text-nav_item">
      <div className="p-4 pt-3 space-y-4 px-5">
        <div className="flex justify-between text-normal font-semibold  ">
          <span className="inline-flex">Producto</span>
          <span className="inline-flex">
            <UimBox className="h-6 w-6 text-gray-500" />
          </span>
        </div>
        {data.map((tag) => (
          <div
            key={tag._id}
            className="flex justify-between items-center space-x-4 "
          >
            <div className="flex items-center space-x-2">
              <Checkbox id={tag._id || "" } onCheckedChange={handleCheckboxChange(tag)}  />
              <label
                htmlFor={tag._id || ""}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
              >
                {tag.producto} ({tag.marca})
              </label>
            </div>
            <span className="text-sm">{tag.cantidad}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
