
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaClient } from "./formulario/schema";
import { useForm} from "react-hook-form";
import * as z from "zod";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

import {
  Form,
  
} from "@/components/ui/form";
import { FormFieldComponent } from "../../../components/formfieldcomponent";
import { useToast } from "@/components/ui/use-toast";
import { FormFieldate } from "../../../components/formfielddate";

interface FieldConfig {
  name: string;
  label: string;
  placeholder: string;
  description?: string;
  className?: string;
  accion ?: string;

}
interface AccountFormProps {
  fields: FieldConfig[];
  buttonText?: string;
}


type AccountFormValues = z.infer<typeof formSchemaClient>;

const defaultValues: Partial<AccountFormValues> = {
  nombre: "",
  ruc: "",
  direccion: "",
  numeroContacto: "",
  numeroContrato: "",
  email: "",
  
 
};


// interface AccountFormProps {
//   setValue: (value: string) => void;
// }

export function AccountForm({fields,buttonText}: AccountFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaClient>>({
    resolver: zodResolver(formSchemaClient),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
    toast({
      description: `usuario ${data.nombre} registrado con éxito`,
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  }

  
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 m-2">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              {fields.map((field, index) => (
                <div  key={index}>
                  {field.name !== "dob" ? (
                    <FormFieldComponent
                      control={form.control}
                      name={field.name}
                      label={field.label}
                      placeholder={field.placeholder}
                      description={field.description}
                      className={field.className}
                    />
                  ) : (
                    <FormFieldate
                      control={form.control}
                      name={field.name}
                      label={field.label}
                      placeholder={field.placeholder}
                      description={field.description}
                      className={field.className}
                    />
                  )}
                </div>
              ))}
            </div>
          
  
          <div className="flex justify-end space-x-4">
            <Button  className="rounded-[10px]" variant={"ghost"} onClick={() => {}}>
              Cancel
            </Button>
            <Button type="submit" className="rounded-[10px]">
              {buttonText}
            </Button>
          </div>
        </form>
      </Form>
    );
  }
export default AccountForm;