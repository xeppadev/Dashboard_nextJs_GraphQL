
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

interface FormFieldComponentProps {
  value?: string;
  control: any;
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  className2?: string;
  className?: string;
  type?: string;
  noeditable?: boolean;
 

}

export const FormFieldComponent: React.FC<FormFieldComponentProps> = ({
  value,
  control,
  name,
  label,
  noeditable,
  placeholder,
  description,
  className2,
  className = "w-full",
  type = "text",
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className={className}>
        <FormLabel>{label}</FormLabel>
        <FormControl className={className2}>
          <Input
            placeholder={placeholder}
            {...field}
            type={type}
            className="w-full h-12 rounded-[10px]"
            value={value ? value : field.value}
            readOnly={noeditable}
          />
        </FormControl>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
);
