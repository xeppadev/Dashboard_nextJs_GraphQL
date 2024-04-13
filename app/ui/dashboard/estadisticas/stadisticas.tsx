
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
import SearchBar from "../../components/buscadorDesplegable";
import { buscarPlacasModel } from "@/src/models/buscarplacasModel";

export default async function Stadistic({
  query,
  fecha,
}: {
  query: string;
  fecha: Date | null;
}) {
  
 

  const { data, datosResponsiveBar, datosKilometraje, operatividad } =
    await estadisticasModel(query, fecha?.toISOString() || "");

  const { data: dataplacas } = await buscarPlacasModel(query || "");

  return (
    <section>
      <div className="flex flex-col items-center space-x-2 justify-between  lg:flex-row lg:space-x-3 lg:items-start lg:w-full space-y-3 lg:space-y-0">
        <SearchBar placeholder="Buscar Vehiculo" data={dataplacas} />
        {/* <Search placeholder="Buscar Vehiculo" width="w-[35%]" /> */}
        <DatePickerComponent label="Fecha" paramName="fecha" />
      </div>
      <div className="grid lg:grid-cols-6 grid-cols-1 gap-7 mt-10">
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
