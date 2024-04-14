import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { SolarPenBold } from "@/app/lib/icons";
import FormContrato from "./changeCuenta/formularicontrato";
import FormCuenta from "./changeCuenta/formulariCuenta";
import FormDocumento from "./changeCuenta/formulariDocument";



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export function AgregarOpciones({ id }: { id: string | undefined }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="pr-4 pl-4 py-5 text-sm font-semibold rounded-xl dark:text-foreground">
          <SolarPenBold className="mr-2 rounded-lg w-6 h-6" />
          Agregar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Editar Cuenta</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="contrato" className="w-[500px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contrato">Contrato</TabsTrigger>
            <TabsTrigger value="cuenta">Usuario</TabsTrigger>
            <TabsTrigger value="documento">Documento</TabsTrigger>
          </TabsList>
          <TabsContent value="contrato">
            <FormContrato id={id} />
          </TabsContent>
          <TabsContent value="cuenta">
            <FormCuenta id={id} />
          </TabsContent>
          <TabsContent value="documento">
            <FormDocumento id={id} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
