import { getClient } from "@/lib/client";
import { BUSCAR_MANTENIMIENTOS_SEARCH } from "../repositories/mantenimientosRepo";
import { HISTORIAL_MANTENIMIENTOS } from "../repositories/mantenimientosRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function buscarMantenimientosModel(
  fechaInicio: Date | null,
  fechaTermino: Date | null,
  placa: string,
  page: number
) {
  const client = getClient();
  const session = await getServerSession(options);
  const { data, loading } = await client.query({
    query: BUSCAR_MANTENIMIENTOS_SEARCH,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      fechaInicio,
      fechaTermino,
      placa,
      page,
    },
  });
  return { data: data.table_historial_Mantenimientos_admin, loading };
}

export async function historialMantenimientosModel(searchParam: string) {
  const client = getClient();
  const session = await getServerSession(options);
  const { data, loading, error } = await client.query({
    query: HISTORIAL_MANTENIMIENTOS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      searchParam,
    },
  });
  return { data: data.Historial_Car_Admin, error };
}
