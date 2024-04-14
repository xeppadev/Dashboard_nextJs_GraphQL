import { SideNavItem } from "./types";
import {
  SolarHomeAngleBoldDuotone,
  SolarChartSquareBoldDuotone,
  SolarSuitcaseBoldDuotone,
  SolarUserIdBoldDuotone,
  SolarArchiveBoldDuotone,
  SolarShopBoldDuotone,
  MingcuteCarFillDualtone,
  MingcuteToolFill,
  IcRoundSupport,
  SolarCardTransferBoldDuotone,
} from "../lib/icons";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    postitle: "Principal",
    title: "Dashboard",
    path: "/dashboard",
    icon: <SolarHomeAngleBoldDuotone className="w-[23px] h-[23px]" />,
  },
  {
    postitle: "Principal",
    title: "Estadisticas",
    path: "/dashboard/estadisticas",
    icon: <SolarChartSquareBoldDuotone className="w-[23px] h-[23px]" />,
  },
  {
    postitle: "Factor Humano",
    title: "Clientes",
    path: "/clientes",
    icon: <SolarSuitcaseBoldDuotone className="w-[23px] h-[23px]" />,
    submenu: true,
    subMenuItems: [
      {
        title: "Registrar Clientes",
        path: "/clientes/registrar_clientes",
      },
      { title: "Listar Clientes", path: "/clientes/listar_clientes" },
    ],
  },
  {
    postitle: "Factor Humano",
    title: "Personal",
    path: "/personal",
    icon: <SolarUserIdBoldDuotone className="w-[25px] h-[25px]" />,
    submenu: true,
    subMenuItems: [
      {
        title: "Registrar Personal",
        path: "/personal/registrar_personal",
      },
      { title: "Listar Personal", path: "/personal/listar_personal" },
    ],
  },
  {
    postitle: "Insumos",
    title: "Stock",
    path: "/stock",
    icon: <SolarArchiveBoldDuotone className="w-[24px] h-[24px]" />,
    submenu: true,
    subMenuItems: [
      {
        title: "Registrar Stock",
        path: "/stock/registrar_stock",
      },
      { title: "Listar Stock", path: "/stock/listar_stock" },
    ],
  },
  {
    postitle: "Insumos",
    title: "Proveedores",
    path: "/proveedores",
    icon: <SolarShopBoldDuotone className="w-[24px] h-[24px]" />,
    submenu: true,
    subMenuItems: [
      {
        title: "Registrar Proveedores",
        path: "/proveedores/registrar_proveedores",
      },
      { title: "Listar Proveedores", path: "/proveedores/listar_proveedores" },
    ],
  },
  {
    postitle: "Mantenimiento",
    title: "Vehiculos",
    path: "/vehiculos",
    icon: <MingcuteCarFillDualtone className="w-[24px] h-[24px]" />,
    submenu: true,
    subMenuItems: [
      {
        title: "Registrar Vehiculos",
        path: "/vehiculos/registrar_vehiculos",
      },
      { title: "Listar Vehiculos", path: "/vehiculos/listar_vehiculos" },
      { title: "Historial Clinico", path: "/vehiculos/historial_clinico" },
    ],
  },
  {
    postitle: "Mantenimiento",
    title: "Mantenimiento",
    path: "/dashboard/registrar-mantenimiento",
    icon: <MingcuteToolFill className="w-[23px] h-[23px]" />,
  },
  {
    postitle: "Facturacion",
    title: "Facturacion ",
    path: "/facturacion",
    icon: <SolarCardTransferBoldDuotone className="w-[23px] h-[23px]" />,
    submenu: true,
    subMenuItems: [
      {
        title: "Registrar Factura",
        path: "/facturacion/registrar_factura",
      },
      { title: "Listar Facturas", path: "/facturacion/listar_facturas" },
    ],
  },
  {
    postitle: "Otros",
    title: "Soporte",
    path: "/soporte",
    icon: <IcRoundSupport className="w-[24px] h-[24px]" />,
  },
];

export const SIDENAV_ITEMS_TECNICO: SideNavItem[] = [
  {
    postitle: "Mantenimiento",
    title: "Mantenimiento",
    path: "/dashboard/registrar-mantenimiento",
    icon: <MingcuteToolFill className="w-[23px] h-[23px]" />,
  },
];

export const SIDENAV_ITEMS_CLIENTE: SideNavItem[] = [
  {
    postitle: "Mantenimiento",
    title: "Vehiculos",
    path: "/dashboard/vehiculos/historial_clinico",
    icon: <MingcuteCarFillDualtone className="w-[24px] h-[24px]" />,
  },
];
