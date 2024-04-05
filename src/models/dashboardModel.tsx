import { DASHBOARD_DATOS } from "../repositories/dashboard";
import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function dashboardModel() {
  const client = getClient();
  const session = await getServerSession(options);
  const { data } = await client.query({
    query: DASHBOARD_DATOS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
  });

  const ingresosMensuales = data.dashboard_web.ingresosMensuales;
  const monthNames = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const datosGastosGenerales = data.dashboard_web.gastosGenerales?.map(
    (item) => {
      const monthNumber = parseInt(item.mesYear?.split("/")?.[0] ?? "0") - 1;
      const monthName = monthNames[monthNumber];

      return {
        name: monthName,
        Personal: Number(item.personalTotal),
        Facturas: Number(item.fact),
        Otros: Number(item.otros),
      };
    }
  );
  const datosGastosGeneralesInvertidos = datosGastosGenerales?.reverse();
  const datosOperatividad = data.dashboard_web.operatividad;
  const datosCalendar = data.dashboard_web.calendario?.map((item) => {
    //formatear fecha a "yyyy-mm-dd" de "2024-03-31T05:00:00.000Z"
    const fechaFormateada = item.fecha.split("T")[0];
    return {
      day: fechaFormateada,
      value: Number(item.cantidad),
    };
  });
  const dataIngresos = data.dashboard_web.ingresosEgresos?.map((item) => {
    const monthNumber = parseInt(item.mesYear?.split("/")?.[0] ?? "0") - 1;
    const monthName = monthNames[monthNumber];
    return {
      x: monthName,
      y: Number(item.ingresoFact),
    };
  }).reverse();
  const dataEgresos = data.dashboard_web.ingresosEgresos?.map((item) => {
    const monthNumber = parseInt(item.mesYear?.split("/")?.[0] ?? "0") - 1;
    const monthName = monthNames[monthNumber];
    return {
      x: monthName,
      y: Number(item.egresosTotalFact),
    };
  }).reverse();

  const dataRepuestosConsumidos = data.dashboard_web.repuestosMasConsumidos;
  return {
    data: data.dashboard_web,
    ingresosMensuales,
    datosGastosGeneralesInvertidos,
    datosOperatividad,
    datosCalendar,
    dataEgresos,
    dataIngresos,
    dataRepuestosConsumidos,
  };
}
