import { gql } from "@apollo/client";
export const BUSCAR_PERSONAL_SEARCH = gql(/* GraphQL */ `
  query Buscar_Pesonal_Search($nombre: String!, $page: Int) {
    buscar_Pesonal(nombre: $nombre, page: $page) {
      personal {
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
      totalPages
    }
  }
`);

export const REGISTRAR_PERSONAL = gql(/* GraphQL */ `
  mutation Crear_Personal($input: PersonalUserInput!) {
    crear_Personal(input: $input)
  }
`);

export const PERSONAL_ID = gql( /* GraphQL */ `
  query Obtener_Personal_Por_Id($obtenerPersonalPorIdId: String!) {
    obtener_Personal_Por_Id(id: $obtenerPersonalPorIdId) {
      _id
      documentos
      email
      fechaIngreso
      numero
      nombre
      salarioFecha {
        _id
        fecha
        idPersonal
        salario
      }
      username
    }
  }
`);

export const ACTUALIZAR_PERSONAL = gql(/* GraphQL */ `
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

export const BORRAR_PERSONAL = gql(/* GraphQL */ `
  mutation Borrar_Personal($borrarPersonalId: String!) {
    borrar_Personal(id: $borrarPersonalId)
  }
`);


export const BORRAR_CONTRATO = gql(/* GraphQL */ `
  mutation Borrar_contrato_personal(
    $idContrato: String!
    $idPersonal: String!
  ) {
    borrar_contrato_personal(id_contrato: $idContrato, id_personal: $idPersonal)
  }
`);
