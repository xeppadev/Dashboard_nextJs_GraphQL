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
import { agregarContrato } from "@/lib/actions";
import { formSchemaContratos } from "./schema";


export default function FormContrato({ id }: { id: string | undefined }) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaContratos>>({
    defaultValues: {
      numeroContrato: "",
      fechaInicio: "",
      fechaFin: "",
      agregarContratoId: id,
    },
    resolver: zodResolver(formSchemaContratos),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchemaContratos>> = async (
    data
  ) => {
    // Crear un nuevo objeto FormData
    const formData = new FormData();

    // Agregar los otros campos del formulario a formData
    formData.append("numeroContrato", data.numeroContrato);
    formData.append("fechaInicio", data.fechaInicio);
    formData.append("fechaFin", data.fechaFin);
    formData.append("agregarContratoId", id || "");
    // Agregar el valor de nombreCliente a clienteAsociado para cada elemento en items

    try {
      // Crear un nuevo objeto FormData para los archivos
      await agregarContrato(formData)
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormFieldComponent
              control={form.control}
              name="numeroContrato"
              label="Numero de Contrato"
              placeholder="Ingrese un numero de contrato"
            />
            <FormFieldate
              control={form.control}
              name="fechaInicio"
              label="Fecha de Inicio"
              placeholder="Ingrese una fecha de inicio"
            />
            <FormFieldate
              control={form.control}
              name="fechaFin"
              label="Fecha de Fin"
              placeholder="Ingrese una fecha de fin"
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
