"use server" 
import { getClient } from "@/lib/client";
import { ELIMINAR_CONTRATO } from "../repositories/clientesRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function eliminarContratoClienteModel(id: string , contrato: string) {
  const client = getClient();
  const session = await getServerSession(options);

  await client.mutate({
    mutation: ELIMINAR_CONTRATO,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      clienteId: id,
      numeroContrato: contrato,
    },
  });
  revalidatePath('/dashboard/clientes/cuentas/[id]', "page")
  redirect(`/dashboard/clientes/cuentas/${id}`	)
}