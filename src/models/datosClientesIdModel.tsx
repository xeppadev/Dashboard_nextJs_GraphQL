import { getClient } from "@/lib/client";
import { CLIENTE_ID } from "../repositories/clientesRepo";


export async function datosClientesIdModel(id: string) {
  const client = getClient();

  const { data } = await client.query({
    query: CLIENTE_ID,
    variables: {
      obtenerClienteIdId: id,
    },
  });
  return { data: data?.obtener_Cliente_ID };
}


