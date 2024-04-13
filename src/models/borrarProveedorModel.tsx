"use server";
import { getClient } from "@/lib/client";
import { BORRAR_PROVEEDOR } from "../repositories/proveedores";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function borrarProveedorModel(id: string) {
  const client = getClient();
  const session = await getServerSession(options);

  await client.mutate({
    mutation: BORRAR_PROVEEDOR,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      borrarProveedorId: id,
    },
  });
  revalidatePath("/dashboard/proveedores/listar_proveedores");
  redirect("/dashboard/proveedores/listar_proveedores");
}
