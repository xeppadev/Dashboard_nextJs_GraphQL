import { getClient } from "@/lib/client";
import { BUSCAR_CLIENTES_SEARCH } from "../repositories/clientesRepo";
import { Session } from "next-auth";

export async function buscarClientesModel(nombreCliente: string, page: number, token:string | undefined) {
  const client = getClient();
  

  const { data, loading } = await client.query({
    query: BUSCAR_CLIENTES_SEARCH,
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    variables: {
      nombreCliente,
      page,
    },
  });

  return { data: data.buscar_Clientes, loading };
}
