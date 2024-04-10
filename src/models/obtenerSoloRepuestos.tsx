import { getClient } from "@/lib/client";
import { OBTENER_SOLO_REPUESTOS } from "../repositories/repuestos";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function obtenerSoloRepuestos() {
  const client = getClient();
  const session = await getServerSession(options);

  const { data, loading } = await client.query({
    query: OBTENER_SOLO_REPUESTOS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
  });
  const repuestos = data?.obtener_todos_los_repuestos.map((repuesto) => ({
    value: `${repuesto.producto} ${repuesto.marca}` || "",
    label: `${repuesto.producto} ${repuesto.marca}` || "",
  }));

  return { repuestos, loading };
}
