import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { ADMIN_HISTORY_CARS } from "../repositories/vehiculoRepo";

export async function adminHistoryCarsModel(placa: string) {
  const client = getClient();
  const session = await getServerSession(options);

  const { data } = await client.query({
    query: ADMIN_HISTORY_CARS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },

    variables: {
      placa,
    },
  });
  return { data: data?.admin_history_cars };
}