import { gql } from "../generated";

export const REGISTRAR_VEHICULO = gql ( /* GraphQL */`
  mutation Crear_auto($createCarInput: CreateCarDto!) {
    crear_auto(createCarInput: $createCarInput)
  }
`);
