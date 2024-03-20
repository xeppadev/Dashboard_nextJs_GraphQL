import React from "react";
import Document from "@/app/ui/dashboard/clientes/cuentas/clientdocument/document";



const Page = () => {
  
  return (
    <div className="flex flex-col items-stretch w-full sm:w-auto">
      <div className="flex   items-center mb-3">
        <h2 className="  text-3xl  font-bold ">Documentos</h2>
        
      </div>
        <Document />
    </div>
  );
};

export default Page;
