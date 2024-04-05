import { gql } from "../generated";

export const BUSCAR_PROVEEDORES_SEARCH = gql(/* GraphQL */ `
  query Buscar_Proveedor($nombre: String!, $page: Int) {
    buscar_Proveedor(nombre: $nombre, page: $page) {
      proveedor {
        _id
        direccion
        documentos
        email
        nombre
        nombreContacto
        numeroContacto
        rubro
        ruc
      }
      totalPages
    }
  }
`);

export const MUTATION_PROVEEDORES = gql(/* GraphQL */ `
  mutation Crear_Proveedor($input: ProveedorInput!) {
    crear_Proveedor(input: $input)
  }
`);
