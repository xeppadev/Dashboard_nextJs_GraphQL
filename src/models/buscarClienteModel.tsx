import { getClient } from "@/lib/client";
import { BUSCAR_CLIENTES_SEARCH } from "../repositories/clientesRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function buscarClientesModel(nombreCliente: string, page: number) {
  const client = getClient();
  const session = await getServerSession(options);
  console.log(session);
  const { data, loading } = await client.query({
    query: BUSCAR_CLIENTES_SEARCH,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      nombreCliente,
      page,
    },
  });

  return { data: data.buscar_Clientes, loading };
}
