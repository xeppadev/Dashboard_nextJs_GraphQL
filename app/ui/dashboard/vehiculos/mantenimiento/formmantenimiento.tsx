"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemantenimientoDatos } from "./schema";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { FormFieldComponent } from "@/app/ui/components/formfieldcomponent";
import { MantenimientoInfoDto } from "@/src/generated/graphql";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export function FormularioChange({ data }: { data: MantenimientoInfoDto }) {
  const form = useForm<z.infer<typeof formSchemantenimientoDatos>>({
    resolver: zodResolver(formSchemantenimientoDatos),
    defaultValues: {
      placa: data.placa,
      kmRegistroInicial: data.kmPrevio?.toString() + " km" || "",
      kmRevision: data.kmMedido?.toString() + " km" || "",
      fechaSoat: format(new Date(data.fechaSoat), "PPP", { locale: es }) || "",
      fechaInicio:
        format(new Date(data.fechaInicio), "PPP", { locale: es }) || "",
      fechaFin: format(new Date(data.fechaFin), "PPP", { locale: es }) || "",
      tecnico: data.tecnico || "",
      tipo: data.tipo || "",
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-4 m-2">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <FormFieldComponent
            control={form.control}
            name="placa"
            label="Placa del Vehiculo"
          />
          <FormFieldComponent
            control={form.control}
            name="kmRegistroInicial"
            label="Kilometraje Inicial"
          />
          <FormFieldComponent
            control={form.control}
            name="kmRevision"
            label="Kilometraje Medido"
          />
          <FormFieldComponent
            control={form.control}
            name="fechaSoat"
            label="Vencimiento del Soat"
          />
          <FormFieldComponent
            control={form.control}
            name="fechaInicio"
            label="Inicio del Mantenimiento"
          />
          <FormFieldComponent
            control={form.control}
            name="fechaFin"
            label="Fin del Mantenimiento"
          />
          <FormFieldComponent
            control={form.control}
            name="tecnico"
            label="Nombre del Tecnico"
          />
          <FormFieldComponent
            control={form.control}
            name="tipo"
            label="Tipo de Mantenimiento"
          />
          <FormFieldComponent control={form.control} name="_id" type="hidden" />
        </div>
      </form>
    </Form>
  );
}
