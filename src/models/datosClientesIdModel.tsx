import { getClient } from "@/lib/client";
import { CLIENTE_ID } from "../repositories/clientesRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function datosClientesIdModel(id: string) {
  const client = getClient();
  const session = await getServerSession(options);

  const { data } = await client.query({
    query: CLIENTE_ID,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      obtenerClienteIdId: id,
    },
  });
  return { data: data?.obtener_Cliente_ID };
}


