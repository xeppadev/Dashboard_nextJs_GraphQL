import FormFactura from "@/app/ui/dashboard/facturas/registrar/formularioFactura";
import { nombresClientesModel } from "@/src/models/nombresClientes";
import { nombresPropietariosModel } from "@/src/models/nombresPropietariosModel";
import { nombresProveedoresModel } from "@/src/models/nombresProveedoresModel";


export default async function RegistrarFact() {
  const { nombresClientes } = await nombresClientesModel();
  const { nombresPropietarios } = await nombresPropietariosModel();
  const { nombresProveedores } = await nombresProveedoresModel();
  return (
    <div className="flex flex-col items-stretch space-y-5 lg:mx-10 w-full sm:w-auto">
      <div className="flex  items-center  ">
        <h2 className="  text-[1.6667rem]  font-bold ">
          Registrar Nueva Factura
        </h2>
      </div>
      <FormFactura clientes={nombresClientes} propietarios={nombresPropietarios} proveedores={nombresProveedores} />
    </div>
  );
}
