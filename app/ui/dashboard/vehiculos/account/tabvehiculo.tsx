import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabinline";
import Main from "./mainvehiculo";

import UserMantenimientos from "./table/datatable";
import { RiCarFill, FluentToolbox20Filled } from "@/app/lib/icons";
import { adminHistoryCarsModel } from "@/src/models/carhistorialModel";
export default async function TabsVehiculo({ user }: { user?: string }) {
  const { data: datosCar } = await adminHistoryCarsModel(user || "");
  return (
    <div className="lg:container mx-auto my-8">
      <Tabs defaultValue="car" className="w-full space-y-8">
        <TabsList className=" inline-flex lg:space-x-8 space-x-3">
          <TabsTrigger value="car">
            <RiCarFill className="lg:mr-1 mr-1 w-5 h-5" />
            General
          </TabsTrigger>
          <TabsTrigger value="mantenimientos">
            <FluentToolbox20Filled className="lg:mr-1 mr-1 w-[19px] h-[19px]" />
            Mantenimientos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="car">
          <Main data={datosCar} />
        </TabsContent>
        <TabsContent value="mantenimientos">
          <UserMantenimientos data={datosCar} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
