import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { REGISTRAR_VEHICULO } from "../repositories/vehiculoRepo";
import { formSchemaRegist } from "@/app/ui/dashboard/vehiculos/registrar/schema";
import * as z from "zod";

const VehiculoSchema = formSchemaRegist.omit({ estados: true });

type AccountFormValues = z.infer<typeof VehiculoSchema>;

export async function registrarVehiculoModel(dataVehiculo: AccountFormValues) {
  const client = getClient();
  const session = await getServerSession(options);
  const { data } = await client.mutate({
    mutation: REGISTRAR_VEHICULO,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
     createCarInput: {
        cliente: dataVehiculo.cliente,
        fechaRevision: dataVehiculo.fechaRevision,
        fechaSoat: dataVehiculo.fechaSoat,
        kmRegistroInicial: parseFloat(dataVehiculo.kmRegistroInicial),
        placa: dataVehiculo.placa,
        propietario: dataVehiculo.propietario,
        puntaje: parseFloat(dataVehiculo.puntaje),
        tipoContrato: dataVehiculo.tipoContrato,
        vigenciaContrato: dataVehiculo.vigenciaContrato,
      },
    },
  });
  return data;
}