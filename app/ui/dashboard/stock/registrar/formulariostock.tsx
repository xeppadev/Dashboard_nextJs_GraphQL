"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaStock } from "./schema";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { FormFieldComponent } from "@/app/ui/components/formfieldcomponent";
import { useToast } from "@/components/ui/use-toast";
import { SolarTrashBinTrashBold, IcRoundAdd } from "@/app/lib/icons";
import Link from "next/link";
import { Form } from "@/components/ui/form";
import * as z from "zod";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import ComponentOptions from "@/app/ui/components/optionsearch";
import { RepuestoSearchType } from "@/src/generated/graphql";
import { registrarRepuestos } from "@/lib/actions";
type AccountFormValues = z.infer<typeof formSchemaStock>;

type FormularyProps = {
  productos: { value: string; label: string }[];
  dataRepuestos: RepuestoSearchType[];
};

function FormularioStock({ productos, dataRepuestos }: FormularyProps) {
  const { toast } = useToast();
  const [selectedFieldIndex, setSelectedFieldIndex] = React.useState(0);
  const form = useForm<z.infer<typeof formSchemaStock>>({
    defaultValues: {
      oldStock: [
        {
          _id: "",
          producto: "",
          marca: "",
          cantidad: "",
          cantidadactual: "",
          precio: "",
        },
      ],
      newStock: [
        {
          producto: "",
          marca: "",
          cantidad: "",
          precio: "",
        },
      ],
    },
    
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    name: "oldStock",
    control: form.control,
  });

  const {
    fields: fields2,
    append: append2,
    remove: remove2,
  } = useFieldArray({
    name: "newStock",
    control: form.control,
  });

  // Usa el índice del campo seleccionado al actualizar los valores de los campos
  React.useEffect(() => {
    if (dataRepuestos && dataRepuestos[0]) {
      form.setValue(
        `oldStock.${selectedFieldIndex}.marca`,
        dataRepuestos[0].marca || ""
      );
    }
    if (dataRepuestos && dataRepuestos[0]) {
      form.setValue(
        `oldStock.${selectedFieldIndex}.cantidadactual`,
        dataRepuestos[0].cantidad.toString() || ""
      );
    }
    if (dataRepuestos && dataRepuestos[0]) {
      form.setValue(
        `oldStock.${selectedFieldIndex}.precio`,
        dataRepuestos[0].precio ? dataRepuestos[0].precio.toString() : ""
      );
    }
    if (dataRepuestos && dataRepuestos[0] ) {
      form.setValue(
        `oldStock.${selectedFieldIndex}._id`,
        dataRepuestos[0]._id || ""
      );
    }
  }, [dataRepuestos, form, selectedFieldIndex]);

  const onSubmit: SubmitHandler<z.infer<typeof formSchemaStock>> = async (
    data
  ) => {
    const formData = new FormData();

    // Crear una nueva matriz que no incluya las propiedades 'marca', 'cantidadactual' y 'producto'
    const oldStock = data?.oldStock?.every((item) =>
      Object.values(item).every((value) => Boolean(value))
    )
      ? data?.oldStock?.map(
          ({ marca, cantidadactual, producto, ...rest }) => rest
        )
      : [];

    const newStock = data?.newStock?.every((item) =>
      Object.values(item).every((value) => Boolean(value))
    )
      ? data?.newStock
      : [];

    formData.append("oldStock", JSON.stringify(oldStock));
    formData.append("newStock", JSON.stringify(newStock));

    try {
      await registrarRepuestos(formData);
      toast({
        title: "Operación exitosa",
        description: "El stock se ha sido registrado correctamente",
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
        <div className="flex flex-col xl:flex-row  xl:space-y-0 xl:space-x-6  ">
          <div className="h-full space-y-6 w-full">
            <Card className=" py-4 h-full ">
              <CardContent className="flex flex-col border-b border-dashed px-2 mx-4">
                <CardTitle className="text-lg font-semibold mr-auto ">
                  {" "}
                 Incrementar Stock Actual
                </CardTitle>

                {fields.map((item, index) => (
                  <div key={item.id}>
                    <CardContent className=" p-0 space-x-3 flex-row flex pt-2">
                      <ComponentOptions
                        label="Repuestos Actuales"
                        options={productos}
                        placeholder="Buscar Repuesto"
                        paramName="producto"
                        className="w-[25%]"
                        className2="w-full h-12 mt-2"
                        onValueChange={(value) => {
                          form.setValue(`oldStock.${index}.producto`, value);
                          setSelectedFieldIndex(index);
                        }}
                      />
                      <FormFieldComponent
                        label="Marca Repuesto"
                        control={form.control}
                        name={`oldStock.${index}.marca`}
                        placeholder="Ingrese Marca"
                        className=" w-[25%]"
                        className2="h-10"
                        noeditable={true}
                      />
                      <FormFieldComponent
                        label="Cantidad Actual "
                        control={form.control}
                        name={`oldStock.${index}.cantidadactual`}
                        placeholder="Ingrese Cantidad"
                        className="w-[16.667%]"
                        className2="h-10"
                        noeditable={true}
                      />

                      <FormFieldComponent
                        label="Cantidad Agregar "
                        control={form.control}
                        name={`oldStock.${index}.cantidad`}
                        placeholder="Ingrese Cantidad"
                        className="w-[16.667%]"
                        className2="h-10"
                      />

                      <FormFieldComponent
                        label="Precio Repuesto ($)"
                        control={form.control}
                        name={`oldStock.${index}.precio`}
                        placeholder="Ingrese Precio"
                        className="w-[16.667%]"
                        className2="h-10"
                      />
                    </CardContent>
                    <div className=" flex w-full justify-end mt-5">
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
                ))}
              </CardContent>
              <div className="p-6">
                <button
                  type="button"
                  onClick={() =>
                    append({
                      _id: "",
                      producto: "",
                      marca: "",
                      cantidad: "",
                      cantidadactual: "",
                      precio: "",
                    })
                  }
                  className="text-sm font-medium flex flex-row hover:text-gray-800 text-primary"
                >
                  <IcRoundAdd className="h-7 w-7 inline-block" />
                  Agregar
                </button>
              </div>
            </Card>
            <Card className=" py-4 h-full ">
              <CardContent className="flex flex-col border-b border-dashed px-2 mx-4">
                <CardTitle className="text-lg font-semibold mr-auto ">
                  {" "}
                  Registrar Stock Nuevo
                </CardTitle>

                {fields2.map((item, index) => (
                  <div key={item.id}>
                    <CardContent className=" p-0 space-x-3 flex-row flex pt-2">
                      <FormFieldComponent
                        label="Nombre Repuesto"
                        control={form.control}
                        name={`newStock.${index}.producto`}
                        placeholder="Ingrese Repuesto"
                        className="w-[30%]"
                        className2="h-10"
                      />
                      <FormFieldComponent
                        label="Marca Repuesto"
                        control={form.control}
                        name={`newStock.${index}.marca`}
                        placeholder="Ingrese Marca"
                        className=" w-[30%]"
                        className2="h-10"
                      />
                      <FormFieldComponent
                        label="Cantidad Agregar "
                        control={form.control}
                        name={`newStock.${index}.cantidad`}
                        placeholder="Ingrese Cantidad"
                        className="w-[20%]"
                        className2="h-10"
                      />

                      <FormFieldComponent
                        label="Precio Repuesto ($)"
                        control={form.control}
                        name={`newStock.${index}.precio`}
                        placeholder="Ingrese Precio"
                        className="w-[20%]"
                        className2="h-10"
                      />
                    </CardContent>
                    <div className=" flex w-full justify-end mt-5">
                      <button
                        type="button"
                        onClick={() => remove2(index)}
                        className="text-sm font-medium  flex flex-row hover:text-gray-800 "
                      >
                        <span className="font-semibold text-red-500">
                          Eliminar
                        </span>
                        <SolarTrashBinTrashBold className="h-5 w-5 inline-block ml-1 text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </CardContent>
              <div className="p-6">
                <button
                  type="button"
                  onClick={() =>
                    append2({
                      producto: "",
                      marca: "",
                      cantidad: "",
                      precio: "",
                    })
                  }
                  className="text-sm font-medium flex flex-row hover:text-gray-800 text-primary"
                >
                  <IcRoundAdd className="h-7 w-7 inline-block" />
                  Agregar
                </button>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex justify-end space-x-3 ">
          <Link href="/dashboard/stock/listar_stock">
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
export default FormularioStock;
