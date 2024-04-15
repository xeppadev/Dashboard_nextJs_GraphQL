import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "../chart/chartcomponent";
import {
  FluentNotepadPerson24Filled,
  SolarBillListBoldDuotone,
  SolarFullScreenSquareBoldDuotone,
} from "@/app/lib/icons";

type GastosGeneralesDashboardProps = {
  datos:
    | { name: string; Personal: number; Facturas: number; Otros: number }[]
    | undefined;
};

export function GastosGeneralesDashboard({
  datos,
}: GastosGeneralesDashboardProps) {
  const ultimoMes = datos && datos.length > 0 ? datos[datos.length - 1] : null;
  const gastoTotalMensualUltimoMes = ultimoMes
    ? ultimoMes.Personal + ultimoMes.Facturas + ultimoMes.Otros
    : 0;
  const gastoPersonalMes = ultimoMes ? ultimoMes.Personal : 0;
  const gastoFacturasMes = ultimoMes ? ultimoMes.Facturas : 0;
  const gastoOtrosMes = ultimoMes ? ultimoMes.Otros : 0;

  

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-medium">Gastos Generales</CardTitle>
        <CardDescription>Balance de gastos generales del mes</CardDescription>
      </CardHeader>
      <CardContent className="w-full ">
      <div className="overflow-x-auto">
        <Overview
          className="w-full h-[300px] min-w-[600px]"
          data={datos || []}
          enableLabel={false}
          groupMode="grouped"
          borderRadius={3}
          tickPadding={3}
        />
        </div>
        <div className="text-center">
          <p className="text-3xl font-semibold">
            ${gastoTotalMensualUltimoMes}
          </p>
          <p className="text-sm text-gray-500">TOTAL BALANCE DEL MES</p>
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FluentNotepadPerson24Filled className="text-[#2563EB] w-6 h-6" />

              <p>Personal</p>
            </div>
            <p>${gastoPersonalMes}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <SolarBillListBoldDuotone className="text-[#06AED4] w-6 h-6" />

              <p>insumos</p>
            </div>
            <p>${gastoFacturasMes}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <SolarFullScreenSquareBoldDuotone className="text-[#F69009] w-6 h-6" />

              <p>Otros</p>
            </div>
            <p>${gastoOtrosMes}</p>
          </div>
        </div>
        
      </CardContent>
    </Card>
  );
}
//
