import TablaVehiculos from "@/app/ui/dashboard/clientes/listar/table";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  return (
    <div className="flex flex-col   2xl:mx-16 space-y-5  w-full sm:w-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Vehiculos</h2>
        </div>
      </div>
      {/* <TablaVehiculos query={searchParams?.query || ""} currentPage={1} /> */}
    </div>
  );
}
