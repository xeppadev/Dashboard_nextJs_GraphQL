import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { REGISTRAR_FACTURA } from "../repositories/facturas";
import { formSchemaFacturadatos } from "@/app/ui/dashboard/facturas/registrar/schema";
import * as z from "zod";

type Datavalues = z.infer<typeof formSchemaFacturadatos>;

export async function registrarFacturaModel(dataFactura: Datavalues) {
  const client = getClient();
  const session = await getServerSession(options);
  const { data } = await client.mutate({
    mutation: REGISTRAR_FACTURA,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      createFacturaInput: {
        notificacion: true,
        monto: parseFloat(dataFactura.montoParcial),
        involucrado: dataFactura.involucrado,
        igv: parseFloat(dataFactura.igv),
        fecha: dataFactura.fecha,
        detraccion: parseFloat(dataFactura.detraccion || ""),
        numeroFactura: dataFactura.numeroFactura,
        tipo: dataFactura.tipoFactura,
      },
    },
  });

  return data;
}
