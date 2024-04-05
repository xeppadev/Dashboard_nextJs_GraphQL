import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { MUTATION_PROVEEDORES } from "../repositories/proveedores";
import { formSchemaProveedor } from "@/app/ui/dashboard/proveedores/registrar/schema";
import * as z from "zod";

type AccountFormValues = z.infer<typeof formSchemaProveedor>;


export async function registrarProveedoresModel(dataProveedor: AccountFormValues) {
  const client = getClient();
  const session = await getServerSession(options);
  const { data } = await client.mutate({
    mutation: MUTATION_PROVEEDORES,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      input: {
        direccion: dataProveedor.direccion,
        email: dataProveedor.email,
        nombre: dataProveedor.nombre,
        nombreContacto: dataProveedor.nombreContacto,
        numeroContacto: parseFloat(dataProveedor.numeroContacto),
        rubro: dataProveedor.rubro,
        ruc: dataProveedor.ruc,
      },
    },
  });
  return data;
}