import { gql } from "../generated";

export const BUSCAR_FACTURAS = gql(/* GraphQL */ `
  query Buscar_factura($numeroFactura: String!, $page: Int) {
    buscar_factura(numeroFactura: $numeroFactura, page: $page) {
      facturas {
        notificacion
        monto
        involucrado
        igv
        fecha
        documentos
        detraccion
        numeroFactura
        tipo
      }
      totalPages
    }
  }
`);

export const REGISTRAR_FACTURA = gql(/* GraphQL */ `
  mutation Mutation_registrarFactura($createFacturaInput: CreateFacturaDto!) {
    crear_factura(createFacturaInput: $createFacturaInput)
  }
`);
