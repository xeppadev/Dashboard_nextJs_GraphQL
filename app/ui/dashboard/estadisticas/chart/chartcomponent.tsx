'use client';
import { ResponsiveBar } from "@nivo/bar"


type DataItem = {
  name: string;
  [key: string]: number | string;
};

type MyResponsiveLineProps = {
  data: DataItem[];
  className?: string;
  groupMode?:  "stacked" | "grouped";
  borderRadius?: number;
  layout?: "horizontal" | "vertical";
  tickPadding?: number;
  padding?: number;
  enableLabel?: boolean;
  
};

export function Overview({   enableLabel,padding = 0.4,tickPadding = 0 , layout,borderRadius,groupMode,data , className, ...props }: MyResponsiveLineProps) {
  const keys = Object.keys(data[0]).filter((key) => key !== "name")
  return (
    <div {...props} className={className}>
      <ResponsiveBar
        data={data}
        keys={keys}

       
        indexBy="name"
        margin={{ top: 20, right: 0, bottom: 50, left: 20 }}
        
        padding={padding}
        groupMode={groupMode}
        borderRadius={borderRadius}
        layout={layout}
        colors={["#2563eb", "#06AED4", "#F69009", "#E5E7EB", "#D93D32"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: tickPadding,
        }}
        
        gridYValues={4}
        theme={{
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
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
           
        legends={[
          {
              dataFrom: 'keys',
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 30,
              translateY: 35,
              itemsSpacing: 0,
              itemWidth: 100,
              symbolShape: 'circle',
              itemHeight:10,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 14,
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
        
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={enableLabel}
        
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}