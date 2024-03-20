"use server";
import { formSchemaClient } from "@/app/ui/dashboard/clientes/registrar/formulario/schema";
import { registrarClienteModel } from "@/src/models/registrarClienteModel";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

type queries = {
  query1: string;
  query2: string | undefined;
};
const apiURL = process.env.NEXT_API_URL;

async function sentToExternalAPI(formData: FormData, queries: queries) {
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
  items: true,
  fechaFin: true,
  fechaInicio: true,
  numeroContrato: true,
});

export async function registerCliente(formData: FormData) {
  const data = ClienteSchema.parse({
    nombre: formData.get("nombre"),
    direccion: formData.get("direccion"),
    email: formData.get("email"),
    nombreCliente: formData.get("nombreCliente"),
    numeroContacto: formData.get("numeroContacto"),
    rubro: formData.get("rubro"),
    ruc: formData.get("ruc"),
  });

  const result = await registrarClienteModel(data);
  // Crear un nuevo FormData para los archivos

  const fileData = new FormData();
  const files = formData.getAll("file");
  files.forEach((file) => {
    fileData.append("files", file);
  });
  //   console.log(fileData);

  const dataFromMutation = result?.crear_Cliente;
  try {
    await sentToExternalAPI(fileData, {
      query1: "clientes",
      query2: dataFromMutation,
    });
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/dashboard/clientes/listar_clientes");
  redirect("/dashboard/clientes/listar_clientes");
}
