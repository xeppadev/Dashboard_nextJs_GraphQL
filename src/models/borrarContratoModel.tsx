"use server";
import { getClient } from "@/lib/client";
import { BORRAR_CONTRATO } from "../repositories/personalRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function borrarContratoModel(
  idContrato: string,
  idPersonal: string
) {
  const client = getClient();
  const session = await getServerSession(options);

  await client.mutate({
    mutation: BORRAR_CONTRATO,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      idContrato: idContrato,
      idPersonal: idPersonal,
    },
  });
  revalidatePath("/dashboard/personal/cuentas/[id]", "page");
  redirect(`/dashboard/personal/cuentas/${idPersonal}`);
}
