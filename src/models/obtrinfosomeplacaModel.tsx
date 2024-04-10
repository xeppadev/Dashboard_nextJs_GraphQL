import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { INFO_SOME_PLACA } from "@/src/repositories/vehiculoRepo";

export async function useObtrinfosomeplacaModel(placa: string) {
  const client = getClient();
  const session = await getServerSession(options);

  const { data } = await client.query({
    variables: {
      placa: placa,
    },
    query: INFO_SOME_PLACA,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    
  });
  const obtenerInfo = data.obtener_info_for_placa;
  return { obtenerInfo };
}
