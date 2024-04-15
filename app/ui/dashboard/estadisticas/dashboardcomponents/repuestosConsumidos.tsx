import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieChart } from "../chart/piecomponent";
import { DashRepuestos } from "@/src/generated/graphql";

type RepuestosCambiadosProps = {
  dataRepuestosConsumidos: DashRepuestos | undefined | null;
};
export const RepuestosCambiados = ({
  dataRepuestosConsumidos,
}: RepuestosCambiadosProps) => {
  const productos = [
    dataRepuestosConsumidos?.prod1,
    dataRepuestosConsumidos?.prod2,
    dataRepuestosConsumidos?.prod3,
    dataRepuestosConsumidos?.prod4,
    dataRepuestosConsumidos?.prod5,
    dataRepuestosConsumidos?.otros,
  ];

  const data = productos.map((producto, index) => ({
    id: producto?.producto || `Producto ${index + 1}`,
    value: producto?.cantidadConsumida || 0,
    label: producto?.producto || `Producto ${index + 1}`,
  }));

  const totalCosto = productos.reduce(
    (sum, producto) => sum + (producto?.cantidadConsumida || 0),
    0
  );

  return (
    <Card className="overflow-x-auto">
      <CardHeader>
        <CardTitle className="font-medium">
          Repuestos Consumidos actualmente
        </CardTitle>
        <CardDescription>Cantidad de repuestos consumidos</CardDescription>
      </CardHeader>
      <CardContent className="flex sm:flex-row  flex-col">

        <PieChart
          className=" sm:w-1/2 h-[360px]  w-full"
          data={data}
          colors={["#2563EB", "#06AED4", "#F69009", "#D93D32", "#E5E7EB"]}
        />
        <div className="space-y-5 sm:w-1/2 w-full ">
          <div className="text-start">
            <p className="text-sm text-[#637381] ">TOTAL BALANCE MES</p>
            <p className="text-3xl font-semibold  ">${totalCosto}</p>
          </div>
          <div className="flex flex-col space-y-3.5 mt-4 text-sm">
            <h3 className="text-[#637381] text-sm ">GASTO ACTUAL</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-2 rounded-sm bg-[#2563EB]"></span>

                <p>{dataRepuestosConsumidos?.prod1?.producto}</p>
              </div>
              <p>
                {dataRepuestosConsumidos?.prod1?.cantidadConsumida
                  ? `$${dataRepuestosConsumidos?.prod1?.cantidadConsumida}`
                  : ""}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-2 rounded-sm bg-[#D93D32]"></span>
                <p> {dataRepuestosConsumidos?.prod2?.producto}</p>
              </div>
              <p>
                
                {dataRepuestosConsumidos?.prod2?.cantidadConsumida
                  ? `$${dataRepuestosConsumidos?.prod2?.cantidadConsumida}`
                  : ""}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-2 rounded-sm bg-[#E5E7EB]"></span>

                <p> {dataRepuestosConsumidos?.prod3?.producto}</p>
              </div>
              <p>
                {dataRepuestosConsumidos?.prod3?.cantidadConsumida
                  ? `$${dataRepuestosConsumidos?.prod3?.cantidadConsumida}`
                  : ""}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-2 rounded-sm bg-[#06AED4]"></span>

                <p> {dataRepuestosConsumidos?.prod4?.producto}</p>
              </div>
              <p>
                {dataRepuestosConsumidos?.prod4?.cantidadConsumida
                  ? `$${dataRepuestosConsumidos?.prod4?.cantidadConsumida}`
                  : ""}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-2 rounded-sm bg-[#F69009]"></span>

                <p> {dataRepuestosConsumidos?.prod5?.producto}</p>
              </div>
              <p>
                {dataRepuestosConsumidos?.prod5?.cantidadConsumida
                  ? `$${dataRepuestosConsumidos?.prod5?.cantidadConsumida}`
                  : ""}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="p-2 rounded-sm bg-[#5954F0]"></span>

                <p>{dataRepuestosConsumidos?.otros?.producto}</p>
              </div>
              <p>
                {dataRepuestosConsumidos?.otros?.cantidadConsumida
                  ? `$${dataRepuestosConsumidos?.otros?.cantidadConsumida}`
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
