"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaClient } from "./data/schema";
import { useForm, SubmitHandler } from "react-hook-form";
import { Container } from "@/components/ui/container";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { FormItemsComponent } from "../../../components/formitems";
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
import { FormFileComponent } from "../../../components/formfile";
import { FormSelectComponent } from "@/app/ui/components/formselect";

type AccountFormValues = z.infer<typeof formSchemaClient>;

export function VehiculoForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaClient>>({
    resolver: zodResolver(formSchemaClient),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchemaClient>> = async (
    values
  ) => {
    const formData = new FormData();

      formData.append("placa", values.placa);
      formData.append("kmRegistroInicial", values.kmRegistroInicial)
      formData.append("fechaSoat", values.fechaSoat)
      formData.append("fechaRevision", values.fechaRevision)
      formData.append("propietario", values.propietario)
      formData.append("tipoContrato", values.tipoContrato)
      formData.append("vigenciaContrato", values.vigenciaContrato)
      formData.append("cliente", values.cliente)


    try {
      console.log(values);
      toast({
        title: "Operación exitosa",
        description: "El cliente ha sido registrado correctamente",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } catch (error) {
      console.error(error);
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
      <form className="space-y-10">
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
              label="Fecha de Vencimiento"
              placeholder="fecha de vencimiento de Soat"
            />
            <FormFieldate
              control={form.control}
              name="fechaRevision"
              label="Fecha de Vencimiento"
              placeholder="fecha de vencimiento de Soat"
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
            <FormFieldate
              control={form.control}
              name="tipoContrato"
              label="Inicio de Contrato"
              placeholder="fecha de inicio de contrato"
            />
            <FormFieldate
              control={form.control}
              name="vigenciaContrato"
              label="Fin del Contrato"
              placeholder="fecha de fin de contrato"
            />
            <FormFieldComponent
              control={form.control}
              name="cliente"
              label="Pago de Alquiler del Vehiculo"
              placeholder="Ingrese el costo de alquiler"
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
            <div className="flex justify-between  w-[98%] space-x-4">
              <CardTitle className="text-sm font-medium">
                {" "}
                Elementos Critico
              </CardTitle>
              <CardTitle className="text-sm font-medium">
                {" "}
                Estado Actual
              </CardTitle>
            </div>
            {[...Array(5)].map((_, index) => (
              <div key={index} className="inline-flex  w-full space-x-4">
                <Container className="2xl:w-[86%] w-[85%] border-input ">
                  <h4> Elemento {index + 1}</h4>
                </Container>

                <FormSelectComponent
                  control={form.control}
                  placeholder=""
                  name={`select${index + 1}`}
                  options={[
                    { value: "1", label: "⭐ 1" },
                    { value: "2", label: "⭐ 2" },
                    { value: "3", label: "⭐ 3" },
                    { value: "4", label: "⭐ 4" },
                    { value: "5", label: "⭐ 5" },
                    { value: "6", label: "⭐ 6" },
                    { value: "7", label: "⭐ 7" },
                    { value: "8", label: "⭐ 8" },
                    { value: "9", label: "⭐ 9" },
                    { value: "10", label: "⭐ 10" },
                  ]}
                  className="2xl:w-[10%] w-[15%]"
                  className2="h-12"
                />
              </div>
            ))}
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
export default VehiculoForm;
