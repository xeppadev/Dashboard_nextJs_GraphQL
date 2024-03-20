import { gql } from "../generated";

export const BUSCAR_REPUESTOS = gql(/* GraphQL */ `
  query Buscar_repuestos($producto: String!) {
  buscar_repuestos(producto: $producto) {
    cantidad
    cantidadReserva
    id
    marca
    precio
    producto
  }
}
`);
