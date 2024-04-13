import { gql } from "../generated";

export const REGISTRAR_USERS = gql(/* GraphQL */ `
  mutation Crear_multiples_users($users: [CreateUserDto!]!) {
    crear_multiples_users(users: $users)
  }
`);

export const OBTENER_USER_BY_ID = gql(/* GraphQL */ `
  query Obtener_usuario_por_id($id: String!) {
    obtener_usuario_por_id(_id: $id) {
      _id
      clienteAsociado
      email
      name
      nivelUser
      username
    }
  }
`);

export const OBTENER_USERS = gql(/* GraphQL */ `
  query Obtener_usuario_por_username($username: String!) {
    obtener_usuario_por_username(username: $username) {
      _id
      clienteAsociado
      email
      name
      nivelUser
      username
    }
  }
`);

export const ACTUALIZAR_USERS = gql(/* GraphQL */ `
  mutation Actualizar_datos_usuario(
    $oldUsername: String!
    $newName: String!
    $newEmail: String!
    $newPassword: String!
    $newUsername: String
  ) {
    actualizar_datos_usuario(
      oldUsername: $oldUsername
      newName: $newName
      newEmail: $newEmail
      newPassword: $newPassword
      newUsername: $newUsername
    )
  }
`);

export const ELIMINAR_USER = gql(/* GraphQL */ `
  mutation Borrar_usuario_por_id($id: String!) {
    borrar_usuario_por_id(_id: $id)
  }
`);

export const AGREGAR_USUARIO = gql(/* GraphQL */ `
  mutation Crear_usuario_cliente($input: CreateClientUserDto!) {
    crear_usuario_cliente(input: $input)
  }
`);
