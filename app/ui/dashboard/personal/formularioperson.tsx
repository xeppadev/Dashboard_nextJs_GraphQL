"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaClient } from "./formulario/schema";
import { useForm, useFieldArray } from "react-hook-form";
import { FormFieldComponent } from "../../components/formfieldcomponent";
import { useToast } from "@/components/ui/use-toast";
import { FormFieldate } from "../../components/formfielddate";
import { FormFileComponent } from "../../components/formfile";
import { FormItemsComponent } from "../../components/formitems";
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

import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


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
              Datos de Personal
            </CardTitle>
            <CardDescription>Ingrese los datos del Personal</CardDescription>
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
                { value: "dni", label: "DNI" },
                { value: "examen medico", label: "Examen Medico" },
                { value: "SCTR", label: "SCTR" },
                { value: "CV", label: "CV" },
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
            <CardDescription>Suba los documentos del Personal</CardDescription>
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
        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-bold">
              Registro de Personal
            </CardTitle>
            <CardDescription>Agregue las cuentas de Personal que requiera</CardDescription>
          </CardHeader>
          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            {fields.map((item, index) => (
              <div key={item.id} className="  space-y-1 ">
                <FormFieldComponent
                  control={form.control}
                  name={`items[${index}].name`}
                  label={`Nombre Usuario ${index + 1}`}
                  placeholder="Nombre de contacto"
                />
                <FormFieldComponent
                  control={form.control}
                  name={`items[${index}].email`}
                  label={`Email Usuario ${index + 1}`}
                  placeholder="Email de contacto"
                />
                <FormFieldComponent
                  control={form.control}
                  name={`items[${index}].alias`}
                  label={`Alias Usuario ${index + 1}`}
                  placeholder="Ingrese un alias"
                />

                <FormFieldComponent
                  control={form.control}
                  name={`items[${index}].contraseña`}
                  label={`Contraseña Usuario ${index + 1}`}
                  placeholder="Ingrese una contraseña"
                  type="password"
                />

                <div className="grid grid-cols-4 gap-6 ">
                  <div className="col-start-4 flex  justify-end ">
                    <button
                      onClick={() => handleRemoveContact(index)}
                      className="text-sm font-medium  flex flex-row hover:text-gray-800 "
                    >
                      <span className="font-semibold text-red-500">
                        Eliminar
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        className="inline-block  text-red-500"
                      >
                        <path
                          fill="currentColor"
                          d="M3 6.386c0-.484.345-.877.771-.877h2.665c.529-.016.996-.399 1.176-.965l.03-.1l.115-.391c.07-.24.131-.45.217-.637c.338-.739.964-1.252 1.687-1.383c.184-.033.378-.033.6-.033h3.478c.223 0 .417 0 .6.033c.723.131 1.35.644 1.687 1.383c.086.187.147.396.218.637l.114.391l.03.1c.18.566.74.95 1.27.965h2.57c.427 0 .772.393.772.877s-.345.877-.771.877H3.77c-.425 0-.77-.393-.77-.877"
                        />
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M11.596 22h.808c2.783 0 4.174 0 5.08-.886c.904-.886.996-2.339 1.181-5.245l.267-4.188c.1-1.577.15-2.366-.303-2.865c-.454-.5-1.22-.5-2.753-.5H8.124c-1.533 0-2.3 0-2.753.5c-.454.5-.404 1.288-.303 2.865l.267 4.188c.185 2.906.277 4.36 1.182 5.245c.905.886 2.296.886 5.079.886m-1.35-9.811c-.04-.434-.408-.75-.82-.707c-.413.043-.713.43-.672.864l.5 5.263c.04.434.408.75.82.707c.413-.043.713-.43.672-.864zm4.329-.707c.412.043.713.43.671.864l-.5 5.263c-.04.434-.409.75-.82.707c-.413-.043-.713-.43-.672-.864l.5-5.263c.04-.434.409-.75.82-.707"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={handleAddContact}
              className="text-sm font-medium flex flex-row hover:text-gray-800 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v14m-7-7h14"
                />
              </svg>
              Agregar
            </button>
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-3">
          <Link href="/dashboard/personal/listar_personal">
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
