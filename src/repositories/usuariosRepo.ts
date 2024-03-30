import { gql } from "../generated"

export const REGISTRAR_USERS = gql( /* GraphQL */`
  mutation Crear_multiples_users($users: [CreateUserDto!]!) {
    crear_multiples_users(users: $users)
  }
`);
