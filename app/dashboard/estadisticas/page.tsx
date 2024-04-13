import Stadistic from "@/app/ui/dashboard/estadisticas/stadisticas";
export default function Estadisticas({
  searchParams,
}: {
  searchParams?: {
    placa?: string;
    fecha?: string;
    page?: string;
  };
}) {
  const query = searchParams?.placa || "";
  const fecha = searchParams?.fecha ? new Date(searchParams.fecha) : null;
  return (
    <section className="flex  flex-col  mx-10 space-y-9  w-full sm:w-auto justify-between ">
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className=" text-[1.6667rem]  font-bold ">Estadisticas</h2>
        </div>
      </div>
      <Stadistic query={query} fecha={fecha} />
    </section>
  );
}
