import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabinline";
import Main from "./persongeneral/main";
import UserSalarios from "./personSalirios/table-salarios";
import { FormularioChange } from "./personcuentas/formUsuarios";
import { obtenerusersxusernameModel } from "@/src/models/obtenerusersxusernameModel";
import UserDocumentos from "./personDocs/table-docs";
import {
  FaSolidUserCog,
  SolarFileSendBold,
  SolarUserIdBold,
  SolarDocumentAddBold,
} from "@/app/lib/icons";
import { datosPersonalIdModel } from "@/src/models/datosPersonalIdModel";

export default async function TabsAccount({ user }: { user?: string }) {
  const { data: datosPersonal } = await datosPersonalIdModel(user || "");
   const { users: datoCuenta } = await obtenerusersxusernameModel(datosPersonal.username || "");
  return (
    <div className="lg:container mx-auto my-8">
      <Tabs defaultValue="user" className="w-full space-y-8">
        <TabsList className=" inline-flex lg:space-x-8 space-x-3">
          <TabsTrigger value="user">
            <SolarUserIdBold className="lg:mr-2 mr-1 w-[22px] h-[22px]" />
            General
          </TabsTrigger>
          <TabsTrigger value="salarios" className="ml-3">
            <SolarDocumentAddBold className="lg:mr-2 mr[3px] w-[19px] h-[19px]" />
            Salarios
          </TabsTrigger>
          <TabsTrigger value="account">
            <FaSolidUserCog className="lg:mr-2 mr-1 w-[19px] h-[19px]" />
            Cuenta
          </TabsTrigger>
          <TabsTrigger value="files">
            <SolarFileSendBold className="lg:mr-2 mr-1 w-[19px] h-[19px]" />
            Documentos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <Main data={datosPersonal} />
        </TabsContent>
        <TabsContent value="salarios">
          <UserSalarios data={datosPersonal} />
        </TabsContent>
        <TabsContent value="account">
          <FormularioChange data={datoCuenta} />
        </TabsContent>
        <TabsContent value="files">
          <UserDocumentos data={datosPersonal} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
