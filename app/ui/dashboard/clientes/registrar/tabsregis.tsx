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
import { useToast } from "@/components/ui/use-toast";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { formSchemaClient } from "./formulario/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldComponent } from "../../../components/formfieldcomponent";
import { FormFieldate } from "../../../components/formfielddate";
import { FormFileComponent } from "../../../components/formfile";
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
      numeroContrato: "",
      file: "",
      items: [{ name: "", alias: "", email: "", contraseña: "" }],
    },
    resolver: zodResolver(formSchemaClient),
    mode: "onChange",
  });

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

  return (
    <Form {...form}>
      <form action={registerCliente} className="space-y-6">
        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-bold">
              {" "}
              Datos del Cliente
            </CardTitle>
            <CardDescription>Ingrese los datos del clientes</CardDescription>
          </CardHeader>

          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
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

        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-bold">
              {" "}
              Datos del Contacto
            </CardTitle>
            <CardDescription>Ingrese los datos del contacto</CardDescription>
          </CardHeader>

          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
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

        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-bold">
              Informacion de Contratos
            </CardTitle>
            <CardDescription>
              Ingrese la informacion de documentos
            </CardDescription>
          </CardHeader>
          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            <FormFieldComponent
              control={form.control}
              name="numeroContrato"
              label="Numero de Documento"
              placeholder="Ingrese un numero de documento"
            />

            <FormFieldate
              control={form.control}
              name="fechaInicio"
              label="Fecha Inicio Contrato"
              placeholder="Elegir una fecha"
            />
            <FormFieldate
              control={form.control}
              name="fechaFin"
              label="Fecha Termino Contrato"
              placeholder="Elegir una fecha"
            />
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
                      onClick={() => remove(index)}
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
            Registrar
          </Button>
        </div>
      </form>
    </Form>
  );
}
