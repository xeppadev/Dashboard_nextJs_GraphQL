import React from "react";
import Facturas from "@/app/ui/dashboard/stock/document/facturas";



const Page = () => {
  
  return (
    <div className="flex flex-col items-stretch w-full sm:w-auto">
      <div className="flex items-center mb-3">
        <h2 className="text-3xl  font-bold ">Facturas</h2>
        
      </div>
        <Facturas />
    </div>
  );
};

export default Page;
