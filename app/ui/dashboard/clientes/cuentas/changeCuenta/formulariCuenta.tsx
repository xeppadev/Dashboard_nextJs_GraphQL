"use client";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import * as z from "zod";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldComponent } from "@/app/ui/components/formfieldcomponent";
import { FormFieldate } from "@/app/ui/components/formfielddate";
import { agregarUsuario } from "@/lib/actions";
import { formSchemaUsuarios } from "./schema";

export default function FormCuenta({ id }: { id: string | undefined }) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaUsuarios>>({
    defaultValues: {
      idCliente: id,
      name: "",
      email: "",
      password: "",
      username: "",
    },
    resolver: zodResolver(formSchemaUsuarios),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchemaUsuarios>> = async (
    data
  ) => {
    // Crear un nuevo objeto FormData
    const formData = new FormData();

    // Agregar los otros campos del formulario a formData
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("username", data.username);
    formData.append("idCliente", id || "");
    // Agregar el valor de nombreCliente a clienteAsociado para cada elemento en items

    try {
      // Crear un nuevo objeto FormData para los archivos
      await agregarUsuario(formData);
      // Mostrar un mensaje de éxito
      toast({
        title: "Registro Exitoso!",
        description: "El cliente ha sido registrado exitosamente.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } catch (error) {
      console.error("Error al enviar los archivos a la API externa:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <Card className="pt-4">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormFieldComponent
              control={form.control}
              name="name"
              label="Nombre"
              placeholder="Ingrese un nombre"
            />
            <FormFieldComponent
              control={form.control}
              name="email"
              label="Email"
              placeholder="Ingrese un email"
            />
            <FormFieldComponent
              control={form.control}
              name="username"
              label="Username"
              placeholder="Ingrese un username"
            />
            <FormFieldComponent
              control={form.control}
              name="password"
              label="Password"
              placeholder="Ingrese un password"
              type="password"
            />

            <div className="flex justify-end space-x-3">
              <Button type="submit" className="rounded-[10px]">
                Guardar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
