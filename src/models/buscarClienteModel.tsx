import { getClient } from "@/lib/client";
import { BUSCAR_CLIENTES_SEARCH } from "../repositories/clientesRepo";

export async function buscarClientesModel(nombreCliente: string, page: number) {
  const client = getClient();

  const { data, loading } = await client.query({
    query: BUSCAR_CLIENTES_SEARCH,
    variables: {
      nombreCliente,
      page,
    },
  });

  return { data: data.buscar_Clientes, loading };
}
