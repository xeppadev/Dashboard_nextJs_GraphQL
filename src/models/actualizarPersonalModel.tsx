import { getClient } from "@/lib/client";
import { ACTUALIZAR_PERSONAL } from "../repositories/personalRepo";
import * as z from "zod";
import { formSchemaPersonal } from "@/app/ui/dashboard/personal/registrar/schema";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

const PeronalSchemaChange = formSchemaPersonal
  .omit({
    file: true,
    name: true,
    username: true,
    correo: true,
    password: true,
    nivelUser: true,
    clienteAsociado: true,
  })
  .extend({
    id: z.string(),
  });

type AccountFormValues = z.infer<typeof PeronalSchemaChange>;

export async function actualizarPersonalModel(dataPersonal: AccountFormValues) {
  const client = getClient();

  const session = await getServerSession(options);
  const { data } = await client.mutate({
    mutation: ACTUALIZAR_PERSONAL,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      actualizarInfoPersonalId: dataPersonal.id,
      input: {
        email: dataPersonal.email,
        fechaIngreso: dataPersonal.fechaIngreso,
        nombre: dataPersonal.nombre,
        numero: parseFloat(dataPersonal.numero),
      },
      salarioFecha: {
        fecha: dataPersonal.fecha,
        salario: parseFloat(dataPersonal.salario),
      },
    },
  });
  return data;
}
