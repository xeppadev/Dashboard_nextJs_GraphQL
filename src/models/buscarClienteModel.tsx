import { getClient } from "@/lib/client";
import { BUSCAR_CLIENTES } from "../repositories/clientesRepo";

export async function buscarClientesModel(nombreCliente: string) {
  const client = getClient();


  const { data, loading  } = await client.query({
    query: BUSCAR_CLIENTES,
    variables: {
      nombreCliente,
      
    },
  });
  
 
  return { data: data.buscar_Clientes, loading}
}