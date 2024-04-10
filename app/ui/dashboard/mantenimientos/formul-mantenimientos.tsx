"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaMantenimiento } from "./data/schema";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { Form } from "@/components/ui/form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { FormTextComponent } from "../../components/formText";
import { FormFieldComponent } from "../../components/formfieldcomponent";
import { registrarMantenimiento } from "@/lib/actions";
import { useToast } from "@/components/ui/use-toast";
import { FormFileComponent } from "../../components/formfile";
import { FormSelectComponent } from "@/app/ui/components/formselect";
import { RepuestoSearchType } from "@/src/generated/graphql";
import ComponentOptions from "../../components/optionsearch";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ToastAction } from "@/components/ui/toast";
type FormularioProps = {
  repuestos: RepuestoSearchType[];
  placas: { value: string; label: string }[];
  obtenerInfo: {
    _id?: string | null | undefined;
    fechaSoat?: any;
    kmActual?: number | null | undefined;
    cliente?: string | null | undefined;
  };
};

type AccountFormValues = z.infer<typeof formSchemaMantenimiento>;

function MantenimienForm({ repuestos, placas, obtenerInfo }: FormularioProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaMantenimiento>>({
    resolver: zodResolver(formSchemaMantenimiento),
    mode: "onChange",
    defaultValues: {
      diagnostico: "",
      tipo: "",
      kmMedido: "",
      kmPrevio: "",
      fechaSoat: "",
      Cliente: "",
      tecnico: "1242",
      file: [],
      placa: "",
      fecha: new Date().toISOString(),
    },
  });

  React.useEffect(() => {
    if (obtenerInfo.fechaSoat) {
      form.setValue(
        "fechaSoat",
        format(new Date(obtenerInfo.fechaSoat), "PPP", {
          locale: es,
        })
      );
    }

    if (obtenerInfo.kmActual) {
      form.setValue("kmPrevio", `${obtenerInfo.kmActual.toString()} km`);
    }
  }, [obtenerInfo, form]);

  const onSubmit: SubmitHandler<
    z.infer<typeof formSchemaMantenimiento>
  > = async (data) => {
    const formData = new FormData();
    const { file } = form.getValues();
    formData.append("placa", data.placa);
    formData.append("fechaSoat", obtenerInfo.fechaSoat);
    formData.append("kmPrevio", obtenerInfo.kmActual?.toString() || "");
    formData.append("kmMedido", data.kmMedido);
    formData.append("repuestos", JSON.stringify(repuestos));
    formData.append("Cliente", obtenerInfo.cliente?.toString() || "");
    formData.append("tecnico", data.tecnico);
    formData.append("diagnostico", data.diagnostico);
    formData.append("tipo", data.tipo);
    formData.append("fecha", data.fecha);

    // Agregar el archivo al objeto formData
    file.forEach((f, index) => {
      formData.append("file", f.file);
    });

    try {
      await registrarMantenimiento(formData);
      toast({
        title: "Operación exitosa",
        description: "El cliente ha sido registrado correctamente",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } catch (error) {
      console.error("Error al enviar los archivos a la API externa:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again"> Try again</ToastAction>,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <Card className=" py-4 h-full ">
          <CardContent className="flex flex-col  px-2 mx-4 space-y-1">
            <CardTitle className="text-lg font-semibold mr-auto">
              Detalles del Mantenimiento
            </CardTitle>

            <div className=" p-0 space-x-3 flex-row flex w-full  ">
              <ComponentOptions
                paramName="placa"
                placeholder="Placa de vehículo"
                options={placas}
                className="w-1/4"
                className2="w-full h-12 mt-2"
                onValueChange={(value) => {
                  form.setValue("placa", value);
                }}
              />
              <FormFieldComponent
                control={form.control}
                name="fechaSoat"
                placeholder="Fecha de Soat"
                className="w-1/4"
              />

              <FormFieldComponent
                control={form.control}
                name="kmPrevio"
                placeholder="kilometraje Previo"
                className="w-1/4"
              />
              <FormFieldComponent
                control={form.control}
                name="kmMedido"
                placeholder="kilometraje Medido"
                className="w-1/4"
              />
              <FormSelectComponent
                placeholder="Tipo de Mantenimiento"
                control={form.control}
                name="tipo"
                className2="h-12"
                options={[
                  {
                    value: "mantenimiento preventivo",
                    label: "Mantenimiento Preventivo",
                  },
                  {
                    value: "mantenimiento correctivo",
                    label: "Mantenimiento Correctivo",
                  },
                ]}
              />
            </div>
            <div className="space-y-2">
              <CardTitle className="text-lg font-semibold">
                Diagnostico del Vehiculo
              </CardTitle>
              <FormTextComponent
                control={form.control}
                name="diagnostico"
                placeholder={"Describe la informacion"}
              />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold my-2">
                Documentos del Mantenimiento
              </CardTitle>
              <FormFileComponent control={form.control} name="file" />
            </div>
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
export default MantenimienForm;
