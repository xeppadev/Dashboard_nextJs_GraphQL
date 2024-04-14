import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabinline";
import Main from "./mainMantenimiento";
  import UserDocumentos from "./table/table-documents";
  import UserRepuestos from "./table/table-repuestos";
import UserDiagnostico from "./diagnosmantenimiento";
import {
  SolarChecklistMinimalisticBold,
   SolarFileSendBold,
  FluentToolbox20Filled,
} from "@/app/lib/icons";
import { mantenimientosforIDModel } from "@/src/models/mantenimientosforIDModel";
export default async function TabsMantenimiento({ user }: { user?: string }) {
  const { data: datosMantenimiento } = await mantenimientosforIDModel(
    user || ""
  );
  return (
    <div className="lg:container mx-auto my-8">
      <Tabs defaultValue="mantenimiento" className="w-full space-y-8">
        <TabsList className=" inline-flex lg:space-x-8 space-x-3">
          <TabsTrigger value="mantenimiento">
            <FluentToolbox20Filled className="lg:mr-1 mr-1 w-[19px] h-[19px]" />
            General
          </TabsTrigger>
          <TabsTrigger value="diagnosticos">
            <SolarChecklistMinimalisticBold className="lg:mr-1 mr-1 w-[19px] h-[19px]" />
            Diagnosticos
          </TabsTrigger>
          <TabsTrigger value="documents">
            <SolarFileSendBold className="lg:mr-1 mr-1 w-[19px] h-[19px]" />
            Documentos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mantenimiento">
          <Main data={datosMantenimiento} />
        </TabsContent>
        <TabsContent value="diagnosticos">
          <UserDiagnostico data={datosMantenimiento} />
        </TabsContent>
        <TabsContent value="documents">
          <UserDocumentos data={datosMantenimiento} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
