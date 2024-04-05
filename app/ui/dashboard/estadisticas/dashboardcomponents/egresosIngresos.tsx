import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LineChart } from "../chart/linecomponent";
type EgresosIngresosProps = {
  dataIngresos:
    | {
        x: string;
        y: number;
      }[]
    | undefined;
  dataEgresos:
    | {
        x: string;
        y: number;
      }[]
    | undefined;
};

export const EgresosIngresosComponent = ({
  dataEgresos,
  dataIngresos,
}: EgresosIngresosProps) => {
  return (
    <Card className="overflow-x-auto">
      <CardHeader>
        <CardTitle className="font-medium">
          Ingresos  vs Egresos (S/.)
        </CardTitle>
        <CardDescription> Comparación de ingresos y egresos</CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart
          className="w-full h-[330px]  "
          data={[
            {
              id: "Ingresos",
              data: dataIngresos || [], 
            },
            {
              id: "Egresos",
              data: dataEgresos || [],
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};
