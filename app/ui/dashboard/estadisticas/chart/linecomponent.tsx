"use client";

type MyResponsiveLineProps = {
  className?: string;
  colors?: string[];
  data: {
    id: string;
    label?: string;
    data: {
      x: string;
      y: number;
    }[];
  }[];
};

import { ResponsiveLine } from "@nivo/line";

export function LineChart({ className , data ,...props }: MyResponsiveLineProps) {
 
  const textColor = "#6B7280"
  return (
    <div {...props} className={className}>
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10, bottom: 65, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 4,
        }}
        colors={["#F69009", "#2563EB"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          axis: {
            ticks: {
              text: {
                
                fontSize: "13px",
                fill: textColor,
                fontWeight: 500,
                
              },
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
          grid: {
            line: {
              stroke: "#6B7280",
              strokeWidth: 0.2,
              width: 0.1,
            },
          },
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 10,
            translateY: 60,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        motionConfig={"gentle"}
        enableSlices="x"
        sliceTooltip={({ slice }) => {
          return (
            <div
              style={{
                borderRadius: "6px",
                background: "rgba(255, 255, 255, 0.4)", // Hacer el fondo semi-transparente
                padding: "9px 12px",
              
                border: "1px solid #F3F4F6",
                backdropFilter: "blur(10px)", // Aplicar el filtro de desenfoque
              }}
            >
              <div
                style={{
                  color: "#000",
                  
                  fontSize: "12px",
                  marginBottom: "4px",
                }}
              >
                {String(slice.points[0].data.x)}
              </div>
              {slice.points.map((point) => (
                <div
                  key={point.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    marginTop: "4px",
                  }}
                >
                  <span className={`text-[1px] mr-1 p-1 rounded-full bg-[${point.serieColor}]`}></span>
                  {point.serieId}: <strong className="ml-1">{`${point.data.yFormatted} Mm`}</strong>
                </div>
              ))}
            </div>
          );
        }}
        enableGridX={false}
       
        role="application"
      />
    </div>
  );
}
