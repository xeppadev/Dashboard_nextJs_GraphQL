import Search from "../../components/search";
import { KilometrajeUnidad } from "./estadisticomponent/kilometrajaUnidad";
import { GastosGenerales } from "./estadisticomponent/gastosGenerales";
import { CostosMantenimientos } from "./estadisticomponent/costosMantenimientos";
import { data1, data2 } from "./chart/card/data";
import { Operatividad } from "./estadisticomponent/operatividad";
import { CustomCard } from "./chart/card/customcard";
import { DatePickerComponent } from "../../components/dataComponent";
import { PuntuacionUnidad } from "./estadisticomponent/puntuaciaonUnidad";
import { estadisticasModel } from "@/src/models/estadisticasModel";
import { Monitoreo } from "./estadisticomponent/monitoreo";

export default async function Stadistic() {
  const fecha = new Date().toISOString();

  const { data, datosResponsiveBar, datosKilometraje, operatividad } =
    await estadisticasModel("", fecha);
  return (
    <section>
      <div className="flex flex-col items-center space-x-2  lg:flex-row lg:space-x-3 lg:items-start lg:w-full space-y-3 lg:space-y-0">
        <Search placeholder="Buscar Vehiculo" width="w-[35%]" />
        <DatePickerComponent label="Fecha" paramName="fecha" />
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-1 gap-7 my-6">
        <div className="lg:col-span-2 col-span-1 ">
          <PuntuacionUnidad data={data} />
        </div>
        <div className="lg:col-span-2 col-span-1">
          <CustomCard
            title="Mantenimientos Completados"
            value={data.cantidadMatenimientos?.toString() || "0"}
            placa={data.placa || "sin datos"}
            color="#D93D32"
            data={data1}
          />
        </div>
        <div className="lg:col-span-2 col-span-1">
          <CustomCard
            title="Mantenimientos Cancelados"
            value={data.cantidadMatDenegados?.toString() || "0"}
            placa={data.placa || "sin datos"}
            color="#F69009"
            data={data2}
          />
        </div>
        <div className="col-span-4">
          <GastosGenerales datosResponsiveBar={datosResponsiveBar} />
        </div>
        <div className="col-span-2">
          <CostosMantenimientos datosMantenimientos={data.costos} />
        </div>
        <div className="col-span-6 ">
          <KilometrajeUnidad
            datosKilometraje={datosKilometraje}
            placa={data.placa}
          />
        </div>
        <div className="col-span-4">
          <Operatividad datosOperatividad={operatividad} />
        </div>
        <div className="col-span-2">
          <Monitoreo />
        </div>
      </div>
    </section>
  );
}
