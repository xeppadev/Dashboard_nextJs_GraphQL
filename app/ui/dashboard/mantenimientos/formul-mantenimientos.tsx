"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaClient } from "./data/schema";
import { useForm } from "react-hook-form";
import { Container } from "@/components/ui/container";
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
import { FormItemsComponent } from "../../components/formitems";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FormFieldComponent } from "../../components/formfieldcomponent";
import { useToast } from "@/components/ui/use-toast";
import { placasUnidadesModel } from "@/src/models/placasunidadesModel";
import { FormFileComponent } from "../../components/formfile";
import { FormSelectComponent } from "@/app/ui/components/formselect";
import { RepuestoSearchType } from "@/src/generated/graphql";

type FormularioProps = {
  data: RepuestoSearchType[];
};

type AccountFormValues = z.infer<typeof formSchemaClient>;

function MantenimienForm({ data }: FormularioProps) {
  
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaClient>>({
    resolver: zodResolver(formSchemaClient),
    mode: "onChange",
  });

  const onSubmit = (data: AccountFormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <Card className=" py-4 h-full ">
          <CardContent className="flex flex-col  px-2 mx-4 space-y-1">
            <CardTitle className="text-lg font-semibold mr-auto">
              Detalles del Mantenimiento
            </CardTitle>

            <div className=" p-0 space-x-3 flex-row flex w-full  ">
              <FormSelectComponent
                placeholder="Placa de vehículo"
                control={form.control}
                name="licensePlate"
                options={[
                  { value: "FPG-636", label: "FPG-636" },
                  { value: "FIR-612", label: "FIR-612" },
                  { value: "AGD-112", label: "AGD-112" },
                  { value: "F5R-712", label: "F5R-712" },
                ]}
              />
              <FormFieldComponent
                control={form.control}
                name="mileage"
                placeholder="kilometraje actual"
                className="w-1/4"
                className2="h-10"
              />

              <FormSelectComponent
                placeholder="Soat Vigente"
                control={form.control}
                name="yesNoSelect"
                options={[
                  { value: "si", label: "Sí" },
                  { value: "no", label: "No" },
                ]}
              />
              <FormSelectComponent
                placeholder="Tipo Mantenimiento"
                control={form.control}
                name="maintenanceType"
                options={[
                  {
                    value: "mantenimiento preventivo",
                    label: "Mantenimiento Preventivo",
                  },
                  {
                    value: "mantenimiento predictivo",
                    label: "Mantenimiento Predictivo",
                  },
                  {
                    value: "mantenimiento correctivo",
                    label: "Mantenimiento Correctivo",
                  },
                ]}
              />
            </div>
            <div className="space-y-2">
              <CardTitle className="text-lg font-semibold">
                Diagnostico del Vehiculo
              </CardTitle>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
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
            </div>
            <div>
              <CardTitle className="text-lg font-semibold my-2">
                Documentos del Mantenimiento
              </CardTitle>
              <FormFileComponent
                control={form.control}
                name="file"
                label={""}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end space-x-3">
          <Link href="/dashboard/proveedores/listar_proveedores">
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
export default MantenimienForm;
