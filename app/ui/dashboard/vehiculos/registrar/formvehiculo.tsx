"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaRegist } from "./schema";
import { useForm, SubmitHandler } from "react-hook-form";
import Rating from "@/app/ui/components/rating";
import { registrarVehiculo } from "@/lib/actions";
import Link from "next/link";
import { Form } from "@/components/ui/form";
import * as z from "zod";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormFieldComponent } from "../../../components/formfieldcomponent";
import { useToast } from "@/components/ui/use-toast";
import { FormFieldate } from "../../../components/formfielddate";
import { FormSelectComponent } from "@/app/ui/components/formselect";

const formSchemaVehicle = formSchemaRegist.omit({
  estados: true,
});

type dataProps = {
  data: {
    value: string;
    label: string;
  }[];
};

export function VehiculoForm({ data }: dataProps) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchemaRegist>>({
    resolver: zodResolver(formSchemaRegist),
    mode: "onChange",
    defaultValues: {
      placa: "",
      kmRegistroInicial: "",
      fechaSoat: "",
      fechaRevision: "",
      propietario: "",
      tipoContrato: "",
      vigenciaContrato: "",
      cliente: "",
      puntaje: "",
      estados: [],
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchemaVehicle>> = async (
    values
  ) => {
    const formData = new FormData();

    formData.append("placa", values.placa);
    formData.append("kmRegistroInicial", values.kmRegistroInicial);
    formData.append("fechaSoat", values.fechaSoat);
    formData.append("fechaRevision", values.fechaRevision);
    formData.append("propietario", values.propietario);
    formData.append("tipoContrato", values.tipoContrato);
    formData.append("vigenciaContrato", values.vigenciaContrato);
    formData.append("cliente", values.cliente);
    formData.append("puntaje", values.puntaje);
    console.log(values.puntaje);

    try {
      await registrarVehiculo(formData);
      toast({
        title: "Operación exitosa",
        description: "El vehiculo ha sido registrado correctamente",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } catch (error) {
      console.error(error);
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-semibold">
              {" "}
              Datos de la Unidad
            </CardTitle>
            <CardDescription>Ingrese los datos del Vehiculo</CardDescription>
          </CardHeader>

          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            <FormFieldComponent
              control={form.control}
              label="Placa del Vehiculo"
              name="placa"
              placeholder="Ingrese la placa del vehiculo"
            />
            <FormFieldComponent
              control={form.control}
              label="Kilometraje Actual"
              name="kmRegistroInicial"
              placeholder="Ingrese el kilometraje del vehiculo"
            />

            <FormFieldate
              control={form.control}
              name="fechaSoat"
              label="vigencia de Soat"
              placeholder="fecha de vencimiento de Soat"
            />
            <FormFieldate
              control={form.control}
              name="fechaRevision"
              label="Fecha de Revision Tecnica"
              placeholder="fecha de Revision Tecnica"
            />
          </CardContent>
        </Card>

        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-semibold">
              {" "}
              Datos del Contrato
            </CardTitle>
            <CardDescription>Ingrese los datos del Contrato</CardDescription>
          </CardHeader>

          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            <FormFieldComponent
              control={form.control}
              label="Propietario del Vehiculo"
              name="propietario"
              placeholder="Ingrese el nombre del propietario"
            />
            <FormSelectComponent
              control={form.control}
              label="Tipo de Contrato"
              placeholder="Seleccione un tipo de contrato"
              name="tipoContrato"
              options={[
                {
                  value: "Alquiler a todo costo",
                  label: "Alquiler a todo costo",
                },
                {
                  value: "Alquiler con valorizaciones",
                  label: "Alquiler con valorizaciones",
                },
              ]}
              className="w-full"
              className2="h-12"
            />
            <FormSelectComponent
              control={form.control}
              className="w-full"
              className2="h-12"
              name="cliente"
              label="Cliente"
              placeholder="Seleccione un cliente"
              options={data}
            />
            <FormFieldate
              control={form.control}
              name="vigenciaContrato"
              label="Fin del Contrato"
              placeholder="fecha de fin de contrato"
            />
          </CardContent>
        </Card>

        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-semibold">
              {" "}
              Evaluacion de la Unidad
            </CardTitle>
            <CardDescription>
              Ingrese los valores correctos para valorar la unidad
            </CardDescription>
          </CardHeader>

          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            <Rating
              className="2xl:w-[10%] w-[15%]"
              className2="h-12"
              placeholder=""
              onValueChange={(value, index) => {
                // Actualizar el valor del estado
                const estados = [...form.getValues().estados];
                estados[index] = parseInt(value);
                // Establecer la copia del estado como el nuevo estado
                form.setValue("estados", estados);

                // Calcular el promedio de `estados` y actualizar el valor de `promedio`
                const promedio =
                  estados.reduce((acc, curr) => acc + curr, 0) / estados.length;
                // Establecer el promedio en otro campo del estado
                form.setValue("puntaje", promedio.toString());
              }}
            />
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-3">
          <Link href="/dashboard/vehiculos/listar_vehiculos">
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
export default VehiculoForm;
