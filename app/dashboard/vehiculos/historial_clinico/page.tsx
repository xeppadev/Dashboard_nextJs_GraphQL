import TabsDemo from "@/app/ui/dashboard/vehiculos/historial/table-historial";

export default function Historial() {
    return (
      <div className="flex flex-col items-stretch 2xl:mx-16 space-y-5  w-full sm:w-auto">
      <div className="flex  items-center  ">
        <h2 className=" text-3xl  font-bold ">
          Historial Clinico
        </h2>
        </div>
          <TabsDemo />
        
      
    </div>
    );
  }
  




