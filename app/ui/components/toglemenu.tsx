import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuAlt03 } from "@/app/lib/icons";
import SideNav from "../dashboard/sidebar";

export function ToggleMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="2xl:hidden">
          <CiMenuAlt03 className=" text-[#637381] w-6 h-6  " />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[270px] sm:p-0   2xl:hidden border-r dark:border-[#2F3746] overflow-y-auto">
        <SideNav />
      </SheetContent>
    </Sheet>
  );
}
