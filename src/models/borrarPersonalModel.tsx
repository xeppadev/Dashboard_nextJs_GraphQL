"use server";
import { getClient } from "@/lib/client";
import { BORRAR_PERSONAL } from "../repositories/personalRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function borrarPersonalModel(id: string) {
  const client = getClient();
  const session = await getServerSession(options);

  await client.mutate({
    mutation: BORRAR_PERSONAL,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      borrarPersonalId: id,
    },
  });
  revalidatePath("/dashboard/personal/listar_personal");
  redirect("/dashboard/personal/listar_personal");
}
