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
import { formSchemaProveedor } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldComponent } from "../../../components/formfieldcomponent";
import { registrarProveedores } from "@/lib/actions";

export default function FormProveedor() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaProveedor>>({
    defaultValues: {
      nombre: "",
      email: "",
      numeroContacto: "",
      nombreContacto: "",
      rubro: "",
      ruc: "",
      direccion: "",
    },
    resolver: zodResolver(formSchemaProveedor),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchemaProveedor>> = async (
    data
  ) => {
    // Crear un nuevo objeto FormData
    const formData = new FormData();

    // Agregar los otros campos del formulario a formData
    formData.append("nombre", data.nombre);
    formData.append("email", data.email);
    formData.append("numeroContacto", data.numeroContacto);
    formData.append("nombreContacto", data.nombreContacto);
    formData.append("rubro", data.rubro);
    formData.append("ruc", data.ruc);
    formData.append("direccion", data.direccion);

    try {
      await registrarProveedores(formData);
      // Crear un nuevo objeto FormData
      toast({
        title: "Operación exitosa",
        description: "El Proveedor ha sido registrado correctamente",
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
        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-bold">
              {" "}
              Datos del Proveedor
            </CardTitle>
            <CardDescription>Ingrese los datos del Proveedor</CardDescription>
          </CardHeader>

          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            <FormFieldComponent
              control={form.control}
              name="nombre"
              label="Nombre de Proveedor"
              placeholder="Ingrese un nombre"
            />
            <FormFieldComponent
              control={form.control}
              name="rubro"
              label="Rubro del Proveedor"
              placeholder="Ingrese un rubro"
            />
            <FormFieldComponent
              control={form.control}
              name="direccion"
              label="Direccion del Proveedor"
              placeholder="Ingrese una direccion"
            />
            <FormFieldComponent
              control={form.control}
              name="ruc"
              label="Ruc del Proveedor"
              placeholder="Ingrese un numero de RUC"
            />
          </CardContent>
        </Card>

        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-bold">
              {" "}
              Datos del Contacto
            </CardTitle>
            <CardDescription>Ingrese los datos del Contacto</CardDescription>
          </CardHeader>

          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            <FormFieldComponent
              control={form.control}
              name="nombreContacto"
              label="Nombre de Contacto"
              placeholder="Ingrese un nombre de Contacto"
            />
            <FormFieldComponent
              control={form.control}
              name="numeroContacto"
              label="Numero de Contacto"
              placeholder="Ingrese un numero"
            />
            <FormFieldComponent
              control={form.control}
              name="email"
              label="Correo de Contacto"
              placeholder="Ingrese un correo electronico"
            />
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-3">
          <Link href="/dashboard/proveedores/listar_proveedores">
            <Button variant="ghost" className="rounded-[10px]">
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
