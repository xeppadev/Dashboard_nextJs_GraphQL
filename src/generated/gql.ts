/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Buscar_Clientes($nombreCliente: String!) {\n    buscar_Clientes(nombreCliente: $nombreCliente) {\n      _id\n      contratos {\n        fechaFin\n        fechaInicio\n        numeroContrato\n      }\n      direccion\n      documentos\n      email\n      nombre\n      nombreCliente\n      numeroContacto\n      rubro\n      ruc\n    }\n  }\n": types.Buscar_ClientesDocument,
    "\n  mutation Crear_Cliente($cliente: ClienteUserInput!) {\n    crear_Cliente(cliente: $cliente)\n  }\n": types.Crear_ClienteDocument,
    "\n  query Cliente_ID($obtenerClienteIdId: String!) {\n    obtener_Cliente_ID(id: $obtenerClienteIdId) {\n      _id\n      contratos {\n        fechaFin\n        fechaInicio\n        numeroContrato\n      }\n      documentos\n      direccion\n      email\n      nombre\n      nombreCliente\n      numeroContacto\n      rubro\n      ruc\n    }\n  }\n": types.Cliente_IdDocument,
    "\n  query Obtener_Usuarios_por_IDcliente($clienteId: String!) {\n    obtener_Usuarios_por_IDcliente(clienteId: $clienteId) {\n      _id\n      clienteAsociado\n      email\n      name\n      nivelUser\n      username\n    }\n  }\n": types.Obtener_Usuarios_Por_IDclienteDocument,
    "\n  mutation Actualizar_Cliente(\n    $cliente: ClienteInput!\n    $actualizarClienteId: String!\n  ) {\n    actualizar_Cliente(cliente: $cliente, id: $actualizarClienteId)\n  }\n": types.Actualizar_ClienteDocument,
    "\n  query Buscar_Pesonal($nombre: String!) {\n    buscar_Pesonal(nombre: $nombre) {\n      _id\n      documentos\n      email\n      fechaIngreso\n      nombre\n      numero\n      salarioFecha {\n        fecha\n        salario\n      }\n    }\n  }\n": types.Buscar_PesonalDocument,
    "\n  mutation Crear_Personal($input: PersonalUserInput!) {\n    crear_Personal(input: $input)\n  }\n": types.Crear_PersonalDocument,
    "\n  query Obtener_Personal_Por_Id($obtenerPersonalPorIdId: String!) {\n    obtener_Personal_Por_Id(id: $obtenerPersonalPorIdId) {\n      _id\n      documentos\n      email\n      fechaIngreso\n      nombre\n      numero\n      salarioFecha {\n        fecha\n        salario\n      }\n    }\n  }\n": types.Obtener_Personal_Por_IdDocument,
    "\n  mutation Actualizar_Info_Personal(\n    $actualizarInfoPersonalId: String!\n    $input: UpdatePersonalInput!\n    $salarioFecha: SalarioFechaInput\n  ) {\n    actualizar_Info_Personal(\n      id: $actualizarInfoPersonalId\n      input: $input\n      salarioFecha: $salarioFecha\n    )\n  }\n": types.Actualizar_Info_PersonalDocument,
    "\n  query Buscar_repuestos($producto: String!) {\n  buscar_repuestos(producto: $producto) {\n    cantidad\n    cantidadReserva\n    id\n    marca\n    precio\n    producto\n  }\n}\n": types.Buscar_RepuestosDocument,
    "\n  mutation Crear_multiples_users($users: [CreateUserDto!]!) {\n    crear_multiples_users(users: $users)\n  }\n": types.Crear_Multiples_UsersDocument,
    "\n  mutation Crear_auto($createCarInput: CreateCarDto!) {\n    crear_auto(createCarInput: $createCarInput)\n  }\n": types.Crear_AutoDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Buscar_Clientes($nombreCliente: String!) {\n    buscar_Clientes(nombreCliente: $nombreCliente) {\n      _id\n      contratos {\n        fechaFin\n        fechaInicio\n        numeroContrato\n      }\n      direccion\n      documentos\n      email\n      nombre\n      nombreCliente\n      numeroContacto\n      rubro\n      ruc\n    }\n  }\n"): (typeof documents)["\n  query Buscar_Clientes($nombreCliente: String!) {\n    buscar_Clientes(nombreCliente: $nombreCliente) {\n      _id\n      contratos {\n        fechaFin\n        fechaInicio\n        numeroContrato\n      }\n      direccion\n      documentos\n      email\n      nombre\n      nombreCliente\n      numeroContacto\n      rubro\n      ruc\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Crear_Cliente($cliente: ClienteUserInput!) {\n    crear_Cliente(cliente: $cliente)\n  }\n"): (typeof documents)["\n  mutation Crear_Cliente($cliente: ClienteUserInput!) {\n    crear_Cliente(cliente: $cliente)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Cliente_ID($obtenerClienteIdId: String!) {\n    obtener_Cliente_ID(id: $obtenerClienteIdId) {\n      _id\n      contratos {\n        fechaFin\n        fechaInicio\n        numeroContrato\n      }\n      documentos\n      direccion\n      email\n      nombre\n      nombreCliente\n      numeroContacto\n      rubro\n      ruc\n    }\n  }\n"): (typeof documents)["\n  query Cliente_ID($obtenerClienteIdId: String!) {\n    obtener_Cliente_ID(id: $obtenerClienteIdId) {\n      _id\n      contratos {\n        fechaFin\n        fechaInicio\n        numeroContrato\n      }\n      documentos\n      direccion\n      email\n      nombre\n      nombreCliente\n      numeroContacto\n      rubro\n      ruc\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Obtener_Usuarios_por_IDcliente($clienteId: String!) {\n    obtener_Usuarios_por_IDcliente(clienteId: $clienteId) {\n      _id\n      clienteAsociado\n      email\n      name\n      nivelUser\n      username\n    }\n  }\n"): (typeof documents)["\n  query Obtener_Usuarios_por_IDcliente($clienteId: String!) {\n    obtener_Usuarios_por_IDcliente(clienteId: $clienteId) {\n      _id\n      clienteAsociado\n      email\n      name\n      nivelUser\n      username\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Actualizar_Cliente(\n    $cliente: ClienteInput!\n    $actualizarClienteId: String!\n  ) {\n    actualizar_Cliente(cliente: $cliente, id: $actualizarClienteId)\n  }\n"): (typeof documents)["\n  mutation Actualizar_Cliente(\n    $cliente: ClienteInput!\n    $actualizarClienteId: String!\n  ) {\n    actualizar_Cliente(cliente: $cliente, id: $actualizarClienteId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Buscar_Pesonal($nombre: String!) {\n    buscar_Pesonal(nombre: $nombre) {\n      _id\n      documentos\n      email\n      fechaIngreso\n      nombre\n      numero\n      salarioFecha {\n        fecha\n        salario\n      }\n    }\n  }\n"): (typeof documents)["\n  query Buscar_Pesonal($nombre: String!) {\n    buscar_Pesonal(nombre: $nombre) {\n      _id\n      documentos\n      email\n      fechaIngreso\n      nombre\n      numero\n      salarioFecha {\n        fecha\n        salario\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Crear_Personal($input: PersonalUserInput!) {\n    crear_Personal(input: $input)\n  }\n"): (typeof documents)["\n  mutation Crear_Personal($input: PersonalUserInput!) {\n    crear_Personal(input: $input)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Obtener_Personal_Por_Id($obtenerPersonalPorIdId: String!) {\n    obtener_Personal_Por_Id(id: $obtenerPersonalPorIdId) {\n      _id\n      documentos\n      email\n      fechaIngreso\n      nombre\n      numero\n      salarioFecha {\n        fecha\n        salario\n      }\n    }\n  }\n"): (typeof documents)["\n  query Obtener_Personal_Por_Id($obtenerPersonalPorIdId: String!) {\n    obtener_Personal_Por_Id(id: $obtenerPersonalPorIdId) {\n      _id\n      documentos\n      email\n      fechaIngreso\n      nombre\n      numero\n      salarioFecha {\n        fecha\n        salario\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Actualizar_Info_Personal(\n    $actualizarInfoPersonalId: String!\n    $input: UpdatePersonalInput!\n    $salarioFecha: SalarioFechaInput\n  ) {\n    actualizar_Info_Personal(\n      id: $actualizarInfoPersonalId\n      input: $input\n      salarioFecha: $salarioFecha\n    )\n  }\n"): (typeof documents)["\n  mutation Actualizar_Info_Personal(\n    $actualizarInfoPersonalId: String!\n    $input: UpdatePersonalInput!\n    $salarioFecha: SalarioFechaInput\n  ) {\n    actualizar_Info_Personal(\n      id: $actualizarInfoPersonalId\n      input: $input\n      salarioFecha: $salarioFecha\n    )\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Buscar_repuestos($producto: String!) {\n  buscar_repuestos(producto: $producto) {\n    cantidad\n    cantidadReserva\n    id\n    marca\n    precio\n    producto\n  }\n}\n"): (typeof documents)["\n  query Buscar_repuestos($producto: String!) {\n  buscar_repuestos(producto: $producto) {\n    cantidad\n    cantidadReserva\n    id\n    marca\n    precio\n    producto\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Crear_multiples_users($users: [CreateUserDto!]!) {\n    crear_multiples_users(users: $users)\n  }\n"): (typeof documents)["\n  mutation Crear_multiples_users($users: [CreateUserDto!]!) {\n    crear_multiples_users(users: $users)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Crear_auto($createCarInput: CreateCarDto!) {\n    crear_auto(createCarInput: $createCarInput)\n  }\n"): (typeof documents)["\n  mutation Crear_auto($createCarInput: CreateCarDto!) {\n    crear_auto(createCarInput: $createCarInput)\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;