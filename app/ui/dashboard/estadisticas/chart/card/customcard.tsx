import { Card, CardContent } from "@/components/ui/card";
import { MyResponsiveLine } from "../linecardcomponent";
import {
  MingcuteCarFillDualtone,
  SolarCalendarDateBoldDuotone,
  ChartMantenimientosRealizados,
} from "@/app/lib/icons";
import {format} from 'date-fns'
// Define la interfaz para las props
interface CustomCardProps {
  title: string;
  value: string;
  placa?: string;
  color: string;
  data: {
    id: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];
}

export const CustomCard = ({
  title,
  value,
  placa,
  color,
  data,
}: CustomCardProps) => (
  <Card className="overflow-hidden flex flex-row items-center ">
    <CardContent className=" justify-between items-center  w-full py-6 ">
      <div className="flex items-start flex-col space-y-4 ">
        <p className="text-[15px] font-medium">{title}</p>
        <p className="text-3xl font-semibold">{value}</p>
        <div className="flex-row flex space-x-1 items-center">
          {placa ? (
            <MingcuteCarFillDualtone className=" text-[#2563EB] h-[24px] w-[24px]" />
          ) : (
            <SolarCalendarDateBoldDuotone className=" text-[#2563EB] h-[22px] w-[22px]" />
          )}

          <div className="flex-row flew space-x-1 ">
            <span className="text-[14px] text-gray-500 font-medium ">
              {placa ? "Placa:" : "Fecha:"}
            </span>
            <span className="text-[14px] text-gray-500 font-medium ">
              {placa ? placa :  format(new Date(), 'dd/MM/yyyy')}
              
            </span>
          </div>
        </div>
      </div>
    </CardContent>
    <MyResponsiveLine
      className="w-[30%] md:w-2/5 h-[50px] pr-6"
      color={color}
      data={data}
    />
  </Card>
);
