"use client";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaClient } from "./data/schema";
import { useForm, useFieldArray } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { FormFieldComponent } from "@/app/ui/components/formfieldcomponent";
import { FormSelectComponent } from "@/app/ui/components/formselect";
import { useToast } from "@/components/ui/use-toast";
import { FormFieldate } from "@/app/ui/components/formfielddate";
import { FormFileComponent } from "@/app/ui/components/formfile";

import { ScrollProduct } from "./scollproducts";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Form,
  
} from "@/components/ui/form";
import * as z from "zod";

import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FieldConfig {
  name: string;
  label?: string;
  placeholder: string;
  description?: string;
  className?: string;
  accion?: string;
  size?: string;
}
interface AccountFormProps {
  
  buttonText?: string;
}

type AccountFormValues = z.infer<typeof formSchemaClient>;

const defaultValues: Partial<AccountFormValues> = {
  
  
  
   invoices: [
    {
      factura: "",
      
      type: "",
      file: "",
    },
  ],
  items: [
    {
      producto: "",
      marca: "",
      cantidad: "",
      cantidadactual: "",
      precio: "S/.",
      total: "S/.",
       
    },
  ],
};

export function AccountForm({
  
  buttonText,
}: AccountFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaClient>>({
    resolver: zodResolver(formSchemaClient),
    defaultValues,
    mode: "onChange",
    
  });

  const onSubmit = (data: AccountFormValues) => {
    console.log(data);

  };

  const { fields, append, remove } = useFieldArray({
    
    name: "items",
    control: form.control,
  });

  const { fields: fields2, append: append2, remove: remove2 } = useFieldArray({
      
      name: "invoices",
      control: form.control,
    });


  function handleRemoveContact(index: number) {
    remove(index);
  }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="flex flex-col xl:flex-row  xl:space-y-0 xl:space-x-6  ">
          <Card className=" flex flex-col xl:sticky  top-0 justify-between bg-background  w-full xl:w-1/4 h-full">
            <CardHeader >
              <CardTitle className="text-lg font-semibold">
                {" "}
                Seleccion de Producto
              </CardTitle>
            </CardHeader>

            <CardContent className="    space-y-5  ">
              <Input placeholder="Buscar" className="w-full h-12" />
              <CardTitle>Repuestos</CardTitle>
              <ScrollProduct />
              <div className="flex items-center justify-start  space-x-2">
                <Switch id="group" />
                <Label htmlFor="group">Repuestos sin Stock</Label>
              </div>
            </CardContent>
          </Card>
          <div className="h-full space-y-6 w-3/4">
            <Card className=" py-4 h-full ">
              <CardContent className="flex flex-col border-b border-dashed px-2 mx-4">
                <CardTitle className="text-lg font-semibold mr-auto ">
                  {" "}
                  Detalles del Producto
                </CardTitle>

                {fields.map((item, index) => (
                  <div key={item.id} >
                    <CardContent className=" p-0 space-x-3 flex-row flex pt-2">
                      <FormFieldComponent
                        control={form.control}
                        name={`items.${index}.producto`}
                        placeholder="Producto"
                        className="w-[23%]"
                        className2="h-10"
                        type="material"
                      />
                      <FormFieldComponent
                        control={form.control}
                        name={`items.${index}.marca`}
                        placeholder="Marca"
                        className=" w-[23%]"
                        className2="h-10"
                        type="material"
                      />
                      <FormFieldComponent
                        control={form.control}
                        name={`items.${index}.cantidad`}
                        placeholder="Cantidad"
                        className="w-[14.5%]"
                        className2="h-10"
                        type="material"
                      />

                      <FormFieldComponent
                        control={form.control}
                        name={`items.${index}.cantidadactual`}
                        placeholder="Cantidad Actual"
                        className="w-[14.5%]"
                        className2="h-10"
                        type="material"
                      />

                      <FormFieldComponent
                        control={form.control}
                        name={`items.${index}.precio`}
                        placeholder="Precio"
                        className="w-[12.5%]"
                        className2="h-10"
                        type="material"
                        
                      />
                      <FormFieldComponent
                        control={form.control}
                        name={`items.${index}.total`}
                        placeholder="Total"
                        className="w-[12.5%]"
                        className2="h-10"
                        type="material"
                       
                      />
                    </CardContent>
                    <div className=" flex w-full justify-end mt-5">
                      <button
                        type="button"
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
                ))}
              </CardContent>
              <div className="p-6">
                <button
                  type="button"
                  onClick={() =>
                    append({
                      producto: "",
                      marca: "",
                      cantidad: "",
                      cantidadactual: "",
                      precio: "S/.",
                      total: "S/.",
                    })
                  }
                  className="text-sm font-medium flex flex-row hover:text-gray-800 text-primary"
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
              </div>
            </Card>

            <Card className=" py-4 h-full ">
              <CardContent className="flex flex-col border-b border-dashed px-2 mx-4 space-y-1">
                <CardTitle className="text-lg font-semibold mr-auto">
                  Detalles de Facturas
                </CardTitle>
               
            {fields2.map((item, index) => (
              <div key={item.id} >
                <div className=" p-0 space-x-3 flex-row flex w-full  ">

                        <FormFieldComponent
                          control={form.control}
                          name={`invoices.${index}.factura`}
                          placeholder="Nombre de Factura"
                          className="w-1/4"
                          className2="h-10"
                        />
                        <FormFieldate
                          control={form.control}
                          name={`invoices.${index}.dob1`}
                          size="lg"
                          placeholder="Fecha de Compra"
                          className2="h-10"
                          className="w-1/4"
                          

                        />
                         <FormFieldate
                          control={form.control}
                          name={`invoices.${index}.dob2`}
                          size="lg"
                          placeholder="Fecha de Vencimiento"
                          className2="h-10"
                          className="w-1/4"
                          

                        />
                       <FormSelectComponent
                      placeholder="Proveedor"
                      
                      control={form.control}
                      name={`invoices.${index}.type`}
                      options={[
                        { value: "proveedor1", label: "Proveedor 1" },
                        { value: "proveedor2", label: "Proveedor 2" },
                        { value: "proveedor3", label: "Proveedor 3" },
                        { value: "proveedor4", label: "Proveedor 4" },
                        { value: "proveedor5", label: "Proveedor 5" },
                        { value: "proveedor6", label: "Proveedor 6" },
                      ]}
                    />

                 
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold">
                    Subida de Documentos
                  </CardTitle>
                  <FormFileComponent
                    control={form.control}
                    name={`invoices.${index}.file`}
                    label={""}
                  />
                  <div className=" flex w-full justify-end mt-4 h-full">
                    <button
                      type="button"
                      onClick={() => remove2(index)}
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

              </CardContent>
              <div className="p-6 ">
                <button
                  type="button"
                  onClick={() =>
                    append2({
                      factura: "",
                      
                      type: "",
                      file: "",
                    })
                  }
                  className="text-sm font-medium flex flex-row hover:text-gray-800 text-primary"
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
              </div>
            </Card>
          </div>
        </div>
        <div className="flex justify-end space-x-3 ">
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
