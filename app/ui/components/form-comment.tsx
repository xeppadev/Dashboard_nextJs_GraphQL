import { FieldValues } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";




export const FormComment: React.FC<FieldValues> = ({
    control,
    name,
    label,
    placeholder,
    description,
    className2,
    className= "w-full",
    type = "text",
  }) => (
    <FormField
    control={control}
    name="description"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Observaciones</FormLabel>
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
  );