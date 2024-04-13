"use client";
import { Input } from "@/components/ui/input";
import { FluentSearch24Regular } from "@/app/lib/icons";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import { set } from "date-fns";

type SearchBarProps = {
  placeholder: string;
  data: string[];
};

function SearchBar({ placeholder, data }: SearchBarProps) {
  const serchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>(
    serchParams.get("placa")?.toString() || ""
  );
  // Agrega un estado para rastrear si se ha seleccionado una opción
  const [optionSelected, setOptionSelected] = useState(false);

  const handleSeach = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(serchParams);
    if (term) {
      params.set("placa", term);
    } else {
      params.delete("placa");
    }
    replace(`${pathname}?${params.toString()}`);
    //Actualiza el estado del termino de busqueda
    setSearchTerm(term);
  }, 100);

  // Actualiza el valor del input cuando se hace clic en un elemento
  const handleSelect = (term: string) => {
    setSearchTerm(term);
    handleSeach(term);
  };

  return (
    <div className=" w-full relative">
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="search"
          onChange={(e) => handleSeach(e.target.value)}
          className={`peer block w-full py-[10px] pl-10 px-3 text-sm outline-none border-imput bg-background  border placeholder:text-gray-500 
           ${
             data.length !== 0 && !optionSelected
               ? "rounded-t-[10px] rounded-b-none  border-b-white dark:border-b-slate-900  "
               : "rounded-[10px]  border"
           } `}
          placeholder={placeholder}
          value={searchTerm}
          onFocus={() => setOptionSelected(false)} // Agrega esta línea
          onBlur={() => setOptionSelected(true)} // Agrega esta línea
        />
        <FluentSearch24Regular className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:peer-focus:text-white" />
      </div>
      {!optionSelected && data.length !== 0 && (
        <div className=" w-full absolute bg-background   rounded-b-[10px] border-x border-b   border-input">
          {data.map((item) => (
            <div
              key={item}
              className="py-2 px-3 pl-10 hover:bg-gray-50 text-sm dark:hover:bg-slate-900  hover:rounded-b-[10px]"
              onMouseDown={() => handleSelect(item)}
              role="button"
              tabIndex={0}
              onKeyDown={() => handleSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
