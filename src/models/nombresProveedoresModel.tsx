import { getClient } from "@/lib/client";
import { OBTENER_PROVEEDOR } from "../repositories/proveedores";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function nombresProveedoresModel() {
  const client = getClient();
  const session = await getServerSession(options);

  const { data, loading } = await client.query({
    query: OBTENER_PROVEEDOR,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
  });
  const nombresProveedores = data.obtener_nombres_proveedor.map((proveedor) => ({
    value: proveedor || "",
    label: proveedor || "",
  }));

  return { nombresProveedores, loading };
}