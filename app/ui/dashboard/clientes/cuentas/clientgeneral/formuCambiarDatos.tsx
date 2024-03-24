import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaClient } from "../../registrar/schema";
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as z from "zod";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormFieldComponent } from "@/app/ui/components/formfieldcomponent";
import { useToast } from "@/components/ui/use-toast";
import { ClienteDto } from "@/src/generated/graphql";

const ClienteSchemaChange = formSchemaClient.omit({
  contratos: true,
  file: true,
  items: true,
});

type AccountFormValues = z.infer<typeof ClienteSchemaChange>;

export function FormularioChange({ data }: { data: ClienteDto }) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ClienteSchemaChange>>({
    resolver: zodResolver(ClienteSchemaChange),
    defaultValues: {
      nombreCliente: data.nombreCliente || "",
      ruc: data.ruc,
      direccion: data.direccion,
      rubro: data.rubro,
      nombre: data.nombre,
      numeroContacto: data.numeroContacto?.toString() || "",
      email: data.email,
    },
  });

  //   function onSubmit(data: AccountFormValues) {
  //     toast({
  //       description: `usuario ${data.nombre} registrado con éxito`,
  //       action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
  //     });
  //   }

  return (
    <Form {...form}>
      <form className="space-y-4 m-2">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
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
            label="Rubro del cliente"
            placeholder="Ingrese una rubro"
          />
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
