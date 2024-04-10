import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { MANTEN_INFO_ID } from "../repositories/mantenimientosRepo";

export async function mantenimientosforIDModel(mantenimientoInfoPorIdId: string) {
  const client = getClient();
  const session = await getServerSession(options);

  const { data } = await client.query({
    query: MANTEN_INFO_ID,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },

    variables: {
      mantenimientoInfoPorIdId,
    },
  });
  return { data: data?.Mantenimiento_Info_por_ID };
}