import { getClient } from "@/lib/client";
import { BUSCAR_REPUESTOS } from "../repositories/repuestosRepo";

export async function buscarRepuestoModel(producto: string) {
  const client = getClient();

  const { data, loading } = await client.query({
    query: BUSCAR_REPUESTOS,
    variables: {
      producto,
    },
  });
  return { data: data.buscar_repuestos, loading };
}
