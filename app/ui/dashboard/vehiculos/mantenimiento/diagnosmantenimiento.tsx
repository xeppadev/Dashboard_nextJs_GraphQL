import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { MantenimientoInfoDto } from "@/src/generated/graphql";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function UserDiagnostico({
  data,
}: {
  data: MantenimientoInfoDto;
}) {
  return (
    <div className="flex flex-col space-y-4 xl:space-y-3  pb-6 px-3 pt-2">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Diagnostico Inicial</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{data.diagnostico}</CardDescription>
        </CardContent>
        <CardFooter>
          <CardDescription>
            Fecha: {format(new Date(data.fecha), "PPP", { locale: es })}
          </CardDescription>
        </CardFooter>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Diagnostico Final</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{data.diagnosticoFinal}</CardDescription>
        </CardContent>
        <CardFooter>
          <CardDescription>
            Fecha: {data.fechaFin ? format(new Date(data.fechaFin), "PPP", { locale: es }) : "DD/MM/YYYY"}
          </CardDescription>
        </CardFooter>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Cambios Solicitados</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{data.cambiosSolicitados}</CardDescription>
        </CardContent>
        <CardFooter>
          <CardDescription>
            Fecha: {data.fechaFin ? format(new Date(data.fechaFin), "PPP", { locale: es }) : "DD/MM/YYYY"}
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
