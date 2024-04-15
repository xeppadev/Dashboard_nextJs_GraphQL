import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "../chart/chartcomponent";

type datosOperatividad = {
    name: string;
    Operatividad: number | string;
  }[] | undefined ;
  
  // Uso en un componente
  type MyComponentProps = {
    datosOperatividad: datosOperatividad
  };

export function Operatividad({ datosOperatividad }: MyComponentProps) {
  const totalHoras = datosOperatividad?.reduce((acc, item) => acc + Number(item.Operatividad), 0);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-medium">
          {" "}
          Operatividad por cada Mes
        </CardTitle>
        <CardDescription>
          Balance de horas operativas por cada mes
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
      <div className="overflow-x-auto">
        <Overview
          className="w-full h-[380px] min-w-[600px]"
          data={datosOperatividad || []}
          groupMode="grouped"
          borderRadius={5}
          tickPadding={3}
          enableLabel={true}
        />
        </div>
        <div className="text-center">
          <p className="text-3xl font-semibold">{totalHoras} h</p>
          <p className="text-sm text-gray-500">Horas Operativas</p>
        </div>
      </CardContent>
    </Card>
  );
}
