import { ESTADISTICAS_DATOS } from "../repositories/estadisticarRepo";
import { getClient } from "@/lib/client";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

export async function estadisticasModel(placa: string, fecha: string) {
  const client = getClient();
  const session = await getServerSession(options);
  const { data } = await client.query({
    query: ESTADISTICAS_DATOS,
    context: {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    },
    variables: {
      placa,
      fecha,
    },
  });
  const datosResponsiveBar = data?.estadisticas_web?.repuestosConsumidos;
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
  const datosKilometraje = data?.estadisticas_web?.kmRecorrido?.map((item) => {
    const monthNumber = parseInt(item.mes?.split("/")?.[0] ?? "0") - 1;
    const monthName = monthNames[monthNumber];

    return {
      x: monthName,
      y: (item.kmRecorridoTotal ?? 0) / 1000,
    };
  });
  const operatividad = data?.estadisticas_web?.operatividad?.map((item) => {
    const monthNumber = parseInt(item.mes?.split("/")?.[0] ?? "0") - 1;
    const monthName = monthNames[monthNumber];
    return {
      name: monthName,
      Operatividad: item.operatividad || "0",
    };
  });

  return {
    data: data.estadisticas_web,
    datosResponsiveBar,
    datosKilometraje,
    operatividad,
  };
}
