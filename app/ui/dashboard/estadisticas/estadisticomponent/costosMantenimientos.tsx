import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieChartOperative } from "../chart/operativechart";
import { Costos } from "@/src/generated/graphql";
type CostosMantenimientosProps = {
  datosMantenimientos: Costos | undefined | null;
};

export function CostosMantenimientos({
  datosMantenimientos,
}: CostosMantenimientosProps) {
  const costoPreventivos = datosMantenimientos?.costoPreventivos || 0;
  const costoCorrectivos = datosMantenimientos?.costoCorrectivos || 0;
  const mesAnterior = datosMantenimientos?.costoMesPasado || 0;
  const totalCostos = costoPreventivos + costoCorrectivos;
  const porcentajeCambio = mesAnterior !== 0 && totalCostos !== 0 ? ((totalCostos - mesAnterior) / mesAnterior) * 100 : 0;
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="font-medium">Mantenimientos</CardTitle>
        <CardDescription>(+{porcentajeCambio.toFixed(2)}%) que el último mes</CardDescription>
      </CardHeader>
      <CardContent>
        <PieChartOperative
          className="w-full h-[320px] overflow-hidden"
          data={[
            {
              id: "Preventivos",
              value: (costoPreventivos / totalCostos) * 100,
              label: "M. Preventivos",
            },
            {
              id: "Correctivos",
              value: (costoCorrectivos / totalCostos) * 100,
              label: "M. Correctivos",
            },
          ]}
          colors={["#F69009", "#D93D32"]}
        />
        <div className="text-center">
          <p className="text-3xl font-semibold">S/. {totalCostos}</p>
          <p className="text-sm text-gray-500">Costos por Mantenimientos</p>
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-sm bg-[#F69009]"></span>

              <p>M. Preventivos</p>
            </div>
            <p>S/. {costoPreventivos}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="p-2 rounded-sm bg-[#D93D32]"></span>

              <p>M. Correctivos</p>
            </div>
            <p>S/. {costoCorrectivos}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
