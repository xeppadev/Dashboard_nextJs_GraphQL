import { getClient } from "@/lib/client";
import { PERSONAL_ID } from "../repositories/personalRepo";

export async function datosPersonalIdModel(id: string) {
  const client = getClient();

  const { data } = await client.query({
    query: PERSONAL_ID,
    variables: {
      obtenerPersonalPorIdId: id,
    },
  });
  return { data: data?.obtener_Personal_Por_Id };
}