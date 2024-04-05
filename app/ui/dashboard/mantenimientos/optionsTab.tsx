import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function OptionsTab() {
  return (
    <div className="flex flex-row space-x-4 ">
      <Card className="p-3  w-1/4 ml-auto">
        <div className="flex items-center space-x-3">
          <Avatar className="bg-freelance h-[53px] w-[53px] flex items-center justify-center">
            <AvatarImage
              className="w-[52%] h-[52%]"
              src="https://api.iconify.design/solar/money-bag-bold-duotone.svg?color=%232970ff&width=28&height=28"
              alt="Avatar"
            />
            <AvatarFallback />
          </Avatar>

          <CardContent className=" p-1 space-y-1">
            <CardTitle>Total</CardTitle>
            <CardDescription className="text-sm">4 repuestos</CardDescription>
            <CardTitle className="text-sm">S/.2300.00</CardTitle>
          </CardContent>
        </div>
      </Card>
      <Card className="p-3 w-1/4  ml-auto">
        <div className="flex items-center space-x-3">
          <Avatar className="bg-active-green h-[53px] w-[53px] flex items-center justify-center">
            <AvatarImage
              className="w-[62%] h-[63%]"
              src="https://api.iconify.design/uim/check-circle.svg?color=%2316a34a&width=28&height=28"
              alt="Avatar"
            />
            <AvatarFallback />
          </Avatar>

          <CardContent className=" p-1 space-y-1">
            <CardTitle>Mantenimientos</CardTitle>
            <CardDescription className="text-sm">Completos</CardDescription>
            <CardTitle className="text-sm">4/5 realizados</CardTitle>
          </CardContent>
        </div>
      </Card>
      <Card className="p-3  w-1/4 ml-auto">
        <div className="flex items-center space-x-3">
          <Avatar className="bg-paused  h-[53px] w-[53px] flex items-center justify-center">
            <AvatarImage
              className="w-[62%] h-[63%]"
              src="https://api.iconify.design/solar/danger-circle-bold-duotone.svg?color=%23f79009&width=28&height=28"
              alt="Avatar"
            />
            <AvatarFallback />
          </Avatar>

          <CardContent className=" p-1 space-y-1">
            <CardTitle>Mantenimientos</CardTitle>
            <CardDescription className="text-sm">Pendientes</CardDescription>
            <CardTitle className="text-sm">2 Aplazadas</CardTitle>
          </CardContent>
        </div>
      </Card>
      <Card className="p-3  w-1/4 ml-auto">
        <div className="flex items-center space-x-3">
          <Avatar className="bg-inactive-red-2 h-[53px] w-[53px] flex items-center justify-center">
            <AvatarImage
              className="w-[62%] h-[63%]"
              src="https://api.iconify.design/solar/close-circle-bold-duotone.svg?color=%23e11d48&width=28&height=28"
              alt="Avatar"
            />
            <AvatarFallback />
          </Avatar>

          <CardContent className=" p-1 space-y-1">
            <CardTitle>Mantenimientos</CardTitle>
            <CardDescription className="text-sm">Cancelados</CardDescription>
            <CardTitle className="text-sm">2 Anulados</CardTitle>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
