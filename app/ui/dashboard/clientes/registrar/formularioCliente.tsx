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
import { SolarTrashBinTrashBold, IcRoundAdd } from "@/app/lib/icons";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { formSchemaClient, formSchemaClientdatos } from "./schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldComponent } from "../../../components/formfieldcomponent";
import { FormFieldate } from "../../../components/formfielddate";
import { FormFileComponent } from "../../../components/formfile";
import { FormSelectComponent } from "@/app/ui/components/formselect";

import { registerCliente } from "@/lib/actions";

export default function FormCliente() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaClient>>({
    defaultValues: {
      nombreCliente: "",
      ruc: "",
      direccion: "",
      rubro: "",
      nombre: "",
      numeroContacto: "",
      email: "",
      file: [],

      items: [
        {
          name: "",
          username: "",
          email: "",
          password: "",
          clienteAsociado: "",
          nivelUser: "",
        },
      ],
      contratos: [
        {
          numeroContrato: "",
          fechaInicio: "",
          fechaFin: "",
        },
      ],
    },
    resolver: zodResolver(formSchemaClientdatos),
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  const {
    fields: fields2,
    append: append2,
    remove: remove2,
  } = useFieldArray({
    control: form.control,
    name: "contratos",
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchemaClient>> = async (
    data
  ) => {
    // Crear un nuevo objeto FormData
    const formData = new FormData();
    // Obtener el valor de file del formulario
    const { file } = form.getValues();

    // Agregar los otros campos del formulario a formData
    formData.append("nombreCliente", data.nombreCliente);
    formData.append("ruc", data.ruc);
    formData.append("direccion", data.direccion);
    formData.append("rubro", data.rubro);
    formData.append("nombre", data.nombre);
    formData.append("numeroContacto", data.numeroContacto);
    formData.append("email", data.email);

    // Agregar el valor de nombreCliente a clienteAsociado para cada elemento en items
    const itemsWithClienteAsociado = data?.items?.map((item) => ({
      ...item,
      clienteAsociado: data.nombreCliente,
    }));
    formData.append("items", JSON.stringify(itemsWithClienteAsociado));

    formData.append("contratos", JSON.stringify(data.contratos));
    // Convertir data.file a un array y agregar cada archivo a formData
    file.forEach((f, index) => {
      formData.append("file", f.file);
    });

    try {
      // Crear un nuevo objeto FormData para los archivos
      await registerCliente(formData);
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
        title: "Ocurrio un error.",
        description: "Ocurrio un problema con la solicitud.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card className=" grid grid-cols-1 md:grid-cols-5 md:gap-4 justify-between">
          <CardHeader className=" md:col-span-2">
            <CardTitle className="text-lg font-bold">
              {" "}
              Datos del Cliente
            </CardTitle>
            <CardDescription>Ingrese los datos del clientes</CardDescription>
          </CardHeader>

          <CardContent className="md:col-span-3 px-7 py-3 md:py-7 md:col-start-3 space-y-5 ">
            <FormFieldComponent
              control={form.control}
              name="nombreCliente"
              label="Nombre del Cliente"
              placeholder="Ingrese un nombre"
            />
            <FormFieldComponent
              control={form.control}
              name="ruc"
              label="Numero de RUC"
              placeholder="Ingrese un numero de RUC"
            />
            <FormFieldComponent
              control={form.control}
              name="direccion"
              label="Direccion de Cliente"
              placeholder="Ingrese una direccion"
            />
            <FormFieldComponent
              control={form.control}
              name="rubro"
              label="Ingrese el rubro del cliente"
              placeholder="Ingrese una rubro"
            />
          </CardContent>
        </Card>

        <Card className=" grid grid-cols-1 md:grid-cols-5 gap-4 justify-between ">
          <CardHeader className=" md:col-span-2 pb-2">
            <CardTitle className="text-lg font-bold">
              {" "}
              Datos del Contacto
            </CardTitle>
            <CardDescription>Ingrese los datos del contacto</CardDescription>
          </CardHeader>

          <CardContent className="md:col-span-3 px-7 py-3 md:py-7 md:col-start-3 space-y-5">
            <FormFieldComponent
              control={form.control}
              name="nombre"
              label="Nombre de Contacto"
              placeholder="Ingrese el nombre de Contacto"
            />

            <FormFieldComponent
              control={form.control}
              name="numeroContacto"
              label="Numero del Contacto"
              placeholder="Ingrese un Numero "
            />
            <FormFieldComponent
              control={form.control}
              name="email"
              label="Correo del Contacto"
              placeholder="Ingrese un correo electronico"
            />
          </CardContent>
        </Card>

        <Card className="grid grid-cols-1 md:grid-cols-5 gap-4 justify-between">
          <CardHeader className="md:col-span-2 pb-2">
            <CardTitle className="text-lg font-bold">
              Informacion de Contratos
            </CardTitle>
            <CardDescription>
              Ingrese la informacion de documentos
            </CardDescription>
          </CardHeader>
          <CardContent className="md:col-span-3 px-7 py-3 md:py-7 md:col-start-3 space-y-5 ">
            {fields2.map((item, index) => (
              <div key={item.id}>
                <FormFieldComponent
                  control={form.control}
                  name={`contratos.${index}.numeroContrato`}
                  label={`Numero de Contrato ${index + 1}`}
                  placeholder="Ingrese un numero de Contrato"
                />

                <FormFieldate
                  control={form.control}
                  name={`contratos.${index}.fechaInicio`}
                  label="Fecha Inicio Contrato"
                  placeholder="Elegir una fecha"
                  className="mt-5"
                />
                <FormFieldate
                  control={form.control}
                  name={`contratos.${index}.fechaFin`}
                  label="Fecha Termino Contrato"
                  placeholder="Elegir una fecha"
                  className="mt-4"
                />
                <div className="col-start-4 flex  justify-end ">
                  <button
                    type="button"
                    onClick={() => remove2(index)}
                    className="text-sm font-medium  flex flex-row hover:text-gray-800 "
                  >
                    <span className="font-semibold text-red-500">Eliminar</span>
                    <SolarTrashBinTrashBold className="h-5 w-5 inline-block ml-1 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                append2({
                  numeroContrato: "",
                  fechaInicio: "",
                  fechaFin: "",
                })
              }
              className="text-sm font-medium flex items-center flex-row hover:text-gray-800 "
            >
              <IcRoundAdd className="h-7 w-7 " />
              Agregar
            </button>
          </CardContent>
        </Card>
        <Card className="grid grid-cols-1 md:grid-cols-5 gap-4 justify-between ">
          <CardHeader className="md:col-span-2 pb-2">
            <CardTitle className="text-lg font-bold">
              Subida de Documentos
            </CardTitle>
            <CardDescription>Suba los documentos del cliente</CardDescription>
          </CardHeader>
          <CardContent className="md:col-span-3 px-7 py-3 md:py-7 md:col-start-3 space-y-5 ">
            <FormFileComponent
              control={form.control}
              name="file"
              label="Subir archivo"
            />
          </CardContent>
        </Card>
        <Card className=" grid grid-cols-1 md:grid-cols-5 gap-4 justify-between ">
          <CardHeader className="md:col-span-2 pb-2">
            <CardTitle className="text-lg font-bold">
              Registro de Usuarios
            </CardTitle>
            <CardDescription>Agregue los usuarios que requiera</CardDescription>
          </CardHeader>
          <CardContent className="md:col-span-3 px-7 py-3 md:py-7 md:col-start-3 space-y-5 ">
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
                  name={`items.${index}.username`}
                  label={`Username ${index + 1}`}
                  placeholder="Ingrese un username"
                />

                <FormFieldComponent
                  control={form.control}
                  name={`items.${index}.password`}
                  label={`Contraseña Usuario ${index + 1}`}
                  placeholder="Ingrese una contraseña"
                  type="password"
                />

                <FormSelectComponent
                  control={form.control}
                  name={`items.${index}.nivelUser`}
                  label={`Nivel de Usuario ${index + 1}`}
                  placeholder="Seleccione un nivel de usuario"
                  options={[{ value: "cliente", label: "Cliente" }]}
                  className="w-full"
                  className2="h-12"
                />

                <div className="col-start-4 flex  justify-end ">
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-sm font-medium  flex flex-row hover:text-gray-800 "
                  >
                    <span className="font-semibold text-red-500">Eliminar</span>
                    <SolarTrashBinTrashBold className="h-5 w-5 inline-block ml-1 text-red-500" />
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                append({
                  name: "",
                  username: "",
                  email: "",
                  password: "",
                  clienteAsociado: "",
                  nivelUser: "",
                })
              }
              className="text-sm font-medium flex items-center flex-row hover:text-gray-800 "
            >
              <IcRoundAdd className="h-7 w-7 " />
              Agregar
            </button>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row justify-end space-y-3 md:space-y-0 md:space-x-3">
          <Link href="/dashboard/clientes/listar_clientes">
            <Button variant="ghost" className="rounded-[10px] w-full">
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
