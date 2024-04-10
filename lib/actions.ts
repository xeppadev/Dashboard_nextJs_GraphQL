"use server";
import { formSchemaClient } from "@/app/ui/dashboard/clientes/registrar/schema";
import { formSchemaPersonal } from "@/app/ui/dashboard/personal/registrar/schema";
import { registrarClienteModel } from "@/src/models/registrarClienteModel";
import { registrarPersonalModel } from "@/src/models/regjstroPersonalModel";
import { actualizarClienteModel } from "@/src/models/actualizarClienteModel";
import { formSchemaRegist } from "@/app/ui/dashboard/vehiculos/registrar/schema";
import { actualizarPersonalModel } from "@/src/models/actualizarPersonalModel";
import { registrarVehiculoModel } from "@/src/models/registrarVehiculoModel";
import { registrarProveedoresModel } from "@/src/models/registrarProveedores";
import { formSchemaProveedor } from "@/app/ui/dashboard/proveedores/registrar/schema";
import { formSchemaMantenimiento } from "@/app/ui/dashboard/mantenimientos/data/schema";
import { registrarMantenimientoModel } from "@/src/models/registrarMantenimientoModel";
import { registrarRepuestosModel } from "@/src/models/registrarRepuestosModel";
import { formSchemaStockSend } from "@/app/ui/dashboard/stock/registrar/schema";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import * as z from "zod";
import { Backend_URL } from "./contants";

type queries = {
  query1: string;
  query2: string | undefined;
};
// const apiURL = process.env.NEXT_API_URL;

export async function sentToExternalAPI(formData: FormData, queries: queries) {
  const session = await getServerSession(options);
  const url = new URL(`${Backend_URL}/documentos/upload`);
  url.searchParams.append("query1", queries.query1);
  if (queries.query2) {
    url.searchParams.append("query2", queries.query2);
  }
  try {
    await fetch(url.toString(), {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${session?.access_token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
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

  await actualizarPersonalModel(dataRegister);
  revalidatePath("/dashboard/personal/listar_personal");
  redirect("/dashboard/personal/listar_personal");
}

const VehiculoSchema = formSchemaRegist.omit({
  estados: true,
});

export async function registrarVehiculo(formData: FormData) {
  const dataRegister = VehiculoSchema.parse({
    placa: formData.get("placa"),
    kmRegistroInicial: formData.get("kmRegistroInicial"),
    fechaSoat: formData.get("fechaSoat"),
    fechaRevision: formData.get("fechaRevision"),
    propietario: formData.get("propietario"),
    tipoContrato: formData.get("tipoContrato"),
    vigenciaContrato: formData.get("vigenciaContrato"),
    cliente: formData.get("cliente"),
    puntaje: formData.get("puntaje"),
  });

  await registrarVehiculoModel(dataRegister);

  revalidatePath("/dashboard/vehiculos/listar_vehiculos");
  redirect("/dashboard/vehiculos/listar_vehiculos");
}

export async function registrarProveedores(formData: FormData) {
  const dataRegister = formSchemaProveedor.parse({
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    numeroContacto: formData.get("numeroContacto"),
    nombreContacto: formData.get("nombreContacto"),
    rubro: formData.get("rubro"),
    ruc: formData.get("ruc"),
    direccion: formData.get("direccion"),
  });

  await registrarProveedoresModel(dataRegister);

  revalidatePath("/dashboard/proveedores/listar_proveedores");
  redirect("/dashboard/proveedores/listar_proveedores");
}

const MantenimientoSchema = formSchemaMantenimiento
  .omit({
    file: true,
  })
  .extend({
    repuestos: z.array(
      z.object({
        producto: z.string(),
        cantidad: z.number(),
        precio: z.any(),
        marca: z.any(),
      })
    ),
    fechaSoat: z.string().min(1, { message: "La fecha es inválida." }),
    kmPrevio: z.string().min(1, { message: "El kilometraje es inválido." }),
  });

export async function registrarMantenimiento(formData: FormData) {
  const dataRegister = MantenimientoSchema.parse({
    tipo: formData.get("tipo"),
    placa: formData.get("placa"),
    kmMedido: formData.get("kmMedido"),
    fechaSoat: formData.get("fechaSoat"),
    fecha: formData.get("fecha"),
    repuestos: JSON.parse(formData.get("repuestos") as string),
    Cliente: formData.get("Cliente"),
    kmPrevio: formData.get("kmPrevio"),
    tecnico: formData.get("tecnico"),
    diagnostico: formData.get("diagnostico"),
  });
  const file = formData.getAll("file") as File[];

  // const result = await registrarMantenimientoModel(dataRegister);
  const fileData = new FormData();
  file.forEach((f, index) => {
    fileData.append("files", f);
  });

  // const dataFromMutation = result?.regisrar_mantenimiento_no_programado;

  // await sentToExternalAPI(fileData, {
  //   query1: "mantenimientos",
  //   query2: dataFromMutation,
  // });

  // revalidatePath("/dashboard/mantenimientos/listar_mantenimientos");
  // redirect("/dashboard/mantenimientos/listar_mantenimientos");
}

export async function registrarRepuestos(formData: FormData) {
  const dataRegister = formSchemaStockSend.parse({
    oldStock: JSON.parse(formData.get("oldStock") as string),
    newStock: JSON.parse(formData.get("newStock") as string),
  });

  await registrarRepuestosModel(dataRegister);

  revalidatePath("/dashboard/stock/listar_stock");
  redirect("/dashboard/stock/listar_stock");
}
