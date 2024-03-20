import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaregis } from "./schema";
import { useForm, useFieldArray } from "react-hook-form";
import * as z from "zod";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

import { Form } from "@/components/ui/form";
import { FormFieldComponent } from "../../../../components/formfieldcomponent";
import { useToast } from "@/components/ui/use-toast";

type AccountFormValues = z.infer<typeof formSchemaregis>;

const defaultValues: Partial<AccountFormValues> = {
  name: "",
  alias: "",
  contraseña: "",
  email: "",
  items: [
    {
      name: "",
      alias: "",
      email: "",
      contraseña: "",
    },
  ],
};

export default function FormUser() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaregis>>({
    resolver: zodResolver(formSchemaregis),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  function onSubmit(data: AccountFormValues) {
    toast({
      description: `usuario ${data.name} registrado con éxito`,
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  }

  function handleAddContact() {
    append({
      name: "",
      alias: "",
      email: "",
      contraseña: "",
    });
  }

  function handleRemoveContact(index: number) {
    remove(index);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 m-2">
        <div className="grid grid-cols-4  divide-y divide-dashed ">
          {fields.map((item, index) => (
            <div key={item.id} className="col-span-4  space-y-1 ">
              <div className="grid grid-cols-4 gap-0">
                <FormFieldComponent
                  control={form.control}
                  name={`items[${index}].name`}
                  label={`Nombre Usuario ${index + 1}`}
                  placeholder="Nombre de contacto"
                />
                <FormFieldComponent
                  control={form.control}
                  name={`items[${index}].email`}
                  label={`Email Usuario ${index + 1}`}
                  placeholder="Email de contacto"
                />
                <FormFieldComponent
                  control={form.control}
                  name={`items[${index}].alias`}
                  label={`Alias Usuario ${index + 1}`}
                  placeholder="Ingrese un alias"
                />

                <FormFieldComponent
                  control={form.control}
                  name={`items[${index}].contraseña`}
                  label={`Contraseña Usuario ${index + 1}`}
                  placeholder="Ingrese una contraseña"
                  type="password"
                />
              </div>
             
              <div className="grid grid-cols-4 gap-6 ">
             <div className="col-start-4 flex  justify-end ">
              <button
                onClick={() => handleRemoveContact(index)}
                className="text-sm font-medium  flex flex-row hover:text-gray-800 "
              >
                <span className="font-semibold text-red-500">Eliminar</span>
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
        </div>
        <button
          onClick={handleAddContact}
          className="text-sm font-medium flex flex-row hover:text-gray-800 "
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
        <div className="flex justify-end">
          <Button type="submit" className="rounded-[10px]">Registrar</Button>
        </div>
      </form>
    </Form>
  );
}
