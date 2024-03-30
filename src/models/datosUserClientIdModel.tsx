import { USUARIO_ID } from "../repositories/clientesRepo";
import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
export async function datosUserClienteIdModel(id: string) {
  const client = getClient();
  const session = await getServerSession(options);

  const { data } = await client.query({
    query: USUARIO_ID,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },

    variables: {
      clienteId: id,
    },
  });
  return { data: data?.obtener_Usuarios_por_IDcliente };
}
