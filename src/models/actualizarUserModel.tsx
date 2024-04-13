import { getClient } from "@/lib/client";
import { ACTUALIZAR_USERS } from "../repositories/usuariosRepo";
import * as z from "zod";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { formSchemaPersonal } from "@/app/ui/dashboard/personal/registrar/schema";

const PeronalSchemaChange = formSchemaPersonal
  .omit({
    nombre: true,
    file: true,
    email: true,
    numero: true,
    fecha: true,
    salario: true,
    fechaIngreso: true,
    nivelUser: true,
    username: true,
  })
  .extend({
    oldusername: z.string(),
  });

type Datavalues = z.infer<typeof PeronalSchemaChange>;

export async function actualizarUserModel(dataUser: Datavalues) {
    console.log("dataUser", dataUser);
  const client = getClient();
  const session = await getServerSession(options);
  const { data } = await client.mutate({
    mutation: ACTUALIZAR_USERS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      newEmail: dataUser.correo,
      oldUsername: dataUser.oldusername,
      newPassword: dataUser.password,
      newName: dataUser.name,
      
    },
  });
  return data;
}
