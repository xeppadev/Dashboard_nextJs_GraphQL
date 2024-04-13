"use server";
import { getClient } from "@/lib/client";
import { BORRAR_CLIENTE } from "../repositories/clientesRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function borrarClienteModel(id: string) {
  const client = getClient();
  const session = await getServerSession(options);

  await client.mutate({
    mutation: BORRAR_CLIENTE,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      borrarClienteId: id,
    },
  });
  revalidatePath("/dashboard/clientes/listar_clientes");
  redirect("/dashboard/clientes/listar_clientes");
}
