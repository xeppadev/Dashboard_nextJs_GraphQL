import Search from "../../components/search";
import Image from "next/image";
import { Overview } from "./chart/chartcomponent";
import { LineChart } from "./chart/linecomponent";
import { PieChartOperative } from "./chart/operativechart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomCard } from "./chart/card/customcard";
import { DatePickerComponent } from "../../components/dataComponent";
import { MaterialSymbolsStoreRounded } from "@/app/lib/icons";

export default function Stadistic() {
  return (
    <section>
      <div className="flex flex-col items-center space-x-2  lg:flex-row lg:space-x-3 lg:items-start lg:w-full space-y-3 lg:space-y-0">
        <Search placeholder="Buscar Vehiculo" width="w-[35%]" />
        <DatePickerComponent label="Fecha" paramName="fecha" />
      </div>
      <div className="grid grid-cols-3 gap-6 mb-7 mt-6">
        <div className="  col-span-1  ">
          <Card className="overflow-hidden flex flex-row items-center   ">
            <CardContent className=" justify-between items-center w-4/6  py-6 ">
              <div className="flex items-start flex-col space-y-4 ">
                <p className="text-[15px] font-medium">
                  Puntuacion Unidad Vehicular
                </p>
                <div className="flex flex-row items-center space-x-1  dark:bg-card dark:px-0 font-semibold text-sm   pt-1 max-w-fit rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 256 256"
                    className="text-[#ffab00]"
                  >
                    <path
                      fill="currentColor"
                      d="m234.5 114.38l-45.1 39.36l13.51 58.6a16 16 0 0 1-23.84 17.34l-51.11-31l-51 31a16 16 0 0 1-23.84-17.34l13.49-58.54l-45.11-39.42a16 16 0 0 1 9.11-28.06l59.46-5.15l23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l59.44 5.15a16 16 0 0 1 9.11 28.06Z"
                    />
                  </svg>
                  <span className="text-2xl ">7.8</span>
                  <span className="text-lg ">/10</span>
                </div>
                <div className="flex-row flex space-x-1 items-center">
                  <div className="rounded-full p-1 bg-[#2563EB]/20">
                    <MaterialSymbolsStoreRounded className="text-[#2563EB]" />
                  </div>
                  <div className="flex-row flew space-x-1">
                    <span className="text-[13px] font-medium text-[#637381]">
                      Minera Barrick Peru SAC
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <Image
              src="/icons/camioneta.png"
              className=""
              width={120}
              height={100}
              alt="Picture of the author"
            />
          </Card>
        </div>
        <div className=" col-span-1 ">
          <CustomCard
            title="Costo Maquina Seca x Kilometro"
            value="S/. 22.41"
            percentage="+3.1%"
            color="#2563EB"
            data={[
              {
                id: "japan",
                data: [
                  {
                    x: "plane",
                    y: 123,
                  },
                  {
                    x: "helicopter",
                    y: 151,
                  },
                  {
                    x: "boat",
                    y: 21,
                  },
                  {
                    x: "train",
                    y: 51,
                  },
                  {
                    x: "subway",
                    y: 134,
                  },
                  {
                    x: "bus",
                    y: 23,
                  },
                  {
                    x: "car",
                    y: 134,
                  },
                  {
                    x: "moto",
                    y: 234,
                  },
                  {
                    x: "bicycle",
                    y: 101,
                  },
                  {
                    x: "horse",
                    y: 32,
                  },
                  {
                    x: "skateboard",
                    y: 86,
                  },
                  {
                    x: "others",
                    y: 14,
                  },
                ],
              },
            ]}
          />
        </div>
        <div className=" col-span-1  ">
          <CustomCard
            title="Mantenimientos Unidad Vehicular"
            value="23"
            percentage="+3.1%"
            color="#F69009"
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
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="font-medium">
                Costos por Repuestos
              </CardTitle>
              <CardDescription>Balance de costos por repuestos</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-row">
              <Overview
                className="w-2/3 h-[520px]"
                data={[
                  {
                    name: "Jan",
                    kitEmbrague: Math.floor(Math.random() * 1000) + 1000,
                    PastillasFrenos: Math.floor(Math.random() * 1000) + 1000,
                    Llantas: Math.floor(Math.random() * 1000) + 1000,
                    Otros: Math.floor(Math.random() * 1000) + 1000,
                    Lubricantes: Math.floor(Math.random() * 1000) + 1000,
                  },
                  {
                    name: "Feb",
                    kitEmbrague: Math.floor(Math.random() * 1000) + 1000,
                    PastillasFrenos: Math.floor(Math.random() * 1000) + 1000,
                    Llantas: Math.floor(Math.random() * 1000) + 1000,
                    Otros: Math.floor(Math.random() * 1000) + 1000,
                    Lubricantes: Math.floor(Math.random() * 1000) + 1000,
                  },
                  {
                    name: "Mar",
                    kitEmbrague: Math.floor(Math.random() * 1000) + 1000,
                    PastillasFrenos: Math.floor(Math.random() * 1000) + 1000,
                    Llantas: Math.floor(Math.random() * 1000) + 1000,
                    Otros: Math.floor(Math.random() * 1000) + 1000,
                    Lubricantes: Math.floor(Math.random() * 1000) + 1000,
                  },
                  {
                    name: "Apr",
                    kitEmbrague: Math.floor(Math.random() * 1000) + 1000,
                    PastillasFrenos: Math.floor(Math.random() * 1000) + 1000,
                    Llantas: Math.floor(Math.random() * 1000) + 1000,
                    Otros: Math.floor(Math.random() * 1000) + 1000,
                    Lubricantes: Math.floor(Math.random() * 1000) + 1000,
                  },
                  {
                    name: "May",
                    kitEmbrague: Math.floor(Math.random() * 1000) + 1000,
                    PastillasFrenos: Math.floor(Math.random() * 1000) + 1000,
                    Llantas: Math.floor(Math.random() * 1000) + 1000,
                    Otros: Math.floor(Math.random() * 1000) + 1000,
                    Lubricantes: Math.floor(Math.random() * 1000) + 1000,
                  },
                  {
                    name: "Jun",
                    kitEmbrague: Math.floor(Math.random() * 1000) + 1000,
                    PastillasFrenos: Math.floor(Math.random() * 1000) + 1000,
                    Llantas: Math.floor(Math.random() * 1000) + 1000,
                    Otros: Math.floor(Math.random() * 1000) + 1000,
                    Lubricantes: Math.floor(Math.random() * 1000) + 1000,
                  },
                  {
                    name: "Jul",
                    kitEmbrague: Math.floor(Math.random() * 1000) + 1000,
                    PastillasFrenos: Math.floor(Math.random() * 1000) + 1000,
                    Llantas: Math.floor(Math.random() * 1000) + 1000,
                    Otros: Math.floor(Math.random() * 1000) + 1000,
                    Lubricantes: Math.floor(Math.random() * 1000) + 1000,
                  },
                  {
                    name: "Aug",
                    kitEmbrague: Math.floor(Math.random() * 1000) + 1000,
                    PastillasFrenos: Math.floor(Math.random() * 1000) + 1000,
                    Llantas: Math.floor(Math.random() * 1000) + 1000,
                    Otros: Math.floor(Math.random() * 1000) + 1000,
                    Lubricantes: Math.floor(Math.random() * 1000) + 1000,
                  },
                  {
                    name: "Sep",
                    kitEmbrague: Math.floor(Math.random() * 1000) + 1000,
                    PastillasFrenos: Math.floor(Math.random() * 1000) + 1000,
                    Llantas: Math.floor(Math.random() * 1000) + 1000,
                    Otros: Math.floor(Math.random() * 1000) + 1000,
                    Lubricantes: Math.floor(Math.random() * 1000) + 1000,
                  },
                  {
                    name: "Oct",
                    kitEmbrague: Math.floor(Math.random() * 1000) + 1000,
                    PastillasFrenos: Math.floor(Math.random() * 1000) + 1000,
                    Llantas: Math.floor(Math.random() * 1000) + 1000,
                    Otros: Math.floor(Math.random() * 1000) + 1000,
                    Lubricantes: Math.floor(Math.random() * 1000) + 1000,
                  },
                  {
                    name: "Nov",
                    kitEmbrague: Math.floor(Math.random() * 1000) + 1000,
                    PastillasFrenos: Math.floor(Math.random() * 1000) + 1000,
                    Llantas: Math.floor(Math.random() * 1000) + 1000,
                    Otros: Math.floor(Math.random() * 1000) + 1000,
                    Lubricantes: Math.floor(Math.random() * 1000) + 1000,
                  },
                  {
                    name: "Dec",
                    kitEmbrague: Math.floor(Math.random() * 1000) + 1000,
                    PastillasFrenos: Math.floor(Math.random() * 1000) + 1000,
                    Llantas: Math.floor(Math.random() * 1000) + 1000,
                    Otros: Math.floor(Math.random() * 1000) + 1000,
                    Lubricantes: Math.floor(Math.random() * 1000) + 1000,
                  },
                ]}
                enableLabel={false}
                layout="vertical"
                groupMode="stacked"
                borderRadius={2}
                tickPadding={-15}
                padding={0.6}
              />
              <div className="space-y-5 w-1/3 mt-7 ">
                <div className="text-start">
                  <p className="text-sm text-[#637381] ">TOTAL BALANCE</p>
                  <p className="text-3xl font-semibold ">S/.8,600.81</p>
                </div>
                <div className="flex flex-col space-y-3.5 mt-4 text-sm">
                  <h3 className="text-[#637381] text-sm ">GASTO ACTUAL</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 rounded-sm bg-[#2563EB]"></span>

                      <p>Kit de Embrague</p>
                    </div>
                    <p>$16,213.20</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 rounded-sm bg-[#06AED4]"></span>

                      <p>Pastillas de Frenos</p>
                    </div>
                    <p>$9,626.80</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 rounded-sm bg-[#F69009]"></span>

                      <p>Llantas</p>
                    </div>
                    <p>$10,076.81</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 rounded-sm bg-[#D93D32]"></span>

                      <p>Lubricantes</p>
                    </div>
                    <p>$2,076.81</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 rounded-sm bg-[#E5E7EB]"></span>

                      <p>Otros</p>
                    </div>
                    <p>$10,076.81</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  {/* <Button variant="outline">Add funds</Button>
          <Button variant="outline">Transfer funds</Button> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div></div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-7">
        <div className="col-span-2 ">
          <Card>
            <CardHeader>
              <CardTitle className="font-medium">
                Recorrido Actual de la Unidad Vehicular(km)
              </CardTitle>
              <CardDescription>(+43%) than last year</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart
                className="w-full h-[330px] "
                data={[
                  {
                    id: "Recorrido Actual",
                    data: [
                      { x: "Jan", y: 300 },
                      { x: "Feb", y: 737 },
                      { x: "Mar", y: 611 },
                      { x: "Apr", y: 567 },
                      { x: "May", y: 723 },
                      { x: "Jun", y: 545 },
                      { x: "Jul", y: 765 },
                      { x: "Aug", y: 345 },
                      { x: "Sep", y: 723 },
                      { x: "Oct", y: 567 },
                      { x: "Nov", y: 611 },
                      { x: "Dec", y: 765 },
                    ],
                  },
                ]}
              />
              <div className="text-center">
                <p className="text-3xl font-semibold">645.25 Km</p>
                <p className="text-sm text-gray-500">Recorrido Actual</p>
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <p>Fecha Registro</p>
                  </div>
                  <p>04 Mayo de 2023</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <p>Kilometro Inicial</p>
                  </div>
                  <p>116Km</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="font-medium">Mantenimientos</CardTitle>
              <CardDescription>(+12%) que el ultimo mes</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChartOperative
                className="w-full h-[350px]"
                data={[
                  { id: "Preventivos", value: 70, label: "M. Preventivos" },
                  { id: "Correctivos", value: 30, label: "M. Correctivos" },
                ]}
                colors={["#F69009", "#D93D32"]}
              />
              <div className="text-center">
                <p className="text-3xl font-semibold">S/. 5,850.00</p>
                <p className="text-sm text-gray-500">
                  Costos por Mantenimientos
                </p>
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="p-2 rounded-sm bg-[#F69009]"></span>

                    <p>M. Preventivos</p>
                  </div>
                  <p>S/. 2,810.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="p-2 rounded-sm bg-[#D93D32]"></span>

                    <p>M. Correctivos</p>
                  </div>
                  <p>$9,626.80</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-medium">
                {" "}
                Operatividad por cada Mes
              </CardTitle>
              <CardDescription>
                Balance across all your accounts
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <Overview
                className="w-4/6 h-[380px]"
                data={[
                  {
                    name: "Jan",
                    Operatividad: 80,
                  },
                  {
                    name: "Feb",
                    Operatividad: 96,
                  },
                  {
                    name: "Mar",
                    Operatividad: 100,
                  },
                  {
                    name: "Apr",
                    Operatividad: 80,
                  },
                  {
                    name: "May",
                    Operatividad: 76,
                  },
                  {
                    name: "Jun",
                    Operatividad: 95,
                  },
                  {
                    name: "Jul",
                    Operatividad: 94,
                  },
                  {
                    name: "Aug",
                    Operatividad: 85,
                  },
                  {
                    name: "Sep",
                    Operatividad: 92,
                  },
                  {
                    name: "Oct",
                    Operatividad: 88,
                  },
                  {
                    name: "Nov",
                    Operatividad: 82,
                  },
                  {
                    name: "Dec",
                    Operatividad: 98,
                  },
                ]}
                groupMode="grouped"
                borderRadius={5}
                tickPadding={-14}
                enableLabel={true}
              />
              <div className="text-center">
                <p className="text-3xl font-semibold">341.41h</p>
                <p className="text-sm text-gray-500">Horas Operativas</p>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-medium">
                {" "}
                Consumo de Repuestos
              </CardTitle>
              <CardDescription>
                Balance de consumo de repuestos
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <Overview
                className="w-full h-[380px]"
                data={[
                  {
                    name: "Jan",
                    KitEmbrague: 80,
                    PastillasFrenos: 96,
                    Llantas: 100,
                    Otros: 80,
                  },
                  {
                    name: "Feb",
                    KitEmbrague: 85,
                    PastillasFrenos: 65,
                    Llantas: 34,
                    Otros: 76,

                  },
                  {
                    name: "Mar",
                    KitEmbrague: 85,
                    PastillasFrenos: 65,
                    Llantas: 34,
                    Otros: 76,
                  },
                  {
                    name: "Apr",
                    KitEmbrague: 85,
                    PastillasFrenos: 65,
                    Llantas: 34,
                    Otros: 76,
                  },
                  {
                    name: "May",
                    KitEmbrague: 85,
                    PastillasFrenos: 65,
                    Llantas: 34,
                    Otros: 76,
                  },
                  {
                    name: "Jun",
                    KitEmbrague: 85,
                    PastillasFrenos: 65,
                    Llantas: 34,
                    Otros: 76,
                  },
                  {
                    name: "Jul",
                    KitEmbrague: 85,
                    PastillasFrenos: 65,
                    Llantas: 34,
                    Otros: 76,
                  },
                  {
                    name: "Aug",
                    KitEmbrague: 85,
                    PastillasFrenos: 65,
                    Llantas: 34,
                    Otros: 76,
                  },
                  {
                    name: "Sep",
                    KitEmbrague: 85,
                    PastillasFrenos: 65,
                    Llantas: 34,
                    Otros: 76,
                  },
                  {
                    name: "Oct",
                    KitEmbrague: 85,
                    PastillasFrenos: 65,
                    Llantas: 34,
                    Otros: 76,
                  },
                  {
                    name: "Nov",
                    KitEmbrague: 85,
                    PastillasFrenos: 65,
                    Llantas: 34,
                    Otros: 76,
                  },
                  {
                    name: "Dec",
                    KitEmbrague: 85,
                    PastillasFrenos: 65,
                    Llantas: 34,
                    Otros: 76,
                  },
                ]}
                enableLabel={false}
                groupMode="grouped"
                borderRadius={2}
                tickPadding={0}
                padding={0.2}
              />
              <div className="text-center">
                <p className="text-3xl font-semibold">345</p>
                <p className="text-sm text-gray-500">Repuestos</p>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
}
