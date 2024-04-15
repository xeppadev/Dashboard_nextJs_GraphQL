import FormPersonal from "@/app/ui/dashboard/personal/registrar/formularioPersonal";

export default function RegistrarPer() {
  return (
    <div className="flex flex-col items-stretch space-y-5 lg:mx-10 w-full sm:w-auto">
      <div className="flex  items-center  ">
        <h2 className="  text-[1.6667rem]  font-bold ">
          Registrar Nuevo Personal
        </h2>
      </div>
      <FormPersonal />
    </div>
  );
}
