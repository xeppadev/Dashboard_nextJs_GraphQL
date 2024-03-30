import { getClient } from "@/lib/client";
import { BUSCAR_PERSONAL_SEARCH } from "../repositories/personalRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function buscarPersonalModel(nombre: string, page: number) {
  const client = getClient();
 const session = await getServerSession(options);
  const { data, loading } = await client.query({
    query: BUSCAR_PERSONAL_SEARCH,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      nombre,
      page
    },
  });
  return { data: data.buscar_Pesonal, loading }
}