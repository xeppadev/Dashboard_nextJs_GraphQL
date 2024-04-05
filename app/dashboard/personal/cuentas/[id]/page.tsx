import React from "react";
import TabsAccount from "@/app/ui/dashboard/personal/cuentas/genertal";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SolarPenBold } from "@/app/lib/icons";

const Page = ({ params }: { params?: { id?: string } }) => {
  const id = params?.id;
  return (
    <div className="flex flex-col items-stretch w-full sm:w-auto">
      <div className="flex   items-center justify-between lg:container">
        <h2 className="  text-3xl  font-bold ">Cuenta</h2>
        <div className="flex items-center ml-4">
          <Link href={`/dashboard/clientes/registrar_clientes`}>
            <Button className="pr-4 pl-4 py-5 text-sm font-semibold rounded-xl dark:text-foreground">
              <SolarPenBold className="mr-2 rounded-lg w-6 h-6"  />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="mr-2 rounded-lg"
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="mr-2 rounded-lg"
              >
                <path
                  fill="currentColor"
                  d="m11.4 18.161l7.396-7.396a10.289 10.289 0 0 1-3.326-2.234a10.29 10.29 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.556 6.556 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56c.43-.205.836-.456 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.754 8.754 0 0 0 2.092 3.32a8.754 8.754 0 0 0 3.431 2.13z"
                />
              </svg> */}
              Agregar
            </Button>
          </Link>
        </div>
      </div>
      <TabsAccount user={id} />
    </div>
  );
};

export default Page;
