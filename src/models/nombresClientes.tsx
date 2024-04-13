import { getClient } from "@/lib/client";
import { TODOS_NOMBRES_CLIENTES } from "../repositories/clientesRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
export async function nombresClientesModel() {
  const client = getClient();
    const session = await getServerSession(options);

  const { data, loading } = await client.query({
    query: TODOS_NOMBRES_CLIENTES,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
  });
  const nombresClientes = data.obtener_Todos_Clientes.map((cliente) => ({
    value: cliente.nombreCliente || "",
    label: cliente.nombreCliente || "",
  }));

  return { nombresClientes, loading };
}
