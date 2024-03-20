
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";

  import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


  interface Option {
    value: string;
    label: string;
  }
  
  interface RadioGroupProps {
    options: Option[];
    control: any;
    name: string;
    className?: string;
  }

  export const FormItemsComponent: React.FC<RadioGroupProps> = ({
    control,
    name,
    options,
    className,
  }) => (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Tipo de Documento</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={`flex flex-row space-x-5 ${className}`}
            >
              {options.map((option) => (
                <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{option.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );