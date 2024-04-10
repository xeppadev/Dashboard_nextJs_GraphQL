import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { NOTIFICACIONES_QUERY } from "../repositories/suscripcion";
import { SUSCRIPCION_NOTIFICACIONES } from "../repositories/suscripcion";
import { NotificacionDto } from "../generated/graphql";

export async function notificationsqueyModel(onDataReceived: (data: NotificacionDto  | undefined) => void) {
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

  const observable = client.subscribe({
    query: SUSCRIPCION_NOTIFICACIONES,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    fetchPolicy: "no-cache",
  });

  observable.subscribe({
    next({ data }) {
      if (data?.notificaciones_admin){
        onDataReceived(data?.notificaciones_admin);
      }
    },
    error(err) {
      console.error('Error', err);
      onDataReceived(undefined);
    },
  });

  return { data: data.obtener_notificaciones_no_leidas };
}





  

  
