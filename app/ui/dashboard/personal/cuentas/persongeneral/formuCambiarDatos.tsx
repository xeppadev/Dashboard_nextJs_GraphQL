import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaPersonal } from "../../registrar/schema";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import * as z from "zod";
import { format } from "date-fns";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormFieldComponent } from "@/app/ui/components/formfieldcomponent";
import { FormFieldate } from "@/app/ui/components/formfielddate";
import { useToast } from "@/components/ui/use-toast";
import { PersonalDto } from "@/src/generated/graphql";
import { actualizarPersonal } from "@/lib/actions";
import { salarioMasReciente } from "@/app/lib/utils/utils";
const PeronalSchemaChange = formSchemaPersonal
  .omit({
    file: true,
    name: true,
    username: true,
    correo: true,
    password: true,
    nivelUser: true,
    clienteAsociado: true,
  })
  .extend({
    id: z.string(),
  });

type AccountFormValues = z.infer<typeof PeronalSchemaChange>;

export function FormularioChange({ data }: { data: PersonalDto }) {
  const { toast } = useToast();

  const salario = salarioMasReciente(data.salarioFecha);
  const form = useForm<z.infer<typeof PeronalSchemaChange>>({
    resolver: zodResolver(PeronalSchemaChange),
    defaultValues: {
      id: data._id || "",
      nombre: data.nombre,
      email: data.email || "",
      fechaIngreso: data.fechaIngreso || "a",
      numero: data.numero?.toString() || "",
      salario: salario?.salario.toString() || "",
      fecha: salario?.fecha || "",
    },
  });


 const onSubmit: SubmitHandler<z.infer<typeof PeronalSchemaChange>>  = async (data) => {
     // Crear un nuevo objeto FormData
     const formData = new FormData();
      // Obtener el valor de file del formulario
      formData.append("id" , data.id);
      formData.append("nombre", data.nombre);
      formData.append("email", data.email);
      formData.append("numero", data.numero);
      formData.append("fechaIngreso", data.fechaIngreso);
      formData.append("salario", data.salario);
      formData.append("fecha", data.fecha);

      try {
        await actualizarPersonal(formData);
        toast({
          title: "Registro Exitoso!",
          description: "El cliente ha sido registrado exitosamente.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }

 }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 m-2">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <FormFieldComponent
            control={form.control}
            name="nombre"
            label="Nombre Completo"
          />
          <FormFieldComponent
            control={form.control}
            name="numero"
            label="Numero de RUC"
            placeholder="Ingrese un numero de Telefono"
          />
          <FormFieldComponent
            control={form.control}
            name="email"
            label="Direccion de Correo"
            placeholder="Ingrese un correo electronico"
          />
          <FormFieldate
            control={form.control}
            name="fechaIngreso"
            label="Fecha de Ingreso"
            placeholder="Ingrese una Fecha"
            className="w-full mt-2.5"
          />
        </div>
        <h3 className="font-medium leading-none tracking-tight text-[#212b36] dark:text-foreground">
          Salario
        </h3>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <FormFieldComponent
            control={form.control}
            name="salario"
            label="Salario Actual (S/.)"
            placeholder="Ingrese un salario"
          />
          <FormFieldate
            control={form.control}
            name="fecha"
            label="Fecha de Cambio de Salario"
            placeholder="Ingrese una Fecha"
            className="w-full mt-2.5"
          />
          <FormFieldComponent control={form.control} name="id" type="hidden" />
        </div>
        <div className="flex justify-end space-x-4">
          <Link href="/dashboard/clientes/listar_clientes">
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
