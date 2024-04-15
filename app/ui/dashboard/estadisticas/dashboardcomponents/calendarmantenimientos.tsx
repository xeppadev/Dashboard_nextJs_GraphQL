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
    <Card >
      <CardHeader>
        <CardTitle className="font-medium">Mantenimientos Programados</CardTitle>
        <CardDescription>Cantidad de mantenimientos Programados</CardDescription>
      </CardHeader>
      <CardContent className="w-full ">
      <div className="overflow-x-auto">
        <MyResponsiveTimeRange
          className="w-full h-[330px] min-w-[600px]"
          data={ data || []}
        />
        </div>
      </CardContent>
    </Card>
  );
};
