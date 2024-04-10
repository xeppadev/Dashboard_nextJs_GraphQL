import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {
  FormItem ,  
   FormLabel,

} from "@/components/ui/form";

interface selectGroupProps {
  label?: string;
  className?: string;
  className2?: string;
  paramName: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  onValueChange?: (value: string) => void;
}

export default function ComponentOptions({
  label,
  paramName,
  className,
  className2,
  options,
  placeholder,
  onValueChange,
}: selectGroupProps) {
  const serchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleOptionChange = (value: string) => {
    const params = new URLSearchParams(serchParams);
    if (value) {
      params.set(paramName, value);
    } else {
      params.delete(paramName);
    }
    replace(`${pathname}?${params.toString()}`);
    onValueChange && onValueChange(value);
  };

  return (
    <div className={className}>
      <label className="text-sm font-medium">{label}</label>
      <Select onValueChange={(value) => handleOptionChange(value)}>
        <SelectTrigger className={className2}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
