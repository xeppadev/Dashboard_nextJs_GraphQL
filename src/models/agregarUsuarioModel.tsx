import { getClient } from "@/lib/client";
import { AGREGAR_USUARIO } from "../repositories/usuariosRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { formSchemaUsuarios } from "@/app/ui/dashboard/clientes/cuentas/changeCuenta/schema";
import * as z from "zod";

type Usuario = z.infer<typeof formSchemaUsuarios>;

export async function agregarUsuarioModel(info: Usuario) {
  const client = getClient();
  const session = await getServerSession(options);

  await client.mutate({
    mutation: AGREGAR_USUARIO,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      input: {
        idCliente: info.idCliente,
        username: info.username,
        password: info.password,
        email: info.email,
        name: info.name,
      },
    },
  });
}
