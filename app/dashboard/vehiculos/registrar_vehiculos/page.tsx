import VehiculoForm from "@/app/ui/dashboard/vehiculos/registrar/formvehiculo";


export default function RegistrarVehicul() {
  return (
    <div className="flex flex-col items-stretch  space-y-6 mx-8 w-full sm:w-auto">
    <div className="flex  items-center  ">
      <h2 className="  text-2xl  font-bold ">
        Registrar Vehiculo
      </h2>
      </div>
        <VehiculoForm />
      
    
  </div>
  );
  }
  