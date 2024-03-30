import { getClient } from "@/lib/client";
import { REGISTRAR_CLIENTE } from "../repositories/clientesRepo";
import { formSchemaClient } from "@/app/ui/dashboard/clientes/registrar/schema";
import * as z from "zod";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

const ClienteSchema = formSchemaClient.omit({ file: true});

type Datavalues = z.infer<typeof ClienteSchema>;

export async function registrarClienteModel(dataCliente: Datavalues) {
  const client = getClient();
  const session = await getServerSession(options);
  const { data } = await client.mutate({
    mutation: REGISTRAR_CLIENTE,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      cliente: {
        cliente: {
          nombre: dataCliente.nombre,
          ruc: dataCliente.ruc,
          rubro: dataCliente.rubro,
          direccion: dataCliente.direccion,
          nombreCliente: dataCliente.nombreCliente,
          email: dataCliente.email,
          numeroContacto: parseFloat(dataCliente.numeroContacto),
          contratos: dataCliente.contratos,
        },
        users: dataCliente.items,
      },
    },
  });
  return data;
}
