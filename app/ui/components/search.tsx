"use client";
import { Input } from "@/components/ui/input";
import { FluentSearch24Regular } from "@/app/lib/icons";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {useDebouncedCallback} from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const serchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSeach = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(serchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace( `${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        onChange={(e) => handleSeach(e.target.value)}
        className="peer block w-full rounded-[10px]  py-[8px] pl-10 text-sm outline-2 outline-primary placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={serchParams.get("query")?.toString()}
      />
      <FluentSearch24Regular className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
