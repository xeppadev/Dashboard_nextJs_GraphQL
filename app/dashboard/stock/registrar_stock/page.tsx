import FormularioStock from "@/app/ui/dashboard/stock/registrar/formulariostock";
import { obtenerSoloRepuestos } from "@/src/models/obtenerSoloRepuestos";
import { buscarRepuestoModel } from "@/src/models/buscarRepuestoModel";
export default async function RegisStock({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    producto?: string;
  };
}) {
  const producto = searchParams?.producto || "";

  const { repuestos } = await obtenerSoloRepuestos();
  const { dataRepuestos} = await buscarRepuestoModel(producto);

  return (
    <div className="flex flex-col items-stretch lg:mx-10 space-y-5 w-full sm:w-auto">
      <div className="flex  items-center  ">
        <h2 className="text-[1.6667rem] font-bold ">Registrar Stock</h2>
      </div>
      <FormularioStock productos={repuestos} dataRepuestos={dataRepuestos} />
    </div>
  );
}
