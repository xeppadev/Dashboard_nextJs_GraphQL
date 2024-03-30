import { CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface selectGroupProps {
  className?: string;
  className2?: string;
  placeholder?: string;
  onValueChange?: (value: string, index: number) => void;
}

export default function Rating({
  className2,
  className,
  placeholder,
  onValueChange,
}: selectGroupProps) {
  const elementos = [
    "Elemento 1",
    "Elemento 2",
    "Elemento 3",
    "Elemento 4",
    "Elemento 5",
  ];
  const options = [
    { value: "1", label: "⭐ 1" },
    { value: "2", label: "⭐ 2" },
    { value: "3", label: "⭐ 3" },
    { value: "4", label: "⭐ 4" },
    { value: "5", label: "⭐ 5" },
    { value: "6", label: "⭐ 6" },
    { value: "7", label: "⭐ 7" },
    { value: "8", label: "⭐ 8" },
    { value: "9", label: "⭐ 9" },
    { value: "10", label: "⭐ 10" },
  ];

  return (
    <>
      <div className="flex justify-between  w-[98%] space-x-4">
        <CardTitle className="text-sm font-medium">
          {" "}
          Elementos Critico
        </CardTitle>
        <CardTitle className="text-sm font-medium"> Estado Actual</CardTitle>
      </div>
      {elementos.map((element, index) => (
        <div key={index} className="inline-flex  w-full space-x-4">
          <Container className="2xl:w-[86%] w-[85%] border-input ">
            <h4>{element}</h4>
          </Container>
          <div className={className}>
          <Select onValueChange={(value) => onValueChange && onValueChange(value, index)} >
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
        </div>
      ))}
    </>
  );
}
