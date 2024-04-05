import FormProveedor from "@/app/ui/dashboard/proveedores/registrar/formproveedores";


export default function RegistrarProve() {
  return (
    <div className="flex flex-col items-stretch mx-10 space-y-5  w-full sm:w-auto">
    <div className="flex  items-center  ">
      <h2 className="  text-[1.6667rem]  font-bold ">
        Registrar Proveedor
      </h2>
      </div>
        <FormProveedor />
      
    
  </div>
  );
  }
  