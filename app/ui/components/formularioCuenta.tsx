// import { zodResolver } from "@hookform/resolvers/zod";
// import { formSchemaPersonal } from "../dashboard/personal/registrar/schema";
// import { useForm } from "react-hook-form";
// import Link from "next/link";
// import * as z from "zod";
// import { ToastAction } from "@/components/ui/toast";
// import { Button } from "@/components/ui/button";
// import { Form } from "@/components/ui/form";
// import { FormFieldComponent } from "@/app/ui/components/formfieldcomponent";
// import { FormFieldate } from "@/app/ui/components/formfielddate";
// import { useToast } from "@/components/ui/use-toast";
// import { PersonalDto } from "@/src/generated/graphql";
// import { SalarioMasReciente } from "@/app/lib/utils/utils";
// const ClienteSchemaChange = formSchemaPersonal.omit({
//   nombre: true,
//   file: true,
//   numero: true,
//   email: true,
//   fechaIngreso: true,
//   salario: true,
//   fecha: true,
// });

// type AccountFormValues = z.infer<typeof ClienteSchemaChange>;

// export function FormularioChange({ data }: { data: PersonalDto }) {
//   const { toast } = useToast();

//   const salario = SalarioMasReciente(data.salarioFecha);
//   const form = useForm<z.infer<typeof ClienteSchemaChange>>({
//     resolver: zodResolver(ClienteSchemaChange),
//     defaultValues: {
//       nombre: data.nombre,
//       email: data.email || "",
//       fechaIngreso: data.fechaIngreso,
//       numero: data.numero?.toString() || "",
//       salario: salario?.toString(),
//     },
//   });

//   //   function onSubmit(data: AccountFormValues) {
//   //     toast({
//   //       description: `usuario ${data.nombre} registrado con éxito`,
//   //       action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
//   //     });
//   //   }

//   return (
//     <Form {...form}>
//       <form className="space-y-4 m-2">
//         <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
//           <FormFieldComponent
//             control={form.control}
//             name="nombre"
//             label="Nombre Completo"
//           />
//           <FormFieldComponent
//             control={form.control}
//             name="numero"
//             label="Numero de RUC"
//             placeholder="Ingrese un numero de Telefono"
//           />
//           <FormFieldComponent
//             control={form.control}
//             name="email"
//             label="Direccion de Correo"
//             placeholder="Ingrese un correo electronico"
//           />
//           <FormFieldate
//             control={form.control}
//             name="fechaIngreso"
//             label="Fecha de Ingreso"
//             placeholder="Ingrese una Fecha"
//             className="w-full mt-2.5"
//           />
//         </div>
//         <h3 className="font-medium leading-none tracking-tight text-[#212b36] dark:text-foreground">
//           Salario
//         </h3>
//         <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
//           <FormFieldComponent
//             control={form.control}
//             name="salario"
//             label="Salario Actual (S/.)"
//             placeholder="Ingrese un salario"
//           />
//           <FormFieldate
//             control={form.control}
//             name="fecha"
//             label="Fecha de Cambio de Salario"
//             placeholder="Ingrese una Fecha"
//             className="w-full mt-2.5"
//           />
//         </div>
//         <div className="flex justify-end space-x-4">
//           <Link href="/dashboard/clientes/listar_clientes">
//             <Button className="rounded-[10px]" variant={"ghost"}>
//               Cancel
//             </Button>
//           </Link>
//           <Button type="submit" className="rounded-[10px]">
//             Guardar Cambios
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// }
