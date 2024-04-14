import { Card, CardContent } from "@/components/ui/card";
import { MyResponsiveLine } from "../chart/linecardcomponent";
import {
  SolarSquareArrowDownBoldDuotone,
  SolarRoundArrowDownBoldDuotone,
} from "@/app/lib/icons";
// Define la interfaz para las props
interface CustomCardProps {
  title: string;
  value: number;
  detraccion: number;
  igv: number;
  color: string;
  data: {
    id: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];
}

export const CardIngresos = ({
  title,
  value,
  detraccion,
  color,
  data,
  igv,
}: CustomCardProps) => (
  <Card className="overflow-hidden flex flex-row items-center ">
    <CardContent className=" justify-between items-center  w-full py-6 ">
      <div className="flex items-start flex-col space-y-4 ">
        <p className="text-[15px] font-medium">{title}</p>
        <p className="text-3xl font-semibold">${value}</p>
        <div className="flex-row flex space-x-3 items-center">
          <div className="fle-row flex space-x-1 items-center">
            
              <SolarRoundArrowDownBoldDuotone className=" w-[22px] h-[22px]  text-[#c3362d]" />
            
            <div className="flex-row flew space-x-1 ">
              <span className="text-[14px] text-gray-500 font-medium ">
                Detraccion:
              </span>
              <span className="text-[14px] text-gray-500 font-medium ">
                $ {detraccion}
              </span>
            </div>
          </div>
          <div className="fle-row flex space-x-1 items-center">
           
            <SolarRoundArrowDownBoldDuotone className=" w-[22px] h-[22px]  text-[#c3362d]" />
            
            <div className="flex-row flew space-x-1 ">
              <span className="text-[14px] text-gray-500 font-medium ">
                IGV:
              </span>
              <span className="text-[14px] text-gray-500 font-medium ">
                $ {igv}
              </span>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
    <MyResponsiveLine
      className="w-1/5 md:w-2/5 h-[50px] pr-6"
      color={color}
      data={data}
    />
  </Card>
);
