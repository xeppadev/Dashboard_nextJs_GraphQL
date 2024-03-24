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
  import { Input } from "@/components/ui/input";





export const FormFieldComponent: React.FC<FieldValues> = ({
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
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel >{label}</FormLabel>
          <FormControl className={className2}>
            <Input placeholder={placeholder} {...field} type={type} className="w-full h-12" />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );