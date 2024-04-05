import { gql } from "../generated";

export const REGISTRAR_VEHICULO = gql(/* GraphQL */ `
  mutation Crear_auto($createCarInput: CreateCarDto!) {
    crear_auto(createCarInput: $createCarInput)
  }
`);
export const OBTENER_PLACAS = gql(/* GraphQL */ `
  query obtenerPlacas {
    obtener_info_placas {
      placa
    }
  }
`);

export const OBTENER_INFO_PLACAS = gql(/* GraphQL */ `
  query Buscar_info_placas_tabla($plate: String!, $page: Int) {
    buscar_info_placas_tabla(plate: $plate, page: $page) {
      cars {
        _id
        cliente
        fechaSoat
        placa
        propietario
        tipoContrato
      }
      totalPages
    }
  }
`);
