import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChart } from "../chart/linecomponent";

type DatosKilometraje =
  | {
      x: string;
      y: number;
    }[]
  | undefined;

// Uso en un componente
type MyComponentProps = {
  datosKilometraje: DatosKilometraje;
  placa?: string | null;
};

export function KilometrajeUnidad({
  datosKilometraje,
  placa,
}: MyComponentProps) {
  const kmActual = datosKilometraje?.[datosKilometraje.length - 1]?.y || 0;
  const kmInicial = datosKilometraje?.[0]?.y || 0;
  const kmMesAnterior = datosKilometraje?.[datosKilometraje.length - 2]?.y || 0;
  const porcentajeCambio =
    kmMesAnterior !== 0 && kmActual !== 0
      ? ((kmActual - kmMesAnterior) / kmMesAnterior) * 100
      : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-medium">
          Recorrido Actual de la Unidad Vehicular(Mm)
        </CardTitle>
        <CardDescription>
          (+{porcentajeCambio.toFixed(2)}%) que el último mes
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-row">
        <LineChart
          className="w-2/3 h-[330px] "
          data={[
            {
              id: "Recorrido Actual",
              data: datosKilometraje || [],
            },
          ]}
        />
        <div className="space-y-7 w-1/3 flex flex-col mt-5 items-center">
        <div className="text-center">
            <p className=" text-gray-500">Placa</p>
            <p className="text-3xl font-semibold">{placa || ""}</p>
          </div>
          <div className="text-center">
          <p className=" text-gray-500">Recorrido Actual</p>
            <p className="text-3xl font-semibold">{kmActual} Mm</p>
            
          </div>
         
        </div>
      </CardContent>
    </Card>
  );
}
