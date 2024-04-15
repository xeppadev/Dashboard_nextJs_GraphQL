import VehiculoForm from "@/app/ui/dashboard/vehiculos/registrar/formvehiculo";
import { nombresClientesModel } from "@/src/models/nombresClientes";
export default async function RegistrarVehicul() {
  const { nombresClientes } = await nombresClientesModel();
  return (
    <div className="flex flex-col items-stretch  space-y-6 lg:mx-8 w-full sm:w-auto">
      <div className="flex  items-center  ">
        <h2 className="  text-2xl  font-bold ">Registrar Vehiculo</h2>
      </div>
      <VehiculoForm data={nombresClientes} />
    </div>
  );
}
