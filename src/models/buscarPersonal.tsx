import { getClient } from "@/lib/client";
import { BUSCAR_PERSONAL } from "../repositories/personalRepo";

export async function buscarPersonalModel(nombre: string) {
  const client = getClient();

  const { data, loading } = await client.query({
    query: BUSCAR_PERSONAL,
    variables: {
      nombre,
    },
  });
  return { data: data.buscar_Pesonal, loading }
}