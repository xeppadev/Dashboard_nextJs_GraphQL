import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabinline";
import Main from "./clientgeneral/main";
import UserUsuarios from "./clientcuentas/userusuarios";
import UserDocument from "./clientdocument/userdocument";
import {
  FaSolidUserCog,
  SolarFileSendBold,
  SolarUserIdBold,
} from "@/app/lib/icons";

export default function TabsAccount({ user }: { user?: string }) {
  return (
    <div className="lg:container mx-auto my-8">
      <Tabs defaultValue="user" className="w-full space-y-8">
        <TabsList className=" inline-flex lg:space-x-8 space-x-3">
          <TabsTrigger value="user">
            <SolarUserIdBold className="lg:mr-2 mr-1 w-[22px] h-[22px]" />
            General
          </TabsTrigger>
          <TabsTrigger value="document" className="ml-3">
            <SolarFileSendBold className="lg:mr-2 mr[3px] w-[19px] h-[19px]" />
            Documentos
          </TabsTrigger>
          <TabsTrigger value="account">
            <FaSolidUserCog className="lg:mr-2 mr-1 w-[19px] h-[19px]" />
            Cuentas Personal
          </TabsTrigger>
        </TabsList>

        <TabsContent value="user">
          <Main user={user} />
        </TabsContent>
        <TabsContent value="document">
          <UserDocument user={user} />
        </TabsContent>
        <TabsContent value="account">
          <UserUsuarios user={user} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
