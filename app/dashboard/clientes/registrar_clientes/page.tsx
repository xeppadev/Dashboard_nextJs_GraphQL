import FormCliente from "@/app/ui/dashboard/clientes/registrar/formularioCliente";


export default function RegistarCli() {
  return (
    <div className="flex flex-col items-stretch mx-10 space-y-5  w-full sm:w-auto">
      <div className="flex  items-center  ">
        <h2 className="  text-[1.6667rem]  font-bold ">
          Registrar Nuevo Cliente
        </h2>
      </div>
      <FormCliente />
    </div>
  );
}
