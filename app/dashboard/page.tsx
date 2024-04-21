import Dashboard from "../ui/dashboard/estadisticas/overview";

export default function Page() {
  return (
    <div className="flex flex-col  mx-2 lg:mx-10 space-y-5  w-full sm:w-auto">
      <div className="flex  items-center">
        <h2 className="  text-[1.6667rem]  font-bold ">Dashboard</h2>
      </div>
      <Dashboard />
    </div>
  );
}
