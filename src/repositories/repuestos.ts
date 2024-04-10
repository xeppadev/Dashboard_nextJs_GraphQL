import { gql } from "../generated";

export const OBTENER_SOLO_REPUESTOS = gql(/* GraphQL */ `
  query Obtener_todos_los_repuestos {
    obtener_todos_los_repuestos {
      producto
      marca
    }
  }
`);

export const REGISTRAR_REPUESTOS_MANTENIMIENTO = gql(/* GraphQL */ ` 
  mutation Ingreso_Repuestos_Web($data: IngresoRepuestosStringDto!) {
    Ingreso_Repuestos_Web(data: $data)
  }
`);
