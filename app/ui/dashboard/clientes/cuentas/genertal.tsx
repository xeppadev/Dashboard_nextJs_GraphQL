import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabinline";
import Main from "./clientgeneral/main";
import UserUsuarios from "./clientcuentas/table-usuarios";
import UserDocument from "./clientContratos/table-document";
import UserDocumentos from "./clientDocs/table-docs";
import {
  FaSolidUserCog,
  SolarFileSendBold,
  SolarUserIdBold,
  SolarDocumentAddBold,
} from "@/app/lib/icons";
import { datosClientesIdModel } from "@/src/models/datosClientesIdModel";
import { datosUserClienteIdModel } from "@/src/models/datosUserClientIdModel";

export default async function TabsAccount({ user }: { user?: string }) {
  const { data: datosCliente } = await datosClientesIdModel(user || "");
  const { data: datosUserCliente } = await datosUserClienteIdModel(user || "");

  return (
    <div className="lg:container md:mx-auto my-8">
      <Tabs defaultValue="user" className="w-full space-y-8">
        <TabsList className=" inline-flex lg:space-x-8 space-x-3">
          <TabsTrigger value="user">
            <SolarUserIdBold className="lg:mr-2 mr-1 w-[22px] h-[22px] lg:inline hidden" />
            General
          </TabsTrigger>
          <TabsTrigger value="contratos" className="ml-3">
            <SolarDocumentAddBold className="lg:mr-2 mr[3px] w-[19px] h-[19px] lg:inline hidden" />
            Contratos
          </TabsTrigger>
          <TabsTrigger value="account">
            <FaSolidUserCog className="lg:mr-2 mr-1 w-[19px] h-[19px] lg:inline hidden" />
            Cuentas
          </TabsTrigger>
          <TabsTrigger value="files">
            <SolarFileSendBold className="lg:mr-2 mr-1 w-[19px] h-[19px] lg:inline hidden" />
            Documentos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="user">
          <Main data={datosCliente} />
        </TabsContent>
        <TabsContent value="contratos">
          <UserDocument data={datosCliente} />
        </TabsContent>
        <TabsContent value="account">
          <UserUsuarios data={datosUserCliente} cliente={datosCliente} />
        </TabsContent>
        <TabsContent value="files">
          <UserDocumentos data={datosCliente} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
