"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaClient } from "./data/schema";
import { useForm } from "react-hook-form";

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
interface FieldConfig {
  name: string;
  label: string;
  placeholder: string;
  description?: string;
  className?: string;
  accion?: string;
}
interface AccountFormProps {
  fields1: FieldConfig[];
  fields2?: FieldConfig[];
  fields3: FieldConfig[];
  buttonText?: string;
}

type AccountFormValues = z.infer<typeof formSchemaClient>;

export function AccountForm({
  fields1,
  fields2,
  fields3,
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
            {fields1.map((field, index) => (
              <div key={index}>
                <FormFieldComponent
                  control={form.control}
                  name={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                  description={field.description}
                  className={field.className}
                />
              </div>
            ))}
          </CardContent>
        </Card>
        {fields2 && (
          <Card className=" grid grid-cols-5 gap-4 justify-between ">
            <CardHeader className="col-span-2 ">
              <CardTitle className="text-lg font-bold">
                {" "}
                Datos del Contacto
              </CardTitle>
              <CardDescription>Ingrese los datos del contacto</CardDescription>
            </CardHeader>

            <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
              {fields2.map((field, index) => (
                <div key={index}>
                  <FormFieldComponent
                    control={form.control}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    description={field.description}
                    className={field.className}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        )}
        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-bold">
              Informacion de Documentos
            </CardTitle>
            <CardDescription>
              Ingrese la informacion de documentos
            </CardDescription>
          </CardHeader>
          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            <FormItemsComponent
              control={form.control}
              name="type"
              options={[
                { value: "contrato", label: "Contrato" },
                { value: "cotizaciones", label: "Cotizaciones" },
                { value: "orden de compra", label: "Orden de Compra" },
                { value: "facturas", label: "Facturas" },
                { value: "otros", label: "Otros" },
              ]}
            />
            {fields3.map((field, index) => (
              <div key={index}>
                {field.name !== "dob" ? (
                  <FormFieldComponent
                    control={form.control}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    description={field.description}
                    className={field.className}
                  />
                ) : (
                  <FormFieldate
                    control={form.control}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    description={field.description}
                    className={field.className}
                  />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-bold">
              Subida de Documentos
            </CardTitle>
            <CardDescription>Suba los documentos del cliente</CardDescription>
          </CardHeader>
          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
             <FormFileComponent
              control={form.control}
              name="file"
              label={"Subir archivo"}
              />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Observaciones</FormLabel>
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
export default AccountForm;
