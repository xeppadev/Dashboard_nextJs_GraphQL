import { getClient } from "@/lib/client";
import { OBTENER_INFO_PLACAS } from "../repositories/vehiculoRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function buscarInfoPlacas(plate: string, page: number) {
  const client = getClient();
  const session = await getServerSession(options);

  const { data, loading } = await client.query({
    query: OBTENER_INFO_PLACAS,
    variables: {
      plate,
      page,
    },
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
  });
  const obtenerInfo = data.buscar_info_placas_tabla

  return { obtenerInfo, loading };
}