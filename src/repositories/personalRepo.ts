import { gql } from "../generated";

export const BUSCAR_PERSONAL = gql(/* GraphQL */ `
  query Buscar_Pesonal($nombre: String!) {
  buscar_Pesonal(nombre: $nombre) {
    _id
    documentos
    email
    fechaIngreso
    nombre
    numero
    salarioFecha {
      fecha
      salario
    }
  }
}
`);