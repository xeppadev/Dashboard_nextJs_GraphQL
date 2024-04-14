"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaPersonal } from "../../registrar/schema";
import { useForm, SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import * as z from "zod";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormFieldComponent } from "@/app/ui/components/formfieldcomponent";
import { useToast } from "@/components/ui/use-toast";
import { UserOutput } from "@/src/generated/graphql";
import { actualizarUser} from "@/lib/actions";


const PeronalSchemaChange = formSchemaPersonal
  .omit({
    nombre: true,
    file: true,
    email: true,
    numero: true,
    fecha: true,
    salario: true,
    fechaIngreso: true,
  }).extend({
    clienteAsociado: z.string(),
    oldusername: z.string(),
  });
 

export function FormularioChange({ data }: { data: UserOutput }) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof PeronalSchemaChange>>({
    resolver: zodResolver(PeronalSchemaChange),
    defaultValues: {
      name: data.name || "",
      correo: data.email || "",
      username: data.username,
      oldusername: data.username,
      nivelUser: data.nivelUser,
      clienteAsociado: data.clienteAsociado || "",
      password:"",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof PeronalSchemaChange>> = async (
    data
  ) => {
    // Crear un nuevo objeto FormData
    const formData = new FormData();
    // Obtener el valor de file del formulario
    formData.append("name", data.name);
    formData.append("correo", data.correo);
    formData.append("oldusername", data.oldusername);
    formData.append("password", data.password);

    try {
      await  actualizarUser(formData);
      toast({
        title: "Registro Exitoso!",
        description: "Los datos se han cambiado exitosamente.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } catch (error) {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 m-2">
        <Card className=" grid grid-cols-5 gap-4 justify-between ">
          <CardHeader className="col-span-2 ">
            <CardTitle className="text-lg font-bold">
              {" "}
              Datos del Cuenta
            </CardTitle>
            <CardDescription>Datos del usuario</CardDescription>
          </CardHeader>
          <CardContent className="col-span-3 p-7 col-start-3 space-y-5 ">
            <FormFieldComponent
              control={form.control}
              name="name"
              label="Nombre del Personal"
              placeholder="Ingrese un nombre"
            />
            <FormFieldComponent
              control={form.control}
              name="username"
              label="Username del Personal"
              placeholder="Ingrese un username"
              noeditable={true}
              
            />
            <FormFieldComponent
              control={form.control}
              name="correo"
              label="Direccion de Correo"
              placeholder="Ingrese un correo electronico"

            />
              <FormFieldComponent
              control={form.control}
              name="password"
              label="Password"
              placeholder="************"
              className="w-full mt-2.5"
              type="password"
            />
            <FormFieldComponent
              control={form.control}
              name="nivelUser"
              label="Nivel de Usuario"
              placeholder="Ingrese una nivel de usuario"
              className="w-full mt-2.5"
              noeditable={true}
            />
            <FormFieldComponent
              control={form.control}
              name="clienteAsociado"
              label="Cliente Asociado"
              placeholder="Ingrese una cliete asociado"
              className="w-full mt-2.5"
              noeditable={true}
            />
           
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-4">
          <Link href="/dashboard/personal/listar_personal">
            <Button className="rounded-[10px]" variant={"ghost"}>
              Cancel
            </Button>
          </Link>
          <Button type="submit" className="rounded-[10px]">
            Guardar Cambios
          </Button>
        </div>
      </form>
    </Form>
  );
}
