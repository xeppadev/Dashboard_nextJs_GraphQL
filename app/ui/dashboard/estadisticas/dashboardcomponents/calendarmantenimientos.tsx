import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MyResponsiveTimeRange } from "../chart/chartdatecomponent";
type CalendarMantenimientosProps = {
  data: {
    day: string;
    value: number;
  }[]
    | undefined;
};

export const CalendarMantenimientos = ({
  data,
}: CalendarMantenimientosProps) => {
  return (
    <Card className="overflow-x-auto">
      <CardHeader>
        <CardTitle className="font-medium">Mantenimientos Realizados</CardTitle>
        <CardDescription>Cantidad de mantenimientos realizados al dia</CardDescription>
      </CardHeader>
      <CardContent>
        <MyResponsiveTimeRange
          className="w-full h-[330px] overflow-hidden"
          data={ data || []}
        />
      </CardContent>
    </Card>
  );
};
