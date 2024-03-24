import { USUARIO_ID } from "../repositories/clientesRepo";
import { getClient } from "@/lib/client";

export async function datosUserClienteIdModel(id: string) {
    const client = getClient();
  
    const { data } = await client.query({
      query: USUARIO_ID,
      variables: {
        clienteId: id,
      },
    });
    return { data: data?.obtener_Usuarios_por_IDcliente };
  }