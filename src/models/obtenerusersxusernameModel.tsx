import { getClient } from "@/lib/client";
import { OBTENER_USERS } from "../repositories/usuariosRepo";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function obtenerusersxusernameModel(username: string) {
  const client = getClient();
  const session = await getServerSession(options);

  const { data, loading } = await client.query({
    query: OBTENER_USERS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      username,
    },
  });
  const users = data?.obtener_usuario_por_username

  return {users, loading };
}
