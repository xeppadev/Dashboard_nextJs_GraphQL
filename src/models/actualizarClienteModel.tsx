import { getClient } from "@/lib/client";
import { ACTUALIZAR_CLIENTE } from "../repositories/clientesRepo";
import { formSchemaClient } from "@/app/ui/dashboard/clientes/registrar/schema";
import * as z from "zod";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

const ClienteSchemaChange = formSchemaClient
  .omit({
    contratos: true,
    file: true,
    items: true,
  })
  .extend({
    _id: z.string(),
  });
type AccountFormValues = z.infer<typeof ClienteSchemaChange>;

export async function actualizarClienteModel(dataCliente: AccountFormValues) {
  const client = getClient();
  const session = await getServerSession(options);
  const { data } = await client.mutate({
    mutation: ACTUALIZAR_CLIENTE,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      cliente: {
        _id: dataCliente._id,
        nombre: dataCliente.nombre,
        ruc: dataCliente.ruc,
        rubro: dataCliente.rubro,
        direccion: dataCliente.direccion,
        nombreCliente: dataCliente.nombreCliente,
        email: dataCliente.email,
        numeroContacto: parseFloat(dataCliente.numeroContacto),

      },
      actualizarClienteId: dataCliente._id,
    },
  });
  return data;
}
