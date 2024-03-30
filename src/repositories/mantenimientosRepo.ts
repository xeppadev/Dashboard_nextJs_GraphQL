import { gql } from "../generated";

export const BUSCAR_MANTENIMIENTOS_SEARCH = gql(/* GraphQL */ `
  query Table_historial_Mantenimientos_admin(
    $fechaInicio: DateTime
    $fechaTermino: DateTime
    $placa: String
    $page: Int
  ) {
    table_historial_Mantenimientos_admin(
      fechaInicio: $fechaInicio
      fechaTermino: $fechaTermino
      placa: $placa
      page: $page
    ) {
      mantenimientos {
        _id
        cliente
        costoRepuestos
        fechaFin
        fechaInicio
        placa
        repuestoUsados
        tipo

      }
      totalPages
    }
  }
`);

export const HISTORIAL_MANTENIMIENTOS = gql(/* GraphQL */ `
  query Historial_Car_Admin($searchParam: String!) {
    Historial_Car_Admin(searchParam: $searchParam) {
      cliente
      fechaSoat
      kmActual
      operatividad
      placa
      ultimaRevision
      vigenciaContrato
    }
  }
`);
