import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
    import Image from "next/image";

  export const Monitoreo = () => {
    return(
        <Card className="h-full flex items-center flex-col space-y-8">
        <CardHeader className="mr-auto">
          <CardTitle className="font-medium">
            Monitoreo en Tiempo Real
          </CardTitle>
          <CardDescription> 6 Unidades</CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <Image
            src="/mapa-ictsi.svg"
            alt="Picture of the author"
            width={700}
            height={900}
          />
        </CardContent>
      </Card>


    )
  
  }