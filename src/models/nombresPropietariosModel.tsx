import { getClient } from "@/lib/client";
import { OBTENER_PROPIETARIOS } from "../repositories/vehiculoRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";


export async function nombresPropietariosModel() {
  const client = getClient();
  const session = await getServerSession(options);

  const { data, loading } = await client.query({
    query: OBTENER_PROPIETARIOS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
  });
  const nombresPropietarios = data.obtener_info_placas.map((propietario) => ({
    value: propietario.propietario || "",
    label: propietario.propietario || "",
  }));

  return { nombresPropietarios, loading };
}