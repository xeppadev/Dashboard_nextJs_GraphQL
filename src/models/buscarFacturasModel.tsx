import { getClient } from "@/lib/client";
import { BUSCAR_FACTURAS } from "../repositories/facturas";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function buscarFacturasModel(numeroFactura: string, page: number) {
  const client = getClient();
  const session = await getServerSession(options);
  const { data, loading } = await client.query({
    query: BUSCAR_FACTURAS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      numeroFactura,
      page,
    },
  });
  return { data: data.buscar_factura, loading };
}
