import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { MANTENIMIENTO_NO_PROGRAMADO } from "../repositories/mantenimientosRepo";
import { formSchemaMantenimiento } from "@/app/ui/dashboard/mantenimientos/data/schema";

import * as z from "zod";
const MantenimientoSchema = formSchemaMantenimiento
  .omit({
    file: true,
  })
  .extend({
    repuestos: z.array(
      z.object({
        producto: z.string(),
        cantidad: z.number(),
        precio: z.any(),
        marca: z.any(),
      })
    ),
    fechaSoat: z.string().min(1, { message: "La fecha es inválida." }),
    kmPrevio: z.string().min(1, { message: "El kilometraje es inválido." }),
  });
type AccountFormValues = z.infer<typeof MantenimientoSchema>;

export async function registrarMantenimientoModel(
  dataMantenimiento: AccountFormValues
) {
  const client = getClient();
  const session = await getServerSession(options);
  const { data } = await client.mutate({
    mutation: MANTENIMIENTO_NO_PROGRAMADO,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      updateOneMantenimientoInput: {
        fechaSoat: dataMantenimiento.fechaSoat,
        diagnostico: dataMantenimiento.diagnostico,
        kmMedido: parseFloat(dataMantenimiento.kmMedido),
        kmPrevio: parseFloat(dataMantenimiento.kmPrevio),
        repuestos: dataMantenimiento.repuestos,
        tipo: dataMantenimiento.tipo,
        Cliente: dataMantenimiento.Cliente,
        tecnico: dataMantenimiento.tecnico,
        placa: dataMantenimiento.placa,
        fechaInicio: dataMantenimiento.fecha,
        fecha: dataMantenimiento.fecha,
      },
    },
  });

  return data;
}
