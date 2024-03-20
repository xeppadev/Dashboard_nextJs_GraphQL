import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Stadistic from "@/app/ui/dashboard/estadisticas/stadisticas";
export default function Estadisticas() {
  return (
    <section className="flex  flex-col  mx-10 space-y-9  w-full sm:w-auto justify-between ">
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className=" text-[1.6667rem]  font-bold ">Estadisticas</h2>
        </div>
        {/* <div className="flex items-center space-x-3">
          <Link href={`/dashboard/vehiculos/registrar_vehiculos`}>
            <Button className="pr-4 pl-5 py-5 text-sm font-semibold rounded-xl dark:text-foreground">
              Vehiculo
              <Plus className="ml-1 rounded-lg" />
            </Button>
          </Link>
        </div> */}
      </div>
      <Stadistic />
    </section>
  );
}
