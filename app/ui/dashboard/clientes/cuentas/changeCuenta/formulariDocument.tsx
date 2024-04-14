"use client";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFileComponent } from "@/app/ui/components/formfile";
import { addFilesToFormData } from "@/lib/actions";
import { formSchemaDocumentos } from "./schema";

export default function FormDocument({ id }: { id: string | undefined }) {
   
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaDocumentos>>({
    defaultValues: {
      file: [],
    },
    resolver: zodResolver(formSchemaDocumentos),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchemaDocumentos>> = async (
    data
  ) => {
    // Crear un nuevo objeto FormData
    const formData = new FormData();
    // Obtener el valor de file del formulario
    const { file } = form.getValues();
    // Convertir data.file a un array y agregar cada archivo a formData
    file.forEach((f, index) => {
      formData.append("file", f.file);
    });

    try {
      // Enviar los archivos a la API externa
      await addFilesToFormData(formData, id);

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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 px-3">
        <FormFileComponent
          control={form.control}
          name="file"
          label="Subir archivo"
        />

        <div className="flex justify-end space-x-3">
          <Button type="submit" className="rounded-[10px]">
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  );
}
