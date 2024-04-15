import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieChart } from "../chart/piecomponent";
import { RepuestosMasConsumidosPorMes } from "@/src/generated/graphql";
import { convertMonth } from "@/app/lib/utils/utils";
type GastosGeneralesProps = {
  datosResponsiveBar: RepuestosMasConsumidosPorMes | undefined | null;
};
export function GastosGenerales({ datosResponsiveBar }: GastosGeneralesProps) {
  const repuestos = [
    datosResponsiveBar?.repuesto1,
    datosResponsiveBar?.repuesto2,
    datosResponsiveBar?.repuesto3,
    datosResponsiveBar?.repuesto4,
  ];

  const data = repuestos.map((repuesto, index) => ({
    id:
      repuesto?.producto == "-"
        ? `Repuesto ${index + 1}`
        : repuesto?.producto?.toString() || `Repuesto ${index + 1}`,
    value: repuesto?.costo || 0,
    label: repuesto?.producto || `Repuesto ${index + 1}`,
  }));

  data.push({
    id: "Otros",
    value: datosResponsiveBar?.otros || 0,
    label: "Otros",
  });
  const totalCosto = repuestos.reduce(
    (sum, repuesto) => sum + (repuesto?.costo || 0),
    0
  );

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="font-medium">Costos por Repuestos</CardTitle>
        <CardDescription>Balance de costos por repuestos</CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-col sm:flex-row">
        <PieChart
          className="w-full sm:w-1/2 h-[450px] overflow-hidden"
          data={data}
          colors={["#2563EB", "#06AED4", "#F69009", "#D93D32", "#E5E7EB"]}
        />

        <div className="space-y-5 w-full sm:w-1/2 mt-14 sm:mt-0">
          <div className="text-start">
            <p className="text-sm text-[#637381] ">
              TOTAL BALANCE{" "}
              {datosResponsiveBar?.mes && convertMonth(datosResponsiveBar?.mes)}
            </p>
            <p className="text-3xl font-semibold">${totalCosto}</p>
          </div>
          <div className="flex flex-col space-y-3.5 mt-4 text-sm">
            <h3 className="text-[#637381] text-sm ">GASTO ACTUAL</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-2 rounded-sm bg-[#2563EB]"></span>

                <p>{datosResponsiveBar?.repuesto1?.producto}</p>
              </div>
              <p>${datosResponsiveBar?.repuesto1?.costo}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-2 rounded-sm bg-[#06AED4]"></span>

                <p>{datosResponsiveBar?.repuesto2?.producto}</p>
              </div>
              <p>${datosResponsiveBar?.repuesto2?.costo}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-2 rounded-sm bg-[#F69009]"></span>

                <p>{datosResponsiveBar?.repuesto3?.producto}</p>
              </div>
              <p>${datosResponsiveBar?.repuesto3?.costo}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-2 rounded-sm bg-[#D93D32]"></span>

                <p>{datosResponsiveBar?.repuesto4?.producto}</p>
              </div>
              <p>${datosResponsiveBar?.repuesto4?.costo}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-2 rounded-sm bg-[#E5E7EB]"></span>

                <p>{datosResponsiveBar?.otros ? "Otros" : ""} </p>
              </div>
              <p>${datosResponsiveBar?.otros}</p>
            </div>
          </div>
          <div className="flex justify-between mt-4"></div>
        </div>
      </CardContent>
    </Card>
  );
}
