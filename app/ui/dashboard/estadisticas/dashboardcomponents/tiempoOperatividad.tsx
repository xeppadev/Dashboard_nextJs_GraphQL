"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieChartOperative } from "../chart/operativechart";
import { Button } from "@/components/ui/button";
import { OperatividadOut } from "@/src/generated/graphql";
import { useRouter } from "next/navigation";

type TiempoOperatividadProps = {
  datosOperatividad: OperatividadOut | undefined | null;
};

export function TiempoOperatividad({
  datosOperatividad,
}: TiempoOperatividadProps) {
  const router = useRouter();
  const porcentajeOperativo =
    (datosOperatividad?.operatividadPorcentual || 0) * 100;
  const horasOperativas = datosOperatividad?.operatividadHoras || 0;
  const horasNoOperativas = 100 - porcentajeOperativo;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-medium">Tiempo de Operatividad</CardTitle>
        <CardDescription>Horas que el vehiculo esta Operativo</CardDescription>
      </CardHeader>
      <CardContent>
        <PieChartOperative
          className="w-full h-[360px] overflow-hidden"
          data={[
            {
              id: "Operativas",
              value: horasOperativas,
              label: "Horas Operativas",
            },
            {
              id: "No Operativas",
              value: horasNoOperativas,
              label: "Horas No Operativas",
            },
          ]}
          colors={["#F69009", "#E5E7EB"]}
        />
        <div className="text-center">
          <p className="text-3xl font-semibold">
            {horasOperativas ? horasOperativas : 0}h{" "}
          </p>
          <p className="text-sm text-gray-500">HORAS OPERATIVAS</p>
        </div>
        <div className="flex justify-end mt-2">
          <Button
            onClick={() => {
              router.push("/dashboard/vehiculos/historial_clinico");
            }}
          >
            {" "}
            Ver Detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
