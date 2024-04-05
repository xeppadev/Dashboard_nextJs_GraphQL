"use client";
import { ResponsivePie } from "@nivo/pie";

type PieChartProps = {
  colors?: string[];
  data: {
    id: string;
    value: number;
    label: string;
  }[];
  className?: string;
};

export function PieChart({ colors, data, className, ...props }: PieChartProps) {
  return (
    <div {...props} className={className}>
      <ResponsivePie
        data={data}
        sortByValue
        margin={{ top: 30, right: 10, bottom: 30, left: 10 }}
        cornerRadius={6}
        padAngle={0}
        colors={colors}
        borderWidth={0}
        activeOuterRadiusOffset={5}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
        transitionMode="startAngle"
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
