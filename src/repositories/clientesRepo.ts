import { gql } from "../generated";

export const BUSCAR_CLIENTES_SEARCH = gql(/* GraphQL */ `
  query Buscar_Clientes_Search($nombreCliente: String!, $page: Int) {
    buscar_Clientes(nombreCliente: $nombreCliente, page: $page) {
      clientes {
        nombreCliente
        _id
        contratos {
          numeroContrato
          fechaInicio
          fechaFin
        }
        direccion
        documentos
        email
        nombre
        numeroContacto
        rubro
        ruc
      }
      totalPages
    }
  }
`);

export const REGISTRAR_CLIENTE = gql(/* GraphQL */ `
  mutation Crear_Cliente($cliente: ClienteUserInput!) {
    crear_Cliente(cliente: $cliente)
  }
`);

export const CLIENTE_ID = gql(/* GraphQL */ `
  query Obtener_Cliente_ID($obtenerClienteIdId: String!) {
    obtener_Cliente_ID(id: $obtenerClienteIdId) {
      _id
      contratos {
        clienteId
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
`);

export const ACTUALIZAR_CLIENTE = gql(/* GraphQL */ `
  mutation Actualizar_Cliente(
    $cliente: ClienteInput!
    $actualizarClienteId: String!
  ) {
    actualizar_Cliente(cliente: $cliente, id: $actualizarClienteId)
  }
`);

export const TODOS_NOMBRES_CLIENTES = gql(/* GraphQL */ `
  query Nombres_Clientes {
    obtener_Todos_Clientes {
      nombreCliente
    }
  }
`);

export const ELIMINAR_CONTRATO = gql(/* GraphQL */ `
  mutation Eliminar_Contrato($clienteId: String!, $numeroContrato: String!) {
    eliminar_Contrato(clienteId: $clienteId, numeroContrato: $numeroContrato)
  }
`);

export const BORRAR_CLIENTE = gql(/* GraphQL */ `
  mutation Borrar_Cliente($borrarClienteId: String!) {
    borrar_Cliente(id: $borrarClienteId)
  }
`);

export const AGREGAR_CONTRATO = gql(/* GraphQL */ `
  mutation Agregar_Contrato(
    $agregarContratoId: String!
    $contrato: ContratoIntDto!
  ) {
    agregar_Contrato(id: $agregarContratoId, contrato: $contrato)
  }
`);

