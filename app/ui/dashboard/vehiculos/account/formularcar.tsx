 "use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaRegist } from "../registrar/schema";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { FormFieldComponent } from "@/app/ui/components/formfieldcomponent";
import { CarInfo } from "@/src/generated/graphql";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ultimaRevision } from "@/app/lib/utils/utils";

const ClienteSchemaChange = formSchemaRegist.omit({
  tipoContrato: true,
  estados: true,
  puntaje: true,
});



export function FormularioChange({ data }: { data: CarInfo }) {
  const revision = ultimaRevision(data.Mantenimientos);
  const form = useForm<z.infer<typeof ClienteSchemaChange>>({
    resolver: zodResolver(ClienteSchemaChange),
    defaultValues: {
      placa: data.placa,
      kmRegistroInicial: data.kmActual?.toString() + " km" || "",
      fechaSoat: format(new Date(data.fechaSoat), "PPP", { locale: es }) || "",
      fechaRevision: revision?.fecha ?
        format(new Date(revision?.fecha), "PPP", { locale: es })  : "sin fecha",
      propietario: data.propietario,
      vigenciaContrato:
        format(new Date(data.vigenciaContrato), "PPP", { locale: es }) || "",
      cliente: data.cliente,
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-4 ">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <FormFieldComponent
            control={form.control}
            name="placa"
            label="Placa del Vehiculo"
          />
          <FormFieldComponent
            control={form.control}
            name="kmRegistroInicial"
            label="Kilometraje actual"
          />
          <FormFieldComponent
            control={form.control}
            name="fechaSoat"
            label="Vencimiento del Soat"
          />
          <FormFieldComponent
            control={form.control}
            name="fechaRevision"
            label="Ultima Revision"
          />
          <FormFieldComponent
            control={form.control}
            name="propietario"
            label="Nombre de Propietario"
          />
          <FormFieldComponent
            control={form.control}
            name="vigenciaContrato"
            label="Vigencia del Contrato"
          />
          <FormFieldComponent
            control={form.control}
            name="cliente"
            label="Nombre del Cliente"
          />
          <FormFieldComponent control={form.control} name="_id" type="hidden" />
        </div>
      </form>
    </Form>
  );
}
