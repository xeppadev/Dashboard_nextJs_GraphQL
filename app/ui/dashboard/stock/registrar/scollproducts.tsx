import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { data } from "../listar/data/datosfetch";
import { Checkbox } from "@/components/ui/checkbox";

export function ScrollProduct() {
  return (
    <ScrollArea className="h-[560px] rounded-xl border bg-zinc-50 dark:bg-[#1c2536] dark:text-nav_item">
      <div className="p-4 pt-3 space-y-4 px-5">
        <div className="flex justify-between text-normal font-semibold  ">
          <span className="inline-flex">
            Producto
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              className="ml-1.5 mt-0.5 "
            >
              <g transform="rotate(90 12 12)">
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M7.527 2.657a7.001 7.001 0 0 1 8.26 9.347l4.599 3.893a3.3 3.3 0 1 1-4.651 4.65l-3.891-4.597a7.001 7.001 0 0 1-9.35-8.26a1.01 1.01 0 0 1 1.72-.432l3.045 3.307l2.297-.845l.847-2.3l-3.309-3.04a1.01 1.01 0 0 1 .433-1.723"
                  />
                </g>
              </g>
            </svg>
          </span>
          <span className="inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="ml-1.5 mt-0.5"
            >
              <path
                fill="currentColor"
                d="M8.422 20.618C10.178 21.54 11.056 22 12 22V12L2.638 7.073a3.196 3.196 0 0 0-.04.067C2 8.154 2 9.417 2 11.942v.117c0 2.524 0 3.787.597 4.801c.598 1.015 1.674 1.58 3.825 2.709z"
              />
              <path
                fill="currentColor"
                d="m17.577 4.432l-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641"
                opacity=".7"
              />
              <path
                fill="currentColor"
                d="M21.403 7.14a3.153 3.153 0 0 0-.041-.067L12 12v10c.944 0 1.822-.46 3.578-1.382l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-2.525 0-3.788-.597-4.802"
                opacity=".5"
              />
            </svg>
          </span>
        </div>
        {data.map((tag, id) => (
          <div
            key={tag.id}
            className="flex justify-between items-center space-x-4 "
          >
            <div className="flex items-center space-x-2">
              <Checkbox id={tag.id} />
              <label
                htmlFor={tag.id}
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
