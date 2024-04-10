import { gql } from "../generated";

export const NOTIFICACIONES_QUERY = gql(/* GraphQL */`
  query Obtener_notificaciones_no_leidas {
    obtener_notificaciones_no_leidas {
      _id
      descripcion
      fecha
      identificador
      leido
      tipo
      titulo
    }
  }
`);

export const SUSCRIPCION_NOTIFICACIONES = gql(/* GraphQL */`
  subscription Notificaciones_admin {
    notificaciones_admin {
      _id
      descripcion
      fecha
      identificador
      leido
      tipo
      titulo
    }
  }
`);
