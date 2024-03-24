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
  mutation Crear_Cliente($cliente: ClienteUserInput!) {
    crear_Cliente(cliente: $cliente)
  }
` );

export const CLIENTE_ID = gql(/* GraphQL */ `
  query Cliente_ID($obtenerClienteIdId: String!) {
    obtener_Cliente_ID(id: $obtenerClienteIdId) {
      _id
      contratos {
        fechaFin
        fechaInicio
        numeroContrato
      }
      documentos
      direccion
      email
      nombre
      nombreCliente
      numeroContacto
      rubro
      ruc
    }
  }
`);

export const USUARIO_ID = gql(/* GraphQL */ `
query Obtener_Usuarios_por_IDcliente($clienteId: String!) {
  obtener_Usuarios_por_IDcliente(clienteId: $clienteId) {
    _id
    clienteAsociado
    email
    name
    nivelUser
    username
  }
}
` );