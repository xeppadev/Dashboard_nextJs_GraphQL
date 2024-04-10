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

export const FormTextComponent: React.FC<FieldValues> = ({
  control,
  name,
  placeholder,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <Textarea
            placeholder={placeholder}
            className="resize-none"
            {...field}
          />
        </FormControl>

        <FormMessage />
      </FormItem>
    )}
  />
);
