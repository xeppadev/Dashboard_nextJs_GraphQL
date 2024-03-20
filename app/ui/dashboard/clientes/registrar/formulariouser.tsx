"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaClient } from "./formulario/schema";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { SolarTrashBinTrashBold, IcRoundAdd } from "@/app/lib/icons";
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
  };

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  function handleAddContact() {
    append({
      name: "",
      alias: "",
      email: "",
      contraseña: "",
    });
  }

  function handleRemoveContact(index: number) {
    remove(index);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-bold">
              {" "}
              Datos del Cliente
            </CardTitle>
            <CardDescription>Ingrese los datos del clientes</CardDescription>
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
                { value: "factura", label: "Factura" },
                { value: "orden de servicio", label: "Orden de servicio" },
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
           
          </CardContent>
        </Card>
        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-bold">
              Registro de Usuarios
            </CardTitle>
            <CardDescription>Agregue los usuarios que requiera</CardDescription>
          </CardHeader>
          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            {fields.map((item, index) => (
              <div key={item.id} className="  space-y-1 ">
                <FormFieldComponent
                  control={form.control}
                  name={`items.${index}.name`}
                  label={`Nombre Usuario ${index + 1}`}
                  placeholder="Nombre de contacto"
                />
                <FormFieldComponent
                  control={form.control}
                  name={`items.${index}.email`}
                  label={`Email Usuario ${index + 1}`}
                  placeholder="Email de contacto"
                />
                <FormFieldComponent
                  control={form.control}
                  name={`items.${index}.alias`}
                  label={`Alias Usuario ${index + 1}`}
                  placeholder="Ingrese un alias"
                />

                <FormFieldComponent
                  control={form.control}
                  name={`items.${index}.contraseña`}
                  label={`Contraseña Usuario ${index + 1}`}
                  placeholder="Ingrese una contraseña"
                  type="password"
                />

                <div className="grid grid-cols-4 gap-6 ">
                  <div className="col-start-4 flex  justify-end ">
                    <button
                      type="button"
                      onClick={() => handleRemoveContact(index)}
                      className="text-sm font-medium  flex flex-row hover:text-gray-800 "
                    >
                      <span className="font-semibold text-red-500">
                        Eliminar
                      </span>
                      <SolarTrashBinTrashBold className="h-5 w-5 inline-block ml-1 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddContact}
              className="text-sm font-medium flex items-center flex-row hover:text-gray-800 "
            >
              <IcRoundAdd className="h-7 w-7 " />
              Agregar
            </button>
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-3">
          <Link href="/dashboard/clientes/listar_clientes">
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
