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
          Ingresos  vs Egresos ($)
        </CardTitle>
        <CardDescription> Comparación de ingresos y egresos</CardDescription>
      </CardHeader>
      <CardContent className="w-full">
      <div className="overflow-x-auto 2xl:overflow-hidden">
        <LineChart
          className="w-full h-[330px] min-w-[600px] "
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
        </div>
      </CardContent>
    </Card>
  );
};
