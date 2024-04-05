import { getClient } from "@/lib/client";
import { BUSCAR_REPUESTOS_SEARCH } from "../repositories/repuestosRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
export async function buscarRepuestoModel(producto: string , page?: number) {
  const client = getClient();
  const session = await getServerSession(options);

  const { data, loading } = await client.query({
    query: BUSCAR_REPUESTOS_SEARCH,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      producto,
      page
    },
  });
  return { data: data.buscar_repuestos, loading };
}
