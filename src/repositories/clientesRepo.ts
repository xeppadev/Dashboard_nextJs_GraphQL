import { gql } from "../generated";

export const BUSCAR_CLIENTES = gql(/* GraphQL */ `
  query Buscar_Clientes($nombreCliente: String!) {
    buscar_Clientes(nombreCliente: $nombreCliente) {
      _id
      contratos {
        fechaFin
        fechaInicio
        numeroContrato
      }
      direccion
      documentos
      email
      nombre
      nombreCliente
      numeroContacto
      rubro
      ruc
    }
  }
`);

export const REGISTRAR_CLIENTE = gql(/* GraphQL */ `
  mutation CreateUser($cliente: ClienteInput!) {
    crear_Cliente(cliente: $cliente)
  }
`);
