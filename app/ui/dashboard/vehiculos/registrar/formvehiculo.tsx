"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaClient } from "./data/schema";
import { useForm } from "react-hook-form";
import { Container } from "@/components/ui/container";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormDescription,
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
interface FieldConfig {
  name: string;
  label: string;
  placeholder: string;
  description?: string;
  className?: string;
  accion?: string;
}
interface AccountFormProps {
  
  buttonText?: string;
}

type AccountFormValues = z.infer<typeof formSchemaClient>;

export function VehiculoForm({

  buttonText,
}: AccountFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaClient>>({
    resolver: zodResolver(formSchemaClient),
    mode: "onChange",
  });

  const onSubmit = (data: AccountFormValues) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append("type", data.type);
    // formData.append("dob", data.dob.toString());
    // formData.append("numerodocumento", data.numerodocumento);
    // formData.append("minera", data.minera);
    // formData.append("bio", data.bio);
    // formData.append("file", selectedFile as Blob);
    // formData.append("items", JSON.stringify(data.items));
    // const res = await fetch("/api/form", {
    //   method: "POST",
    //   body: formData,
    // });

    // if (res.ok) {
    //   toast({
    //     description: `usuario  registrado con éxito`,
    //     action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    //   });
    // }
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
              name="licensePlate"
              placeholder="Ingrese la placa del vehiculo"
            />
            <FormFieldComponent
              control={form.control}
              label="Kilometraje Actual"
              name="mileage"
              placeholder="Ingrese el kilometraje del vehiculo"
            />

            <FormSelectComponent
              control={form.control}
              label="Soat Vigente"
              placeholder="Seleccione una opcion"
              name="yesNoSelect"
              options={[
                { value: "Sí", label: "Sí" },
                { value: "No", label: "No" },
              ]}
              className="w-full"
              className2="h-12"
            />
            <FormFieldate
              control={form.control}
              name="expirationDate"
              label="Fecha de Vencimiento"
              placeholder="fecha de vencimiento de Soat"
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripcion del estado de la Unidad</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe la informacion ."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-semibold">
              {" "}
              Datos del Contrato con el dueño de la Unidad
            </CardTitle>
            <CardDescription>Ingrese los datos del Contrato</CardDescription>
          </CardHeader>

          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            <FormFieldComponent
              control={form.control}
              label="Propietario del Vehiculo"
              name="personName"
              placeholder="Ingrese el nombre del propietario"
            />
            <FormFieldate
              control={form.control}
              name="startDate"
              label="Inicio de Contrato"
              placeholder="fecha de inicio de contrato"
            />
            <FormFieldate
              control={form.control}
              name="endDate"
              label="Fin del Contrato"
              placeholder="fecha de fin de contrato"
            />
            <FormFieldComponent
              control={form.control}
              name="pagoal"
              label="Pago de Alquiler del Vehiculo"
              placeholder="Ingrese el costo de alquiler"
            />
           
           
          </CardContent>
        </Card>
        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-semibold">
              {" "}
              Datos del Contrato con el Cliente 
            </CardTitle>
            <CardDescription>Ingrese los datos del Contrato</CardDescription>
          </CardHeader>

          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
          <FormFieldComponent
              control={form.control}
              name="clientvehi"
              label="Cliente del Vehiculo"
              placeholder="ingrese un cliente"
            />
            <FormFieldate
              control={form.control}
              name="startDate"
              label="Inicio de Contrato"
              placeholder="fecha de inicio de contrato"
            />
            <FormFieldate
              control={form.control}
              name="endDate"
              label="Fin del Contrato"
              placeholder="fecha de fin de contrato"
            />
         
             <FormFieldComponent
              control={form.control}
              name="pagocli"
              label="Pago Alquiler del Cliente"
              placeholder="ingrese el pago del cliente"
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
                <Container className="2xl:w-[88%] w-[85%] border-input ">
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
                  className="2xl:w-[12%] w-[15%]"
                  className2="h-12"
                />
              </div>
            ))}
            
          </CardContent>
        </Card>

        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-semibold">
              Subida de Documentos
            </CardTitle>
            <CardDescription>Suba los documentos de la Unidad</CardDescription>
          </CardHeader>
          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            <FormFileComponent
              control={form.control}
              name="file"
              label={"Subir archivo"}
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
            {buttonText}
          </Button>
        </div>
      </form>
    </Form>
  );
}
export default VehiculoForm;
