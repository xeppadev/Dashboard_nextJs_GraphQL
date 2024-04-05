import { gql } from "../generated";

export const  ESTADISTICAS_DATOS = gql(/* GraphQL */ `
query Estadisticas_web($placa: String!, $fecha: String!) {
  estadisticas_web(placa: $placa, fecha: $fecha) {
    cantidadMatDenegados
    cantidadMatenimientos
    cliente
    costos {
      costoCorrectivos
      costoMesPasado
      costoPreventivos
      costoTotal
    }
    kmRecorrido {
      kmRecorridoTotal
      mes
    }
    operatividad {
      mes
      operatividad
    }
    placa
    puntaje
    repuestosConsumidos {
      mes
      otros
      repuesto1 {
        costo
        producto
      }
      repuesto2 {
        costo
        producto
      }
      repuesto3 {
        costo
        producto
      }
      repuesto4 {
        costo
        producto
      }
    }
  }
}
`);