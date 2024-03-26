import { getClient } from "@/lib/client";
import { REGISTRAR_VEHICULO } from "../repositories/vehiculoRepo";
import * as z from "zod";

export async function registrarVehiculoModel(dataVehiculo: AccountFormValues) {
  const client = getClient();

  const { data } = await client.mutate({
    mutation: REGISTRAR_VEHICULO,
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