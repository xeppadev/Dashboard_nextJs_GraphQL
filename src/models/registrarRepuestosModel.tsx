import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { REGISTRAR_REPUESTOS_MANTENIMIENTO } from "../repositories/repuestos";
import { formSchemaStockSend } from "@/app/ui/dashboard/stock/registrar/schema";
import * as z from "zod";
type AccountFormValues = z.infer<typeof formSchemaStockSend>;


export async function registrarRepuestosModel(dataRepuestos: AccountFormValues) {
  const session = await getServerSession(options);
  const client = getClient();
  const { data } = await client.mutate({
    mutation: REGISTRAR_REPUESTOS_MANTENIMIENTO,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      data: {
        repuestosActualizar: dataRepuestos.oldStock,
        repuestosNuevos: dataRepuestos.newStock,
      },
    },
  });
}  
   

