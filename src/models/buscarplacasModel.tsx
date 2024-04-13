import { getClient } from "@/lib/client";
import { BUSCAR_PLACAS_AUTOS } from "../repositories/vehiculoRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function buscarPlacasModel(placa: string) {
  const client = getClient();
  const session = await getServerSession(options);

  const { data, loading } = await client.query({
    query: BUSCAR_PLACAS_AUTOS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      placa,
    },
  });
  return { data: data.buscar_placas_autos, loading };
}