import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";

// url de la api
const apiURL = process.env.NEXT_PUBLIC_GRAPHQL_URL;

export const getClient = () => {
  const authLink = setContext(async (_, { headers }) => {
    // Obtiene la sesión en el momento de la solicitud
    const session = await getServerSession(options);

    // Devuelve los encabezados al enlace de contexto para que incluya el token
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${session?.access_token}`,
      },
    };
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(new HttpLink({ uri: apiURL })),
  });
};
