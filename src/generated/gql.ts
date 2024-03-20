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
    "\n  mutation CreateUser($cliente: ClienteInput!) {\n    crear_Cliente(cliente: $cliente)\n  }\n": types.CreateUserDocument,
    "\n  query Buscar_Pesonal($nombre: String!) {\n  buscar_Pesonal(nombre: $nombre) {\n    _id\n    documentos\n    email\n    fechaIngreso\n    nombre\n    numero\n    salarioFecha {\n      fecha\n      salario\n    }\n  }\n}\n": types.Buscar_PesonalDocument,
    "\n  query Buscar_repuestos($producto: String!) {\n  buscar_repuestos(producto: $producto) {\n    cantidad\n    cantidadReserva\n    id\n    marca\n    precio\n    producto\n  }\n}\n": types.Buscar_RepuestosDocument,
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
export function gql(source: "\n  mutation CreateUser($cliente: ClienteInput!) {\n    crear_Cliente(cliente: $cliente)\n  }\n"): (typeof documents)["\n  mutation CreateUser($cliente: ClienteInput!) {\n    crear_Cliente(cliente: $cliente)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Buscar_Pesonal($nombre: String!) {\n  buscar_Pesonal(nombre: $nombre) {\n    _id\n    documentos\n    email\n    fechaIngreso\n    nombre\n    numero\n    salarioFecha {\n      fecha\n      salario\n    }\n  }\n}\n"): (typeof documents)["\n  query Buscar_Pesonal($nombre: String!) {\n  buscar_Pesonal(nombre: $nombre) {\n    _id\n    documentos\n    email\n    fechaIngreso\n    nombre\n    numero\n    salarioFecha {\n      fecha\n      salario\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Buscar_repuestos($producto: String!) {\n  buscar_repuestos(producto: $producto) {\n    cantidad\n    cantidadReserva\n    id\n    marca\n    precio\n    producto\n  }\n}\n"): (typeof documents)["\n  query Buscar_repuestos($producto: String!) {\n  buscar_repuestos(producto: $producto) {\n    cantidad\n    cantidadReserva\n    id\n    marca\n    precio\n    producto\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;