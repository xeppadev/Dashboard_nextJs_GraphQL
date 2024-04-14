import React from "react";
import TabsAccount from "@/app/ui/dashboard/personal/cuentas/genertal";

const Page = ({ params }: { params?: { id?: string } }) => {
  const id = params?.id;
  return (
    <div className="flex flex-col items-stretch w-full sm:w-auto">
      <div className="flex   items-center justify-between lg:container">
        <h2 className="  text-3xl  font-bold ">Cuenta</h2>
      </div>
      <TabsAccount user={id} />
    </div>
  );
};

export default Page;
