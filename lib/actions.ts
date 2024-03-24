"use server";
import { formSchemaClient } from "@/app/ui/dashboard/clientes/registrar/schema";
import { formSchemaPersonal } from "@/app/ui/dashboard/personal/registrar/schema";
import { registrarClienteModel } from "@/src/models/registrarClienteModel";
import { registrarPersonalModel } from "@/src/models/regjstroPersonalModel";
import { agregarUsersModel } from "@/src/models/agregarUsersModel";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

type queries = {
  query1: string;
  query2: string | undefined;
};
const apiURL = process.env.NEXT_API_URL;

export async function sentToExternalAPI(formData: FormData, queries: queries) {
  const session = await getServerSession(options);
  const url = new URL(`${apiURL}/documentos/upload`);
  url.searchParams.append("query1", queries.query1);
  if (queries.query2) {
    url.searchParams.append("query2", queries.query2);
  }
  await fetch(url.toString(), {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
  });
}

const ClienteSchema = formSchemaClient.omit({
  file: true,
});


const PersonalSchema = formSchemaPersonal.omit({
  file: true,
});

export async function registerCliente(formData: FormData) {
  try {
    const dataRegister = ClienteSchema.parse({
      nombre: formData.get("nombre"),
      direccion: formData.get("direccion"),
      email: formData.get("email"),
      nombreCliente: formData.get("nombreCliente"),
      numeroContacto: formData.get("numeroContacto"),
      rubro: formData.get("rubro"),
      ruc: formData.get("ruc"),
      contratos: JSON.parse(formData.get("contratos") as string),
      items: JSON.parse(formData.get("items") as string),
    });

    const result2 = await registrarClienteModel(dataRegister);

    const dataFromMutation = result2?.crear_Cliente;
    console.log(dataFromMutation);
    return dataFromMutation;
  } catch (error) {
    console.error(error);
  } finally {
    revalidatePath("/dashboard/clientes/listar_clientes");
    redirect("/dashboard/clientes/listar_clientes");
  }
}

export async function registerPersonal(formData: FormData) {
  try {
    const dataRegister = PersonalSchema.parse({
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      numero: formData.get("numero"),
      fechaIngreso: formData.get("fechaIngreso"),
      fecha: formData.get("fecha"),
      salario: formData.get("salario"),
      name: formData.get("name"),
      correo: formData.get("correo"),
      nivelUser: formData.get("nivelUser"),
      clienteAsociado: formData.get("clienteAsociado"),
      username: formData.get("username"),
      password: formData.get("password"),
    });

    const result1 = await registrarPersonalModel(dataRegister);

    const dataFromMutation = result1?.crear_Personal;
    console.log(dataFromMutation);
    return dataFromMutation;
  } catch (error) {
    console.error(error);
  } finally {
    // revalidatePath("/dashboard/personal/listar_personal");
    // redirect("/dashboard/personal/listar_personal");
  }
}
