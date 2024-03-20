import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: Option[];
  control: any;
  name: string;
  className?: string;
  className2?: string;
  placeholder?: string;
  label?: string;
}

export const FormSelectComponent: React.FC<RadioGroupProps> = ({
  control,
  name,
  options,
  className = "w-1/4 mt-2",
  className2 = "h-10",
  label,
  placeholder,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className={`${className}`}>
        {label && <FormLabel>{label}</FormLabel>}
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger className={`${className2}`}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                 {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <FormMessage />
      </FormItem>
    )}
  />
);
