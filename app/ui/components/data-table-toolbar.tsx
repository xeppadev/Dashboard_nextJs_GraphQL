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
    <div className="flex  pt-5 pb-1  flex-row space-x-4 items-start w-full">
      <Search placeholder={`${props.placeholder}`} />
      <div className="flex lspace-y-0 space-x-4 flex-row ">
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
