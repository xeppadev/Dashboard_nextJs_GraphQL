import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { NOTIFICACIONES_QUERY } from "../repositories/suscripcion";

export async function notificationsqueyModel() {
  const client = getClient();
  const session = await getServerSession(options);

  const { data } = await client.query({
    query: NOTIFICACIONES_QUERY,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    fetchPolicy: "no-cache",
  });

  return { data: data.obtener_notificaciones_no_leidas };
}
