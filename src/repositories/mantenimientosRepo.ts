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

export const MANTENIMIENTO_NO_PROGRAMADO = gql(/* GraphQL */ `
  mutation Regisrar_mantenimiento_no_programado(
    $updateOneMantenimientoInput: UpdateOneMantenimientoDto!
  ) {
    regisrar_mantenimiento_no_programado(
      updateOneMantenimientoInput: $updateOneMantenimientoInput
    )
  }
`);

export const MANTEN_INFO_ID = gql(/* GraphQL */ `
  query Mantenimiento_Info_por_ID($mantenimientoInfoPorIdId: String!) {
    Mantenimiento_Info_por_ID(id: $mantenimientoInfoPorIdId) {
      anotaciones
      cambiosSolicitados
      cliente
      diagnostico
      diagnosticoFinal
      documentos
      estado
      fechaFin
      fecha
      fechaInicio
      fechaSoat
      kmMedido
      kmPrevio
      placa
      repuestos {
        cantidad
        cantidadReserva
        id
        marca
        precio
        producto
      }
      tecnico
      tipo
    }
  }
`);