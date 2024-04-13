import React from "react";
import TabsMantenimiento from "@/app/ui/dashboard/vehiculos/mantenimiento/tabMantenimiento";


const Page = ({ params }: { params?: { id?: string } }) => {
  const id = params?.id;
  return (
    <div className="flex flex-col items-stretch w-full sm:w-auto">
      <div className="flex   items-center justify-between lg:container">
        <div className="space-x-4 flex flex-row items-center">
          <h2 className="  text-3xl  font-bold ">Mantenimiento</h2>
        </div>
      </div>
      <TabsMantenimiento user={id} />
    </div>
  );
};

export default Page;
