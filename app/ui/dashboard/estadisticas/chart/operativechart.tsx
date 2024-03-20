"use client";

type MyResponsiveLineProps = {
  className?: string;
  colors?: string[];
  data: {
    id: string;
    value: number;
    label: string;
  }[];
};




import { ResponsivePie } from "@nivo/pie";
export function PieChartOperative({ colors, data ,className,...props }: MyResponsiveLineProps) {
  return (
    <div {...props} className={className}>
      <ResponsivePie
        data={data}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 65, left: 10 }}
        cornerRadius={3}
        valueFormat={(value) => `${value}%`}
        innerRadius={0.75}
        padAngle={0}
        colors={colors}
        
        activeOuterRadiusOffset={5}
        
        enableArcLinkLabels={false}
       
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.50}
       
        transitionMode="startAngle"
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: -26,
            translateY: 40,
            itemWidth: 55,
            itemHeight: 11,
            itemsSpacing: 70,
            symbolSize: 17,
            itemDirection: "left-to-right",
            symbolShape: 'circle',
          },
        ]}
         
        theme={{
          labels: {
            text: {
              fontSize: "14px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
        
      />
    </div>
  );
}
