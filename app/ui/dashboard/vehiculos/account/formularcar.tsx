import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaRegist} from "../registrar/schema";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ToastAction } from "@/components/ui/toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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
  accion?: string;
}
interface AccountFormProps {
  fields: FieldConfig[];
  buttonText?: string;
  textarea?: boolean;
  space?: string;
}

type AccountFormValues = z.infer<typeof formSchemaRegist>;

const defaultValues: Partial<AccountFormValues> = {
  
};

// interface AccountFormProps {
//   setValue: (value: string) => void;
// }

export function CarForm({
  fields,
  buttonText,
  textarea,
  space,
}: AccountFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchemaRegist>>({
    resolver: zodResolver(formSchemaRegist),
    defaultValues,
  });

  // function onSubmit(data: AccountFormValues) {
  //   toast({
  //     description: `usuario ${data.licensePlate} registrado con éxito`,
  //     action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
  //   });
  // }

  return (
    <Form {...form}>
      <form  className="space-y-2 mx-2">
        <div className="grid grid-cols-1 gap-y-2 gap-x-8 xl:grid-cols-2">
          {fields.map((field, index) => (
            <div key={index}>
              {!["expirationDate", "startDate", "endDate"].includes(
                field.name
              ) ? (
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
        {/* {textarea && (
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Descripcion del estado actualizado de la Unidad
                </FormLabel>
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
        )} */}
        <div className={`flex justify-end space-x-4 ${space}`}>
          <Button className="rounded-[10px]" variant={"ghost"}>
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
export default CarForm;
