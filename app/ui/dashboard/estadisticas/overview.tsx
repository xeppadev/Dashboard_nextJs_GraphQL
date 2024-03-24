import { Overview } from "./chart/chartcomponent";
import { PieChart } from "./chart/piecomponent";
import { PieChartOperative } from "./chart/operativechart";
import { LineChart } from "./chart/linecomponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MyResponsiveTimeRange } from "./chart/chartdatecomponent";
import { CustomCard } from "./chart/card/customcard";
export default function Dashboard() {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-10">
        <CustomCard
          title="Ingresos Mensuales"
          value="S/. 2400.00"
          percentage="+3.1%"
          color="#2159d3"
          data={[
            {
              id: "japan",
              data: [
                {
                  x: "plane",
                  y: 259,
                },
                {
                  x: "helicopter",
                  y: 149,
                },
                {
                  x: "boat",
                  y: 230,
                },
                {
                  x: "train",
                  y: 58,
                },
                {
                  x: "subway",
                  y: 22,
                },
                {
                  x: "bus",
                  y: 52,
                },
                {
                  x: "car",
                  y: 256,
                },
                {
                  x: "moto",
                  y: 190,
                },
                {
                  x: "bicycle",
                  y: 10,
                },
                {
                  x: "horse",
                  y: 126,
                },
                {
                  x: "skateboard",
                  y: 56,
                },
                {
                  x: "others",
                  y: 32,
                },
              ],
            },
          ]}
        />

        <CustomCard
          title="Mantenimientos Realizados"
          value="211"
          percentage="+3.1%"
          color="#dd8108"
          data={[
            {
              id: "norway",

              data: [
                {
                  x: "plane",
                  y: 284,
                },
                {
                  x: "helicopter",
                  y: 8,
                },
                {
                  x: "boat",
                  y: 72,
                },
                {
                  x: "train",
                  y: 235,
                },
                {
                  x: "subway",
                  y: 158,
                },
                {
                  x: "bus",
                  y: 26,
                },
                {
                  x: "car",
                  y: 236,
                },
                {
                  x: "moto",
                  y: 31,
                },
                {
                  x: "bicycle",
                  y: 39,
                },
                {
                  x: "horse",
                  y: 129,
                },
                {
                  x: "skateboard",
                  y: 50,
                },
                {
                  x: "others",
                  y: 22,
                },
              ],
            },
          ]}
        />

        <CustomCard
          title="Mantenimientos Cancelados"
          value="13"
          percentage="+3.1%"
          color="#c3362d"
          data={[
            {
              id: "germany",

              data: [
                {
                  x: "plane",
                  y: 217,
                },
                {
                  x: "helicopter",
                  y: 16,
                },
                {
                  x: "boat",
                  y: 289,
                },
                {
                  x: "train",
                  y: 63,
                },
                {
                  x: "subway",
                  y: 180,
                },
                {
                  x: "bus",
                  y: 61,
                },
                {
                  x: "car",
                  y: 292,
                },
                {
                  x: "moto",
                  y: 141,
                },
                {
                  x: "bicycle",
                  y: 292,
                },
                {
                  x: "horse",
                  y: 148,
                },
                {
                  x: "skateboard",
                  y: 232,
                },
                {
                  x: "others",
                  y: 148,
                },
              ],
            },
          ]}
        />
      </div>
      <div className="grid lg:grid-cols-3  grid-cols-1  gap-6">
        <div className="lg:col-span-2 col-span-1  ">
          <Card>
            <CardHeader>
              <CardTitle className="font-medium">Gastos Generales</CardTitle>
              <CardDescription>
                Balance across all your accounts
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <Overview className="w-full h-[300px] overflow-hidden" data={
                 
                 [
                  {
                    name: "Jan",
                    repuestos: Math.floor(Math.random() * 5000) + 1000,
                    insumos: Math.floor(Math.random() * 5000) + 1000,
                    otros: Math.floor(Math.random() * 5000) + 1000,
                  },
                  {
                    name: "Feb",
                    repuestos: Math.floor(Math.random() * 5000) + 1000,
                    insumos: Math.floor(Math.random() * 5000) + 1000,
                    otros: Math.floor(Math.random() * 5000) + 1000,
                  },
                  {
                    name: "Mar",
                    repuestos: Math.floor(Math.random() * 5000) + 1000,
                    insumos: Math.floor(Math.random() * 5000) + 1000,
                    otros: Math.floor(Math.random() * 5000) + 1000,
                  },
                  {
                    name: "Apr",
                    repuestos: Math.floor(Math.random() * 5000) + 1000,
                    insumos: Math.floor(Math.random() * 5000) + 1000,
                    otros: Math.floor(Math.random() * 5000) + 1000,
                  },
                  {
                    name: "May",
                    repuestos: Math.floor(Math.random() * 5000) + 1000,
                    insumos: Math.floor(Math.random() * 5000) + 1000,
                    otros: Math.floor(Math.random() * 5000) + 1000,
                  },
                  {
                    name: "Jun",
                    repuestos: Math.floor(Math.random() * 5000) + 1000,
                    insumos: Math.floor(Math.random() * 5000) + 1000,
                    otros: Math.floor(Math.random() * 5000) + 1000,
                  },
                  {
                    name: "Jul",
                    repuestos: Math.floor(Math.random() * 5000) + 1000,
                    insumos: Math.floor(Math.random() * 5000) + 1000,
                    otros: Math.floor(Math.random() * 5000) + 1000,
                  },
                  {
                    name: "Aug",
                    repuestos: Math.floor(Math.random() * 5000) + 1000,
                    insumos: Math.floor(Math.random() * 5000) + 1000,
                    otros: Math.floor(Math.random() * 5000) + 1000,
                  },
                  {
                    name: "Sep",
                    repuestos: Math.floor(Math.random() * 5000) + 1000,
                    insumos: Math.floor(Math.random() * 5000) + 1000,
                    otros: Math.floor(Math.random() * 5000) + 1000,
                  },
                  {
                    name: "Oct",
                    repuestos: Math.floor(Math.random() * 5000) + 1000,
                    insumos: Math.floor(Math.random() * 5000) + 1000,
                    otros: Math.floor(Math.random() * 5000) + 1000,
                  },
                  {
                    name: "Nov",
                    repuestos: Math.floor(Math.random() * 5000) + 1000,
                    insumos: Math.floor(Math.random() * 5000) + 1000,
                    otros: Math.floor(Math.random() * 5000) + 1000,
                  },
                  {
                    name: "Dec",
                    repuestos: Math.floor(Math.random() * 5000) + 1000,
                    insumos: Math.floor(Math.random() * 5000) + 1000,
                    otros: Math.floor(Math.random() * 5000) + 1000,
                    
                  },
                ]
                
              } 
              enableLabel={false}
               groupMode="grouped"
               borderRadius={3}
               tickPadding={-14}
              />
              <div className="text-center">
                <p className="text-3xl font-semibold">$35,916.81</p>
                <p className="text-sm text-gray-500">TOTAL BALANCE</p>
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 24 24"
                      className="text-blue-500"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1-3 3l-6-6a6 6 0 0 1-8-8z"
                      />
                    </svg>
                    
                    <p>Repuestos</p>
                  </div>
                  <p>$16,213.20</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className=" text-[#06AED4]"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm4-4h8l4 4H4zm0 8h4"
                      />
                    </svg>

                    <p>insumos</p>
                  </div>
                  <p>$9,626.80</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-500"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <line x1="3" x2="6" y1="3" y2="6" />
                      <line x1="21" x2="18" y1="3" y2="6" />
                      <line x1="3" x2="6" y1="21" y2="18" />
                      <line x1="21" x2="18" y1="21" y2="18" />
                    </svg>

                    <p>Otros</p>
                  </div>
                  <p>$10,076.81</p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                {/* <Button variant="outline">Add funds</Button>
          <Button variant="outline">Transfer funds</Button> */}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-1">
          <Card>
            <CardHeader>
            <CardTitle className="font-medium">Tiempo de Operatividad</CardTitle>
              <CardDescription>(+12%) than last month</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChartOperative className="w-full h-[365px] overflow-hidden"
               data={[
                { id: "Oper", value: 80 , label: "Horas Operativas"},
                { id: "No Oper", value: 20, label: "Horas No Operativas"},
                
              ]}
              colors={["#F69009","#E5E7EB" ]}
              />
              <div className="text-center">
                <p className="text-3xl font-semibold">240.5h</p>
                <p className="text-sm text-gray-500">HORAS OPERATIVAS</p>
              </div>
              <div className="flex justify-end mt-4">
                <Button> Ver Detalles</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid lg:grid-cols-2  grid-cols-1 gap-6">
        <div className="col-span-1">
          <Card className="overflow-x-auto">
            <CardHeader>
            <CardTitle className="font-medium">Mantenimientos Realizados</CardTitle>
              <CardDescription>(+12%) than last month</CardDescription>
            </CardHeader>
            <CardContent>
              <MyResponsiveTimeRange className="w-full h-[330px] overflow-hidden" />
            </CardContent>
          </Card>
        </div>

        <div className="col-span-1 ">
          <Card className="overflow-x-auto">
            <CardHeader>
            <CardTitle className="font-medium">Ingresos (Alquiler de Vehiculos) vs Egresos (Costos de Repuestos)</CardTitle>
              <CardDescription>(+43%) than last year</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart className="w-full h-[330px]  " 
                data={[
                  {
                    id: "Ingresos",
                    data: [
                      { x: "Jan", y: 43 },
                      { x: "Feb", y: 137 },
                      { x: "Mar", y: 61 },
                      { x: "Apr", y: 145 },
                      { x: "May", y: 26 },
                      { x: "Jun", y: 154 },
                    ],
                  },
                  {
                    id: "Egresos",
                    data: [
                      { x: "Jan", y: 60 },
                      { x: "Feb", y: 48 },
                      { x: "Mar", y: 177 },
                      { x: "Apr", y: 78 },
                      { x: "May", y: 96 },
                      { x: "Jun", y: 204 },
                    ],
                  },
                ]}
              
              
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid lg:grid-cols-3  grid-cols-1 gap-6">
        <div className="lg:col-span-2   col-span-1 ">
          <Card className="overflow-x-auto">
            <CardHeader>
            <CardTitle className="font-medium">Repuestos Consumidos actualmente</CardTitle>
              <CardDescription>(+2%) que el mes pasado </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row">
              <PieChart className="w-1/2 h-[360px] " />
              <div className="space-y-5 w-1/2">
                <div className="text-start">
                  <p className="text-sm text-[#637381] ">TOTAL BALANCE</p>
                  <p className="text-3xl font-semibold  ">S/.15,916.81</p>
                </div>
                <div className="flex flex-col space-y-3.5 mt-4 text-sm">
                  <h3 className="text-[#637381] text-sm ">GASTO ACTUAL</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 rounded-sm bg-[#2563EB]"></span>

                      <p>Refrigerante</p>
                    </div>
                    <p>S/.6,213.20</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 rounded-sm bg-[#D93D32]"></span>
                      <p>Gasolina</p>
                    </div>
                    <p>S/.1,626.80</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 rounded-sm bg-[#E5E7EB]"></span>

                      <p>Pastilla de Freno</p>
                    </div>
                    <p>S/.1,736.81</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 rounded-sm bg-[#06AED4]"></span>

                      <p>Aceite 15W40</p>
                    </div>
                    <p>S/.3,076.81</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 rounded-sm bg-[#F69009]"></span>

                      <p>Bateria Bosh 42MP</p>
                    </div>
                    <p>S/.976.81</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 rounded-sm bg-[#5954F0]"></span>

                      <p>Otros</p>
                    </div>
                    <p>S/.5,076.81</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1">
          <Card className="h-full flex items-center flex-col space-y-8">
            <CardHeader className="mr-auto">
            <CardTitle className="font-medium">Monitoreo en Tiempo Real</CardTitle>
              <CardDescription> 6 Unidades</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
            <Image
              src="/mapa-ictsi.svg"
              alt="Picture of the author"
              width={700}
              height={900}
            />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
