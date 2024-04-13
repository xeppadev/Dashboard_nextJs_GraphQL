
import { getClient } from "@/lib/client";
import { AGREGAR_CONTRATO } from "../repositories/clientesRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { formSchemaContratos } from "@/app/ui/dashboard/clientes/cuentas/changeCuenta/schema";
import * as z from "zod";

type Datavalues = z.infer<typeof formSchemaContratos>;

export async function agregarContratoModel(dataContrato:Datavalues ) {
  const client = getClient();
  const session = await getServerSession(options);

 await client.mutate({
    mutation: AGREGAR_CONTRATO,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      agregarContratoId: dataContrato.agregarContratoId,
      contrato: {
        numeroContrato: dataContrato.numeroContrato,
        fechaInicio: dataContrato.fechaInicio,
        fechaFin: dataContrato.fechaFin,
      }
    },
  });
}
