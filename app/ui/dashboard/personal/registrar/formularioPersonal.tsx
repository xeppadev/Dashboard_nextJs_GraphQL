"use client";

import { Form } from "@/components/ui/form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as z from "zod";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { formSchemaPersonal } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSelectComponent } from "@/app/ui/components/formselect";
import { FormFieldComponent } from "../../../components/formfieldcomponent";
import { FormFieldate } from "../../../components/formfielddate";
import { FormFileComponent } from "../../../components/formfile";
import { registerPersonal } from "@/lib/actions";

export default function FormPersonal() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaPersonal>>({
    defaultValues: {
      nombre: "",
      email: "",
      file: [],
      username: "",
      password: "",
      nivelUser: "",
      fecha: "",
      numero: "",
      salario: "",
      fechaIngreso: "",
      name: "",
      correo: "",
    },
    resolver: zodResolver(formSchemaPersonal),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchemaPersonal>> = async (
    data
  ) => {
    // Crear un nuevo objeto FormData
    const formData = new FormData();
    // Obtener el valor de file del formulario
    const { file } = form.getValues();
    // Agregar los otros campos del formulario a formData
    formData.append("name", data.name);
    formData.append("numero", data.numero);
    formData.append("email", data.email);
    formData.append("fechaIngreso", data.fechaIngreso);
    formData.append("fecha", data.fecha);
    formData.append("salario", data.salario);
    formData.append("nombre", data.nombre);
    formData.append("correo", data.correo);
    formData.append("nivelUser", data.nivelUser);
    formData.append("username", data.username);
    formData.append("password", data.password);

    // Agregar el archivo al objeto formData
    file.forEach((f, index) => {
      formData.append("file", f.file);
    });

    try {
      await registerPersonal(formData);
      // Crear un nuevo objeto FormData
      toast({
        title: "Operación exitosa",
        description: "El personal ha sido registrado correctamente",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } catch (error) {
      console.error("Error al enviar los archivos a la API externa:", error);
      toast({
        variant: "destructive",
        title: "Ocurrio un error.",
        description: "Ocurrio un problema con la solicitud.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card className=" grid grid-cols-1 md:grid-cols-5 md:gap-4 justify-between">
          <CardHeader className="md:col-span-2">
            <CardTitle className="text-lg font-bold">
              {" "}
              Datos del Personal
            </CardTitle>
            <CardDescription>Ingrese los datos del Personal</CardDescription>
          </CardHeader>

          <CardContent className="md:col-span-3 px-7 py-3 md:py-7 md:col-start-3 space-y-5 ">
            <FormFieldComponent
              control={form.control}
              name="nombre"
              label="Nombre de Personal"
              placeholder="Ingrese un nombre"
            />
            <FormFieldComponent
              control={form.control}
              name="email"
              label="Correo del Personal"
              placeholder="Ingrese un email"
            />
            <FormFieldComponent
              control={form.control}
              name="numero"
              label="Numero de Personal"
              placeholder="Ingrese un numero de telefono"
            />
            <FormFieldate
              control={form.control}
              name="fechaIngreso"
              label="Fecha de Ingreso"
              placeholder="Ingrese una fecha de Ingreso"
            />
          </CardContent>
        </Card>

        <Card className=" grid grid-cols-1 md:grid-cols-5 gap-4 justify-between ">
          <CardHeader className=" md:col-span-2">
            <CardTitle className="text-lg font-bold">
              {" "}
              Informacion del Salario
            </CardTitle>
            <CardDescription>Ingrese los datos del Salario</CardDescription>
          </CardHeader>

          <CardContent className="md:col-span-3 px-7 py-3 md:py-7 md:col-start-3 space-y-5 ">
            <FormFieldate
              control={form.control}
              name="fecha"
              label="Fecha de Registro"
              placeholder="Ingrese una fecha de Registro"
            />
            <FormFieldComponent
              control={form.control}
              name="salario"
              label="Ingrese el Salario actual ($)"
              placeholder="Ingrese un salario"
            />
          </CardContent>
        </Card>

        <Card className="grid grid-cols-1 md:grid-cols-5 gap-4 justify-between">
          <CardHeader className="md:col-span-2 pb-2">
            <CardTitle className="text-lg font-bold">
              Subida de Documentos
            </CardTitle>
            <CardDescription>Suba los documentos del Personal</CardDescription>
          </CardHeader>
          <CardContent className="md:col-span-3 px-7 py-3 md:py-7 md:col-start-3 space-y-5 ">
            <FormFileComponent
              control={form.control}
              name="file"
              label="Subir archivo"
            />
          </CardContent>
        </Card>
        <Card className="grid grid-cols-1 md:grid-cols-5 gap-4 justify-between">
          <CardHeader className="md:col-span-2 pb-2">
            <CardTitle className="text-lg font-bold">
              Registro de Personal
            </CardTitle>
            <CardDescription>Agregue la Cuenta del Personal</CardDescription>
          </CardHeader>
          <CardContent className="md:col-span-3 px-7 py-4 md:py-7 md:col-start-3 space-y-5 pb-5">
            <FormFieldComponent
              control={form.control}
              name="name"
              label="Nombre de Personal"
              placeholder="Ingrese un nombre"
            />

            <FormFieldComponent
              control={form.control}
              name="username"
              label="Nombre de Usuario"
              placeholder="Ingrese un nombre de usuario"
            />
            <FormFieldComponent
              control={form.control}
              name="correo"
              label="Correo"
              placeholder="Ingrese un correo electronico"
            />
            <FormFieldComponent
              control={form.control}
              name="password"
              label="Contraseña"
              placeholder="Ingrese una contraseña"
              type="password"
            />
            <FormSelectComponent
              control={form.control}
              name="nivelUser"
              placeholder="Seleccione un nivel de usuario"
              label="Nivel de Usuario"
              options={[{ value: "tecnico", label: "Tecnico" }]}
              className="w-full"
              className2="h-12"
            />
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-3">
          <Link href="/dashboard/personal/listar_personal">
            <Button variant="ghost" className="rounded-[10px] w-full">
              Cancelar
            </Button>
          </Link>
          <Button type="submit" className="rounded-[10px]">
            Registrar
          </Button>
        </div>
      </form>
    </Form>
  );
}
