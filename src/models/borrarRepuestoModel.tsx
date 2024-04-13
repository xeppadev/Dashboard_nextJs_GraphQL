"use server";
import { getClient } from "@/lib/client";
import { BORRAR_REPUESTO } from "../repositories/repuestosRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function borrarRepuestoModel(id: string) {
  const client = getClient();
  const session = await getServerSession(options);

  await client.mutate({
    mutation: BORRAR_REPUESTO,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      borrarRepuestoId: id,
    },
  });
  revalidatePath("/dashboard/stock/listar_stock");
  redirect("/dashboard/stock/listar_stock");
}