import { getClient } from "@/lib/client";
import { OBTENER_PLACAS } from "../repositories/vehiculoRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function placasUnidadesModel() {
  const client = getClient();
  const session = await getServerSession(options);

  const { data, loading } = await client.query({
    query: OBTENER_PLACAS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
  });
  const placasUnidades = data.obtener_info_placas.map((placa) => ({
    value: placa.placa,
    label: placa.placa,
  }));

  return { placasUnidades, loading };
}