"use client";
import { ResponsivePie } from "@nivo/pie";
export function PieChart({ ...props }) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Refrigerante", value: 111 , label: "Refrigerante"},
          { id: "Aceite", value: 157, label: "Aceite"},
          { id: "Bateria", value: 129, label: "Batería Bosh 42MP"},
          { id: "Gassolina", value: 150, label: "Gasolina"},
          { id: "Frenos", value: 119, label: "Pastillas de freno"},
          { id: "Otro", value: 72, label: "Otros"},
        ]}
        sortByValue
        margin={{ top: 10, right: 10, bottom: 20, left: 10 }}
        cornerRadius={6}
        padAngle={0}
        colors={["#2563EB",  "#06AED4",  "#F69009","#D93D32", "#E5E7EB", "#5954F0"]}
        borderWidth={3}
        activeOuterRadiusOffset={5}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        arcLabel={(d) => `${d.id}`}
        arcLabelsTextColor={"#ffffff"}
        arcLabelsRadiusOffset={0.65}
       
        transitionMode="startAngle"
        // legends={[
        //   {
        //     anchor: "bottom",
        //     direction: "row",
        //     justify: false,
        //     translateX: 15,
        //     translateY: 52,
        //     itemWidth: 55,
        //     itemHeight: 11,
        //     itemsSpacing: 2,
        //     symbolSize: 17,
        //     itemDirection: "left-to-right",
        //   },
        // ]}
         
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
