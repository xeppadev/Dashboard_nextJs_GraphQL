"use client";
import { ResponsiveTimeRange } from "@nivo/calendar";
import { subMonths, format, addDays, eachDayOfInterval } from "date-fns";
import { es } from 'date-fns/locale';
type MyResponsiveTimeRangeProps = {
  data: {
    day: string;
    value: number;
  }[];
  className?: string;
};

export const MyResponsiveTimeRange = ({
  data,
  className,
  ...props
}: MyResponsiveTimeRangeProps) => {
  // Si data es un array vacío, agrega un objeto con la fecha actual y un valor de 0

  // Ordena los datos por fecha
  const sortedData = [...data].sort(
    (a, b) => new Date(a.day).getTime() - new Date(b.day).getTime()
  );

  // Toma la fecha del último objeto en los datos ordenados
  // Comprueba si sortedData tiene al menos un elemento
  const to = sortedData.length > 0 ? addDays(new Date(sortedData[sortedData.length - 1].day), 2) : new Date();
  const from = subMonths(to, 4);

  const formfecha =format(from, "yyyy-MM-dd");
  const tofecha = format(to, "yyyy-MM-dd");
    // Crea un array de todos los días en el rango de fechas
    const allDays = eachDayOfInterval({ start: from, end: to }).map(day => format(day, 'yyyy-MM-dd'));

    // Asegúrate de que hay un objeto en data para cada día en allDays
    const completeData = allDays.map(day => {
      const existingData = data.find(d => d.day === day);
      return existingData ? existingData : { day, value: 0 };
    });

  return (
    <div {...props} className={className}>
      <ResponsiveTimeRange
        data={completeData }
        from={formfecha}
        to={tofecha}
        isInteractive={false}
        emptyColor="#eeeeee"
        colors={["#e9effd", "#a7c0f7", "#6691f1", "#2563EB"]}
        minValue={0}
        weekdayTicks={[0, 1, 2, 3, 4, 5, 6]}
        margin={{ top: 40, right: 0, bottom: 0, left: 0 }}
        weekdayLegendOffset={65}
        tooltip={(data) =>
          format(new Date(data.day), "dd/MM/yyyy") + " - " + data.value
        }
        theme={{
          text: {
            fontSize: 13,
            fill: "#6B7280",
            
          },
        }}
        dayRadius={5}
        daySpacing={5}
        dayBorderWidth={0}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            symbolShape: "circle",
            itemDirection: "right-to-left",
            translateX: -60,
            translateY: -45,
            symbolSize: 14,
          },
        ]}
      />
    </div>
  );
};
