// import { PieChart } from "./chart/piecomponent";
import { data3, data4, data5 } from "./chart/card/data";
import { CustomCard } from "./chart/card/customcard";
import { CardIngresos } from "./dashboardcomponents/cardIngresos";
import { dashboardModel } from "@/src/models/dashboardModel";
import { GastosGeneralesDashboard } from "./dashboardcomponents/gastosGenerales";
import { TiempoOperatividad } from "./dashboardcomponents/tiempoOperatividad";
import { CalendarMantenimientos } from "./dashboardcomponents/calendarmantenimientos";
import { EgresosIngresosComponent } from "./dashboardcomponents/egresosIngresos";
import { RepuestosCambiados } from "./dashboardcomponents/repuestosConsumidos";
import { Monitoreo } from "./estadisticomponent/monitoreo";
export default async function Dashboard() {
  const {
    data,
    ingresosMensuales,
    datosGastosGeneralesInvertidos,
    datosOperatividad,
    datosCalendar,
    dataEgresos,
    dataIngresos,
    dataRepuestosConsumidos,
  } = await dashboardModel();

  return (
    <>
      <div className="grid lg:grid-cols-6 grid-cols-1 gap-7">
        <div className="lg:col-span-2 col-span-1  ">
          <CardIngresos
            title="Ingresos Mensuales"
            value={ingresosMensuales?.ingresos || 0}
            detraccion={ingresosMensuales?.detracciones || 0}
            igv={ingresosMensuales?.igv || 0}
            color="#2563EB"
            data={data3}
          />
        </div>
        <div className="lg:col-span-2 col-span-1  ">
          <CustomCard
            title="Mantenimientos Realizados"
            value={data.mantenimientosRealizados?.toString() || "0"}
            placa=""
            color="#dd8108"
            data={data4}
          />
        </div>
        <div className="lg:col-span-2 col-span-1  ">
          <CustomCard
            title="Mantenimientos Denegados"
            value={data.mantenimientosDenegados?.toString() || "0"}
            placa=""
            color="#c3362d"
            data={data5}
          />
        </div>
        <div className="lg:col-span-4 col-span-1  ">
          <GastosGeneralesDashboard datos={datosGastosGeneralesInvertidos} />
        </div>

        <div className="col-span-2">
          <TiempoOperatividad datosOperatividad={datosOperatividad} />
        </div>
        <div className="col-span-3">
          <CalendarMantenimientos data={datosCalendar} />
        </div>

        <div className="col-span-3">
          <EgresosIngresosComponent
            dataIngresos={dataIngresos}
            dataEgresos={dataEgresos}
          />
        </div>
        <div className="lg:col-span-4  col-span-1 ">
          <RepuestosCambiados
            dataRepuestosConsumidos={dataRepuestosConsumidos}
          />
        </div>
        <div className="col-span-2">
          <Monitoreo />
        </div>
      </div>
    </>
  );
}
