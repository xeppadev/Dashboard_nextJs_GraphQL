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

export const REGISTRAR_PERSONAL = gql(/* GraphQL */ `
  mutation Crear_Personal($input: PersonalUserInput!) {
    crear_Personal(input: $input)
  }
`);

export const PERSONAL_ID = gql(/* GraphQL */ `
  query Obtener_Personal_Por_Id($obtenerPersonalPorIdId: String!) {
    obtener_Personal_Por_Id(id: $obtenerPersonalPorIdId) {
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

export const ACTUALIZAR_PERSONAL = gql(/* GraphQL */`
  mutation Actualizar_Info_Personal(
    $actualizarInfoPersonalId: String!
    $input: UpdatePersonalInput!
    $salarioFecha: SalarioFechaInput
  ) {
    actualizar_Info_Personal(
      id: $actualizarInfoPersonalId
      input: $input
      salarioFecha: $salarioFecha
    )
  }
`);
