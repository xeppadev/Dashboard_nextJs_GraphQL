import { getClient } from "@/lib/client";
import { REGISTRAR_USERS } from "../repositories/usuariosRepo";
import { formSchemaClient } from "@/app/ui/dashboard/clientes/registrar/schema";
import * as z from "zod";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

const ClienteSchema2 = formSchemaClient.omit({ nombreCliente: true,  ruc: true , direccion: true, email: true, numeroContacto: true, rubro: true, contratos: true, file: true, nombre:true});
type Datavalues = z.infer<typeof ClienteSchema2>;

export async function agregarUsersModel(dataUser: Datavalues) {
  const client = getClient();
  const session = await getServerSession(options);

  const { data } = await client.mutate({
    mutation: REGISTRAR_USERS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      users: dataUser.items || [],
    },
  });
  return data;
}
