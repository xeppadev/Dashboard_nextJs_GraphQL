import { gql } from "../generated";

export const DASHBOARD_DATOS = gql(/* GraphQL */ `
  query Dashboard_web {
    dashboard_web {
      calendario {
        cantidad
        fecha
      }
      gastosGenerales {
        fact
        mesYear
        otros
        personalTotal
      }
      ingresosEgresos {
        ingresoFact
        egresosTotalFact
        mesYear
      }
      ingresosMensuales {
        igv
        detracciones
        ingresos
      }
      mantenimientosDenegados
      mantenimientosRealizados
      operatividad {
        operatividadHoras
        operatividadPorcentual
      }
      repuestosMasConsumidos {
        otros {
          producto
          cantidadConsumida
        }
        prod1 {
          producto
          cantidadConsumida
        }
        prod2 {
          producto
          cantidadConsumida
        }
        prod3 {
          cantidadConsumida
          producto
        }
        prod4 {
          cantidadConsumida
          producto
        }
        prod5 {
          cantidadConsumida
          producto
        }
      }
    }
  }
`);
