"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { users } from "./data";


import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Notifiaciones = () => {
  return (
    <div className="fixed hidden h-screen flex-1 border-l py-4 px-2 border-zinc-200 bg-white md:flex  overflow-auto">
      <div className="flex w-full flex-col space-y-3">
        <h2 className="text-sm font-semibold">Notificaciones</h2>
        {users.map((user, idx) => (
          <Card key={idx} className="shadow-none  ">
            <CardHeader className="p-4 pb-0">
              <div className="flex items-center space-x-1">
                
                <div>
                  <CardTitle className="text-[13px] font-normal">
                  <span className="font-semibold">{user.nombres}</span> ha gastado en {user.producto}
                  </CardTitle>
                  <CardDescription className="text-red-500 flex justify-end">
                    -S/.{user.costo}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardFooter className="p-4 pt-1">
              <div className="flex flex-col justify-between w-full">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                    className="mr-1 text-red-600"
                  >
                    <path
                      fill="currentColor"
                      d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023c.479 0 .774-.242.774-.651c0-.366-.254-.586-.704-.586m3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018c.817.006 1.349-.444 1.349-1.396c.006-.83-.479-1.268-1.255-1.268"
                    />
                    <path
                      fill="currentColor"
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319c.254.202.426.533.426.923c-.001.392-.131.723-.367.948m3.807 1.355c-.42.349-1.059.515-1.84.515c-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426c.415.308.675.799.675 1.504c0 .763-.279 1.29-.663 1.615M17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17zM14 9h-1V4l5 5z"
                    />
                  </svg>
                  <div className="hidden md:flex flex-col">
                    <span className="text-xs font-normal">
                      Factura {user.producto}
                    </span>
                    <span className="text-xs font-normal text-[#7C7B84]">
                      {" "}
                      {user.tamaño}{" "}
                    </span>
                  </div>
                 
                </div>
                <div className="flex justify-end">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 22c-1.886 0-2.828 0-3.414-.586C8 20.828 8 19.886 8 18c0-1.886 0-2.828.586-3.414C9.172 14 10.114 14 12 14c1.886 0 2.828 0 3.414.586C16 15.172 16 16.114 16 18c0 1.886 0 2.828-.586 3.414C14.828 22 13.886 22 12 22m1.805-3.084l-1.334 1.333a.667.667 0 0 1-.942 0l-1.334-1.333a.667.667 0 1 1 .943-.943l.195.195v-1.946a.667.667 0 0 1 1.334 0v1.946l.195-.195a.667.667 0 0 1 .943.943"
                      clipRule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      d="M6.5 18v-.09c0-.865 0-1.659.087-2.304c.095-.711.32-1.463.938-2.08c.618-.619 1.37-.844 2.08-.94c.646-.086 1.44-.086 2.306-.086h.178c.866 0 1.66 0 2.305.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.085.637.086 1.416.086 2.267c2.573-.55 4.5-2.812 4.5-5.52c0-2.47-1.607-4.572-3.845-5.337C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.356 4.356 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765C2 16.104 3.919 18 6.286 18z"
                    />
                  </svg>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifiaciones;
