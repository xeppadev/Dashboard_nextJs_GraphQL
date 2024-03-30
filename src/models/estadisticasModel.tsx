import { ESTADISTICAS_DATOS } from "../repositories/estadisticarRepo";
import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function estadisticasModel(placa: string, fecha: string) {
  const client = getClient();
  const session = await getServerSession(options);
  const { data, loading } = await client.query({
    query: ESTADISTICAS_DATOS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      placa,
      fecha,
    },
  });
  return { data: data.estadisticas_web, loading };
}
