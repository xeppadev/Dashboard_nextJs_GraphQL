import { Plus } from "lucide-react";
import Search from "@/app/ui/components/search";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type DataTableToolbarProps = {
  placeholder: string;
  url: string;
  buttonName: string;
};


export function DataTableToolbar (props : DataTableToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row pt-5 pb-4 space-y-4 sm:space-y-0 sm:space-x-4 items-start w-full">
      <Search placeholder={`${props.placeholder}` } width="sm:w-full w-full" />
      <div className="flex space-y-4 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row">
        <Link href={`/dashboard${props.url}`}>
          <Button className="pr-3 pl-4 py-[21px] text-sm font-semibold rounded-[10px] dark:text-foreground">
           {props.buttonName}
            <Plus className="ml-4 rounded-lg" />
          </Button>
        </Link>
      </div>
    </div>
  );
}