"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "@/components/ui/card";
  import { MingcuteCloseLine } from "@/app/lib/icons";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import { RepuestoSearchType } from "@/src/generated/graphql";
  import { format } from "date-fns";

  type InfoMantenimientoProps = {
    data: RepuestoSearchType[];
    setFinalProducts: React.Dispatch<React.SetStateAction<RepuestoSearchType[]>>;
  };

  export const InfoMantenimiento: React.FC<InfoMantenimientoProps> = ({ data, setFinalProducts }) => {
  return(
    <>
    <h3 className="text-xl font-bold">Repuestos Usados({data.length})</h3>

    <div className="space-y-2">
      {data.map((item, index) => (
        <>
          <div className="flex flex-col  " key={item._id}>
            <Card className="p-3 flex flex-row items-center justify-between ">
              <div className="flex items-center space-x-3">
                <Avatar className="bg-freelance h-[48px] w-[48px] flex items-center justify-center">
                  <AvatarImage
                    className="w-[50%] h-[58%]"
                    src="https://api.iconify.design/mingcute/tool-fill.svg?color=%232970ff&width=26&height=26"
                    alt="Avatar"
                  />
                  <AvatarFallback />
                </Avatar>

                <CardContent className=" py-1 px-1 ">
                  <CardTitle className="text-[15px] font-medium">
                    {item.producto}
                  </CardTitle>
                  <CardDescription className="font-medium">
                    {item.marca}
                  </CardDescription>
                </CardContent>
              </div>
              <CardContent className="space-y-1 py-1 px-1 ">
                <CardTitle className="text-sm">Costo</CardTitle>
                <CardDescription>S/. {item.precio}</CardDescription>
              </CardContent>
              <CardContent className="space-y-1 py-1 px-1 ">
                <CardTitle className="text-sm">Fecha</CardTitle>
                <CardDescription>
                  {format(new Date(), "dd/MM/yyyy")}
                </CardDescription>
              </CardContent>
              <CardContent className="space-y-1 py-1 px-1 ">
                <CardTitle className="text-sm">Cantidad</CardTitle>
                <CardDescription className="flex justify-center">
                  {item.cantidad}
                </CardDescription>
              </CardContent>
              <CardContent className="space-y-1 py-1 px-1 ">
                <button
                  type="button"
                  onClick={() => {
                    setFinalProducts((prevProducts) =>
                      prevProducts.filter((_, i) => i !== index)
                    );
                  }}
                  className=" p-3  rounded-full hover:bg-gray-50 dark:hover:bg-background hover:rounded-full "
                >
                  <MingcuteCloseLine className="h-5 w-5 text-[#6c737f]" />
                </button>
              </CardContent>
            </Card>
          </div>
        </>
      ))}
    </div>

    </>
  )
}
