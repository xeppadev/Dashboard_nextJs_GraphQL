import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { REGISTRAR_PERSONAL } from "../repositories/personalRepo";
import { formSchemaPersonal } from "@/app/ui/dashboard/personal/registrar/schema";
import * as z from "zod";

const PersonalSchema = formSchemaPersonal.omit({ file: true });
type Datavalues = z.infer<typeof PersonalSchema>;

export async function registrarPersonalModel(dataPersonal: Datavalues) {
  const client = getClient();
  const session = await getServerSession(options);

  const { data } = await client.mutate({
    mutation: REGISTRAR_PERSONAL,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      input: {
        personal: {
          nombre: dataPersonal.nombre,
          email: dataPersonal.email,
          numero: parseFloat(dataPersonal.numero),
          fechaIngreso: dataPersonal.fechaIngreso,
          username: dataPersonal.username,
          salarioFecha: [
            {
              fecha: dataPersonal.fecha,
              salario: parseFloat(dataPersonal.salario),
            },
          ],
        },
        user: {
          name: dataPersonal.name,
          email: dataPersonal.correo,
          nivelUser: dataPersonal.nivelUser,
          username: dataPersonal.username,
          password: dataPersonal.password,
          clienteAsociado: null
        },
      },
    },
  });
  return data;
}
