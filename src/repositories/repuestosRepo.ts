import { gql } from "../generated";

export const BUSCAR_REPUESTOS_SEARCH = gql(/* GraphQL */ `
  query Buscar_repuestos_Search($producto: String!, $page: Int) {
    buscar_repuestos(producto: $producto, page: $page) {
      repuestos {
        producto
        precio
        marca
        cantidadReserva
        cantidad
        _id
      }
      totalPages
    }
  }
`);

export const BORRAR_REPUESTO = gql(/* GraphQL */ `
  mutation Borrar_Repuesto($borrarRepuestoId: String!) {
    Borrar_Repuesto(id: $borrarRepuestoId)
  }
`);
