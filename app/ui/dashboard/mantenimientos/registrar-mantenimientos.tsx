"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { OptionsTab } from "./optionsTab";
import { Input } from "@/components/ui/input";
import MantenimienForm from "./formul-mantenimientos";
import { Car, Plus } from "lucide-react";
import ScrollProduct from "./scroll-mantenimientos";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { InfoMantenimiento } from "./infoMantenimiento";
import Search from "../../components/search";
import { DatePickerDemo } from "../../components/calendarComponent";
import { RepuestoSearchType } from "@/src/generated/graphql";

export default function Mantenimientos({
  data,
  placas,
  obtenerInfo,
}: {
  data: {
    repuestos: RepuestoSearchType[];
  };
  placas: { value: string; label: string }[];
  obtenerInfo: {
    _id?: string | null | undefined;
    fechaSoat?: any;
    kmActual?: number | null | undefined;
    cliente?: string | null | undefined;
  };
}) {
  const [selectedProducts, setSelectedProducts] = React.useState<
    RepuestoSearchType[]
  >([]);
  const [finalProducts, setFinalProducts] = React.useState<
    RepuestoSearchType[]
  >([]);
  const [inputValue, setInputValue] = React.useState(0);

  const handleSelectProduct = (product: RepuestoSearchType) => {
    setSelectedProducts((prevProducts) => {
      const productIndex = prevProducts.findIndex((p) => p._id === product._id);
      if (productIndex !== -1) {
        // Si el producto ya está en selectedProducts, lo elimina
        return prevProducts.filter((_, index) => index !== productIndex);
      } else {
        // Si el producto no está en selectedProducts, lo agrega
        return [...prevProducts, product];
      }
    });
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(event.target.value));
    setSelectedProducts((prevProducts) =>
      prevProducts.map((product) => ({
        ...product,
        cantidad: Number(event.target.value),
      }))
    );
  };
  const handleButtonClick = () => {
    setFinalProducts((prevProducts) => [...prevProducts, ...selectedProducts]);
    setInputValue(0);
  };

  return (
    <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 ">
      <Card className="flex flex-col 2xl:sticky top-32 left-0  justify-between bg-background h-full  w-full xl:w-1/4 ">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Inventario</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <CardTitle className="text-gray-500">Filtrar Producto</CardTitle>
          <Search placeholder="Buscar Producto" />
          <CardTitle className="text-gray-500">Fecha de Operacion</CardTitle>
          <DatePickerDemo />
          <CardTitle className="text-gray-500">Proveedor</CardTitle>
          <ScrollProduct
            data={data.repuestos}
            onSelectedProduct={handleSelectProduct}
          />
        </CardContent>

        <CardFooter className="flex flex-col  space-y-5 ">
          <div className="flex items-center w-full space-x-2  justify-between">
            <Container className="flex p-0 items-center w-[45%]  pl-2 space-x-3  border-input bg-zinc-50 border-2 dark:bg-[#1c2536] dark:text-nav_item">
              <span className="">Cantidad</span>
              <Input
                className=" px-2 border-0 border-l-2 rounded-none border-input rounded-r-lg h-9  bg-white dark:bg-card dark:text-nav_item  no-focus-outline "
                min="0"
                max="20"
                type="number"
                value={inputValue}
                onChange={handleInputChange}
              />
            </Container>

            <Button
              className="pr-3  pl-1 py-5 text-sm font-semibold rounded-xl dark:text-foreground"
              onClick={handleButtonClick}
            >
              <Plus className="ml-1  rounded-lg" />
              Agregar
            </Button>
          </div>
        </CardFooter>
      </Card>

      <div className=" px-1 flex-col flex  w-full  2xl:w-3/4  space-y-2 ">
        {/* <OptionsTab /> */}
        <InfoMantenimiento
          data={finalProducts}
          setFinalProducts={setFinalProducts}
        />

        <div className="space-y-3 pt-3">
          <h3 className="text-xl font-bold">Informacion Adicional</h3>
          <MantenimienForm
            repuestos={finalProducts}
            placas={placas}
            obtenerInfo={obtenerInfo}
          />
        </div>
      </div>
    </div>
  );
}
