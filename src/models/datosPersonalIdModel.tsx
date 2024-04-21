import { getClient } from "@/lib/client";
import { PERSONAL_ID } from "../repositories/personalRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
export async function datosPersonalIdModel(id: string) {
  const client = getClient();
  const session = await getServerSession(options);

  const { data } = await client.query({
    query: PERSONAL_ID,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      obtenerPersonalPorIdId: id,
      
    },
  });
  return { data: data?.obtener_Personal_Por_Id };
}