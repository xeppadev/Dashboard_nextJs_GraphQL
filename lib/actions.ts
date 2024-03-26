"use server";
import { formSchemaClient } from "@/app/ui/dashboard/clientes/registrar/schema";
import { formSchemaPersonal } from "@/app/ui/dashboard/personal/registrar/schema";
import { registrarClienteModel } from "@/src/models/registrarClienteModel";
import { registrarPersonalModel } from "@/src/models/regjstroPersonalModel";
import { actualizarClienteModel } from "@/src/models/actualizarCliente";
import { actualizarPersonalModel } from "@/src/models/actualizarPersonal";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import * as z from "zod";

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
  const file = formData.getAll("file") as File[];
  const result2 = await registrarClienteModel(dataRegister);
  const fileData = new FormData();
  file.forEach((f, index) => {
    fileData.append("files", f);
  });
  const dataFromMutation = result2?.crear_Cliente;

  await sentToExternalAPI(fileData, {
    query1: "clientes",
    query2: dataFromMutation,
  });

  revalidatePath("/dashboard/clientes/listar_clientes");
  redirect("/dashboard/clientes/listar_clientes");
}

const ClienteSchemaChange = formSchemaClient
  .omit({
    contratos: true,
    file: true,
    items: true,
  })
  .extend({
    _id: z.string(),
  });

export async function actualizarCliente(formData: FormData) {
  const dataRegister = ClienteSchemaChange.parse(
    Object.fromEntries(formData.entries())
  );

  await actualizarClienteModel(dataRegister);
  revalidatePath("/dashboard/clientes/listar_clientes");
  redirect("/dashboard/clientes/listar_clientes");
}

export async function registerPersonal(formData: FormData) {
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
  const file = formData.getAll("file") as File[];

  const result1 = await registrarPersonalModel(dataRegister);
  const fileData = new FormData();
  file.forEach((f, index) => {
    fileData.append("files", f);
  });

  const dataFromMutation = result1?.crear_Personal;

  await sentToExternalAPI(fileData, {
    query1: "personals",
    query2: dataFromMutation,
  });

  revalidatePath("/dashboard/personal/listar_personal");
  redirect("/dashboard/personal/listar_personal");
}

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

export async function actualizarPersonal(formData: FormData) {
  const dataRegister = PeronalSchemaChange.parse(
    Object.fromEntries(formData.entries())
  );
  console.log(dataRegister);
  await actualizarPersonalModel(dataRegister);
  revalidatePath("/dashboard/personal/listar_personal");
  redirect("/dashboard/personal/listar_personal");
}

// export async function registrarVehiculo (formData: FormData) {
//   const dataRegister = VehiculoSchema.parse({
//     placa: formData.get("placa"),
//     marca: formData.get("marca"),
//     modelo: formData.get("modelo"),
//     anio: formData.get("anio"),
//     color: formData.get("color"),
//     capacidad: formData.get("capacidad"),
//     tipo: formData.get("tipo"),
//     cliente: formData.get("cliente"),
//     conductor: formData.get("conductor"),
//     rating: formData.get("rating"),
//     file: formData.get("file"),
//   });
//   const file = formData.getAll("file") as File[];

//   const result1 = await registrarVehiculoModel(dataRegister);
//   const fileData = new FormData();
//   file.forEach((f, index) => {
//     fileData.append("files", f);
//   });

//   const dataFromMutation = result1?.crear_Vehiculo;

//   await sentToExternalAPI(fileData, {
//     query1: "vehiculos",
//     query2: dataFromMutation,
//   });

//   revalidatePath("/dashboard/vehiculos/listar_vehiculos");
//   redirect("/dashboard/vehiculos/listar_vehiculos");
// }
