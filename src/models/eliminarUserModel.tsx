"use server"
import { getClient } from "@/lib/client";
import { ELIMINAR_USER } from "../repositories/usuariosRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'

export async function eliminarUserModel(id: string) {
  const client = getClient();
  const session = await getServerSession(options);

  await client.mutate({
    mutation: ELIMINAR_USER,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      id: id,
    },
  });
  revalidatePath('/dashboard/clientes/cuentas/[id]', "page")
  redirect("/dashboard/clientes/listar_clientes")
  
}