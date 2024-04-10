import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getServerSession } from "next-auth";
import { options } from "@/app/options";
import { getMainDefinition } from "@apollo/client/utilities";
// url de la api
const apiURL = process.env.NEXT_PUBLIC_GRAPHQL_URL || "";
const wsURL = process.env.NEXT_PUBLIC_GRAPHQL_WS_URL || "";

export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: apiURL,
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: wsURL,
      lazy: true,
      connectionParams: async () => {
        const session = await getServerSession(options);
        return {
          headers: {
            Authorization: `Bearer ${session?.access_token}`,
          },
        };
      },
    })
  );

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink
  );

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
});
