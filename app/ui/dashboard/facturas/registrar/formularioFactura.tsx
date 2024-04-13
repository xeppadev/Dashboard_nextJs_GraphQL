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
import { formSchemaFactura } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSelectComponent } from "@/app/ui/components/formselect";
import { FormFieldComponent } from "../../../components/formfieldcomponent";
import { FormFieldate } from "../../../components/formfielddate";
import { FormFileComponent } from "../../../components/formfile";
import { registrarFactura } from "@/lib/actions";

type FormFacturaProps = {
  clientes: {
    value: string;
    label: string;
  }[];
  propietarios: {
    value: string;
    label: string;
  }[];
  proveedores: {
    value: string;
    label: string;
  }[];
};

export default function FormFactura({
  clientes,
  propietarios,
  proveedores,
}: FormFacturaProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaFactura>>({
    defaultValues: {
      tipoFactura: "",
      involucrado: "",
      fecha: "",
      montoParcial: "",
      igv: "",
      numeroFactura: "",
      detraccion: "",
      file: [],
    },
    resolver: zodResolver(formSchemaFactura),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchemaFactura>> = async (
    data
  ) => {
    // Crear un nuevo objeto FormData
    const formData = new FormData();
    // Obtener el valor de file del formulario
    const { file } = form.getValues();
    //  Agregar los otros campos del formulario a formData
    formData.append("tipoFactura", data.tipoFactura);
    formData.append("involucrado", data.involucrado || "");
    formData.append("fecha", data.fecha);
    formData.append("montoParcial", data.montoParcial);
    formData.append("igv", data.igv);
    formData.append("numeroFactura", data.numeroFactura || "");
    formData.append("detraccion", data.detraccion || "");

    // Agregar el archivo al objeto formData
    file.forEach((f, index) => {
      formData.append("file", f.file);
    });

    try {
      await registrarFactura(formData);
      // Crear un nuevo objeto FormData
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
              Datos de la Factura
            </CardTitle>
            <CardDescription>Ingrese los datos de la factura</CardDescription>
          </CardHeader>

          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            <FormSelectComponent
              control={form.control}
              name="tipoFactura"
              label="Tipo de Factura"
              placeholder="Ingrese un tipo de factura"
              options={[
                {
                  value: "Factura a Propietario Vehicular",
                  label: "Factura a Propietario Vehicular",
                },
                { value: "Factura a Cliente", label: "Factura a Cliente" },
                { value: "Compra Adicional", label: "Compra Adicional" },
                { value: "Compra de Repuestos", label: "Compra de Repuestos" },
              ]}
              className="w-full"
              className2="h-12"
            />
            {form.watch("tipoFactura") ===
              "Factura a Propietario Vehicular" && (
              <FormSelectComponent
                control={form.control}
                name="involucrado"
                label="Propietario Involucrada"
                placeholder="Ingrese un nombre"
                options={propietarios}
                className2="h-12"
                className="w-full"
              />
            )}
            {form.watch("tipoFactura") === "Factura a Cliente" && (
              <FormSelectComponent
                control={form.control}
                name="involucrado"
                label="Cliente Involucrada"
                placeholder="Ingrese un nombre"
                options={clientes}
                className2="h-12"
                className="w-full"
              />
            )}
            {form.watch("tipoFactura") === "Compra de Repuestos" && (
              <FormSelectComponent
                control={form.control}
                name="involucrado"
                label="Proveedor Involucrada"
                placeholder="Ingrese un nombre"
                options={proveedores}
                className2="h-12"
                className="w-full"
              />
            )}

            <FormFieldate
              control={form.control}
              name="fecha"
              label="Fecha de Factura"
              placeholder="Ingrese una fecha"
            />
            <FormFieldComponent
              control={form.control}
              name="montoParcial"
              label="Monto Parcial (S/.)"
              placeholder="Ingrese un monto"
            />
            <FormFieldComponent
              control={form.control}
              name="igv"
              label="IGV (S/.)"
              placeholder="Ingrese un valor"
            />
            {(form.watch("tipoFactura") === "Factura a Propietario Vehicular" ||
              form.watch("tipoFactura") === "Factura a Cliente" ||
              form.watch("tipoFactura") === "Compra de Repuestos") && (
              <FormFieldComponent
                control={form.control}
                name="numeroFactura"
                label="Numero de Factura"
                placeholder="Ingrese un numero"
              />
            )}
            {form.watch("tipoFactura") ===
              "Factura a Propietario Vehicular" && (
              <FormFieldComponent
                control={form.control}
                name="detraccion"
                label="Detracción (S/.)"
                placeholder="Ingrese un valor"
              />
            )}
          </CardContent>
        </Card>

        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-bold">
              Subida de Documentos
            </CardTitle>
            <CardDescription>Suba los documentos del Personal</CardDescription>
          </CardHeader>
          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            <FormFileComponent
              control={form.control}
              name="file"
              label="Subir archivo"
            />
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-3">
          <Link href="/dashboard/clientes/listar_clientes">
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
