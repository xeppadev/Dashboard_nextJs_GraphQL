import { FetchResult } from "@apollo/client";
import { Notificaciones_AdminSubscription } from "../generated/graphql";
import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { SUSCRIPCION_NOTIFICACIONES } from "../repositories/suscripcion";
import { NotificacionDto } from "../generated/graphql";

export async function notificationsSuscriptionModel(onDataReceived: (data: NotificacionDto | undefined) => void) {
    const client = getClient();
    const session = await getServerSession(options);
    const observable = client.subscribe({
      query: SUSCRIPCION_NOTIFICACIONES,
      context: {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    });
  
    const observer = {
      next: (data: FetchResult<Notificaciones_AdminSubscription>) => {
        onDataReceived(data.data?.notificaciones_admin);
      },
      error: (error: any) => {
        console.error(error);
        onDataReceived(undefined);
      },
    };
  
    observable.subscribe(observer);
  }