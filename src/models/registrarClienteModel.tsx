import { getClient } from "@/lib/client";
import { REGISTRAR_CLIENTE } from "../repositories/clientesRepo";
import { formSchemaClient } from "@/app/ui/dashboard/clientes/registrar/formulario/schema";
import * as z from "zod";

const ClienteSchema = formSchemaClient.omit({ file: true, items: true ,fechaFin:true,fechaInicio:true, numeroContrato:true });

type Datavalues = z.infer<typeof ClienteSchema>;

export async function registrarClienteModel(dataCliente: Datavalues) {
  const client = getClient();

  const { data } = await client.mutate({
    mutation: REGISTRAR_CLIENTE,
    variables: {
      cliente: {
        nombre: dataCliente.nombre,
        ruc: dataCliente.ruc,
        rubro: dataCliente.rubro,
        direccion: dataCliente.direccion,
        nombreCliente: dataCliente.nombreCliente,
        email: dataCliente.email,
        numeroContacto: parseFloat(dataCliente.numeroContacto),
        
      },
    },
  });
  return data;
}
